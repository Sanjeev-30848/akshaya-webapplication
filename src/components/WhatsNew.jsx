const items = [
  { tag: 'Events', color: 'saffron', title: 'Upcoming Events', text: "Akshaya's next community meetup and showcase.", cta: 'Register' },
  { tag: 'News', color: 'blue', title: 'Announcements', text: 'The latest updates from the Akshaya team.' },
  { tag: 'Notice', color: 'green', title: 'Notice Board', text: 'Applications, internships and participation calls.' },
  { tag: 'Look', color: 'magenta', title: 'Gallery', text: 'Moments from our projects, workshops and gatherings.' },
  { tag: 'Create', color: 'saffron', title: 'Events', text: 'Ideas turned into real-world impact.' },
];

export default function WhatsNew() {
  const share = () => {
    if (navigator.share) navigator.share({ title: 'Akshaya', url: window.location.href });
    else navigator.clipboard?.writeText(window.location.href);
  };
  return (
    <section className="news" id="notices" aria-labelledby="news-title">
      <div className="news__head">
        <h2 id="news-title">What's New</h2>
        <button className="news__share" onClick={share}>Share</button>
      </div>
      <div className="news__row">
        {items.map((it) => (
          <a key={it.title} href="#" className="card">
            <span className={`tag tag--${it.color}`}>{it.tag}</span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
            {it.cta && <span className="card__cta">{it.cta} →</span>}
          </a>
        ))}
      </div>
    </section>
  );
}
