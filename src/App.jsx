import React, { useState } from 'react';

const regions = ['All regions', 'Kanchipuram', 'Banarasi', 'Ilkal', 'Chanderi'];

const collections = [
  { name: 'Kanchipuram Silk', region: 'Kanchipuram', origin: 'Tamil Nadu', note: 'Temple borders / Pure silk', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85', alt: 'Richly coloured Indian silk saree' },
  { name: 'Banarasi Brocade', region: 'Banarasi', origin: 'Uttar Pradesh', note: 'Woven motifs / Fine zari', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85', alt: 'Handwoven patterned Indian textile' },
  { name: 'Ilkal Cotton-Silk', region: 'Ilkal', origin: 'Karnataka', note: 'Distinctive pallu / Everyday heirloom', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e0?auto=format&fit=crop&w=900&q=85', alt: 'Handloom fabric in warm natural colours' },
  { name: 'Chanderi Tissue', region: 'Chanderi', origin: 'Madhya Pradesh', note: 'Airy texture / Subtle sheen', image: 'https://images.unsplash.com/photo-1610189012906-4c9c8f32baf4?auto=format&fit=crop&w=900&q=85', alt: 'Lightweight handwoven Indian fabric' },
];

const products = [
  { name: 'Saanjh Kanjeevaram', type: 'Handwoven silk saree', price: '₹18,500', colours: ['#8b2635', '#d4a748', '#244c43'], image: collections[0].image },
  { name: 'Gulab Banarasi', type: 'Silk zari saree', price: '₹14,200', colours: ['#9c3d45', '#b68a56', '#273c59'], image: collections[1].image },
  { name: 'Neer Ilkal', type: 'Cotton-silk saree', price: '₹8,900', colours: ['#536c58', '#bd653d', '#6f5378'], image: collections[2].image },
];

const craftSteps = [
  ['01', 'The thread', 'Natural fibres are chosen, prepared, and dyed in colours drawn from the landscape.'],
  ['02', 'The loom', 'Warp and weft meet, guided by a weaver who knows the rhythm by heart.'],
  ['03', 'The motif', 'A border or buti takes shape, carrying patterns passed between generations.'],
  ['04', 'The heirloom', 'The finished textile is checked, folded, and ready to become part of your story.'],
];

const weavers = [
  { name: 'Lakshmi Amma', place: 'Kanchipuram, Tamil Nadu', craft: 'Silk weaving / 32 years', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85' },
  { name: 'Abdul Rahman', place: 'Varanasi, Uttar Pradesh', craft: 'Brocade weaving / 26 years', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85' },
  { name: 'Savitri Hugar', place: 'Ilkal, Karnataka', craft: 'Cotton-silk weaving / 19 years', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85' },
];

function App() {
  const [activeRegion, setActiveRegion] = useState('All regions');
  const visibleCollections = activeRegion === 'All regions'
    ? collections.slice(0, 3)
    : collections.filter((item) => item.region === activeRegion);

  return (
    <>
      <div className="announcement">A little piece of India, woven by hand <span aria-hidden="true">*</span></div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Heritage Handlooms home">
          <span className="wordmark-icon">h<span>h</span></span><span>HERITAGE<br />HANDLOOMS</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#collection">Collections</a><a href="#regions">By region</a><a href="#craft">The craft</a><a href="#weavers">Weavers</a>
        </nav>
        <a className="header-link" href="#products">Shop <span aria-hidden="true">&#8599;</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> MADE SLOW, WORN FOREVER</p>
            <h1>Every thread<br />holds a <em>story.</em></h1>
            <p className="hero-description">Meet India's handloom heritage: beautiful sarees, thoughtful fabrics, and the hands that bring them to life.</p>
            <a className="button button-dark" href="#collection">Explore the collection <span>&#8599;</span></a>
            <div className="hero-caption"><span className="caption-line" /> Woven by hand in India</div>
          </div>
          <div className="hero-art" role="img" aria-label="A woman wearing a traditional Indian handloom saree">
            <div className="hero-image" />
            <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=90" aria-hidden="true" tabIndex="-1">
              <source src="/videos/hero-weaving.mp4" type="video/mp4" />
            </video>
            <div className="hero-stamp"><span>*</span><small>ROOTED IN<br />TRADITION</small></div><div className="hero-note">A living craft, carried forward.</div>
          </div>
          <span className="hero-index">01 / 03</span>
        </section>

        <section className="intro-strip" aria-label="Our values"><span>CRAFTED BY HAND</span><i>*</i><span>ROOTED IN PLACE</span><i>*</i><span>MADE TO BE KEPT</span></section>

        <section className="collection section-wrap" id="collection">
          <div className="section-heading"><div><p className="eyebrow">A TAPESTRY OF TRADITIONS</p><h2>Find your <em>forever</em> weave.</h2></div><a className="text-link" href="#products">Shop all pieces <span>&#8599;</span></a></div>
          <div className="collection-feature-row"><span>CURATED COLLECTIONS</span><span>New arrivals / Best loved / Everyday heirlooms</span></div>
          <div className="region-filters" id="regions" aria-label="Filter collections by region">
            {regions.map((region) => <button aria-pressed={activeRegion === region} className={activeRegion === region ? 'filter active' : 'filter'} key={region} onClick={() => setActiveRegion(region)} type="button">{region}</button>)}
          </div>
          <div className="collection-grid">
            {visibleCollections.map((item, index) => (
              <article className="collection-card" key={item.name}>
                <a className="card-image" href="#craft" aria-label={`Discover ${item.name}`}><img src={item.image} alt={item.alt} loading="lazy" /><span className="card-number">0{index + 1}</span><span className="card-arrow">&#8599;</span></a>
                <div className="card-meta"><span>{item.origin}</span><span>{item.note}</span></div><h3>{item.name}</h3>
              </article>
            ))}
          </div>
          <p className="region-note">Every region has its own language of motifs, materials, and methods. Discover the hands and histories behind each weave.</p>
        </section>

        <section className="craft-section" id="craft">
          <div className="craft-heading"><p className="eyebrow">FROM THREAD TO SAREE</p><h2>Every weave begins<br />with <em>a single thread.</em></h2><p>Follow the quiet transformation of fibre into something made to be kept.</p></div>
          <div className="craft-visual"><div className="craft-photo" role="img" aria-label="A handloom weaving threads into cloth" /><span className="craft-seal">THE ART<br />OF THE LOOM</span></div>
          <div className="craft-steps">{craftSteps.map(([number, title, copy]) => <article className="craft-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </section>

        <section className="weavers-section section-wrap" id="weavers">
          <div className="section-heading"><div><p className="eyebrow">THE HANDS BEHIND THE HERITAGE</p><h2>Meet the <em>weavers.</em></h2></div><p className="section-intro">Every textile starts with a person. Meet a few of the artisans carrying these traditions forward.</p></div>
          <div className="weaver-grid">{weavers.map((person) => <article className="weaver-card" key={person.name}><img src={person.image} alt={`Portrait of ${person.name}`} loading="lazy" /><p className="weaver-place">{person.place}</p><h3>{person.name}</h3><p>{person.craft}</p><a href="#about">Meet the artisan <span>&#8599;</span></a></article>)}</div>
        </section>

        <section className="products-section" id="products">
          <div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">A FEW PIECES TO FALL FOR</p><h2>Made for your <em>story.</em></h2></div><a className="text-link" href="#collection">Browse the collection <span>&#8599;</span></a></div>
            <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><a className="product-image" href="#about"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-tag">HANDWOVEN</span></a><div className="product-info"><div><p>{product.type}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div><div className="product-bottom"><div className="swatches" aria-label="Available colours">{product.colours.map((colour) => <span key={colour} style={{ backgroundColor: colour }} />)}<small>+{product.colours.length} colours</small></div><a className="quick-link" href="#contact">View details &#8599;</a></div></article>)}</div>
          </div>
        </section>

        <section className="story" id="about">
          <div className="story-image" role="img" aria-label="Traditional handloom weaving in progress" />
          <div className="story-copy"><p className="eyebrow"><span /> OUR HERITAGE, WOVEN FOR TOMORROW</p><h2>Tradition lives<br />when we <em>wear it.</em></h2><p>We bring together India's regional handloom traditions and the people who keep them alive. Each piece is made slowly, with care for the craft, its makers, and the stories it carries.</p><a className="button button-outline" href="#weavers">Our story <span>&#8599;</span></a></div>
          <span className="story-ornament" aria-hidden="true">*</span>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main"><div className="footer-brand"><a className="wordmark footer-mark" href="#home"><span className="wordmark-icon">h<span>h</span></span><span>HERITAGE<br />HANDLOOMS</span></a><p>Honouring the hands that weave our heritage.</p><a href="mailto:hello@heritagehandlooms.in">hello@heritagehandlooms.in</a></div>
          <div className="footer-column"><h3>Explore</h3><a href="#collection">Collections</a><a href="#regions">Shop by region</a><a href="#products">Featured pieces</a></div>
          <div className="footer-column"><h3>Our world</h3><a href="#about">Our story</a><a href="#craft">The craft</a><a href="#weavers">Meet the weavers</a></div>
          <div className="footer-column"><h3>We're here to help</h3><a href="mailto:hello@heritagehandlooms.in">Contact us</a><a href="#contact">FAQs</a><a href="#contact">Shipping & returns</a></div>
        </div>
        <div className="footer-bottom"><span>&copy; 2026 Heritage Handlooms</span><div><a href="#contact">Instagram</a><a href="#contact">Pinterest</a><a href="#contact">Privacy</a></div><a href="#home">Back to top &#8593;</a></div>
      </footer>
    </>
  );
}

export default App;
