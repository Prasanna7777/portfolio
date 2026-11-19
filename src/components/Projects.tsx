import { projects } from "../data";
import VideoPlayer from "./VideoPlayer";

export default function Projects() {
  return (
    <section className="wrap" id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <p className="tech">{p.tech}</p>
            {p.videos?.map((v) => (
              <VideoPlayer key={v.src ?? v.embed ?? v.caption} video={v} title={`${p.title}: ${v.caption}`} />
            ))}
            <p className="links">
              {p.links.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}