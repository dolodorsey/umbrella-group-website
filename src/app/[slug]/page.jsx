import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pages, pageKeys } from '../../lib/pages';
import styles from './page.module.css';

const experiences = {
  services: ['One request. Coordinated lanes.', 'The operating canopy', [['01','Intake','Define the need, place, timing, risk, and decision-maker.'],['02','Route','Match the request to the right vertical and accountable lead.'],['03','Coordinate','Align providers, communication, scope, schedule, and escalation.'],['04','Close','Confirm completion, exceptions, documentation, and the next action.']]],
  auto: ['Vehicle support pathway', 'From interruption to movement', [['01','Stabilize','Safety, towing, temporary mobility, and immediate documentation.'],['02','Evaluate','Vehicle condition, service route, coverage, timing, and constraints.'],['03','Coordinate','Repair, sourcing, detailing, fleet, dealer, or replacement partners.'],['04','Return','Quality check, handoff, recurring service, and follow-up.']]],
  injury: ['Independent-resource pathway', 'Clarity before promises', [['01','Listen','Capture only the minimum information required to route the request.'],['02','Protect','Explain privacy limits, urgency, and what the intake does not establish.'],['03','Connect','Offer appropriate independent legal, medical, transport, or repair pathways.'],['04','Confirm','Verify that the handoff occurred without implying a professional outcome.']]],
  realty: ['Decision framework', 'The property move in front of you', [['01','Occupy','Define use, geography, timing, budget, access, and representation.'],['02','Acquire','Organize criteria, diligence, economics, partners, and decision gates.'],['03','Operate','Structure vendors, tenants, turns, inspections, reporting, and escalation.'],['04','Exit','Clarify position, preparation, timing, stakeholders, and next representation.']]],
  clean: ['Scope before schedule', 'A clean program is measurable', [['01','Space','Type, area, access, surfaces, occupancy, hazards, and exclusions.'],['02','Standard','Tasks, frequency, products, equipment, documentation, and acceptance.'],['03','People','Crew requirements, supervision, credentials, uniforms, and communication.'],['04','Control','Inspection, exception reporting, correction windows, and renewal review.']]],
  about: ['The shared operating standard', 'Specialists stay specialized', [['01','Accountability','One named owner for scope, communication, exceptions, and closeout.'],['02','Truth','Live coverage, licenses, pricing, timing, and availability are confirmed—not implied.'],['03','Handoffs','Every transfer includes context, ownership, next action, and response expectation.'],['04','Measurement','Completion is defined before work begins and checked before it closes.']]],
  partners: ['Provider readiness review', 'Capability must be provable', [['01','Credentials','Applicable licenses, insurance, references, and operating history.'],['02','Coverage','Real geography, hours, response windows, capacity, and exclusions.'],['03','Service','Scope, quality controls, communication, escalation, and documentation.'],['04','Economics','Pricing logic, payment terms, procurement needs, and renewal conditions.']]],
  connect: ['Request router', 'Start with the actual need', [['01','Consumer','Service, city, timing, contact, and immediate constraint.'],['02','Business','Locations, frequency, volume, start date, and approver.'],['03','Provider','Category, credentials, coverage, capacity, and references.'],['04','Partner','Audience, contribution, responsibilities, economics, and outcome.']]],
};

function Experience({ slug }) {
  const [label, title, items] = experiences[slug];
  return <section className={`${styles.experience} ${styles[`experience_${slug}`] || ''}`}>
    <div><small>{label}</small><h2>{title}</h2></div>
    <ol>{items.map(([number, heading, body]) => <li key={heading}><b>{number}</b><h3>{heading}</h3><p>{body}</p></li>)}</ol>
    {slug === 'connect' && <Link className={styles.routeAction} href="/forms">Choose a structured request <span>↗</span></Link>}
  </section>;
}

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

      <Experience slug={params.slug} />

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
