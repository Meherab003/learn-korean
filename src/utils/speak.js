// Text-to-speech helper. Speaks Korean text aloud using the browser's
// built-in Web Speech API (works best in Chrome / Edge).

let voicesCache = [];
let primed = false;
let resumeInterval = null;

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => { voicesCache = window.speechSynthesis.getVoices(); };
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function primeSpeech() {
  if (primed || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  primed = true;
  try { window.speechSynthesis.speak(new SpeechSynthesisUtterance('')); } catch { /* ignore */ }
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', primeSpeech, { once: true });
  document.addEventListener('touchstart', primeSpeech, { once: true });
}

export function speak(text) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    alert('আপনার ব্রাউজার Text-to-Speech সমর্থন করে না। Chrome বা Edge ব্যবহার করে দেখুন।');
    return;
  }
  primeSpeech();
  window.speechSynthesis.cancel();
  clearInterval(resumeInterval);

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.85;

  const voices = voicesCache.length ? voicesCache : window.speechSynthesis.getVoices();
  const koVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('ko'));
  if (koVoice) utterance.voice = koVoice;

  // Chrome stops long utterances after ~15s unless nudged; this keeps it alive.
  utterance.onstart = () => {
    resumeInterval = setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        clearInterval(resumeInterval);
      }
    }, 4000);
  };
  utterance.onend = () => clearInterval(resumeInterval);
  utterance.onerror = () => clearInterval(resumeInterval);

  window.speechSynthesis.resume();
  window.speechSynthesis.speak(utterance);
}
