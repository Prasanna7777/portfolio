import { profile } from "../data";

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="eyebrow">{profile.eyebrow}</p>
      <h1>{profile.name}</h1>
      <p className="lead">{profile.lead}</p>
      <p className="actions">
        <a className="btn primary" href="#projects">See my projects</a>
      </p>
    </section>
  );
}
