import { projects } from "../data";
import VideoPlayer from "./VideoPlayer";

export default function Projects() {
  return (
    <section className="wrap" id="projects">
      <h2>Projects</h2>
      <div className="stack">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <p className="tech">{p.tech}</p>
            {p.videos && (
              <div className="videos">
                {p.videos.map((v) => (
                  <VideoPlayer key={v.src ?? v.embed ?? v.caption} video={v} title={`${p.title}: ${v.caption}`} />
                ))}
              </div>
            )}
            <p className="links">
              {p.links.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </p>
            {p.note && <p className="muted small note">{p.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}