import { useState, useCallback } from 'react';
import { VOCAB } from '../data/vocab.js';
import { VOWELS, CONS } from '../data/hangul.js';
import { NUMBERS } from '../data/numbers.js';
import { Eyebrow, Btn } from '../components/UI.jsx';
import { InkDivider } from '../components/Icons.jsx';

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Builds a random 10-question bank mixing vocab meanings, letter romanizations,
// and Sino-Korean numbers. Each question has 4 options (1 correct + 3 distractors).
function buildQuizBank() {
  const bank = [];

  VOCAB.forEach((v) => {
    const distractors = shuffle(VOCAB.filter((o) => o.bn !== v.bn)).slice(0, 3).map((o) => o.bn);
    const opts = shuffle([...distractors, v.bn]);
    bank.push({ prompt: v.kr, hint: 'এর বাংলা অর্থ কী?', opts, answer: v.bn });
  });

  [...VOWELS, ...CONS].forEach((l) => {
    const pool = [...VOWELS, ...CONS].filter((o) => o.rom !== l.rom);
    const distractors = shuffle(pool).slice(0, 3).map((o) => o.rom);
    const opts = shuffle([...distractors, l.rom]);
    bank.push({ prompt: l.g, hint: 'এই বর্ণের রোমান উচ্চারণ কোনটি?', opts, answer: l.rom });
  });

  NUMBERS.filter((n) => n.n <= 30).forEach((n) => {
    const pool = NUMBERS.filter((o) => o.n !== n.n && o.n <= 100);
    const distractors = shuffle(pool).slice(0, 3).map((o) => o.sino);
    const opts = shuffle([...distractors, n.sino]);
    bank.push({ prompt: String(n.n), hint: 'সিনো-কোরিয়ান সংখ্যা কোনটি?', opts, answer: n.sino });
  });

  return shuffle(bank).slice(0, 10);
}

function resultMessage(pct) {
  if (pct >= 0.8) return 'দারুণ! আপনি খুব ভালো শিখেছেন।';
  if (pct >= 0.5) return 'ভালো করেছেন — আরেকটু অনুশীলন করলে আরও ভালো হবে।';
  return 'সমস্যা নেই, আবার হাংগুল ও শব্দভাণ্ডার অংশ দেখে আরেকবার চেষ্টা করুন।';
}

export default function Quiz() {
  const [questions, setQuestions] = useState(() => buildQuizBank());
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [finished, setFinished] = useState(false);

  const restart = useCallback(() => {
    setQuestions(buildQuizBank());
    setIndex(0);
    setScore(0);
    setChosen(null);
    setFinished(false);
  }, []);

  const q = questions[index];

  function answer(opt) {
    if (chosen) return; // already answered this question
    setChosen(opt);
    const correct = opt === q.answer;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
        setChosen(null);
      } else {
        setFinished(true);
      }
    }, 800);
  }

  return (
    <div>
      <Eyebrow>07 · 연습 문제</Eyebrow>
      <h1 className="font-hero font-extrabold text-3xl mt-1">অনুশীলন পরীক্ষা</h1>
      <div className="font-bn font-semibold text-ink-soft mt-0.5">
        যা শিখলেন তা যাচাই করুন — প্রশ্নগুলো র‌্যান্ডম ক্রমে আসবে
      </div>
      <InkDivider />

      <div className="relative border-x border-line bg-paper-card px-5 py-6.5 shadow-xl torn-edge-top torn-edge-bottom max-w-[640px]">
        {!finished ? (
          <div>
            <div className="font-mono text-[.78rem] text-ink-soft">প্রশ্ন {index + 1} / {questions.length}</div>
            <div className="text-xl my-3.5 font-kr font-semibold">
              {q.prompt}
              <span className="block font-bn text-[.85rem] text-ink-soft font-normal mt-1">{q.hint}</span>
            </div>
            <div>
              {q.opts.map((opt, i) => {
                let cls = 'bg-paper-card border-line hover:border-red';
                if (chosen) {
                  if (opt === q.answer) cls = 'border-[#4b6b34]' ;
                  else if (opt === chosen) cls = 'bg-red-tint border-red';
                }
                const style = chosen && opt === q.answer ? { background: '#dde8d4' } : undefined;
                return (
                  <button
                    key={i}
                    onClick={() => answer(opt)}
                    style={style}
                    className={`block w-full text-left border rounded-sm px-3.5 py-3 mb-2.5 cursor-pointer text-[.96rem]
                      transition ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-7.5">
            <Eyebrow>ফলাফল</Eyebrow>
            <div className="font-swiss text-6xl font-black text-red mt-2">{score}/{questions.length}</div>
            <p className="mt-1.5">{resultMessage(score / questions.length)}</p>
            <Btn className="mt-3" onClick={restart}>আবার শুরু করুন</Btn>
          </div>
        )}
      </div>
    </div>
  );
}
