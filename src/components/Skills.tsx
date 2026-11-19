import { profile } from "../data";

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <h2>Skills</h2>
      <dl className="skills">
        {profile.skillGroups.map((g) => (
          <div className="skill-group" key={g.label}>
            <dt>{g.label}</dt>
            <dd>
              <ul className="chips" aria-label={g.label}>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}