'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context';
import { Lang } from '@/lib/translations';

export default function Nav({ onCVClick }: { onCVClick?: () => void }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, lang, setLang, t } = useApp();
  const langs: Lang[] = ['en', 'ru', 'uz'];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo"><span className="dot" /> mirabbosoff.uz</Link>
        <div className="nav-right">
          <ul className={`nav-links ${open ? 'open' : ''}`} id="navLinks">
            <li><a href="#about" onClick={() => setOpen(false)}>{t('nav_about')}</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>{t('nav_skills')}</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)}>{t('nav_experience')}</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>{t('nav_projects')}</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>{t('nav_contact')}</a></li>
            {onCVClick && (
              <li><a href="#" className="cv-link" onClick={(e) => { e.preventDefault(); onCVClick(); setOpen(false); }}>CV ↗</a></li>
            )}
          </ul>
          <div className="nav-controls">
            <div className="lang-switcher">
              {langs.map(l => (
                <button key={l} className={`lang-btn ${lang === l ? 'active' : ''}`} onClick={() => setLang(l)} aria-label={`Switch language to ${l.toUpperCase()}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
        <button className="mob-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? '✕' : '☰'}</button>
      </div>
    </nav>
  );
}
