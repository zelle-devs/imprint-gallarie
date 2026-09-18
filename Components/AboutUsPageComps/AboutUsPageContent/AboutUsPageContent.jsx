import React from 'react'
import './AboutUsPageContent.css'

/* ---------- tiny inline icon set (no extra dependency needed) ---------- */
const ICON_PATHS = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  package: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
      <path d="m3 8 9 5 9-5" />
      <path d="M12 13v8" />
    </>
  ),
  star: <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />,
  heart: (
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </>
  ),
  sliders: (
    <>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r="1" />
      <circle cx="17.5" cy="10.5" r="1" />
      <circle cx="8.5" cy="7.5" r="1" />
      <circle cx="6.5" cy="12.5" r="1" />
      <path d="M12 2a10 10 0 0 0 0 20c1 0 2-.8 2-2 0-.6-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.4 0-1.1.9-2 2-2h2.3A4.7 4.7 0 0 0 22 10.5C22 5.8 17.5 2 12 2z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
}

function Icon({ name, small = false }) {
  return (
    <svg
      className={`icon${small ? ' icon--sm' : ''}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}

/* ---------- placeholder images (swap these URLs later) ---------- */
const IMG = {
  who: './RightSideSmallImageHome.jpg',
  mission: './HomeBottomBannerImage.jpeg',
  vision: './ArtForMoreHome1.png',
  apparel: 'https://picsum.photos/seed/imprint-apparel/500/680',  
}

/* ---------- content ---------- */
const STATS = [
  { icon: 'users', value: '10K+', label: 'Happy Customers' },
  { icon: 'package', value: '250+', label: 'Unique Products' },
  { icon: 'star', value: '4.8/5', label: 'Customer Rating' },
  { icon: 'heart', value: '100%', label: 'Satisfaction Guaranteed' },
]

const FEATURES = [
  {
    icon: 'grid',
    title: 'Wide Product Range',
    text: 'Products designed to fit every need and occasion.',
  },
  {
    icon: 'sliders',
    title: 'Easy Customization',
    text: 'Simple tools to bring your ideas to life.',
  },
  {
    icon: 'shield',
    title: 'Quality You Can Trust',
    text: 'Premium materials, expert printing, and lasting results.',
  },
]

const PILLARS = [
  {
    icon: 'palette',
    title: 'Be Creative',
    text: 'We give you the tools and space to turn your imagination into reality.',
  },
  {
    icon: 'heart',
    title: 'Be Meaningful',
    text: 'Every product is made to carry a message, a memory, or a moment.',
  },
  {
    icon: 'globe',
    title: 'Be Everywhere',
    text: 'From one gift to a full brand rollout, we make it easy to reach people.',
  },
]

const OFFER_CARDS = [
  { label: 'Apparel', img: IMG.apparel }, 
]

const VALUES = [
  {
    icon: 'award',
    title: 'Quality',
    text: 'We use premium materials and careful printing so every piece lasts.',
  },
  {
    icon: 'bulb',
    title: 'Creativity',
    text: 'We help you explore new ideas and make something truly your own.',
  },
  {
    icon: 'shield',
    title: 'Trust',
    text: 'Clear pricing, honest timelines, and support you can rely on.',
  },
  {
    icon: 'leaf',
    title: 'Sustainability',
    text: 'We choose better materials and print on demand to reduce waste.',
  },
]

function AboutUsPageContent() {
  return (
    <main className="about">
      {/* ============ 1. STATS ============ */}
      <section className="about-stats" aria-label="Our numbers">
        <div className="about-container">
          <div className="about-stats__grid">
            {STATS.map((s) => (
              <div className="about-stat" key={s.label}>
                <Icon name={s.icon} />
                <span className="about-stat__value">{s.value}</span>
                <span className="about-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 2. WHO WE ARE ============ */}
      <section className="about-who">
        <div className="about-container about-who__grid">
          <div className="about-who__media">
            <img src={IMG.who} alt="Custom stationery and brand mockups on a desk" />
          </div>

          <div className="about-who__content">
            <span className="about-eyebrow">Who We Are</span>
            <h2 className="about-title">
              Creative People.
              <br />
              <span className="accent">Custom Possibilities.</span>
            </h2>
            <p className="about-text">
              Imprint is a platform where creativity meets quality. We help individuals,
              teams, and businesses turn their ideas into custom products that people
              love to use, wear, and share.
            </p>

            <ul className="about-features">
              {FEATURES.map((f) => (
                <li className="about-feature" key={f.title}>
                  <span className="about-feature__icon">
                    <Icon name={f.icon} />
                  </span>
                  <div>
                    <h3 className="about-feature__title">{f.title}</h3>
                    <p className="about-feature__text">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 3. OUR MISSION ============ */}
      <section
        className="about-mission"
        style={{ backgroundImage: `url(${IMG.mission})` }}
      >
        <div className="about-container about-mission__grid">
          <div>
            <span className="about-eyebrow">Our Mission</span>
            <h2 className="about-title">
              Empowering Ideas Through{' '}
              <span className="accent">Personalization</span>
            </h2>
            <p className="about-text">
              Our mission is to make custom products simple, accessible, and meaningful.
              We believe personalization turns everyday items into something worth
              keeping.
            </p>
            <a href="/products" className="about-btn">
              Meet Custom Products
              <Icon name="arrow" small />
            </a>
          </div>

          <ul className="about-pillars">
            {PILLARS.map((p) => (
              <li className="about-pillar" key={p.title}>
                <span className="about-pillar__icon">
                  <Icon name={p.icon} />
                </span>
                <div>
                  <h3 className="about-pillar__title">{p.title}</h3>
                  <p className="about-pillar__text">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 4. WHAT WE OFFER ============ */}
      <section className="about-offer">
        <div className="about-container about-offer__grid">
          <div>
            <span className="about-eyebrow">What We Offer</span>
            <h2 className="about-title">
              Print. Personalize.
              <br />
              Gift. Promote.
            </h2>
            <p className="about-text">
              Explore a wide range of customizable products, from apparel and drinkware
              to bags and gadgets, all made to carry your ideas.
            </p>
            <a href="/collection" className="about-link">
              Explore Our Collection
              <Icon name="arrow" small />
            </a>
          </div>

          <div className="about-offer__cards">
            <img src="./artformorehomeimage.png" alt="" />
          </div>
        </div>
      </section>

      {/* ============ 5. OUR VISION ============ */}
      <section
        className="about-vision"
        style={{ backgroundImage: `url(${IMG.vision})` }}
      >
        <div className="about-container">
          <div className="about-vision__content">
            <span className="about-eyebrow">Our Vision</span>
            <h2 className="about-title">
              A More <span className="accent">Personal World</span>
            </h2>
            <p className="about-text">
              We imagine a world where everything you own says something about you,
              where personal touches make everyday life a little warmer, more thoughtful,
              and more yours.
            </p>
            <a href="/products" className="about-btn">
              Browse Our Products
              <Icon name="arrow" small />
            </a>
          </div>
        </div>
      </section>

      {/* ============ 6. OUR VALUES ============ */}
      <section className="about-values">
        <div className="about-container">
          <span className="about-eyebrow">Our Values</span>
          <h2 className="about-title">What Drives Us</h2>
          <p className="about-values__sub">
            The principles that guide everything we make and every customer we serve.
          </p>

          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div className="about-value" key={v.title}>
                <span className="about-value__icon">
                  <Icon name={v.icon} />
                </span>
                <h3 className="about-value__title">{v.title}</h3>
                <p className="about-value__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. COMMUNITY CTA ============ */}
      <section className="about-cta">
        <div className="about-container about-cta__inner">
          <div>
            <h3 className="about-cta__title">Join Our Creative Community</h3>
            <p className="about-cta__text">
              Get design ideas, product news, and offers straight to your inbox.
            </p>
          </div>
          <a href="/signup" className="about-btn">
            Join Now
            <Icon name="arrow" small />
          </a>
        </div>
      </section>
    </main>
  )
}

export default AboutUsPageContent