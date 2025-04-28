
    
// ========== Unicode Analysis ==========

const SCRIPT_STATUS = {
// closed scripts
'TIBETAN': 'closed',
'HEBREW': 'closed',
'SYRIAC': 'closed',               // covers Aramaic heritage
'IMPERIAL ARAMAIC': 'closed',
'ARABIC': 'closed',
'ARABIC SUPPLEMENT': 'closed',
'ARABIC PRESENTATION FORMS-A': 'closed',
'ARABIC PRESENTATION FORMS-B': 'closed',
'DEVANAGARI': 'closed',
'ETHIOPIC': 'closed',
'ETHIOPIC SUPPLEMENT': 'closed',
'ETHIOPIC EXTENDED': 'closed',
'ETHIOPIC EXTENDED-A': 'closed',
'NKO': 'closed',
'VAI': 'closed',
'BAMUM': 'closed',
'MENDE KIKAKUI': 'closed',
'CHEROKEE': 'closed',
'CHEROKEE SUPPLEMENT': 'closed',
'UNIFIED CANADIAN ABORIGINAL SYLLABICS': 'closed',
'UNIFIED CANADIAN ABORIGINAL SYLLABICS EXTENDED': 'closed',
'OGHAM': 'closed',
'THAANA': 'closed',                // Maldives - South Asian indigenous
'KHMER': 'closed',
'THAI': 'closed',
'LAO': 'closed',
'MYANMAR': 'closed',
'GEORGIAN': 'closed',              // (Caucasus indigenous cultures)
'SYRIAC SUPPLEMENT': 'closed',
'SINHALA': 'closed',
'BENGALI': 'closed',
'GURMUKHI': 'closed',
'GUJARATI': 'closed',
'ORIYA': 'closed',                 
'TAMIL': 'closed',
'TELUGU': 'closed',
'KANNADA': 'closed',
'MALAYALAM': 'closed',
'BAMUM SUPPLEMENT': 'closed',
'BRAHMI': 'closed',
'HANGUL COMPATIBILITY JAMO': 'closed',
'KATAKANA': 'closed',
'CHAM': 'closed',
'LINEAR A': 'closed',
'LINEAR B IDEOGRAMS': 'closed',
'TIFINAGH': 'closed',
'YI RADICALS': 'closed',
'SAMARITAN': 'closed',
'MANDIAC': 'closed',
'SAURASHTRA': 'closed',
'OL CHIKI': 'closed',
'BATAK': 'closed',
'LEPCHA': 'closed',
'BUGINESE': 'closed',
'TAI THAM': 'closed',
'BALINESE': 'closed',
'SUNDANESE': 'closed',
'REJANG': 'closed',
'CHAM': 'closed',
'JAVANESE': 'closed',
'MEETEI MAYEK': 'closed',
'SUNDANESE SUPPLEMENT': 'closed',
'WARANG CITI': 'closed',
'TIRHUTA': 'closed',
'GRANTHA': 'closed',
'KHOJKI': 'closed',
'MULTANI': 'closed',
'KHUDAWADI': 'closed',
'NEWA': 'closed',
'TAKRI': 'closed',
'AHOM': 'closed',
'DOGRA': 'closed',
'NANDINAGARI': 'closed',
'ZANABAZAR SQUARE': 'closed',
'SOYOMBO': 'closed',
'PAU CIN HAU': 'closed',
'BHAIKSUKI': 'closed',
'MARCHEN': 'closed',
'MASARAM GONDI': 'closed',
'GUNJALA GONDI': 'closed',
'MAKASAR': 'closed',
'TOTO': 'closed',
'WANCHO': 'closed',
'MIAO': 'closed',


// open scripts
'BASIC LATIN': 'open',
'LATIN-1 SUPPLEMENT': 'open',
'LATIN EXTENDED-A': 'open',
'LATIN EXTENDED-B': 'open',
'LATIN EXTENDED ADDITIONAL': 'open',
'GREEK': 'open',
'CYRILLIC': 'open',
'GENERAL PUNCTUATION': 'open',
'CJK SYMBOLS AND PUNCTUATION': 'open',
'CJK COMPATIBILITY FORMS': 'open',
'CJK UNIFIED IDEOGRAPHS EXTENSION A': 'open',
'MISCELLANEOUS SYMBOLS AND ARROWS': 'open',
'MATHEMATICAL OPERATORS': 'open',
'GEOMETRIC SHAPES': 'open',
'BLOCK ELEMENTS': 'open',
'DINGBATS': 'open',
'BOX DRAWING': 'open',
'MISCELLANEOUS SYMBOLS': 'open',
'MISCELLANEOUS TECHNICAL': 'open',
'SUPERSCRIPTS AND SUBSCRIPTS': 'open',
'LETTERLIKE SYMBOLS': 'open',
'MATHEMATICAL ALPHANUMERIC SYMBOLS': 'open',
'ENCLOSED ALPHANUMERICS': 'open',
'ENCLOSED CJK LETTERS AND MONTHS': 'open',
'ARROWS': 'open',
'VARIATION SELECTORS': 'open',
'VARIATION SELECTORS SUPPLEMENT': 'open',
'BRAILLE PATTERNS': 'open',
'MUSICAL SYMBOLS': 'open',
'BYZANTINE MUSICAL SYMBOLS': 'open',
'ANCIENT GREEK MUSICAL NOTATION': 'open',
'GLAGOLITIC': 'open',
'DESERET': 'open',
'OLD PERMIC': 'open',
'OLD TURKIC': 'open',
'ELBASAN': 'open',
'CAUCASIAN ALBANIAN': 'open',
'CYPRIOT SYLLABARY': 'open',
'PHOENICIAN': 'open',
'PALMYRENE': 'open',
'HATRAN': 'open',
'LYDIAN': 'open',
'MEROITIC HIEROGLYPHS': 'open',
'MEROITIC CURSIVE': 'open',
'AVESTAN': 'open',
'INSCRIPTIONAL PARTHIAN': 'open',
'INSCRIPTIONAL PAHLAVI': 'open',
'EGYPTIAN HIEROGLYPHS': 'open',
'RUNIC': 'open',
'SHAWIAN': 'open',
'SUTTON SIGNWRITING': 'open',
'SUPPLEMENTAL SYMBOLS AND PICTOGRAPHS': 'open',
'MISCELLANEOUS SYMBOLS AND PICTOGRAPHS': 'open',
'SUPPLEMENTAL ARROWS-C': 'open',
'ORNAMENTAL DINGBATS': 'open',
'TRANSPORT AND MAP SYMBOLS': 'open',
'ALCHEMICAL SYMBOLS': 'open',
'CHESS SYMBOLS': 'open',
'SYMBOLS FOR LEGACY COMPUTING': 'open',
'SYMBOLS AND PICTOGRAPHS EXTENDED-A': 'open',
'MAHJONG TILES': 'open',
'DOMINO TILES': 'open',
'PLAYING CARDS': 'open',
'TAGS': 'open',
'SUPPLEMENTARY PRIVATE USE AREA-A': 'open',
'SUPPLEMENTARY PRIVATE USE AREA-B': 'open',
'SUPPLEMENTAL MATHEMATICAL OPERATORS': 'open',
'SUPPLEMENTAL PUNCTUATION': 'open',
'MISCELLANEOUS MATHEMATICAL SYMBOLS-A': 'open',
'MISCELLANEOUS MATHEMATICAL SYMBOLS-B': 'open',
'SUPPLEMENTAL ARROWS-A': 'open',
'SUPPLEMENTAL ARROWS-B': 'open',
'OPTICAL CHARACTER RECOGNITION': 'open',
'CONTROL PICTURES': 'open',
'CJK RADICALS SUPPLEMENT': 'open',
'IDEOGRAPHIC DESCRIPTION CHARACTERS': 'open',
'CJK UNIFIED IDEOGRAPHS': 'open'
};

const UNICODE_BLOCKS = [
{ start: 0x0000, end: 0x007F, name: 'Basic Latin' },
{ start: 0x0080, end: 0x00FF, name: 'Latin-1 Supplement' },
{ start: 0x0100, end: 0x017F, name: 'Latin Extended-A' },
{ start: 0x0180, end: 0x024F, name: 'Latin Extended-B' },
{ start: 0x0250, end: 0x02AF, name: 'IPA Extensions' },
{ start: 0x02B0, end: 0x02FF, name: 'Spacing Modifier Letters' },
{ start: 0x0300, end: 0x036F, name: 'Combining Diacritical Marks' },
{ start: 0x0370, end: 0x03FF, name: 'Greek and Coptic' },
{ start: 0x0400, end: 0x04FF, name: 'Cyrillic' },
{ start: 0x0500, end: 0x052F, name: 'Cyrillic Supplement' },
{ start: 0x0530, end: 0x058F, name: 'Armenian' },
{ start: 0x0590, end: 0x05FF, name: 'Hebrew' },
{ start: 0x0600, end: 0x06FF, name: 'Arabic' },
{ start: 0x0700, end: 0x074F, name: 'Syriac' },
{ start: 0x0750, end: 0x077F, name: 'Arabic Supplement' },
{ start: 0x0780, end: 0x07BF, name: 'Thaana' },
{ start: 0x07C0, end: 0x07FF, name: 'NKo' },
{ start: 0x0800, end: 0x083F, name: 'Samaritan' },
{ start: 0x0840, end: 0x085F, name: 'Mandaic' },
{ start: 0x0860, end: 0x086F, name: 'Syriac Supplement' },
{ start: 0x08A0, end: 0x08FF, name: 'Arabic Extended-A' },
{ start: 0x0900, end: 0x097F, name: 'Devanagari' },
{ start: 0x0980, end: 0x09FF, name: 'Bengali' },
{ start: 0x0A00, end: 0x0A7F, name: 'Gurmukhi' },
{ start: 0x0A80, end: 0x0AFF, name: 'Gujarati' },
{ start: 0x0B00, end: 0x0B7F, name: 'Oriya' },
{ start: 0x0B80, end: 0x0BFF, name: 'Tamil' },
{ start: 0x0C00, end: 0x0C7F, name: 'Telugu' },
{ start: 0x0C80, end: 0x0CFF, name: 'Kannada' },
{ start: 0x0D00, end: 0x0D7F, name: 'Malayalam' },
{ start: 0x0D80, end: 0x0DFF, name: 'Sinhala' },
{ start: 0x0E00, end: 0x0E7F, name: 'Thai' },
{ start: 0x0E80, end: 0x0EFF, name: 'Lao' },
{ start: 0x0F00, end: 0x0FFF, name: 'Tibetan' },
{ start: 0x1000, end: 0x109F, name: 'Myanmar' },
{ start: 0x10A0, end: 0x10FF, name: 'Georgian' },
{ start: 0x1100, end: 0x11FF, name: 'Hangul Jamo' },
{ start: 0x1200, end: 0x137F, name: 'Ethiopic' },
{ start: 0x1380, end: 0x139F, name: 'Ethiopic Supplement' },
{ start: 0x13A0, end: 0x13FF, name: 'Cherokee' },
{ start: 0x1400, end: 0x167F, name: 'Unified Canadian Aboriginal Syllabics' },
{ start: 0x1680, end: 0x169F, name: 'Ogham' },
{ start: 0x16A0, end: 0x16FF, name: 'Runic' },
{ start: 0x1700, end: 0x171F, name: 'Tagalog' },
{ start: 0x1720, end: 0x173F, name: 'Hanunoo' },
{ start: 0x1740, end: 0x175F, name: 'Buhid' },
{ start: 0x1760, end: 0x177F, name: 'Tagbanwa' },
{ start: 0x1780, end: 0x17FF, name: 'Khmer' },
{ start: 0x1800, end: 0x18AF, name: 'Mongolian' },
{ start: 0x18B0, end: 0x18FF, name: 'Unified Canadian Aboriginal Syllabics Extended' },
{ start: 0x1900, end: 0x194F, name: 'Limbu' },
{ start: 0x1950, end: 0x197F, name: 'Tai Le' },
{ start: 0x1980, end: 0x19DF, name: 'New Tai Lue' },
{ start: 0x19E0, end: 0x19FF, name: 'Khmer Symbols' },
{ start: 0x1A00, end: 0x1A1F, name: 'Buginese' },
{ start: 0x1A20, end: 0x1AAF, name: 'Tai Tham' },
{ start: 0x1AB0, end: 0x1AFF, name: 'Combining Diacritical Marks Extended' },
{ start: 0x1B00, end: 0x1B7F, name: 'Balinese' },
{ start: 0x1B80, end: 0x1BBF, name: 'Sundanese' },
{ start: 0x1BC0, end: 0x1BFF, name: 'Batak' },
{ start: 0x1C00, end: 0x1C4F, name: 'Lepcha' },
{ start: 0x1C50, end: 0x1C7F, name: 'Ol Chiki' },
{ start: 0x1C80, end: 0x1C8F, name: 'Cyrillic Extended-C' },
{ start: 0x1C90, end: 0x1CBF, name: 'Georgian Extended' },
{ start: 0x1CC0, end: 0x1CCF, name: 'Sundanese Supplement' },
{ start: 0x1CD0, end: 0x1CFF, name: 'Vedic Extensions' },
{ start: 0x1D00, end: 0x1D7F, name: 'Phonetic Extensions' },
{ start: 0x1D80, end: 0x1DBF, name: 'Phonetic Extensions Supplement' },
{ start: 0x1DC0, end: 0x1DFF, name: 'Combining Diacritical Marks Supplement' },
{ start: 0x1E00, end: 0x1EFF, name: 'Latin Extended Additional' },
{ start: 0x1F00, end: 0x1FFF, name: 'Greek Extended' },
{ start: 0x2000, end: 0x206F, name: 'General Punctuation' },
{ start: 0x2070, end: 0x209F, name: 'Superscripts and Subscripts' },
{ start: 0x20A0, end: 0x20CF, name: 'Currency Symbols' },
{ start: 0x20D0, end: 0x20FF, name: 'Combining Diacritical Marks for Symbols' },
{ start: 0x2100, end: 0x214F, name: 'Letterlike Symbols' },
{ start: 0x2150, end: 0x218F, name: 'Number Forms' },
{ start: 0x2190, end: 0x21FF, name: 'Arrows' },
{ start: 0x2200, end: 0x22FF, name: 'Mathematical Operators' },
{ start: 0x2300, end: 0x23FF, name: 'Miscellaneous Technical' },
{ start: 0x2400, end: 0x243F, name: 'Control Pictures' },
{ start: 0x2440, end: 0x245F, name: 'Optical Character Recognition' },
{ start: 0x2460, end: 0x24FF, name: 'Enclosed Alphanumerics' },
{ start: 0x2500, end: 0x257F, name: 'Box Drawing' },
{ start: 0x2580, end: 0x259F, name: 'Block Elements' },
{ start: 0x25A0, end: 0x25FF, name: 'Geometric Shapes' },
{ start: 0x2600, end: 0x26FF, name: 'Miscellaneous Symbols' },
{ start: 0x2700, end: 0x27BF, name: 'Dingbats' },
{ start: 0x27C0, end: 0x27EF, name: 'Miscellaneous Mathematical Symbols-A' },
{ start: 0x27F0, end: 0x27FF, name: 'Supplemental Arrows-A' },
{ start: 0x2800, end: 0x28FF, name: 'Braille Patterns' },
{ start: 0x2900, end: 0x297F, name: 'Supplemental Arrows-B' },
{ start: 0x2980, end: 0x29FF, name: 'Miscellaneous Mathematical Symbols-B' },
{ start: 0x2A00, end: 0x2AFF, name: 'Supplemental Mathematical Operators' },
{ start: 0x2B00, end: 0x2BFF, name: 'Miscellaneous Symbols and Arrows' },
{ start: 0x2C00, end: 0x2C5F, name: 'Glagolitic' },
{ start: 0x2C60, end: 0x2C7F, name: 'Latin Extended-C' },
{ start: 0x2C80, end: 0x2CFF, name: 'Coptic' },
{ start: 0x2D00, end: 0x2D2F, name: 'Georgian Supplement' },
{ start: 0x2D30, end: 0x2D7F, name: 'Tifinagh' },
{ start: 0x2D80, end: 0x2DDF, name: 'Ethiopic Extended' },
{ start: 0x2DE0, end: 0x2DFF, name: 'Cyrillic Extended-A' },
{ start: 0x2E00, end: 0x2E7F, name: 'Supplemental Punctuation' },
{ start: 0x2E80, end: 0x2EFF, name: 'CJK Radicals Supplement' },
{ start: 0x2F00, end: 0x2FDF, name: 'Kangxi Radicals' },
{ start: 0x2FF0, end: 0x2FFF, name: 'Ideographic Description Characters' },
{ start: 0x3000, end: 0x303F, name: 'CJK Symbols and Punctuation' },
{ start: 0x3040, end: 0x309F, name: 'Hiragana' },
{ start: 0x30A0, end: 0x30FF, name: 'Katakana' },
{ start: 0x3100, end: 0x312F, name: 'Bopomofo' },
{ start: 0x3130, end: 0x318F, name: 'Hangul Compatibility Jamo' },
{ start: 0x3190, end: 0x319F, name: 'Kanbun' },
{ start: 0x31A0, end: 0x31BF, name: 'Bopomofo Extended' },
{ start: 0x31C0, end: 0x31EF, name: 'CJK Strokes' },
{ start: 0x31F0, end: 0x31FF, name: 'Katakana Phonetic Extensions' },
{ start: 0x3200, end: 0x32FF, name: 'Enclosed CJK Letters and Months' },
{ start: 0x3300, end: 0x33FF, name: 'CJK Compatibility' },
{ start: 0x3400, end: 0x4DBF, name: 'CJK Unified Ideographs Extension A' },
{ start: 0x4DC0, end: 0x4DFF, name: 'Yijing Hexagram Symbols' },
{ start: 0x4E00, end: 0x9FFF, name: 'CJK Unified Ideographs' },
{ start: 0xA000, end: 0xA48F, name: 'Yi Syllables' },
{ start: 0xA490, end: 0xA4CF, name: 'Yi Radicals' },
{ start: 0xA4D0, end: 0xA4FF, name: 'Lisu' },
{ start: 0xA500, end: 0xA63F, name: 'Vai' },
{ start: 0xA640, end: 0xA69F, name: 'Cyrillic Extended-B' },
{ start: 0xA6A0, end: 0xA6FF, name: 'Bamum' },
{ start: 0xA700, end: 0xA71F, name: 'Modifier Tone Letters' },
{ start: 0xA720, end: 0xA7FF, name: 'Latin Extended-D' },
{ start: 0xA800, end: 0xA82F, name: 'Syloti Nagri' },
{ start: 0xA830, end: 0xA83F, name: 'Common Indic Number Forms' },
{ start: 0xA840, end: 0xA87F, name: 'Phags-pa' },
{ start: 0xA880, end: 0xA8DF, name: 'Saurashtra' },
{ start: 0xA8E0, end: 0xA8FF, name: 'Devanagari Extended' },
{ start: 0xA900, end: 0xA92F, name: 'Kayah Li' },
{ start: 0xA930, end: 0xA95F, name: 'Rejang' },
{ start: 0xA960, end: 0xA97F, name: 'Hangul Jamo Extended-A' },
{ start: 0xA980, end: 0xA9DF, name: 'Javanese' },
{ start: 0xA9E0, end: 0xA9FF, name: 'Myanmar Extended-B' },
{ start: 0xAA00, end: 0xAA5F, name: 'Cham' },
{ start: 0xAA60, end: 0xAA7F, name: 'Myanmar Extended-A' },
{ start: 0xAA80, end: 0xAADF, name: 'Tai Viet' },
{ start: 0xAAE0, end: 0xAAFF, name: 'Meetei Mayek Extensions' },
{ start: 0xAB00, end: 0xAB2F, name: 'Ethiopic Extended-A' },
{ start: 0xAB30, end: 0xAB6F, name: 'Latin Extended-E' },
{ start: 0xAB70, end: 0xABBF, name: 'Cherokee Supplement' },
{ start: 0xABC0, end: 0xABFF, name: 'Meetei Mayek' },
{ start: 0xAC00, end: 0xD7AF, name: 'Hangul Syllables' },
{ start: 0xD7B0, end: 0xD7FF, name: 'Hangul Jamo Extended-B' },
{ start: 0xD800, end: 0xDB7F, name: 'High Surrogates' },
{ start: 0xDB80, end: 0xDBFF, name: 'High Private Use Surrogates' },
{ start: 0xDC00, end: 0xDFFF, name: 'Low Surrogates' },
{ start: 0xE000, end: 0xF8FF, name: 'Private Use Area' },
{ start: 0xF900, end: 0xFAFF, name: 'CJK Compatibility Ideographs' },
{ start: 0xFB00, end: 0xFB4F, name: 'Alphabetic Presentation Forms' },
{ start: 0xFB50, end: 0xFDFF, name: 'Arabic Presentation Forms-A' },
{ start: 0xFE00, end: 0xFE0F, name: 'Variation Selectors' },
{ start: 0xFE10, end: 0xFE1F, name: 'Vertical Forms' },
{ start: 0xFE20, end: 0xFE2F, name: 'Combining Half Marks' },
{ start: 0xFE30, end: 0xFE4F, name: 'CJK Compatibility Forms' },
{ start: 0xFE50, end: 0xFE6F, name: 'Small Form Variants' },
{ start: 0xFE70, end: 0xFEFF, name: 'Arabic Presentation Forms-B' },
{ start: 0xFF00, end: 0xFFEF, name: 'Halfwidth and Fullwidth Forms' },
{ start: 0xFFF0, end: 0xFFFF, name: 'Specials' },
{ start: 0x10000, end: 0x1007F, name: 'Linear B Syllabary' },
{ start: 0x10080, end: 0x100FF, name: 'Linear B Ideograms' },
{ start: 0x10100, end: 0x1013F, name: 'Aegean Numbers' },
{ start: 0x10140, end: 0x1018F, name: 'Ancient Greek Numbers' },
{ start: 0x10190, end: 0x101CF, name: 'Ancient Symbols' },
{ start: 0x101D0, end: 0x101FF, name: 'Phaistos Disc' },
{ start: 0x10280, end: 0x1029F, name: 'Lycian' },
{ start: 0x102A0, end: 0x102DF, name: 'Carian' },
{ start: 0x102E0, end: 0x102FF, name: 'Coptic Epact Numbers' },
{ start: 0x10300, end: 0x1032F, name: 'Old Italic' },
{ start: 0x10330, end: 0x1034F, name: 'Gothic' },
{ start: 0x10350, end: 0x1037F, name: 'Old Permic' },
{ start: 0x10380, end: 0x1039F, name: 'Ugaritic' },
{ start: 0x103A0, end: 0x103DF, name: 'Old Persian' },
{ start: 0x10400, end: 0x1044F, name: 'Deseret' },
{ start: 0x10450, end: 0x1047F, name: 'Shavian' },
{ start: 0x10480, end: 0x104AF, name: 'Osmanya' },
{ start: 0x104B0, end: 0x104FF, name: 'Osage' },
{ start: 0x10500, end: 0x1052F, name: 'Elbasan' },
{ start: 0x10530, end: 0x1056F, name: 'Caucasian Albanian' },
{ start: 0x10600, end: 0x1077F, name: 'Linear A' },
{ start: 0x10800, end: 0x1083F, name: 'Cypriot Syllabary' },
{ start: 0x10840, end: 0x1085F, name: 'Imperial Aramaic' },
{ start: 0x10860, end: 0x1087F, name: 'Palmyrene' },
{ start: 0x10880, end: 0x108AF, name: 'Nabataean' },
{ start: 0x108E0, end: 0x108FF, name: 'Hatran' },
{ start: 0x10900, end: 0x1091F, name: 'Phoenician' },
{ start: 0x10920, end: 0x1093F, name: 'Lydian' },
{ start: 0x10980, end: 0x1099F, name: 'Meroitic Hieroglyphs' },
{ start: 0x109A0, end: 0x109FF, name: 'Meroitic Cursive' },
{ start: 0x10A00, end: 0x10A5F, name: 'Kharoshthi' },
{ start: 0x10A60, end: 0x10A7F, name: 'Old South Arabian' },
{ start: 0x10A80, end: 0x10A9F, name: 'Old North Arabian' },
{ start: 0x10AC0, end: 0x10AFF, name: 'Manichaean' },
{ start: 0x10B00, end: 0x10B3F, name: 'Avestan' },
{ start: 0x10B40, end: 0x10B5F, name: 'Inscriptional Parthian' },
{ start: 0x10B60, end: 0x10B7F, name: 'Inscriptional Pahlavi' },
{ start: 0x10B80, end: 0x10BAF, name: 'Psalter Pahlavi' },
{ start: 0x10C00, end: 0x10C4F, name: 'Old Turkic' },
{ start: 0x10C80, end: 0x10CFF, name: 'Old Hungarian' },
{ start: 0x10D00, end: 0x10D3F, name: 'Hanifi Rohingya' },
{ start: 0x10E60, end: 0x10E7F, name: 'Rumi Numeral Symbols' },
{ start: 0x10E80, end: 0x10EBF, name: 'Yezidi' },
{ start: 0x10F00, end: 0x10F2F, name: 'Old Sogdian' },
{ start: 0x10F30, end: 0x10F6F, name: 'Sogdian' },
{ start: 0x10FE0, end: 0x10FFF, name: 'Elymaic' },
{ start: 0x11000, end: 0x1107F, name: 'Brahmi' },
{ start: 0x11080, end: 0x110CF, name: 'Kaithi' },
{ start: 0x110D0, end: 0x110FF, name: 'Sora Sompeng' },
{ start: 0x11100, end: 0x1114F, name: 'Chakma' },
{ start: 0x11150, end: 0x1117F, name: 'Mahajani' },
{ start: 0x11180, end: 0x111DF, name: 'Sharada' },
{ start: 0x111E0, end: 0x111FF, name: 'Sinhala Archaic Numbers' },
{ start: 0x11200, end: 0x1124F, name: 'Khojki' },
{ start: 0x11280, end: 0x112AF, name: 'Multani' },
{ start: 0x112B0, end: 0x112FF, name: 'Khudawadi' },
{ start: 0x11300, end: 0x1137F, name: 'Grantha' },
{ start: 0x11400, end: 0x1147F, name: 'Newa' },
{ start: 0x11480, end: 0x114DF, name: 'Tirhuta' },
{ start: 0x11580, end: 0x115FF, name: 'Siddham' },
{ start: 0x11600, end: 0x1165F, name: 'Modi' },
{ start: 0x11660, end: 0x1167F, name: 'Mongolian Supplement' },
{ start: 0x11680, end: 0x116CF, name: 'Takri' },
{ start: 0x11700, end: 0x1173F, name: 'Ahom' },
{ start: 0x11800, end: 0x1184F, name: 'Dogra' },
{ start: 0x118A0, end: 0x118FF, name: 'Warang Citi' },
{ start: 0x119A0, end: 0x119FF, name: 'Nandinagari' },
{ start: 0x11A00, end: 0x11A4F, name: 'Zanabazar Square' },
{ start: 0x11A50, end: 0x11AAF, name: 'Soyombo' },
{ start: 0x11AC0, end: 0x11AFF, name: 'Pau Cin Hau' },
{ start: 0x11C00, end: 0x11C6F, name: 'Bhaiksuki' },
{ start: 0x11C70, end: 0x11CBF, name: 'Marchen' },
{ start: 0x11D00, end: 0x11D5F, name: 'Masaram Gondi' },
{ start: 0x11D60, end: 0x11DAF, name: 'Gunjala Gondi' },
{ start: 0x11EE0, end: 0x11EFF, name: 'Makasar' },
{ start: 0x11FB0, end: 0x11FBF, name: 'Lisu Supplement' },
{ start: 0x11FC0, end: 0x11FFF, name: 'Tamil Supplement' },
{ start: 0x12000, end: 0x123FF, name: 'Cuneiform' },
{ start: 0x12400, end: 0x1247F, name: 'Cuneiform Numbers and Punctuation' },
{ start: 0x12480, end: 0x1254F, name: 'Early Dynastic Cuneiform' },
{ start: 0x12F90, end: 0x12FFF, name: 'CJK Unified Ideographs Extension G' }, 
{ start: 0x13000, end: 0x1342F, name: 'Egyptian Hieroglyphs' },
{ start: 0x13430, end: 0x1345F, name: 'Egyptian Hieroglyph Format Controls' },
{ start: 0x14400, end: 0x1467F, name: 'Anatolian Hieroglyphs' },
{ start: 0x16800, end: 0x16A3F, name: 'Bamum Supplement' },
{ start: 0x16A40, end: 0x16A6F, name: 'Mro' },
{ start: 0x16A70, end: 0x16ACF, name: 'Tangsa' }, 
{ start: 0x16AD0, end: 0x16AFF, name: 'Bassa Vah' },
{ start: 0x16B00, end: 0x16B8F, name: 'Pahawh Hmong' },
{ start: 0x16E40, end: 0x16E9F, name: 'Medefaidrin' },
{ start: 0x16F00, end: 0x16F9F, name: 'Miao' },
{ start: 0x16FE0, end: 0x16FFF, name: 'Ideographic Symbols and Punctuation' },
{ start: 0x17000, end: 0x187FF, name: 'Tangut' },
{ start: 0x18800, end: 0x18AFF, name: 'Tangut Components' },
{ start: 0x18B00, end: 0x18CFF, name: 'Khitan Small Script' },
{ start: 0x18D00, end: 0x18D8F, name: 'Tangut Supplement' },
{ start: 0x1B000, end: 0x1B0FF, name: 'Kana Supplement' },
{ start: 0x1B100, end: 0x1B12F, name: 'Kana Extended-A' },
{ start: 0x1B130, end: 0x1B16F, name: 'Small Kana Extension' },
{ start: 0x1B170, end: 0x1B2FF, name: 'Nushu' },
{ start: 0x1BC00, end: 0x1BC9F, name: 'Duployan' },
{ start: 0x1BCA0, end: 0x1BCAF, name: 'Shorthand Format Controls' },
{ start: 0x1D000, end: 0x1D0FF, name: 'Byzantine Musical Symbols' },
{ start: 0x1D100, end: 0x1D1FF, name: 'Musical Symbols' },
{ start: 0x1D200, end: 0x1D24F, name: 'Ancient Greek Musical Notation' },
{ start: 0x1D2E0, end: 0x1D2FF, name: 'Mayan Numerals' }, 
{ start: 0x1D300, end: 0x1D35F, name: 'Tai Xuan Jing Symbols' },
{ start: 0x1D360, end: 0x1D37F, name: 'Counting Rod Numerals' },
{ start: 0x1D400, end: 0x1D7FF, name: 'Mathematical Alphanumeric Symbols' },
{ start: 0x1D800, end: 0x1DAAF, name: 'Sutton SignWriting' },
{ start: 0x1DF00, end: 0x1DFFF, name: 'Latin Extended-G' }, 
{ start: 0x1E000, end: 0x1E02F, name: 'Glagolitic Supplement' },
{ start: 0x1E100, end: 0x1E14F, name: 'Nyiakeng Puachue Hmong' },
{ start: 0x1E290, end: 0x1E2BF, name: 'Toto' }, 
{ start: 0x1E2C0, end: 0x1E2FF, name: 'Wancho' },
{ start: 0x1E7E0, end: 0x1E7FF, name: 'Ethiopic Extended-B' },
{ start: 0x1E800, end: 0x1E8DF, name: 'Mende Kikakui' },
{ start: 0x1E900, end: 0x1E95F, name: 'Adlam' },
{ start: 0x1EC70, end: 0x1ECBF, name: 'Indic Siyaq Numbers' },
{ start: 0x1ED00, end: 0x1ED4F, name: 'Ottoman Siyaq Numbers' },
{ start: 0x1EE00, end: 0x1EEFF, name: 'Arabic Mathematical Alphabetic Symbols' },
{ start: 0x1F000, end: 0x1F02F, name: 'Mahjong Tiles' },
{ start: 0x1F030, end: 0x1F09F, name: 'Domino Tiles' },
{ start: 0x1F0A0, end: 0x1F0FF, name: 'Playing Cards' },
{ start: 0x1F100, end: 0x1F1FF, name: 'Enclosed Alphanumeric Supplement' },
{ start: 0x1F200, end: 0x1F2FF, name: 'Enclosed Ideographic Supplement' },
{ start: 0x1F300, end: 0x1F5FF, name: 'Miscellaneous Symbols and Pictographs' },
{ start: 0x1F600, end: 0x1F64F, name: 'Emoticons' },
{ start: 0x1F650, end: 0x1F67F, name: 'Ornamental Dingbats' },
{ start: 0x1F680, end: 0x1F6FF, name: 'Transport and Map Symbols' },
{ start: 0x1F700, end: 0x1F77F, name: 'Alchemical Symbols' },
{ start: 0x1F780, end: 0x1F7FF, name: 'Geometric Shapes Extended' },
{ start: 0x1F800, end: 0x1F8FF, name: 'Supplemental Arrows-C' },
{ start: 0x1F900, end: 0x1F9FF, name: 'Supplemental Symbols and Pictographs' },
{ start: 0x1FA00, end: 0x1FA6F, name: 'Chess Symbols' },
{ start: 0x1FA70, end: 0x1FAFF, name: 'Symbols and Pictographs Extended-A' },
{ start: 0x1FB00, end: 0x1FBFF, name: 'Symbols for Legacy Computing' },
{ start: 0x20000, end: 0x2A6DF, name: 'CJK Unified Ideographs Extension B' },
{ start: 0x2A700, end: 0x2B73F, name: 'CJK Unified Ideographs Extension C' },
{ start: 0x2B740, end: 0x2B81F, name: 'CJK Unified Ideographs Extension D' },
{ start: 0x2B820, end: 0x2CEAF, name: 'CJK Unified Ideographs Extension E' },
{ start: 0x2CEB0, end: 0x2EBEF, name: 'CJK Unified Ideographs Extension F' },
{ start: 0x2F800, end: 0x2FA1F, name: 'CJK Compatibility Ideographs Supplement' },
{ start: 0x30000, end: 0x3134F, name: 'CJK Unified Ideographs Extension H' }, 
{ start: 0xE0000, end: 0xE007F, name: 'Tags' },
{ start: 0xE0100, end: 0xE01EF, name: 'Variation Selectors Supplement' },
{ start: 0xF0000, end: 0xFFFFF, name: 'Supplementary Private Use Area-A' },
{ start: 0x100000, end: 0x10FFFF, name: 'Supplementary Private Use Area-B' }
];

const SYMBOLS_BLOCKLIST = [
// Devanagari (Sacred Indic script)
'७', '॑', '़', 'ं', '्', 'ऻ', 'ः', '॰', 'ॢ', 'ॄ', 'ॐ',

// Bengali
'ৎ', '৫', '৶',

// Telugu
'౨',

// Hangul Compatibility Jamo (Korean syllabics)
'ᄋ',

// Gujarati
'૮', 'ઇ', 'ઉ',

// Sinhala
'ෆ',

// Tibetan (Sacred Buddhist marks)
'࿐', '༄', '༘', '༉', '༺', '༻', '༓',

// Brahmi (Ancient India)
'𑁬', '𑀅', '𑀆', '𑀇', '𑀈', '𑀉', '𑀊', '𑀋', '𑀌', '𑀍', '𑀎', '𑀏',

// Samaritan (Sacred West Semitic script)
'ࠁ', 'ࠂ', 'ࠃ', 'ࠄ', 'ࠅ', 'ࠆ', 'ࠇ', 'ࠈ', 'ࠉ', 'ࠊ', 'ࠋ', 'ࠌ', 'ࠍ', 'ࠎ', 'ࠏ', 'ࠐ', 'ࠑ', 'ࠒ', 'ࠓ', 'ࠔ',

// Mandaic (Ancient Gnostic script)
'ࡀ', 'ࡁ', 'ࡂ', 'ࡃ', 'ࡄ', 'ࡅ', 'ࡆ', 'ࡇ', 'ࡈ', 'ࡉ', 'ࡊ', 'ࡋ', 'ࡌ', 'ࡍ', 'ࡎ', 'ࡏ', 'ࡐ', 'ࡑ', 'ࡒ', 'ࡓ',

// Cherokee
'Ꭰ', 'Ꭱ', 'Ꭲ', 'Ꭳ', 'Ꭴ', 'Ꭵ', 'Ꭶ', 'Ꭷ', 'Ꭸ', 'Ꭹ', 'Ꭺ', 'Ꭻ', 'Ꭼ', 'Ꭽ', 'Ꭾ', 'Ꭿ', 'Ꮀ', 'Ꮁ', 'Ꮂ',

// Linear A (Ancient Mediterranean)
'𐘀', '𐘁', '𐘂', '𐘃', '𐘄', '𐘅', '𐘆', '𐘇', '𐘈', '𐘉', '𐘊',

// Linear B Ideograms
'𐂀', '𐂁', '𐂂', '𐂃', '𐂄', '𐂅', '𐂆', '𐂇', '𐂈', '𐂉', '𐂊',

// Tifinagh (Berber indigenous script)
'ⴰ', 'ⴱ', 'ⴲ', 'ⴳ', 'ⴴ', 'ⴵ', 'ⴶ', 'ⴷ', 'ⴸ', 'ⴹ', 'ⴺ', 'ⴻ', 'ⴼ',

// Cham (Vietnamese indigenous script)
'ꨀ', 'ꨁ', 'ꨂ', 'ꨃ', 'ꨄ', 'ꨅ', 'ꨆ', 'ꨇ', 'ꨈ', 'ꨉ',

// Katakana (Japanese phonetic script)
'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ',

// Hiragana (Japanese phonetic script)
'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ',
'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り',
'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'が', 'ぎ', 'ぐ', 'げ', 'ご',

// Bopomofo (Mandarin phonetic script)
'ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ',
'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ',

// Yi Radicals (Chinese minority scripts)
'꒐', '꒑', '꒒', '꒓', '꒔', '꒕', '꒖', '꒗', '꒘', '꒙',
'꒚', '꒛', '꒜', '꒝', '꒞', '꒟', '꒠', '꒡', '꒢', '꒣',

// Bamum Supplement (African indigenous writing)
'ꚠ', 'ꚡ', 'ꚢ', 'ꚣ', 'ꚤ', 'ꚥ', 'ꚦ', 'ꚧ', 'ꚨ', 'ꚩ'
];

let latestAnalysis = null; 
function detectclosedSymbols(text) {
const chars = Array.from(text);
return chars.filter(char => SYMBOLS_BLOCKLIST.includes(char));
}

function getUnicodeBlockName(codePoint) {
for (const block of UNICODE_BLOCKS) {
if (codePoint >= block.start && codePoint <= block.end) {
    return block.name;
}
}
return null;
}

function getScriptStatus(blockName) {
if (!blockName) return 'unknown';
const normalizedBlockName = blockName.toUpperCase();
return SCRIPT_STATUS[normalizedBlockName] || 'unknown';
}

function inspectCharacter(char) {
const codePoint = char.codePointAt(0);
const blockName = getUnicodeBlockName(codePoint);
let status = getScriptStatus(blockName);

if (SYMBOLS_BLOCKLIST.includes(char)) {
status = 'closed';
}

return {
character: char,
codePoint: codePoint,
hexCode: '0x' + codePoint.toString(16).toUpperCase().padStart(4, '0'),
unicodeBlock: blockName,
status: status,
description: getStatusDescription(status)
};
}

function getStatusDescription(status) {
switch (status) {
case 'open':
    return 'This character belongs to an open script that is available for general use.';
case 'closed':
    return 'This character belongs to a closed script with specific cultural significance and should be used with respect.';
case 'unknown':
    return 'This character belongs to a script whose status has not been explicitly defined.';
default:
    return 'Unknown status.';
}
}

function analyzeText(text) {
const characters = Array.from(text);
const results = characters.map(inspectCharacter);
const closedSymbols = detectclosedSymbols(text);

const grouped = {
open: results.filter(r => r.status === 'open'),
closed: results.filter(r => r.status === 'closed'),
unknown: results.filter(r => r.status === 'unknown')
};

const uniqueBlocksByStatus = {
open: [...new Set(grouped.open.map(r => r.unicodeBlock))],
closed: [...new Set(grouped.closed.map(r => r.unicodeBlock))],
unknown: [...new Set(grouped.unknown.map(r => r.unicodeBlock))]
};

return {
text: text,
characterCount: characters.length,
closedSymbols: closedSymbols,
characterDetails: results,
summary: {
    openCount: grouped.open.length,
    closedCount: grouped.closed.length,
    unknownCount: grouped.unknown.length,
    closedSymbolCount: closedSymbols.length,
    closedSymbols: closedSymbols,
    openBlocks: uniqueBlocksByStatus.open,
    closedBlocks: uniqueBlocksByStatus.closed,
    unknownBlocks: uniqueBlocksByStatus.unknown
}
};
}

// ========== UI Interaction with Filter View and Export ==========

function displayResults(analysis) {
    const resultsDiv = document.getElementById('results');

    // Determine current filter
    const filter = document.querySelector('input[name="filter"]:checked')?.value || 'all';

    let filteredCharacters = analysis.characterDetails;
    if (filter === 'open') {
        filteredCharacters = filteredCharacters.filter(c => c.status === 'open');
    } else if (filter === 'closed') {
        filteredCharacters = filteredCharacters.filter(c => c.status === 'closed');
    } else if (filter === 'unknown') {
        filteredCharacters = filteredCharacters.filter(c => c.status === 'unknown');
    }
    
    // Start rendering output
    let html = `
    <div class="summary">
        <h2>Analysis Summary</h2>
        <p>Total characters: ${analysis.characterCount}</p>
        <p>Open script characters: <span class="status-open">${analysis.summary.openCount}</span></p>
        <p>Closed script characters: <span class="status-closed">${analysis.summary.closedCount}</span></p>
        <p>Unknown script characters: <span class="status-unknown">${analysis.summary.unknownCount}</span></p>
        <p>Closed symbols detected: <span style="color: red; font-weight: bold;">${analysis.summary.closedSymbols.length}</span></p>
    </div>
    `;

    if (analysis.summary.closedSymbols.length > 0) {
        html += `
            <div class="block-list">
                <h3 style="color: red;">🚫 Closed Symbols Found</h3>
                <ul>
                    ${analysis.summary.closedSymbols.map(sym => `<li>${sym} (U+${sym.codePointAt(0).toString(16).toUpperCase()})</li>`).join('')}
                </ul>
            </div>
        `;
    }

    html += `<div id="blockLists">`;

    if (analysis.summary.openBlocks.length > 0) {
        html += `
            <div class="block-list">
                <h3>✅ Open Script Blocks</h3>
                <ul>
                    ${analysis.summary.openBlocks.map(block => `<li>${block}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (analysis.summary.closedBlocks.length > 0) {
        html += `
            <div class="block-list">
                <h3>🚫 Closed Script Blocks</h3>
                <ul>
                    ${analysis.summary.closedBlocks.map(block => `<li>${block}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (analysis.summary.unknownBlocks.length > 0) {
        html += `
            <div class="block-list">
                <h3>❓ Unknown Script Blocks</h3>
                <ul>
                    ${analysis.summary.unknownBlocks.map(block => `<li>${block}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    html += `</div>`;

    html += `
    <div id="characterTable">
        <h2>Character Details (${filter.toUpperCase()} view)</h2>
        <table>
            <thead>
                <tr>
                    <th>Character</th>
                    <th>Unicode</th>
                    <th>Hex Code</th>
                    <th>Block</th>
                    <th>Status</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
    `;

    filteredCharacters.forEach(char => {
        const isClosedSymbol = analysis.summary.closedSymbols.includes(char.character);
        const isClosedBlock = char.status === 'closed';

        let rowStyle = '';
        if (isClosedSymbol) {
            rowStyle = 'background-color: #ffe6e6;';
        } else if (isClosedBlock) {
            rowStyle = 'background-color: #ffcccc;';
        }

        html += `
            <tr style="${rowStyle}">
                <td data-label="Character">${char.character}</td>
                <td data-label="Unicode">U+${char.codePoint.toString(16).toUpperCase().padStart(4, '0')}</td>
                <td data-label="Hex Code">${char.hexCode}</td>
                <td data-label="Block">${char.unicodeBlock || 'Unknown'}</td>
                <td data-label="Status" class="status-${char.status}">${char.status.toUpperCase()}</td>
                <td data-label="Description">${char.description}${isClosedSymbol ? ' <span style="color: red;">(Closed Symbol)</span>' : ''}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    </div>
    `;

    resultsDiv.innerHTML = html;
}
// ========== CSV Export ==========
function exportToCSV(analysis) {
if (!analysis) {
alert('Please analyze text before exporting!');
return;
}

const headers = ["Character", "Unicode", "Hex Code", "Block", "Status", "Description"];
const rows = analysis.characterDetails.map(c => [
`"${c.character}"`, 
`"U+${c.codePoint.toString(16).toUpperCase()}"`,
`"${c.hexCode}"`,
`"${c.unicodeBlock || 'Unknown'}"`,
`"${c.status.toUpperCase()}"`,
`"${c.description.replace(/\"/g, '""')}"`
]);

let csvContent = "data:text/csv;charset=utf-8," 
+ [headers.join(","), ...rows.map(r => r.join(","))].join("\n");

const encodedUri = encodeURI(csvContent);
const link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "unicode_analysis.csv");
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

// ========== TXT Export ==========
function exportToTXT() {
if (!latestAnalysis) {
alert('Please analyze text before exporting!');
return;
}

let txtContent = "Unicode Character Analysis\n";
txtContent += "===========================\n\n";
txtContent += `Total Characters: ${latestAnalysis.characterCount}\n`;
txtContent += `Open Script Characters: ${latestAnalysis.summary.openCount}\n`;
txtContent += `Closed Script Characters: ${latestAnalysis.summary.closedCount}\n`;
txtContent += `Unknown Script Characters: ${latestAnalysis.summary.unknownCount}\n`;
txtContent += `Closed Symbols Detected: ${latestAnalysis.summary.closedSymbolCount}\n\n`;

txtContent += "Character Details:\n";
txtContent += "------------------------------------------\n";

latestAnalysis.characterDetails.forEach(c => {
txtContent += `Character: ${c.character} | Unicode: U+${c.codePoint.toString(16).toUpperCase()} | Block: ${c.unicodeBlock || 'Unknown'} | Status: ${c.status.toUpperCase()} | Description: ${c.description}\n`;
});

const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "unicode_analysis.txt";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

// ========== Event Listeners ==========
document.addEventListener('DOMContentLoaded', function() {
const analyzeButton = document.getElementById('analyzeButton');
const exportCSVButton = document.getElementById('exportCSVButton');
const exportTXTButton = document.getElementById('exportTXTButton');

analyzeButton.addEventListener('click', function() {
const text = document.getElementById('inputText').value;
if (!text) {
    alert('Please enter some text to analyze');
    return;
}

try {
    const analysis = analyzeText(text);
    latestAnalysis = analysis;
    displayResults(analysis);
} catch (error) {
    console.error("Error analyzing text:", error);
    alert("An error occurred: " + error.message);
}
});

exportCSVButton.addEventListener('click', function() {
exportToCSV(latestAnalysis);
});

exportTXTButton.addEventListener('click', function() {
exportToTXT();
});

document.querySelectorAll('input[name="filter"]').forEach(radio => {
radio.addEventListener('change', function() {
    if (latestAnalysis) {
        displayResults(latestAnalysis);
    }
});
});

document.addEventListener('dragover', e => e.preventDefault());
document.addEventListener('drop', e => {
e.preventDefault();
const file = e.dataTransfer.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('inputText').value = event.target.result;
        analyzeButton.click();
    };
    reader.readAsText(file);
    
}
});
});
