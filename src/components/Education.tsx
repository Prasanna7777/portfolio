import { education } from "../data";

export default function Education() {
  return (
    <section className="wrap" id="education">
      <h2>Education</h2>
      <div className="grid">
        {education.degrees.map((d) => (
          <article className="card" key={d.degree}>
            <h3>{d.degree}</h3>
            <p>{d.school}</p>
            <p className="tech">
              {d.year} · {d.score}
            </p>
          </article>
        ))}
      </div>

      <ul className="achievements">
        {education.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <h3 className="subhead">{education.coursesLabel}</h3>
      <ul className="chips" aria-label={education.coursesLabel}>
        {education.courses.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}