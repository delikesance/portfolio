import { PERSON, FEATURED, INDEX, EXPERIENCE, SKILLS, LANGUAGES, type Project } from './data/portfolio';

const NAV = [
  ['travaux', 'Travaux'],
  ['index', 'Index'],
  ['experience', 'Expérience'],
  ['competences', 'Compétences'],
  ['contact', 'Contact'],
];

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3">
        <a href="#top" className="label !text-ink no-underline">
          CLAUINANGELO<span className="text-accent">(1)</span>
        </a>
        <nav aria-label="Sections" className="hidden gap-6 md:flex">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="label no-underline hover:text-accent">
              {label}
            </a>
          ))}
        </nav>
        <nav aria-label="Sections (mobile)" className="flex w-full flex-wrap gap-x-4 md:hidden">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="label inline-block py-1.5 no-underline hover:text-accent">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-28">
      <p className="label reveal">NOM</p>
      <h1 className="display reveal mt-3 text-[clamp(3.4rem,13vw,11rem)]" style={{ animationDelay: '.05s' }}>
        Angelo
        <br />
        Clauin<span className="text-accent">.</span>
      </h1>
      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <div className="reveal md:col-span-7" style={{ animationDelay: '.15s' }}>
          <p className="label">Synopsis</p>
          <p className="mt-3 max-w-xl text-[15px]">{PERSON.intro}</p>
        </div>
        <dl className="reveal grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 self-start md:col-span-5" style={{ animationDelay: '.25s' }}>
          <dt className="label">rôle</dt><dd className="min-w-0 break-words">{PERSON.role}</dd>
          <dt className="label">lieu</dt><dd>{PERSON.location}</dd>
          <dt className="label">statut</dt><dd>{PERSON.status}<span className="caret ml-1" aria-hidden /></dd>
          <dt className="label">liens</dt>
          <dd className="flex flex-wrap gap-x-4">
            <a href={PERSON.cv} download>CV (PDF)</a>
            <a href={PERSON.github} rel="noopener noreferrer" target="_blank">GitHub</a>
            <a href={`mailto:${PERSON.email}`}>E-mail</a>
          </dd>
        </dl>
      </div>
    </section>
  );
}

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-12 flex items-baseline gap-4">
          <span className="label !text-accent">{num}</span>
          <h2 className="display text-4xl md:text-6xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Featured({ p, i }: { p: Project; i: number }) {
  const flip = i % 2 === 1;
  return (
    <article className="grid gap-8 border-t border-rule py-12 first:border-t-0 first:pt-0 md:grid-cols-12">
      <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
        {p.image ? (
          <img src={p.image} alt={p.imageAlt} loading="lazy" className="w-full border border-rule" />
        ) : (
          <div
            aria-hidden
            className="flex aspect-[16/10] items-end border border-rule p-5"
            style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 11px, var(--rule) 11px 12px)' }}
          >
            <span className="display bg-paper pr-3 text-5xl">{p.name}</span>
          </div>
        )}
      </div>
      <div className="md:col-span-5">
        <p className="label">
          {String(i + 1).padStart(2, '0')} · {p.kind} · {p.year}
        </p>
        <h3 className="display mt-2 text-5xl">{p.name}</h3>
        <p className="mt-4 text-[15px]">{p.tagline}</p>
        <ul className="mt-5 space-y-2 text-muted">
          {p.points.map((t) => (
            <li key={t} className="grid grid-cols-[1.2em_1fr]">
              <span className="text-accent">›</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {p.note && <p className="mt-4 text-muted">↳ {p.note}</p>}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
        {p.links && (
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} rel="noopener noreferrer" target="_blank">{l.label} ↗<span className="sr-only"> (nouvel onglet)</span></a>
            ))}
          </p>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Aller au contenu</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />

        <Section id="travaux" num="01" title="Travaux choisis">
          {FEATURED.map((p, i) => (
            <Featured key={p.id} p={p} i={i} />
          ))}
        </Section>

        <Section id="index" num="02" title="Index complet">
          <ul>
            {INDEX.map((e) => (
              <li key={e.name} className="grid gap-x-6 gap-y-1 border-t border-rule py-4 md:grid-cols-12">
                <span className="label md:col-span-1">{e.year}</span>
                <span className="md:col-span-3">
                  {e.href ? <a href={e.href} className="font-semibold" rel="noopener noreferrer" target="_blank">{e.name} ↗<span className="sr-only"> (nouvel onglet)</span></a> : <span className="font-semibold">{e.name}</span>}
                  <span className="label ml-2 md:block">{e.kind}</span>
                </span>
                <span className="text-muted md:col-span-5">{e.what}</span>
                <span className="label md:col-span-3 md:text-right">{e.stack}</span>
              </li>
            ))}
            <li className="border-t border-rule" />
          </ul>
        </Section>

        <Section id="experience" num="03" title="Expérience">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="label">{EXPERIENCE.period}</p>
              <h3 className="display mt-2 text-4xl">{EXPERIENCE.company}</h3>
              <p className="mt-1">{EXPERIENCE.role} · {EXPERIENCE.place}</p>
              <p className="mt-4 text-muted">{EXPERIENCE.summary}</p>
            </div>
            <div className="md:col-span-8">
              <dl>
                {EXPERIENCE.items.map((x) => (
                  <div key={x.k} className="grid gap-x-6 border-t border-rule py-4 md:grid-cols-[10rem_1fr]">
                    <dt className="label">{x.k}</dt>
                    <dd>{x.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {EXPERIENCE.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        </Section>

        <Section id="competences" num="04" title="Compétences">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((g) => (
              <div key={g.title}>
                <p className="label border-b border-rule pb-2">{g.title}</p>
                <ul className="mt-3 space-y-1">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-muted">
            Langues : {LANGUAGES.map((l) => `${l.name} (${l.level})`).join(' · ')}
          </p>
        </Section>

        <Section id="contact" num="05" title="Contact">
          <p className="display max-w-3xl text-3xl md:text-5xl">
            Un projet, une intégration difficile, ou juste envie d’en discuter&nbsp;?
          </p>
          <p className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-base">
            <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
            <a href={PERSON.cv} download>Télécharger le CV</a>
            <a href={PERSON.github} rel="noopener noreferrer" target="_blank">github.com/delikesance</a>
          </p>
        </Section>
      </main>
      <footer className="border-t border-rule">
        <p className="label mx-auto max-w-6xl px-5 py-6">Angelo Clauin · {PERSON.location}</p>
      </footer>
    </>
  );
}
