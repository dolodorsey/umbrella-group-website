import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pages, pageKeys } from '../../lib/pages';
import styles from './page.module.css';

export function generateStaticParams() {
  return pageKeys.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = pages[params.slug];
  return page ? {
    title: `${page.title} — The Umbrella Group`,
    description: page.intro,
  } : {};
}

export default function DetailPage({ params }) {
  const page = pages[params.slug];
  if (!page) notFound();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <img src="/brand/umbrella-logo.png" alt="The Umbrella Group" />
        </Link>
        <nav>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/connect">Connect</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <p>{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <span>{page.intro}</span>
        <div>
          <a href="mailto:thedoctordorsey@gmail.com?subject=Umbrella Group Inquiry">Start an inquiry</a>
          {page.secondary ? <a href={page.secondary[1]}>{page.secondary[0]}</a> : <Link href="/services">Explore services</Link>}
        </div>
      </section>

      <section className={styles.grid}>
        {page.sections.map(([title, body], index) => (
          <article key={title}>
            <small>{String(index + 1).padStart(2, '0')}</small>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className={styles.paths}>
        <p>Choose a service path</p>
        <div>
          {[['Auto Exchange', '/auto'], ['Injury Network', '/injury'], ['Realty Group', '/realty'], ['Clean Services', '/clean']].map(([label, href]) =>
            <Link key={href} href={href}>{label}<span>↗</span></Link>
          )}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Put the right team under it.</h2>
        <p>Describe the need, location, timing, and decision-maker. We will route it to the right operating path.</p>
        <a href="mailto:thedoctordorsey@gmail.com?subject=Umbrella Group Inquiry">Email Umbrella Group</a>
      </section>

      <footer>
        <img src="/brand/umbrella-logo.png" alt="" />
        <span>© 2026 The Umbrella Group · A Kollective Hospitality Group company</span>
      </footer>
    </main>
  );
}
