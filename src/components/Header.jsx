import { useState } from 'react';

const links = ['Home', 'About', 'Our Work', 'Products', 'Notices', 'Gallery', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label="Akshaya home">
          <img src="/akshaya-logo.webp" alt="Akshaya logo" />
        </a>
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#join" className="btn btn--primary nav__cta">Join Us</a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
