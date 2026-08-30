import { useState } from 'react';
import { NUMBERS, LARGE_NUMBERS } from '../data/numbers.js';
import { Eyebrow, Card, SpeakerButton } from '../components/UI.jsx';
import { InkDivider } from '../components/Icons.jsx';

export default function Numbers() {
  const [query, setQuery] = useState('');
  const filtered = query.trim() ? NUMBERS.filter((n) => String(n.n) === query.trim()) : NUMBERS;

  return (
    <div>
      <Eyebrow>03 · 숫자</Eyebrow>
      <h1 className="font-hero font-extrabold text-3xl mt-1">সংখ্যা পদ্ধতি</h1>
      <div className="font-bn font-semibold text-ink-soft mt-0.5">
        দুই ধরনের সংখ্যা পদ্ধতি — কোনটা কখন ব্যবহার হয় সেটাই সবচেয়ে গুরুত্বপূর্ণ
      </div>
      <InkDivider />

      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <Card accent>
          <Eyebrow>সিনো-কোরিয়ান</Eyebrow>
          <h3 className="font-hero font-extrabold text-lg mt-1">টাকা, ফোন নম্বর, তারিখ, মিনিট, বছর</h3>
          <div className="font-bn text-ink-soft">দাম বলতে, ফোন নম্বর পড়তে, তারিখ ও মিনিট বলতে এই সংখ্যা ব্যবহার হয়।</div>
        </Card>
        <Card accent>
          <Eyebrow>নেটিভ কোরিয়ান</Eyebrow>
          <h3 className="font-hero font-extrabold text-lg mt-1">বয়স, ঘণ্টা, মানুষ/জিনিস গণনা</h3>
          <div className="font-bn text-ink-soft">
            "কয়টা", "কয়জন", বয়স, ঘড়ির "ঘণ্টা" বলতে ব্যবহার হয় (১-৯৯ পর্যন্ত, ১০০ থেকে নেটিভ রূপ নেই)।
          </div>
        </Card>
      </div>

      <h2 className="font-hero font-extrabold text-2xl mt-8">১ থেকে ১০০</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 সংখ্যা খুঁজুন (যেমন: 25 লিখুন)"
        className="w-full px-3.5 py-2.5 rounded-sm border border-ink text-[.95rem] mt-3.5 bg-paper-card"
      />
      <div className="border-2 border-ink mt-2.5 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-ink text-paper">
              {['সংখ্যা', 'সিনো-কোরিয়ান', 'উচ্চারণ', 'নেটিভ কোরিয়ান', 'উচ্চারণ', ''].map((h, i) => (
                <th key={i} className="font-mono text-[.68rem] uppercase px-2.5 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((n) => (
              <tr key={n.n} className={n.n % 10 === 0 ? 'bg-red-tint font-bold' : ''}>
                <td className="text-center px-2.5 py-2 border-b border-line">{n.n}</td>
                <td className="text-center px-2.5 py-2 border-b border-line font-kr font-semibold text-[1.05rem]">{n.sino}</td>
                <td className="text-center px-2.5 py-2 border-b border-line">{n.sr}</td>
                <td className="text-center px-2.5 py-2 border-b border-line font-kr font-semibold text-[1.05rem]">{n.nat}</td>
                <td className="text-center px-2.5 py-2 border-b border-line">{n.nr}</td>
                <td className="text-center px-2.5 py-2 border-b border-line">
                  <SpeakerButton text={n.sino} className="static mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-hero font-extrabold text-2xl mt-9">শত, হাজার, লক্ষ, কোটি</h2>
      <p className="font-bn text-ink-soft">
        কোরিয়ান বড় সংখ্যা ইংরেজির মতো হাজার (thousand) ভিত্তিক নয় — বরং <b>만 (man = ১০,০০০)</b> ও
        <b> 억 (eok = ১০ কোটি)</b> এই দুটি নতুন এককের ভিত্তিতে গোনা হয়। এই পর্যায়ে নেটিভ কোরিয়ান রূপ নেই,
        শুধু সিনো-কোরিয়ান ব্যবহার হয়।
      </p>
      <div className="border-2 border-ink mt-3.5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-ink text-paper">
              {['সংখ্যা', 'সিনো-কোরিয়ান', 'উচ্চারণ', ''].map((h, i) => (
                <th key={i} className="font-mono text-[.68rem] uppercase px-2.5 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LARGE_NUMBERS.map((n) => (
              <tr key={n.label}>
                <td className="text-center px-2.5 py-2 border-b border-line">{n.label}</td>
                <td className="text-center px-2.5 py-2 border-b border-line font-kr font-semibold text-[1.05rem]">{n.sino}</td>
                <td className="text-center px-2.5 py-2 border-b border-line">{n.sr}</td>
                <td className="text-center px-2.5 py-2 border-b border-line">
                  <SpeakerButton text={n.sino} className="static mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="relative bg-red-tint px-4.5 py-4.5 text-[.9rem] mt-6">
        <b>মনে রাখার কৌশল:</b> ফোন নম্বর/দাম/তারিখ → <b>সিনো-কোরিয়ান</b>। বয়স/জনসংখ্যা/ঘণ্টা → <b>নেটিভ কোরিয়ান</b>।
        ১০,০০০-এর উপরে সবসময় সিনো-কোরিয়ান, এবং 만 (১০,০০০) এককে গোনা হয়।
      </div>
    </div>
  );
}
