import { experience, reviewForm } from "../data";
import VideoPlayer from "./VideoPlayer";

export default function Experience() {
  return (
    <section className="wrap" id="experience">
      <h2>Experience</h2>
      <article className="card">
        <h3>
          {experience.title} <span className="muted">{experience.dates}</span>
        </h3>

        {experience.teams.map((team) => (
          <div key={team.name}>
            <h4 className="team">
              {team.name} <span className="muted">({team.duration})</span>
            </h4>
            <ul>
              {team.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        <p className="overall">{experience.overall}</p>
      </article>

      <article className="card feature">
        <h3>{reviewForm.title}</h3>
        <p>{reviewForm.text}</p>

        <div className="howto">
          <h4 className="team">See it yourself</h4>
          <p>{reviewForm.viewIntro}</p>
          <p className="links">
            <a href={reviewForm.viewLink.href} target="_blank" rel="noopener noreferrer">
              {reviewForm.viewLink.label} (opens in a new tab)
            </a>
          </p>
          <p className="muted small">{reviewForm.viewNote}</p>
        </div>

        {reviewForm.video && <VideoPlayer video={reviewForm.video} title={reviewForm.title} />}
        <p className="muted small">{reviewForm.note}</p>
      </article>
    </section>
  );
}