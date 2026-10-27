const pillars = [
  ['Creativity', 'saffron'], ['Innovation', 'blue'], ['Collaboration', 'green'], ['Growth', 'magenta'],
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">AKSHAYA</p>
        <h1>Limitless Vision.<br />Infinite Growth.</h1>
        <p>
          Akshaya is a vision-driven organization focused on creativity, innovation, collaboration, and growth.
          It brings people, ideas, and opportunities together to create meaningful experiences, develop impactful
          projects, and build a community where talent can grow.
        </p>
        <p>
          Through creative thinking, digital solutions, strategic planning, and collaborative initiatives,
          Akshaya turns ideas into reality.
        </p>
        <div className="hero__actions">
          <a href="#our-work" className="btn btn--primary">Discover Our Work</a>
          <a href="#join" className="btn btn--ghost">Join the Community</a>
        </div>
        <ul className="pillars">
          {pillars.map(([p, c]) => <li key={p} className={`tag tag--${c}`}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}
