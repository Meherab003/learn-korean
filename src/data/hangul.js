// Hangul letters: vowels, diphthongs, consonants, tense consonants.
// g = glyph, rom = romanization, bn = Bangla approximation, ipa = IPA,
// desc = Bangla description, ex/exrom/exbn = example word.

export const VOWELS = [
 {g:'ㅏ',rom:'a',bn:'আ',ipa:'[a]',desc:'বাংলার "আ" এর মতো, মুখ পুরো খোলা।',ex:'아기',exrom:'a-gi',exbn:'শিশু'},
 {g:'ㅑ',rom:'ya',bn:'ইয়া',ipa:'[ja]',desc:'"ইয়া" — ㅏ এর আগে ছোট্ট y ধ্বনি যোগ হয়।',ex:'야구',exrom:'ya-gu',exbn:'বেসবল'},
 {g:'ㅓ',rom:'eo',bn:'অ',ipa:'[ʌ]',desc:'বাংলার "অ" এর কাছাকাছি, তবে মুখ কম খোলা ও গলার আরেকটু গভীর থেকে।',ex:'어머니',exrom:'eo-meo-ni',exbn:'মা'},
 {g:'ㅕ',rom:'yeo',bn:'ইয়অ',ipa:'[jʌ]',desc:'ㅓ এর আগে y ধ্বনি।',ex:'여자',exrom:'yeo-ja',exbn:'মহিলা'},
 {g:'ㅗ',rom:'o',bn:'ও',ipa:'[o]',desc:'বাংলার "ও" এর মতো, ঠোঁট গোল করে।',ex:'오빠',exrom:'o-ppa',exbn:'বড় ভাই (মেয়ে বলে)'},
 {g:'ㅛ',rom:'yo',bn:'ইয়ো',ipa:'[jo]',desc:'ㅗ এর আগে y ধ্বনি।',ex:'교실',exrom:'gyo-sil',exbn:'শ্রেণিকক্ষ'},
 {g:'ㅜ',rom:'u',bn:'উ',ipa:'[u]',desc:'বাংলার "উ" এর মতো, ঠোঁট আরও সামনে বাড়িয়ে।',ex:'우유',exrom:'u-yu',exbn:'দুধ'},
 {g:'ㅠ',rom:'yu',bn:'ইউ',ipa:'[ju]',desc:'ㅜ এর আগে y ধ্বনি।',ex:'유월',exrom:'yu-wol',exbn:'জুন মাস'},
 {g:'ㅡ',rom:'eu',bn:'ঈউ',ipa:'[ɯ]',desc:'বাংলায় হুবহু নেই — "উ" বলার সময় ঠোঁট গোল না করে টানটান/চ্যাপ্টা রাখুন।',ex:'그림',exrom:'geu-rim',exbn:'ছবি'},
 {g:'ㅣ',rom:'i',bn:'ই',ipa:'[i]',desc:'বাংলার "ই" এর মতো।',ex:'이름',exrom:'i-reum',exbn:'নাম'},
];
export const DIP = [
 {g:'ㅐ',rom:'ae',bn:'অ্যা',ipa:'[ɛ]',desc:'বাংলার "অ্যা" এর মতো (যেমন "ব্যাগ")।',ex:'애기',exrom:'ae-gi',exbn:'শিশু (কথ্য)'},
 {g:'ㅒ',rom:'yae',bn:'ইয়্যা',ipa:'[jɛ]',desc:'ㅐ এর আগে y ধ্বনি — খুব কম ব্যবহৃত হয়।',ex:'얘기',exrom:'yae-gi',exbn:'গল্প/কথা'},
 {g:'ㅔ',rom:'e',bn:'এ',ipa:'[e]',desc:'বাংলার "এ" এর মতো। আধুনিক কোরিয়ানে ㅐ ও ㅔ প্রায় একই রকম শোনায়।',ex:'세수',exrom:'se-su',exbn:'মুখ ধোয়া'},
 {g:'ㅖ',rom:'ye',bn:'ইয়ে',ipa:'[je]',desc:'ㅔ এর আগে y ধ্বনি।',ex:'예약',exrom:'ye-yak',exbn:'রিজার্ভেশন/বুকিং'},
 {g:'ㅘ',rom:'wa',bn:'ওয়া',ipa:'[wa]',desc:'ㅗ+ㅏ মিলিয়ে "ওয়া"।',ex:'과일',exrom:'gwa-il',exbn:'ফল'},
 {g:'ㅙ',rom:'wae',bn:'ওয়্যা',ipa:'[wɛ]',desc:'ㅗ+ㅐ মিলিয়ে "ওয়্যা"।',ex:'왜요',exrom:'wae-yo',exbn:'কেন?'},
 {g:'ㅚ',rom:'oe',bn:'ওয়ে',ipa:'[we]',desc:'ㅗ+ㅣ, বর্তমানে ㅞ এর মতোই উচ্চারিত হয়।',ex:'회사',exrom:'hoe-sa',exbn:'কোম্পানি/অফিস'},
 {g:'ㅝ',rom:'wo',bn:'ওয়ো',ipa:'[wʌ]',desc:'ㅜ+ㅓ মিলিয়ে "ওয়ো"।',ex:'원',exrom:'won',exbn:'ওন (কোরিয়ান মুদ্রা)'},
 {g:'ㅞ',rom:'we',bn:'ওয়ে',ipa:'[we]',desc:'ㅜ+ㅔ মিলিয়ে "ওয়ে"।',ex:'웨이터',exrom:'we-i-teo',exbn:'ওয়েটার'},
 {g:'ㅟ',rom:'wi',bn:'উই',ipa:'[wi]',desc:'ㅜ+ㅣ মিলিয়ে "উই"।',ex:'가위',exrom:'ga-wi',exbn:'কাঁচি'},
 {g:'ㅢ',rom:'ui',bn:'ঈউই',ipa:'[ɰi]',desc:'ㅡ থেকে ㅣ তে দ্রুত সরে যাওয়া শব্দ।',ex:'의사',exrom:'ui-sa',exbn:'ডাক্তার'},
];
export const CONS = [
 {g:'ㄱ',rom:'g/k',bn:'গ/ক',ipa:'[g~k]',desc:'শব্দের শুরুতে নরম "গ", সিলেবলের শেষে/অন্য ব্যঞ্জনের আগে কড়া "ক"। আঁকা হয়েছে জিহ্বার পেছনের অংশ তালুতে ঠেকার আকৃতি অনুকরণ করে।',ex:'가방',exrom:'ga-bang',exbn:'ব্যাগ'},
 {g:'ㄴ',rom:'n',bn:'ন',ipa:'[n]',desc:'বাংলার "ন" এর মতো। আঁকা হয়েছে জিহ্বার ডগা উপরের দাঁতের পেছনে ঠেকার আকৃতি অনুকরণ করে।',ex:'나무',exrom:'na-mu',exbn:'গাছ'},
 {g:'ㄷ',rom:'d/t',bn:'দ/ত',ipa:'[d~t]',desc:'শব্দের শুরুতে নরম "দ", অন্যত্র কড়া "ত"।',ex:'다리',exrom:'da-ri',exbn:'পা / সেতু'},
 {g:'ㄹ',rom:'r/l',bn:'র/ল',ipa:'[ɾ~l]',desc:'স্বরবর্ণের মাঝে "র" এর মতো, সিলেবলের শেষে "ল" এর মতো।',ex:'라면',exrom:'ra-myeon',exbn:'রামেন নুডলস'},
 {g:'ㅁ',rom:'m',bn:'ম',ipa:'[m]',desc:'বাংলার "ম" এর মতো। আঁকা হয়েছে মুখের আকৃতি অনুকরণ করে।',ex:'마음',exrom:'ma-eum',exbn:'মন'},
 {g:'ㅂ',rom:'b/p',bn:'ব/প',ipa:'[b~p]',desc:'শব্দের শুরুতে নরম "ব", অন্যত্র কড়া "প"।',ex:'바다',exrom:'ba-da',exbn:'সমুদ্র'},
 {g:'ㅅ',rom:'s',bn:'স',ipa:'[s~ʃ]',desc:'বাংলার "স" এর মতো; ㅣ এর আগে "শ" এর মতো শোনায়।',ex:'사람',exrom:'sa-ram',exbn:'মানুষ'},
 {g:'ㅇ',rom:'-/ng',bn:'নীরব/ং',ipa:'[∅~ŋ]',desc:'সিলেবলের শুরুতে সম্পূর্ণ নীরব, সিলেবলের শেষে "ং" ধ্বনি। আঁকা হয়েছে গলার আকৃতি অনুকরণ করে।',ex:'아이',exrom:'a-i',exbn:'বাচ্চা'},
 {g:'ㅈ',rom:'j',bn:'জ',ipa:'[dʑ~tɕ]',desc:'বাংলার "জ" এর কাছাকাছি।',ex:'자다',exrom:'ja-da',exbn:'ঘুমানো'},
 {g:'ㅊ',rom:'ch',bn:'চ',ipa:'[tɕʰ]',desc:'বাংলার "চ" থেকে জোরালো, নিঃশ্বাস বেশি বেরোয়।',ex:'차',exrom:'cha',exbn:'চা / গাড়ি'},
 {g:'ㅋ',rom:'k',bn:'খ',ipa:'[kʰ]',desc:'বাংলার "খ" এর মতো।',ex:'커피',exrom:'keo-pi',exbn:'কফি'},
 {g:'ㅌ',rom:'t',bn:'থ',ipa:'[tʰ]',desc:'বাংলার "থ" এর মতো।',ex:'토끼',exrom:'to-kki',exbn:'খরগোশ'},
 {g:'ㅍ',rom:'p',bn:'ফ',ipa:'[pʰ]',desc:'বাংলার "ফ" এর মতো।',ex:'포도',exrom:'po-do',exbn:'আঙুর'},
 {g:'ㅎ',rom:'h',bn:'হ',ipa:'[h]',desc:'বাংলার "হ" এর মতো।',ex:'하늘',exrom:'ha-neul',exbn:'আকাশ'},
];
export const TENSE = [
 {g:'ㄲ',rom:'kk',bn:'ক্ক (কড়া)',ipa:'[k͈]',desc:'ㄱ এর কড়া/টানটান রূপ।',ex:'까치',exrom:'kka-chi',exbn:'দাঁড়কাক জাতীয় পাখি'},
 {g:'ㄸ',rom:'tt',bn:'ত্ত (কড়া)',ipa:'[t͈]',desc:'ㄷ এর কড়া রূপ।',ex:'딸기',exrom:'ttal-gi',exbn:'স্ট্রবেরি'},
 {g:'ㅃ',rom:'pp',bn:'প্প (কড়া)',ipa:'[p͈]',desc:'ㅂ এর কড়া রূপ।',ex:'빵',exrom:'ppang',exbn:'রুটি'},
 {g:'ㅆ',rom:'ss',bn:'স্স (কড়া)',ipa:'[s͈]',desc:'ㅅ এর কড়া রূপ।',ex:'싸다',exrom:'ssa-da',exbn:'সস্তা'},
 {g:'ㅉ',rom:'jj',bn:'জ্জ (কড়া)',ipa:'[tɕ͈]',desc:'ㅈ এর কড়া রূপ।',ex:'짜다',exrom:'jja-da',exbn:'নোনতা'},
];

