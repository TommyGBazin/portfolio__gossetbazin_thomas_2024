'use client';

import Header from './components/Header';
import EmailSignature from './components/EmailSignature';
import Location from './components/Location';
import Projects from './components/Projects';

export default function HomePage() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <Header />
        <EmailSignature />
        <Location />
        <Projects />
      </div>
    </section>
  );
}
