import { useState } from 'react';
import TopBar from './components/TopBar.jsx';
import MenuOverlay from './components/MenuOverlay.jsx';
import Home from './sections/Home.jsx';
import Hangul from './sections/Hangul.jsx';
import Builder from './sections/Builder.jsx';
import Numbers from './sections/Numbers.jsx';
import Grammar from './sections/Grammar.jsx';
import Vocab from './sections/Vocab.jsx';
import Dialogue from './sections/Dialogue.jsx';
import Quiz from './sections/Quiz.jsx';
import { speak } from './utils/speak.js';

// Add/remove sections here — same keys used in MenuOverlay.jsx.
const SECTIONS = {
  home: Home,
  hangul: Hangul,
  builder: Builder,
  numbers: Numbers,
  grammar: Grammar,
  vocab: Vocab,
  dialogue: Dialogue,
  quiz: Quiz,
};
const TOTAL_SECTIONS = Object.keys(SECTIONS).length;

export default function App() {
  const [current, setCurrent] = useState('home');
  const [visited, setVisited] = useState(new Set(['home']));
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(sec) {
    setCurrent(sec);
    setVisited((prev) => new Set(prev).add(sec));
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const progress = Math.round((visited.size / TOTAL_SECTIONS) * 100);
  const Section = SECTIONS[current];

  return (
    <>
      <TopBar progress={progress} onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay
        open={menuOpen}
        onNavigate={goTo}
        onClose={() => setMenuOpen(false)}
        onSoundTest={() => speak('안녕하세요')}
      />
      <div className="min-w-0">
        <main className="px-4 sm:px-14 pt-9 pb-24 max-w-[1180px] mx-auto">
          <Section goTo={goTo} />
        </main>
      </div>
    </>
  );
}
