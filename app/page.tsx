'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Star, Award, AlertTriangle, BookOpen, ShieldCheck, Zap, Gift } from 'lucide-react';

export default function BookLaunchLanding() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiesLeft, setCopiesLeft] = useState(500);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setCopiesLeft(prev => prev - 1);
      setTimeout(() => {
        alert("✅ Your early-bird copy has been reserved! You will be contacted shortly with payment details.");
        setEmail('');
        setIsSubmitted(false);
      }, 900);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-dim: rgba(201,168,76,0.15);
          --ink: #0E0C09;
          --paper: #FAF7F2;
          --paper-dark: #F0EBE1;
          --text: #1A1714;
          --muted: #7A7060;
          --red: #C0392B;
          --green: #1E6845;
        }

        body { background: var(--paper); color: var(--text); }

        .landing { font-family: 'DM Sans', sans-serif; background: var(--paper); }

        /* ---- SCARCITY BAR ---- */
        .scarcity-bar {
          background: var(--red);
          color: #fff;
          text-align: center;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ---- NAV ---- */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background 0.3s, box-shadow 0.3s;
          padding: 0;
        }
        .nav.scrolled {
          background: rgba(250,247,242,0.97);
          box-shadow: 0 1px 0 rgba(0,0,0,0.08);
          backdrop-filter: blur(8px);
        }
        .nav-inner {
          max-width: 960px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 900;
          color: var(--ink); letter-spacing: -0.02em;
        }
        .nav-logo span { color: var(--gold); }
        .nav-cta {
          background: var(--gold);
          color: var(--ink);
          font-weight: 600; font-size: 14px;
          padding: 10px 22px; border-radius: 4px;
          text-decoration: none; letter-spacing: 0.02em;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: var(--gold-light); }

        /* ---- HERO ---- */
        .hero {
          padding: 120px 24px 80px;
          text-align: center;
          background: var(--ink);
          color: #fff;
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-block;
          border: 1px solid var(--gold);
          color: var(--gold);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          padding: 6px 18px; border-radius: 2px;
          margin-bottom: 32px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 900; line-height: 1.08;
          letter-spacing: -0.02em;
          max-width: 820px; margin: 0 auto 16px;
        }
        .hero h1 .accent { color: var(--gold); }
        .hero-sub {
          font-size: clamp(17px, 2.5vw, 22px);
          color: rgba(255,255,255,0.72);
          max-width: 600px; margin: 0 auto 48px;
          line-height: 1.6; font-weight: 300;
        }
        .hero-cta {
          display: inline-block;
          background: var(--gold);
          color: var(--ink);
          font-weight: 700; font-size: 17px;
          padding: 18px 44px; border-radius: 4px;
          text-decoration: none; letter-spacing: 0.03em;
          transition: transform 0.15s, background 0.2s;
        }
        .hero-cta:hover { background: var(--gold-light); transform: translateY(-2px); }
        .copies-counter {
          margin-top: 20px;
          font-size: 13px; color: rgba(255,255,255,0.45);
          letter-spacing: 0.06em;
        }
        .copies-counter strong { color: #fff; }

        /* ---- SHARED SECTION ---- */
        .section { padding: 80px 24px; }
        .section-inner { max-width: 760px; margin: 0 auto; }
        .section-wide { max-width: 960px; margin: 0 auto; }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 900; line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 40px;
        }

        /* ---- HOOK ---- */
        .hook { background: var(--paper-dark); }
        .hook p {
          font-size: clamp(17px, 2.5vw, 21px);
          line-height: 1.8; color: var(--text);
          margin-bottom: 24px;
        }
        .hook p.emphasis {
          font-size: clamp(19px, 2.8vw, 24px);
          font-weight: 600; color: var(--ink);
          border-left: 3px solid var(--gold);
          padding-left: 20px;
        }

        /* ---- CREDIBILITY ---- */
        .credibility { background: var(--ink); color: #fff; }
        .cred-inner {
          display: flex; gap: 32px; align-items: flex-start;
          max-width: 760px; margin: 0 auto;
        }
        .cred-icon {
          width: 64px; height: 64px;
          background: var(--gold-dim);
          border: 1px solid var(--gold);
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cred-text { font-size: 18px; line-height: 1.75; color: rgba(255,255,255,0.82); }
        .cred-text strong { color: var(--gold); }

        /* ---- PAIN ---- */
        .pain { background: var(--paper); }
        .pain-list { list-style: none; display: flex; flex-direction: column; gap: 20px; }
        .pain-item {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 20px 24px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-left: 3px solid var(--red);
          border-radius: 4px;
          font-size: 17px; line-height: 1.6;
        }
        .pain-item svg { flex-shrink: 0; color: var(--red); margin-top: 2px; }

        /* ---- SOLUTION ---- */
        .solution { background: var(--ink); color: #fff; text-align: center; }
        .solution .section-title { color: #fff; }
        .book-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 3.5vw, 32px);
          color: var(--gold); font-weight: 700;
          font-style: italic; line-height: 1.35;
          margin-bottom: 24px;
        }
        .solution p {
          font-size: 18px; color: rgba(255,255,255,0.72);
          max-width: 560px; margin: 0 auto; line-height: 1.7;
        }

        /* ---- BENEFITS ---- */
        .benefits { background: var(--paper-dark); }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .benefit-item {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 20px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 4px;
          font-size: 16px; line-height: 1.65;
        }
        .benefit-item svg { flex-shrink: 0; color: var(--gold); margin-top: 3px; }

        /* ---- TESTIMONIAL ---- */
        .testimonial { background: var(--ink); color: #fff; text-align: center; }
        .stars { display: flex; justify-content: center; gap: 4px; margin-bottom: 24px; }
        .star { color: var(--gold); font-size: 22px; }
        .quote {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px, 2.8vw, 24px);
          font-style: italic; line-height: 1.65;
          color: rgba(255,255,255,0.88);
          max-width: 620px; margin: 0 auto 24px;
        }
        .quote-author { color: var(--gold); font-weight: 600; font-size: 15px; letter-spacing: 0.05em; }

        /* ---- BONUSES ---- */
        .bonuses { background: var(--paper); }
        .bonuses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .bonus-card {
          background: var(--ink); color: #fff;
          border-radius: 6px;
          padding: 32px 24px;
          border-top: 3px solid var(--gold);
          text-align: center;
        }
        .bonus-label {
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--gold); font-weight: 600; margin-bottom: 12px;
        }
        .bonus-title { font-size: 17px; font-weight: 600; line-height: 1.5; }
        .bonus-value { margin-top: 10px; font-size: 13px; color: rgba(255,255,255,0.4); }

        /* ---- GUARANTEE ---- */
        .guarantee { background: var(--paper-dark); }
        .guarantee-box {
          max-width: 640px; margin: 0 auto;
          border: 2px solid var(--green);
          border-radius: 6px; padding: 48px 40px; text-align: center;
          background: #fff;
        }
        .guarantee-box .g-icon {
          width: 56px; height: 56px; border-radius: 50%;
          background: rgba(30,104,69,0.08);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }
        .guarantee-box h3 {
          font-family: 'Playfair Display', serif;
          font-size: 26px; font-weight: 900; margin-bottom: 16px;
        }
        .guarantee-box p { font-size: 17px; line-height: 1.75; color: var(--muted); }

        /* ---- ORDER SECTION ---- */
        .order-section { background: var(--ink); color: #fff; }
        .order-box {
          max-width: 640px; margin: 0 auto;
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 8px; padding: 56px 40px; text-align: center;
          background: rgba(201,168,76,0.04);
        }
        .scarcity-tag {
          display: inline-block;
          background: rgba(192,57,43,0.15);
          border: 1px solid rgba(192,57,43,0.4);
          color: #e07067;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 6px 16px; border-radius: 2px;
          margin-bottom: 28px;
        }
        .order-box h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 900; line-height: 1.15;
          margin-bottom: 32px;
        }
        .price-block { margin-bottom: 8px; }
        .price-main {
          font-size: 48px; font-weight: 800;
          color: var(--gold); line-height: 1;
        }
        .price-crossed {
          font-size: 20px; color: rgba(255,255,255,0.28);
          text-decoration: line-through; margin-top: 6px;
        }
        .price-note {
          font-size: 14px; color: rgba(255,255,255,0.45);
          margin-bottom: 32px; margin-top: 4px;
        }
        .order-form { display: flex; flex-direction: column; gap: 14px; margin-top: 32px; }
        .order-input {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 4px;
          padding: 16px 20px;
          color: #fff;
          font-size: 16px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        .order-input:focus { border-color: var(--gold); }
        .order-input::placeholder { color: rgba(255,255,255,0.3); }
        .order-btn {
          width: 100%;
          background: var(--gold);
          color: var(--ink);
          font-weight: 700; font-size: 18px;
          padding: 20px 32px; border-radius: 4px;
          border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.03em;
          transition: background 0.2s, transform 0.15s;
        }
        .order-btn:hover:not(:disabled) { background: var(--gold-light); transform: translateY(-2px); }
        .order-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        /* ---- PS ---- */
        .ps-section {
          background: var(--paper-dark);
          padding: 64px 24px;
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .ps-inner {
          max-width: 640px; margin: 0 auto; text-align: center;
        }
        .ps-inner p {
          font-family: 'Playfair Display', serif;
          font-size: clamp(17px, 2.5vw, 21px);
          font-style: italic; line-height: 1.8;
          color: var(--muted);
        }
        .ps-inner p strong { color: var(--ink); font-style: normal; }

        /* ---- FOOTER ---- */
        .footer {
          background: var(--ink); color: rgba(255,255,255,0.25);
          text-align: center; padding: 28px 24px;
          font-size: 13px; letter-spacing: 0.04em;
        }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 600px) {
          .cred-inner { flex-direction: column; }
          .order-box, .guarantee-box { padding: 32px 20px; }
        }
      `}</style>

      <div className="landing">
        {/* SCARCITY BAR */}
        <div className="scarcity-bar">
          Launching April 28, 2026 — Only {copiesLeft} copies at early bird price
        </div>

        {/* NAV */}
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-inner">
            <div className="nav-logo">WEALTH<span>CODE</span></div>
            <a href="#order" className="nav-cta">Reserve Your Copy</a>
          </div>
        </nav>

        {/* ─── 1. HEADLINE ─── */}
        <section className="hero">
          <div className="hero-badge">Official Launch — April 28, 2026</div>
          <h1>
            How To Build A Highly Profitable Business In Nigeria{' '}
            <span className="accent">Even If You Have Little Or No Money Right Now</span>
          </h1>
          <p className="hero-sub">
            The proven, no-fluff blueprint that turns ordinary Nigerians into successful business owners — guaranteed.
          </p>
          <a href="#order" className="hero-cta">Yes, I Want My Early-Bird Copy →</a>
          <p className="copies-counter">
            <strong>{copiesLeft}</strong> early-bird copies remaining at this price
          </p>
        </section>

        {/* ─── 2. OPENING HOOK ─── */}
        <section className="section hook">
          <div className="section-inner">
            <p>Let me start this letter by asking you a very important question…</p>
            <p>
              Would you like to start your own highly profitable business in Nigeria that will make you millions within 6 months — starting with as little as ₦50,000 or even less?
            </p>
            <p>
              Are you tired of your salary finishing before the month ends? Tired of watching your business ideas die because you don't know exactly how to execute them? Tired of seeing others around you build wealth while you stay stuck in the same spot?
            </p>
            <p className="emphasis">
              If you answered "Yes" to any of those questions, this is the most important page you will read this year. Read every word carefully. It could change your life.
            </p>
          </div>
        </section>

        {/* ─── 3. CREDIBILITY ─── */}
        <section className="section credibility">
          <div className="cred-inner">
            <div className="cred-icon">
              <Award size={28} color="#C9A84C" />
            </div>
            <p className="cred-text">
              My name is <strong>[Your Full Name]</strong>. I started with nothing. No connections, no big capital, no godfather. Everything I know about building profitable businesses in Nigeria, I learned through years of painful trial and error. I have used these exact principles to build multiple businesses that have generated{' '}
              <strong>hundreds of millions of Naira</strong>. Now, for the first time, I have packed everything into one powerful book — written specifically for you.
            </p>
          </div>
        </section>

        {/* ─── 4. PAIN / PROBLEM ─── */}
        <section className="section pain">
          <div className="section-wide">
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              The Silent Pain Most Nigerians Are Living With Every Day
            </h2>
            <ul className="pain-list">
              {[
                "Your salary is no longer enough. Inflation is swallowing every kobo before the month ends.",
                "You have great business ideas but you don't know exactly how to start — so you never do.",
                "You have jumped from one failed business to another because nobody ever showed you the correct path.",
                "Every month that passes, smart people around you are quietly building real wealth while you watch.",
                "You keep depending on your monthly pay or family support, hoping something will change — but it never does."
              ].map((pain, i) => (
                <li key={i} className="pain-item">
                  <AlertTriangle size={20} />
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── 5. SOLUTION / PRODUCT INTRODUCTION ─── */}
        <section className="section solution">
          <div className="section-inner" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Here Is The Solution I Have For You</h2>
            <p className="book-title">
              "Wealth Code: How To Build A Highly Profitable Business In Nigeria Even If You Have Little Or No Money"
            </p>
            <p>
              This is not theory. This is not motivation talk. This is the complete, step-by-step blueprint — proven in Nigeria's economy — that will show you exactly how to start, build, and grow a business that makes you serious money.
            </p>
          </div>
        </section>

        {/* ─── 6. BENEFITS ─── */}
        <section className="section benefits">
          <div className="section-wide">
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              What You Will Discover Inside This Book
            </h2>
            <div className="benefits-grid">
              {[
                "How to choose the right business idea that matches your skills and current capital — before you spend a single kobo",
                "The number one mistake 95% of new business owners make that kills their dreams before the first year ends",
                "How to start a profitable business with as little as ₦30,000 – ₦100,000 and grow it from there",
                "Simple, proven ways to get your first paying customers without spending heavily on adverts",
                "The exact pricing formula that makes customers pay what you charge — even when your price is higher than competitors",
                "How to run a growing business successfully while still keeping your 9–5 job without burning out",
                "How to use WhatsApp, Instagram and Facebook to sell to hundreds of customers every week for almost nothing",
                "Step-by-step guide to scaling your business from small daily income to multiple millions in revenue",
                "Why lowering your prices is one of the most terrible things you can do — and what to do instead",
                "How to protect your business from the common failures that destroy 80% of new Nigerian businesses in the first year",
                "The marketing lessons that work perfectly in Nigeria — adapted from the world's greatest business builders",
                "And many more practical, no-fluff strategies you can start applying the same day you read them"
              ].map((b, i) => (
                <div key={i} className="benefit-item">
                  <CheckCircle size={20} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. PROOF / TESTIMONIAL ─── */}
        <section className="section testimonial">
          <div className="section-inner">
            <div className="stars">
              {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
            </div>
            <p className="quote">
              "This book is different from anything I have read. I used one strategy from it to start my small provision store with ₦120,000. Today I supply to over 12 offices and estates. I wish I had this book 5 years ago. God bless the author."
            </p>
            <p className="quote-author">— Chukwudi Eze, Lagos Island</p>
          </div>
        </section>

        {/* ─── 8. BONUSES ─── */}
        <section className="section bonuses">
          <div className="section-wide">
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Special Launch Bonuses — Only For Early Buyers
            </h2>
            <div className="bonuses-grid">
              {[
                { label: "Bonus 1", title: "Free Audio Summary of the entire book", value: "Value: ₦5,000" },
                { label: "Bonus 2", title: "3 Months Access to Private Readers WhatsApp Community", value: "Value: ₦8,000" },
                { label: "Bonus 3", title: "Live Q&A Call with the Author to answer your personal business questions", value: "Value: ₦15,000" },
              ].map((bonus, i) => (
                <div key={i} className="bonus-card">
                  <p className="bonus-label">{bonus.label}</p>
                  <p className="bonus-title">{bonus.title}</p>
                  <p className="bonus-value">{bonus.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. GUARANTEE ─── */}
        <section className="section guarantee">
          <div className="guarantee-box">
            <div className="g-icon">
              <ShieldCheck size={28} color="#1E6845" />
            </div>
            <h3>My Personal 30-Day Money-Back Guarantee</h3>
            <p>
              Read the book for 30 full days. Apply what you learn. If after that you honestly do not believe this book is worth many times what you paid for it — simply return it and I will refund 100% of your money. No questions. No stress. No hassle. The risk is entirely on me, not you.
            </p>
          </div>
        </section>

        {/* ─── 10+11+12. SCARCITY + PRICE + CTA ─── */}
        <section id="order" className="section order-section">
          <div className="order-box">
            <div className="scarcity-tag">Only {copiesLeft} early-bird copies remaining</div>
            <h2>Reserve Your Copy Before The Price Increases</h2>

            <div className="price-block">
              <div className="price-main">₦12,500</div>
              <div className="price-crossed">Regular Price: ₦18,500</div>
            </div>
            <p className="price-note">
              This early-bird price ends the moment the first 500 copies are sold — or on launch day, whichever comes first. Once it is gone, it is gone.
            </p>

            <form className="order-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="order-input"
                placeholder="Enter your email address to reserve your copy"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="order-btn"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Reserving your copy…" : "Yes! Reserve My Early-Bird Copy Now →"}
              </button>
            </form>
          </div>
        </section>

        {/* ─── 13. P.S. ─── */}
        <section className="ps-section">
          <div className="ps-inner">
            <p>
              <strong>P.S.</strong> If you keep doing what you have always done, you will keep getting what you have always got. The Nigerians who will build serious wealth in the coming years are the ones who act when the right opportunity is placed in front of them. Don't wait until the early copies are sold out and the price goes up. Reserve your copy today — before it is too late.
            </p>
          </div>
        </section>

        <footer className="footer">
          © 2026 Wealth Code · Written to help every Nigerian build a real, profitable business
        </footer>
      </div>
    </>
  );
}