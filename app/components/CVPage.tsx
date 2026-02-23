'use client';

import { useApp } from '@/lib/context';

export default function CVPage({ onBack }: { onBack: () => void }) {
  const { t } = useApp();

  return (
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
        <button className="btn-secondary" onClick={onBack}>← {t('back')}</button>
      </div>
    </div>
  );
}
