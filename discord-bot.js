const { Client, GatewayIntentBits, SlashCommandBuilder, REST, Routes } = require('discord.js');
const fs = require('fs');

// Load environment variables
require('dotenv').config();

// Load the unicode inspector logic (Node.js compatible version)
const { analyzeText } = require('./unicode-analyzer.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

// Bot configuration
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

console.log('Starting bot...');
console.log('Token present:', !!BOT_TOKEN);
console.log('Client ID present:', !!CLIENT_ID);

// Register slash command
const commands = [
    new SlashCommandBuilder()
        .setName('displayname')
        .setDescription('Scan a Discord user\'s display name for culturally protected Unicode symbols')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user whose display name to scan')
                .setRequired(true))
];

// Register the command
const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

// Bot ready event
client.once('ready', async () => {
    console.log(`🤖 Bot is ready! Logged in as ${client.user.tag}`);
    console.log(`🔗 Invite link: https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=2048&scope=bot%20applications.commands`);
    
    // Set rich presence
    client.user.setActivity('spectra;help', { type: 0 });
    
    // Register commands when bot is ready
    try {
        console.log('Started refreshing application (/) commands.');

        // Register global commands
        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: commands },
        );
        console.log('Successfully registered global commands');

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Error registering commands:', error);
    }
});

// Handle messages
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    
    // Handle spectra;help command
    if (message.content.toLowerCase() === 'spectra;help') {
        const embed = {
            color: 0x7289da,
            title: '🤖 Spectra Help',
            description: 'Here are the available commands:',
            fields: [
                {
                    name: '📋 Commands',
                    value: '`spectra;help` - Show this help message\n`/displayname @user` - Scan a user\'s display name for culturally protected Unicode symbols',
                    inline: false
                },
                {
                    name: '🔍 How to use /displayname',
                    value: '1. Type `/displayname` in any channel\n2. Select a user from the dropdown\n3. The bot will analyze their display name and show results',
                    inline: false
                },
                {
                    name: '🌐 Website',
                    value: '[Unicode Inspector](https://unicode-inspector.vercel.app) - Use the website version for detailed analysis',
                    inline: false
                }
            ],
            footer: {
                text: 'Built by ctrlbandit (Shadorux)'
            },
            timestamp: new Date().toISOString()
        };
        
        await message.reply({ embeds: [embed] });
    }
});

// Handle slash commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'displayname') {
        const user = interaction.options.getUser('user');
        const member = interaction.guild.members.cache.get(user.id);
        const displayName = member ? member.displayName : user.username;

        try {
            // Analyze the display name using the existing logic
            const analysis = analyzeText(displayName);
            
            // Create embed response
            const embed = {
                color: analysis.summary.closedCount > 0 ? 0xcc4444 : 0x66aa66, // Muted red if closed symbols found, softer green if safe
                title: `🔍 Display Name Analysis: ${user.username}`,
                description: `**Display Name:** \`${displayName}\``,
                fields: [
                    {
                        name: '📊 Summary',
                        value: `**Total Characters:** ${analysis.characterCount}\n**Open Script:** ${analysis.summary.openCount}\n**Closed Script:** ${analysis.summary.closedCount}\n**Unknown Script:** ${analysis.summary.unknownCount}\n**Closed Symbols:** ${analysis.summary.closedSymbols.length}`,
                        inline: false
                    }
                ],
                timestamp: new Date().toISOString()
            };

            // Add closed symbols warning if found
            if (analysis.summary.closedSymbols.length > 0) {
                embed.fields.push({
                    name: '⚠️ Closed Symbols Detected',
                    value: `\`${analysis.summary.closedSymbols.join('`, `')}\`\n\nThese symbols belong to closed cultures and may require respectful consideration.`,
                    inline: false
                });
            }

            // Add closed script blocks if found
            if (analysis.summary.closedBlocks.length > 0) {
                embed.fields.push({
                    name: '🚫 Closed Script Blocks',
                    value: analysis.summary.closedBlocks.join(', '),
                    inline: false
                });
            }

            // Add open script blocks if found
            if (analysis.summary.openBlocks.length > 0) {
                embed.fields.push({
                    name: '✅ Open Script Blocks',
                    value: analysis.summary.openBlocks.join(', '),
                    inline: false
                });
            }

            // Add character details (limit to first 10 to avoid embed limits)
            const characterDetails = analysis.characterDetails.slice(0, 10);
            if (characterDetails.length > 0) {
                let charDetails = '';
                characterDetails.forEach(char => {
                    const status = char.status === 'closed' ? '🚫' : char.status === 'open' ? '✅' : '❓';
                    charDetails += `${status} \`${char.character}\` (${char.unicodeBlock || 'Unknown'})\n`;
                });
                
                if (analysis.characterDetails.length > 10) {
                    charDetails += `\n*... and ${analysis.characterDetails.length - 10} more characters*`;
                }

                embed.fields.push({
                    name: '🔤 Character Details',
                    value: charDetails,
                    inline: false
                });
            }

            await interaction.reply({ embeds: [embed] });

        } catch (error) {
            console.error('Error analyzing display name:', error);
            await interaction.reply({ 
                content: '❌ An error occurred while analyzing the display name. Please try again later.',
                ephemeral: true 
            });
        }
    }
});


// Error handling
client.on('error', console.error);
process.on('unhandledRejection', console.error);

// Start the bot
client.login(BOT_TOKEN);
