import { profile } from "../data";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Research", "#research"],
  ["Recognition", "#recognition"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">{profile.shortName}</a>
        <nav aria-label="Main">
          <ul>
            {links.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}