// Real-life dialogue scenarios. Each has a label, an icon key (see
// utils/icons.jsx for the matching SVG), and a list of back-and-forth lines.

export const DIALOGUES = {
 intro: {label:'পরিচয় (কর্মক্ষেত্রে)', icon:'office', lines:[
   {who:'A',kr:'안녕하세요. 저는 라헬이에요.',rom:'an-nyeong-ha-se-yo. jeo-neun ra-hel-i-e-yo.',bn:'নমস্কার। আমি রাহেল।'},
   {who:'B',kr:'안녕하세요. 저는 민수예요. 만나서 반가워요.',rom:'an-nyeong-ha-se-yo. jeo-neun min-su-ye-yo. man-na-seo ban-ga-wo-yo.',bn:'নমস্কার। আমি মিনসু। দেখা হয়ে ভালো লাগলো।'},
   {who:'A',kr:'저는 방글라데시 사람이에요. 오늘부터 여기서 일해요.',rom:'jeo-neun bang-geul-la-de-si sa-ram-i-e-yo. o-neul-bu-teo yeo-gi-seo il-hae-yo.',bn:'আমি বাংলাদেশি। আজ থেকে এখানে কাজ করি।'},
   {who:'B',kr:'네, 잘 부탁해요. 이쪽으로 오세요.',rom:'ne, jal bu-ta-kae-yo. i-jjo-geu-ro o-se-yo.',bn:'ঠিক আছে, দেখাশোনা করবেন আশা করি। এদিকে আসুন।'},
   {who:'A',kr:'네, 감사합니다.',rom:'ne, gam-sa-ham-ni-da.',bn:'জি, ধন্যবাদ।'},
 ]},
 directions: {label:'রাস্তা জিজ্ঞাসা করা', icon:'street', lines:[
   {who:'A',kr:'실례합니다. 지하철역이 어디예요?',rom:'sil-lye-ham-ni-da. ji-ha-cheol-yeo-gi eo-di-ye-yo?',bn:'দুঃখিত। মেট্রো স্টেশন কোথায়?'},
   {who:'B',kr:'저기 은행 옆에 있어요.',rom:'jeo-gi eun-haeng yeo-pe i-sseo-yo.',bn:'ওই ব্যাংকের পাশে আছে।'},
   {who:'A',kr:'감사합니다. 걸어서 얼마나 걸려요?',rom:'gam-sa-ham-ni-da. geo-reo-seo eol-ma-na geol-lyeo-yo?',bn:'ধন্যবাদ। হেঁটে কতক্ষণ লাগবে?'},
   {who:'B',kr:'한 오 분 걸려요.',rom:'han o bun geol-lyeo-yo.',bn:'প্রায় পাঁচ মিনিট লাগবে।'},
   {who:'A',kr:'버스로도 갈 수 있어요?',rom:'beo-seu-ro-do gal su i-sseo-yo?',bn:'বাসে করেও যাওয়া যায়?'},
   {who:'B',kr:'네, 3번 버스를 타세요.',rom:'ne, sam-beon beo-seu-reul ta-se-yo.',bn:'হ্যাঁ, ৩ নম্বর বাসে উঠুন।'},
 ]},
 safety: {label:'কারখানায় নিরাপত্তা', icon:'factory', lines:[
   {who:'A',kr:'사장님, 이 기계는 어떻게 써요?',rom:'sa-jang-nim, i gi-gye-neun eo-tteo-ke sseo-yo?',bn:'বস, এই মেশিনটা কীভাবে ব্যবহার করব?'},
   {who:'B',kr:'천천히 하세요. 조심해야 돼요.',rom:'cheon-cheon-hi ha-se-yo. jo-sim-hae-ya dwae-yo.',bn:'ধীরে ধীরে করুন। সাবধান থাকতে হবে।'},
   {who:'A',kr:'네, 알겠습니다.',rom:'ne, al-get-sseum-ni-da.',bn:'জি, বুঝেছি।'},
   {who:'B',kr:'손을 다치면 바로 말하세요.',rom:'so-neul da-chi-myeon ba-ro mal-ha-se-yo.',bn:'হাতে চোট লাগলে সাথে সাথে বলবেন।'},
   {who:'A',kr:'안전모는 여기 있어요?',rom:'an-jeon-mo-neun yeo-gi i-sseo-yo?',bn:'হেলমেট কি এখানে আছে?'},
   {who:'B',kr:'네, 저기 벽에 있어요.',rom:'ne, jeo-gi byeo-ge i-sseo-yo.',bn:'হ্যাঁ, ওই দেয়ালে আছে।'},
 ]},
 market: {label:'বাজারে কেনাকাটা', icon:'market', lines:[
   {who:'A',kr:'이거 얼마예요?',rom:'i-geo eol-ma-ye-yo?',bn:'এটার দাম কত?'},
   {who:'B',kr:'오천 원이에요.',rom:'o-cheon won-i-e-yo.',bn:'পাঁচ হাজার ওন।'},
   {who:'A',kr:'좀 깎아 주세요.',rom:'jom kka-kka ju-se-yo.',bn:'একটু কমিয়ে দিন প্লিজ।'},
   {who:'B',kr:'네, 사천 원만 주세요.',rom:'ne, sa-cheon won-man ju-se-yo.',bn:'ঠিক আছে, চার হাজার ওন দিন।'},
   {who:'A',kr:'감사합니다. 봉투 있어요?',rom:'gam-sa-ham-ni-da. bong-tu i-sseo-yo?',bn:'ধন্যবাদ। ব্যাগ আছে?'},
   {who:'B',kr:'네, 여기 있어요.',rom:'ne, yeo-gi i-sseo-yo.',bn:'হ্যাঁ, এই নিন।'},
 ]},
 hospital: {label:'হাসপাতালে', icon:'hospital', lines:[
   {who:'A',kr:'어디가 아프세요?',rom:'eo-di-ga a-peu-se-yo?',bn:'কোথায় ব্যথা করছে?'},
   {who:'B',kr:'머리가 아파요. 그리고 열이 나요.',rom:'meo-ri-ga a-pa-yo. geu-ri-go yeo-ri na-yo.',bn:'মাথা ব্যথা করছে। আর জ্বর আসছে।'},
   {who:'A',kr:'언제부터 아팠어요?',rom:'eon-je-bu-teo a-pa-sseo-yo?',bn:'কবে থেকে ব্যথা?'},
   {who:'B',kr:'어제부터 아팠어요.',rom:'eo-je-bu-teo a-pa-sseo-yo.',bn:'গতকাল থেকে।'},
   {who:'A',kr:'이 약을 하루 세 번 드세요.',rom:'i ya-geul ha-ru se beon deu-se-yo.',bn:'এই ওষুধ দিনে তিনবার খান।'},
   {who:'B',kr:'네, 알겠습니다. 감사합니다.',rom:'ne, al-get-sseum-ni-da. gam-sa-ham-ni-da.',bn:'জি, বুঝেছি। ধন্যবাদ।'},
 ]},
 bank: {label:'ব্যাংকে', icon:'bank', lines:[
   {who:'A',kr:'통장을 만들고 싶어요.',rom:'tong-jang-eul man-deul-go si-peo-yo.',bn:'একটা ব্যাংক অ্যাকাউন্ট খুলতে চাই।'},
   {who:'B',kr:'여권 좀 보여 주세요.',rom:'yeo-gwon jom bo-yeo ju-se-yo.',bn:'পাসপোর্টটা দেখান প্লিজ।'},
   {who:'A',kr:'여기 있어요.',rom:'yeo-gi i-sseo-yo.',bn:'এই নিন।'},
   {who:'B',kr:'이 서류에 이름을 써 주세요.',rom:'i seo-ryu-e i-reu-meul sseo ju-se-yo.',bn:'এই ফর্মে নাম লিখুন।'},
   {who:'A',kr:'네, 다 썼어요.',rom:'ne, da sseo-sseo-yo.',bn:'হ্যাঁ, লেখা শেষ।'},
 ]},
 classroom: {label:'ক্লাসরুমে', icon:'classroom', lines:[
   {who:'A',kr:'선생님, 이 단어 뜻이 뭐예요?',rom:'seon-saeng-nim, i dan-eo tteu-si mwo-ye-yo?',bn:'শিক্ষক, এই শব্দের অর্থ কী?'},
   {who:'B',kr:'그건 "안전"이라는 뜻이에요.',rom:'geu-geon "an-jeon"-i-ra-neun tteu-si-e-yo.',bn:'এর অর্থ "নিরাপত্তা"।'},
   {who:'A',kr:'다시 한번 말해 주세요.',rom:'da-si han-beon mal-hae ju-se-yo.',bn:'আরেকবার বলুন প্লিজ।'},
   {who:'B',kr:'네, 천천히 말할게요.',rom:'ne, cheon-cheon-hi mal-hal-ge-yo.',bn:'ঠিক আছে, ধীরে বলব।'},
 ]},
 phone: {label:'ফোনে কথা বলা', icon:'phone', lines:[
   {who:'A',kr:'여보세요, 민수 씨예요?',rom:'yeo-bo-se-yo, min-su ssi-ye-yo?',bn:'হ্যালো, মিনসু আছেন?'},
   {who:'B',kr:'네, 맞아요. 누구세요?',rom:'ne, ma-ja-yo. nu-gu-se-yo?',bn:'হ্যাঁ, আমিই। আপনি কে?'},
   {who:'A',kr:'저는 라헬이에요. 내일 시간 있어요?',rom:'jeo-neun ra-hel-i-e-yo. nae-il si-gan i-sseo-yo?',bn:'আমি রাহেল। আগামীকাল সময় আছে?'},
   {who:'B',kr:'네, 있어요. 몇 시에 만날까요?',rom:'ne, i-sseo-yo. myeot si-e man-nal-kka-yo?',bn:'হ্যাঁ, আছে। কয়টায় দেখা করব?'},
   {who:'A',kr:'오후 세 시 어때요?',rom:'o-hu se si eo-ttae-yo?',bn:'বিকাল তিনটা কেমন হয়?'},
 ]},
 weather: {label:'আবহাওয়া নিয়ে আড্ডা', icon:'weather', lines:[
   {who:'A',kr:'오늘 날씨가 어때요?',rom:'o-neul nal-ssi-ga eo-ttae-yo?',bn:'আজ আবহাওয়া কেমন?'},
   {who:'B',kr:'좀 추워요. 바람도 많이 불어요.',rom:'jom chu-wo-yo. ba-ram-do ma-ni bu-reo-yo.',bn:'একটু ঠান্ডা। বাতাসও বেশ বইছে।'},
   {who:'A',kr:'내일은 비가 올까요?',rom:'nae-i-reun bi-ga ol-kka-yo?',bn:'আগামীকাল কি বৃষ্টি হবে?'},
   {who:'B',kr:'네, 일기예보에서 비가 온다고 했어요.',rom:'ne, il-gi-ye-bo-e-seo bi-ga on-da-go hae-sseo-yo.',bn:'হ্যাঁ, আবহাওয়ার পূর্বাভাসে বৃষ্টির কথা বলেছে।'},
   {who:'A',kr:'그럼 우산을 가져가야겠어요.',rom:'geu-reom u-sa-neul ga-jyeo-ga-ya-ge-sseo-yo.',bn:'তাহলে ছাতা নিয়ে যেতে হবে।'},
 ]},
};
