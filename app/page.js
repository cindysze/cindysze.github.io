// ---------- edit your content here ----------
const writing = [
  // label: "UCSD Guardian", "Essay", or "Notes"
  { title: "Hot Ones Got Hotter. Guests Stopped Quitting.", label: "Essay", date: "October 2026", href: "/hot-ones.html" },
  { title: "Jane Doe, we are with you", label: "UCSD Guardian", date: "October 2026", href: "/jane-doe.html" },
  { title: "Space is progress, not escapism", label: "UCSD Guardian", date: "April 2026", href: "/space.html" },
  { title: "The First Time Machines Took Our Jobs", label: "Notes", date: "March 2026", href: "/machines.html" },
  { title: "[Guardian opinion piece title]", label: "UCSD Guardian", date: "[Month Year]", href: "#" },
];

const publications = [
  {
    title: "ScaleSurfer: multi-scale anatomical segmentation and parcellation of the human brain",
    authors: ["Ryan Hammonds", "Cindy Chen", "Bradley Voytek"],
    venue: "bioRxiv preprint, 2026",
    href: "https://www.biorxiv.org/content/10.64898/2026.07.01.735927v1.full",
  },
];

const projects = [
  { name: "Hot Ones by the Numbers", desc: "an interactive data story on 21 seasons of the spicy-wings talk show", href: "/hot-ones.html" },
  { name: "Job hunter", desc: "a Python tool that finds internship postings and helps me apply faster", href: "#" },
  { name: "Sandal stock checker", desc: "tells me when my size of Rainbow sandals is back in stock", href: "#" },
];

const links = [
  { name: "Email", href: "mailto:cyc014@ucsd.edu" },
  { name: "GitHub", href: "https://github.com/cindysze" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/cindychen65/" },
  { name: "Resume", href: "/resume.pdf" },
];
// ---------------------------------------------

export default function Home() {
  return (
    <div className="home">
      <div className="content">
      <header className="header">
        <div className="name-row">
          <h1 className="name">Cindy Chen</h1>
          <a className="mail" href="mailto:cyc014@ucsd.edu" aria-label="Email Cindy" title="cyc014@ucsd.edu">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
            </svg>
          </a>
        </div>
        <div className="rule" />
        <div className="bio">
          <p>
            I'm a third-year at UC San Diego studying data science and political science, and I love working on
            problems that sit somewhere between people and technology.
          </p>
          <p>
            This fall, I'm interning with the U.S. Department of Defense through Innovating for
            National Security, where I research how drone operators work with autonomous drones for
            the Army. I'm also a research assistant at the{" "}
            <a href="https://voyteklab.com/">Voytek Lab</a>, helping validate a brain MRI segmentation
            pipeline (<a href="https://www.biorxiv.org/content/10.64898/2026.07.01.735927v1.full">preprint</a>), and I work remotely with Dr. Sophia Simeng Han at Stanford Law School on a
            benchmark that tests how well AI models reason through legal decisions.
          </p>
          <p>
            On campus, I coordinate the creative sections at the{" "}
            <a href="https://ucsdguardian.org/">UCSD Guardian</a>, which means I get to work with some
            wonderfully talented people, and I write opinion pieces there too. Outside of school, you'll
            find me playing chess or guitar, <a href="/film">shooting film</a>, or surfing some very modest
            waves.
          </p>
          <p className="currently">Currently looking for Summer 2027 internships.</p>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">writing</h2>
        <ul className="list">
          {writing.map((post, i) => (
            <li key={i}>
              <span className="item">
                <span className="bullet" aria-hidden="true" />
                <a href={post.href}>{post.title}</a>
              </span>
              <span className="date">{post.label} · {post.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">publications</h2>
        <ul className="list">
          {publications.map((pub) => (
            <li key={pub.title}>
              <span className="item">
                <span className="bullet" aria-hidden="true" />
                <span className="pub">
                  <a href={pub.href}>{pub.title}</a>
                  <span className="date">
                    {pub.authors.map((name, i) => (
                      <span key={name}>
                        {i > 0 && ", "}
                        {name === "Cindy Chen" ? <span className="me">{name}</span> : name}
                      </span>
                    ))}
                    {" · "}
                    {pub.venue}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">projects</h2>
        <ul className="list">
          {projects.map((p) => (
            <li key={p.name}>
              <span className="item">
                <span className="bullet" aria-hidden="true" />
                <span>
                  <a href={p.href}>{p.name}</a>
                  <span className="desc">, {p.desc}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <div className="footer-links">
          {links.map((l) => (
            <a href={l.href} key={l.name}>{l.name}</a>
          ))}
        </div>
        <span className="place">San Diego</span>
      </footer>
      </div>

      <figure className="photo">
        <img src="/tahoe.jpg" alt="Cindy looking out over Emerald Bay at Lake Tahoe at dusk, shot on film" />
        <figcaption>Emerald Bay, Lake Tahoe. 2025.</figcaption>
      </figure>
    </div>
  );
}