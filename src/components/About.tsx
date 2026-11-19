import { profile } from "../data";

export default function About() {
  return (
    <section className="wrap" id="about">
      <h2>About</h2>
      {profile.about.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </section>
  );
}