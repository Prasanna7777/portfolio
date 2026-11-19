import { research } from "../data";

export default function Research() {
  const t = research.thesis;
  return (
    <section className="wrap" id="research">
      <h2>Research</h2>
      <p>{research.intro}</p>

      <article className="card">
        <h3>
          Thesis: {t.title}
        </h3>
        <p className="muted">
          {t.where} · {t.advisor} · {t.dates} · {t.status}
        </p>
        <p>{t.text}</p>
      </article>

      <h3 className="subhead">Publications</h3>
      <p className="muted">{research.papersIntro}</p>
      <div className="grid">
        {research.papers.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="tech">{p.venue}</p>
            <p>{p.text}</p>
            {p.href && (
              <p className="links">
                <a href={p.href}>Read the paper</a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}