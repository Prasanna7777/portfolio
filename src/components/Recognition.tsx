import { quotes } from "../data";

export default function Recognition() {
  return (
    <section className="wrap" id="recognition">
      <h2>Recognition</h2>
      <p className="muted small">Notes from colleagues at Target, shared without names.</p>
      <div className="grid two">
        {quotes.map((q) => (
          <blockquote className="card quote" key={q.text}>
            <p>"{q.text}"</p>
            <footer>{q.by}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
