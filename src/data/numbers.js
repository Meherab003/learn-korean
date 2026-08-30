// Korean numbers 1–100 (Sino-Korean & Native Korean), plus curated large numbers.

const sinoOnes = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
const sinoOnesRom = ['', 'il', 'i', 'sam', 'sa', 'o', 'yuk', 'chil', 'pal', 'gu'];
const sinoTens = ['', '십', '이십', '삼십', '사십', '오십', '육십', '칠십', '팔십', '구십'];
const sinoTensRom = ['', 'sip', 'i-sip', 'sam-sip', 'sa-sip', 'o-sip', 'yuk-sip', 'chil-sip', 'pal-sip', 'gu-sip'];
const nativeOnes = ['', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉'];
const nativeOnesRom = ['', 'ha-na', 'dul', 'set', 'net', 'da-seot', 'yeo-seot', 'il-gop', 'yeo-deol', 'a-hop'];
const nativeTens = ['', '열', '스물', '서른', '마흔', '쉰', '예순', '일흔', '여든', '아흔'];
const nativeTensRom = ['', 'yeol', 'seu-mul', 'seo-reun', 'ma-heun', 'swin', 'ye-sun', 'il-heun', 'yeo-deun', 'a-heun'];

function sinoWord(n) {
  if (n === 100) return '백';
  const t = Math.floor(n / 10), o = n % 10;
  if (t === 0) return sinoOnes[o];
  return sinoTens[t] + sinoOnes[o];
}
function sinoRomFn(n) {
  if (n === 100) return 'baek';
  const t = Math.floor(n / 10), o = n % 10;
  if (t === 0) return sinoOnesRom[o];
  return sinoTensRom[t] + (o > 0 ? '-' + sinoOnesRom[o] : '');
}
function nativeWord(n) {
  if (n > 99) return '—';
  const t = Math.floor(n / 10), o = n % 10;
  if (t === 0) return nativeOnes[o];
  if (o === 0) return nativeTens[t];
  return nativeTens[t] + nativeOnes[o];
}
function nativeRomFn(n) {
  if (n > 99) return '—';
  const t = Math.floor(n / 10), o = n % 10;
  if (t === 0) return nativeOnesRom[o];
  if (o === 0) return nativeTensRom[t];
  return nativeTensRom[t] + '-' + nativeOnesRom[o];
}

export const NUMBERS = [];
for (let n = 1; n <= 100; n++) {
  NUMBERS.push({ n, sino: sinoWord(n), sr: sinoRomFn(n), nat: nativeWord(n), nr: nativeRomFn(n) });
}

// Large numbers: hundreds through hundred-million, Sino-Korean only.
export const LARGE_NUMBERS = [
  { label: '১০০', sino: '백', sr: 'baek' },
  { label: '২০০', sino: '이백', sr: 'i-baek' },
  { label: '৫০০', sino: '오백', sr: 'o-baek' },
  { label: '৯০০', sino: '구백', sr: 'gu-baek' },
  { label: '১,০০০', sino: '천', sr: 'cheon' },
  { label: '২,০০০', sino: '이천', sr: 'i-cheon' },
  { label: '৫,০০০', sino: '오천', sr: 'o-cheon' },
  { label: '৯,০০০', sino: '구천', sr: 'gu-cheon' },
  { label: '১০,০০০ (১ মান)', sino: '만', sr: 'man' },
  { label: '৫০,০০০', sino: '오만', sr: 'o-man' },
  { label: '১,০০,০০০ (১ লক্ষ)', sino: '십만', sr: 'sip-man' },
  { label: '৫,০০,০০০', sino: '오십만', sr: 'o-sip-man' },
  { label: '১০,০০,০০০ (১০ লক্ষ)', sino: '백만', sr: 'baek-man' },
  { label: '১,০০,০০,০০০ (১ কোটি)', sino: '천만', sr: 'cheon-man' },
  { label: '১০,০০,০০,০০০ (১০ কোটি = ১ 억)', sino: '억', sr: 'eok' },
];

// Syllable builder: initial / medial / final consonant+vowel jamo, used to
// compose a Hangul syllable block via Unicode math (see Builder.jsx).
export const CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
export const JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
export const JONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
export const CHO_ROM = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
export const JUNG_ROM = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
export const JONG_ROM = ['','k','k','k','n','n','n','t','l','k','m','l','l','l','p','l','m','p','p','t','t','ng','t','t','k','t','p','h'];
