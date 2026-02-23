import type { Metadata } from 'next';
import { Sora, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { AppProvider } from '@/lib/context';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ismoil Mirabbosov — DevOps Engineer | mirabbosoff.uz',
  description: 'Ismoil Mirabbosov — DevOps Engineer with 4+ years of experience. Cloud infrastructure (AWS, Selectel), CI/CD (GitHub Actions, GitLab CI), Docker, Kubernetes, Ansible, Terraform. Based in Tashkent, Uzbekistan.',
  keywords: [
    'Ismoil Mirabbosov', 'Ismoil Mirabbosoff', 'ismoil mirabbosov', 'ismoil mirabbosoff',
    'Исмоил Мираббосов', 'Исмоил Мираббосoff',
    'DevOps Engineer', 'DevOps Engineer Uzbekistan', 'DevOps Engineer Tashkent',
    'DevOps Tashkent', 'DevOps O\'zbekiston',
    'mirabbosoff', 'mirabbosov', 'mirabbosoff.uz',
    'cloud infrastructure', 'CI/CD pipelines', 'Docker', 'Kubernetes',
    'Ansible', 'Terraform', 'AWS', 'Selectel', 'DigitalOcean',
    'GitHub Actions', 'GitLab CI', 'Grafana', 'Prometheus', 'Nginx',
    'production infrastructure', 'DevOps portfolio',
  ],
  metadataBase: new URL('https://mirabbosoff.uz'),
  alternates: { canonical: 'https://mirabbosoff.uz' },
  authors: [{ name: 'Ismoil Mirabbosov', url: 'https://mirabbosoff.uz' }],
  creator: 'Ismoil Mirabbosov',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  openGraph: {
    type: 'profile',
    title: 'Ismoil Mirabbosov — DevOps Engineer',
    description: 'DevOps Engineer with 4+ years of experience in cloud infrastructure, CI/CD pipelines, and production systems. Based in Tashkent, Uzbekistan.',
    url: 'https://mirabbosoff.uz',
    siteName: 'mirabbosoff.uz',
    firstName: 'Ismoil',
    lastName: 'Mirabbosov',
    username: 'ismoillmirabbosoff',
  },
  twitter: {
    card: 'summary',
    title: 'Ismoil Mirabbosov — DevOps Engineer',
    description: 'DevOps Engineer with 4+ years of experience in cloud infrastructure, CI/CD pipelines, and production systems.',
    creator: '@ismoillmirabbosoff',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://mirabbosoff.uz/#person',
      name: 'Ismoil Mirabbosov',
      alternateName: ['Ismoil Mirabbosoff', 'ismoil mirabbosov', 'Исмоил Мираббосов'],
      url: 'https://mirabbosoff.uz',
      jobTitle: 'DevOps Engineer',
      description: 'DevOps Engineer with 4+ years of experience in cloud infrastructure, CI/CD pipelines, Docker, Kubernetes, and production systems. Based in Tashkent, Uzbekistan.',
      knowsAbout: [
        'DevOps', 'Cloud Infrastructure', 'CI/CD', 'Docker', 'Kubernetes',
        'Ansible', 'Terraform', 'AWS', 'Selectel', 'GitHub Actions',
        'GitLab CI', 'Grafana', 'Prometheus', 'Nginx', 'MySQL', 'PostgreSQL',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tashkent',
        addressCountry: 'UZ',
      },
      sameAs: [
        'https://github.com/ismoillmirabbosoff',
        'https://linkedin.com/in/ismoil-mirabbosoff-a049b8264',
        'https://t.me/aalfaa00',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://mirabbosoff.uz/#website',
      url: 'https://mirabbosoff.uz',
      name: 'Ismoil Mirabbosov — DevOps Engineer',
      description: 'Portfolio of Ismoil Mirabbosov, DevOps Engineer based in Tashkent, Uzbekistan.',
      author: { '@id': 'https://mirabbosoff.uz/#person' },
      inLanguage: ['en', 'ru', 'uz'],
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://mirabbosoff.uz/#profilepage',
      url: 'https://mirabbosoff.uz',
      name: 'Ismoil Mirabbosov — DevOps Engineer Portfolio',
      description: 'Professional portfolio of Ismoil Mirabbosov, DevOps Engineer specializing in cloud infrastructure and CI/CD.',
      mainEntity: { '@id': 'https://mirabbosoff.uz/#person' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mirabbosoff.uz' }],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
