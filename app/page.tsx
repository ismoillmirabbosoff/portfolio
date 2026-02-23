'use client';

import { useState } from 'react';
import Nav from './components/Nav';
import { useApp } from '@/lib/context';

export default function Home() {
  const [view, setView] = useState<'portfolio' | 'cv'>('portfolio');
  const { t } = useApp();

  return (
    <>
      <Nav onCVClick={() => { setView('cv'); window.scrollTo(0, 0); }} />

      {view === 'portfolio' ? (
        <div className="portfolio-page">
          {/* HERO */}
          <section className="hero">
            <div className="hero-inner">
              <div className="hero-badge"><span className="pulse" /> {t('hero_badge')}</div>
              <h1>
                {t('hero_title1')}<br />
                <span className="gradient-text">{t('hero_title2')}</span><br />
                {t('hero_title3')}
              </h1>
              <p className="hero-desc">{t('hero_desc')}</p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">{t('hero_cta')}</a>
                <button className="btn-secondary" onClick={() => { setView('cv'); window.scrollTo(0, 0); }}>{t('hero_cv')}</button>
              </div>
              <div className="hero-stats">
                <div className="stat-card"><div className="stat-num">4+</div><div className="stat-label">{t('stat_years')}</div></div>
                <div className="stat-card"><div className="stat-num">3</div><div className="stat-label">{t('stat_companies')}</div></div>
                <div className="stat-card"><div className="stat-num">3000+</div><div className="stat-label">{t('stat_dbs')}</div></div>
                <div className="stat-card"><div className="stat-num">99.9%</div><div className="stat-label">{t('stat_uptime')}</div></div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="section" id="about">
            <div className="section-header">
              <div className="section-tag">{t('about_tag')}</div>
              <h2 className="section-title">{t('about_title')}</h2>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>{t('about_p1')}</p>
                <p>{t('about_p2')}</p>
                <p>{t('about_p3')}</p>
              </div>
              <div className="terminal">
                <div className="term-bar">
                  <span className="term-dot" /><span className="term-dot" /><span className="term-dot" />
                  <span className="term-tab">~/ismoil</span>
                </div>
                <div className="term-body">
                  <div className="t-line"><span className="t-prompt">❯</span><span className="t-cmd">whoami</span></div>
                  <div className="t-out">ismoil — devops engineer</div><br />
                  <div className="t-line"><span className="t-prompt">❯</span><span className="t-cmd">cat stack.yml</span></div>
                  <div className="t-out">docker, kubernetes, ansible</div>
                  <div className="t-out">terraform, github-actions</div>
                  <div className="t-out">mysql, postgresql, redis</div>
                  <div className="t-out">nginx, grafana, prometheus</div><br />
                  <div className="t-line"><span className="t-prompt">❯</span><span className="t-cmd">echo $STATUS</span></div>
                  <div className="t-out" style={{ color: 'var(--accent)' }}>{t('terminal_status')}</div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="section" id="skills">
            <div className="section-header">
              <div className="section-tag">{t('skills_tag')}</div>
              <h2 className="section-title">{t('skills_title')}</h2>
            </div>
            <div className="skills-grid">
              {[
                { emoji: '☁️', key: 'sk1', tags: ['AWS', 'Selectel', 'DigitalOcean', 'DBaaS', 'VPS'] },
                { emoji: '🐳', key: 'sk2', tags: ['Docker', 'Docker Compose', 'Kubernetes', 'Registry'] },
                { emoji: '⚡', key: 'sk3', tags: ['GitHub Actions', 'GitLab CI', 'Ansible', 'Terraform'] },
                { emoji: '🗄️', key: 'sk4', tags: ['MySQL', 'PostgreSQL', 'Redis', 'Migration'] },
                { emoji: '📊', key: 'sk5', tags: ['Grafana', 'Prometheus', 'Zabbix', 'ELK'] },
                { emoji: '🌐', key: 'sk6', tags: ['Nginx', 'SSL/TLS', 'DNS', 'Firewall'] },
              ].map(s => (
                <div key={s.key} className="skill-card">
                  <span className="skill-emoji">{s.emoji}</span>
                  <h3>{t(s.key)}</h3>
                  <div className="skill-tags">
                    {s.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="section" id="experience">
            <div className="section-header">
              <div className="section-tag">{t('exp_tag')}</div>
              <h2 className="section-title">{t('exp_title')}</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item current">
                <div className="timeline-dot" />
                <div className="timeline-date">2025 Nov — {t('present')} <span className="badge-current">{t('current')}</span></div>
                <div className="timeline-content">
                  <h3>DevOps Engineer</h3>
                  <div className="timeline-company"><span className="flag">🇺🇿</span> SalesDoctor — Uzbekistan</div>
                  <p className="timeline-desc">{t('exp_sd')}</p>
                </div>
              </div>
              <div className="timeline-item current">
                <div className="timeline-dot" />
                <div className="timeline-date">2022 Mar — {t('present')} <span className="badge-current">{t('current')}</span></div>
                <div className="timeline-content">
                  <h3>DevOps Engineer</h3>
                  <div className="timeline-company"><span className="flag">🇺🇸</span> Zeromax — USA</div>
                  <p className="timeline-desc">{t('exp_zm')}</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2023 Mar — 2024 Dec</div>
                <div className="timeline-content">
                  <h3>DevOps Engineer</h3>
                  <div className="timeline-company"><span className="flag">🇺🇿</span> Robosell — Uzbekistan</div>
                  <p className="timeline-desc">{t('exp_rb')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="section" id="projects">
            <div className="section-header">
              <div className="section-tag">{t('proj_tag')}</div>
              <h2 className="section-title">{t('proj_title')}</h2>
            </div>
            <div className="projects-grid">
              {[
                { n: '01', tk: 'p1t', dk: 'p1d', tech: ['MySQL', 'Python', 'Bash', 'Telegram'] },
                { n: '02', tk: 'p2t', dk: 'p2d', tech: ['Python', 'Async', 'Workers', 'Monitoring'] },
                { n: '03', tk: 'p3t', dk: 'p3d', tech: ['Docker', 'K8s', 'Ansible', 'Terraform'] },
                { n: '04', tk: 'p4t', dk: 'p4d', tech: ['Grafana', 'Prometheus', 'Zabbix', 'ELK'] },
              ].map(p => (
                <div key={p.n} className="project-card">
                  <span className="project-num">{p.n}</span>
                  <h3>{t(p.tk)}</h3>
                  <p>{t(p.dk)}</p>
                  <div className="project-tech">{p.tech.map(x => <span key={x}>{x}</span>)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="section" id="education">
            <div className="section-header">
              <div className="section-tag">{t('edu_tag')}</div>
              <h2 className="section-title">{t('edu_title')}</h2>
            </div>
            <div className="edu-grid">
              <div className="edu-card"><div className="edu-year">2022</div><h3>DevOps</h3><p>Uacademy</p></div>
              <div className="edu-card"><div className="edu-year">2021</div><h3>Fullstack Python</h3><p>Bobir Akilkhanov Academy</p></div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="contact-section" id="contact">
            <h2 className="contact-title">{t('contact_title')}</h2>
            <p className="contact-desc">{t('contact_desc')}</p>
            <div className="contact-grid">
              <a href="mailto:ismoillmirabbosoff@gmail.com" className="contact-card">📧 ismoillmirabbosoff@gmail.com</a>
              <a href="https://github.com/ismoillmirabbosoff" className="contact-card" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
              <a href="https://linkedin.com/in/ismoil-mirabbosoff-a049b8264" className="contact-card" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
              <a href="https://t.me/aalfaa00" className="contact-card" target="_blank" rel="noopener noreferrer">✈️ Telegram</a>


            </div>
          </section>

          <footer className="footer">
            <span>© {new Date().getFullYear()} mirabbosoff.uz</span>
            <span>{t('footer_built')}</span>
          </footer>
        </div>
      ) : (
        /* CV PAGE */
        <div className="cv-page active">
          <div className="cv-top">
            <div>
              <h1 className="cv-name">Ismoil</h1>
              <p className="cv-role">DevOps Engineer</p>
            </div>
            <div className="cv-info">
              <div>ismoillmirabbosoff@gmail.com</div>
              <div>Tashkent, Uzbekistan</div>
              <div>github.com/ismoillmirabbosoff</div>
            </div>
          </div>

          <div className="cv-sec">
            <h3 className="cv-sec-title">{t('nav_about')}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>{t('about_p1')} {t('about_p2')}</p>
          </div>

          <div className="cv-sec">
            <h3 className="cv-sec-title">{t('nav_experience')}</h3>
            {[
              { title: 'DevOps Engineer — SalesDoctor', date: `Nov 2025 — ${t('present')}`, flag: '🇺🇿', desc: t('exp_sd') },
              { title: 'DevOps Engineer — Zeromax', date: `Mar 2022 — ${t('present')}`, flag: '🇺🇸', desc: t('exp_zm') },
              { title: 'DevOps Engineer — Robosell', date: 'Mar 2023 — Dec 2024', flag: '🇺🇿', desc: t('exp_rb') },
            ].map((e, i) => (
              <div key={i} className="cv-entry">
                <div className="cv-entry-row"><h4>{e.title}</h4><span className="cv-entry-date">{e.date}</span></div>
                <div className="cv-entry-sub">{e.flag} {e.title.includes('Zeromax') ? 'USA' : 'Uzbekistan'}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75 }}>{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="cv-sec">
            <h3 className="cv-sec-title">{t('edu_title')}</h3>
            <div className="cv-entry">
              <div className="cv-entry-row"><h4>DevOps Course</h4><span className="cv-entry-date">2022</span></div>
              <div className="cv-entry-sub">Uacademy</div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-row"><h4>Fullstack Python</h4><span className="cv-entry-date">2021</span></div>
              <div className="cv-entry-sub">Bobir Akilkhanov Academy</div>
            </div>
          </div>

          <div className="cv-sec">
            <h3 className="cv-sec-title">{t('skills_title')}</h3>
            <div className="cv-skills-grid">
              <div className="cv-skill-group"><h5>{t('cv_cloud')}</h5><p>AWS, Selectel, DigitalOcean, DBaaS</p></div>
              <div className="cv-skill-group"><h5>{t('cv_containers')}</h5><p>Docker, Compose, Kubernetes</p></div>
              <div className="cv-skill-group"><h5>{t('cv_cicd')}</h5><p>GitHub Actions, GitLab CI, Ansible, Terraform</p></div>
              <div className="cv-skill-group"><h5>{t('cv_databases')}</h5><p>MySQL, PostgreSQL, Redis</p></div>
              <div className="cv-skill-group"><h5>{t('cv_mon')}</h5><p>Grafana, Prometheus, Zabbix, ELK</p></div>
              <div className="cv-skill-group"><h5>{t('cv_web')}</h5><p>Nginx, SSL/TLS, DNS, Firewall</p></div>
            </div>
          </div>

          <div className="cv-actions">
            <button className="btn-primary" onClick={() => window.print()}>{t('cv_print')}</button>
            <button className="btn-secondary" onClick={() => { setView('portfolio'); window.scrollTo(0, 0); }}>← {t('back')}</button>
          </div>
        </div>
      )}
    </>
  );
}
