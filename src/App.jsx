import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Hero from './components/Hero.jsx';
import ShopCollections from './ShopCollections.jsx';

function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return undefined;
    }
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="intro-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} aria-hidden="true">
          <motion.span className="loader-mark" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.55, ease: 'easeOut' }}>h<span>h</span></motion.span>
          <span className="loader-name">HERITAGE HANDLOOMS</span>
          <motion.span className="loader-thread" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.65, ease: 'easeInOut' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CraftVisual() {
  const visualRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ['start 0.9', 'end 0.25'] });
  const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(0 48% 0 0)', 'inset(0 0% 0 0)']);

  return (
    <div className="craft-visual" ref={visualRef}>
      <motion.div className="craft-photo" style={reduceMotion ? undefined : { clipPath }} />
      <span className="craft-seal">THE ART<br />OF THE LOOM</span>
    </div>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

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
  return (
    <MotionConfig reducedMotion="user">
    <>
      <IntroLoader />
      <div className="announcement">A little piece of India, woven by hand <span aria-hidden="true">*</span></div>
      <motion.header className="site-header" initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.65, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <a className="wordmark" href="#home" aria-label="Heritage Handlooms home">
          <span className="wordmark-icon">h<span>h</span></span><span>HERITAGE<br />HANDLOOMS</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#collection">Collections</a><a href="#regions">By region</a><a href="#craft">The craft</a><a href="#weavers">Weavers</a>
        </nav>
        <a className="header-link" href="#products">Shop <span aria-hidden="true">&#8599;</span></a>
      </motion.header>

      <main>
        <Hero />

        <motion.section className="intro-strip" aria-label="Our values" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15, duration: 0.7 }}><span>CRAFTED BY HAND</span><i>*</i><span>ROOTED IN PLACE</span><i>*</i><span>MADE TO BE KEPT</span></motion.section>

        <ShopCollections />

        <section className="craft-section" id="craft">
          <Reveal className="craft-heading"><p className="eyebrow">FROM THREAD TO SAREE</p><h2>Every weave begins<br />with <em>a single thread.</em></h2><p>Follow the quiet transformation of fibre into something made to be kept.</p></Reveal>
          <CraftVisual />
          <div className="craft-steps">{craftSteps.map(([number, title, copy], index) => <motion.article className="craft-step" key={number} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: index * 0.12 }}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></motion.article>)}</div>
        </section>

        <section className="weavers-section section-wrap" id="weavers">
          <Reveal className="section-heading"><div><p className="eyebrow">THE HANDS BEHIND THE HERITAGE</p><h2>Meet the <em>weavers.</em></h2></div><p className="section-intro">Every textile starts with a person. Meet a few of the artisans carrying these traditions forward.</p></Reveal>
          <div className="weaver-grid">{weavers.map((person, index) => <motion.article className="weaver-card" key={person.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -4 }}><img src={person.image} alt={`Portrait of ${person.name}`} loading="lazy" /><p className="weaver-place">{person.place}</p><h3>{person.name}</h3><p>{person.craft}</p><a href="#about">Meet the artisan <span>&#8599;</span></a></motion.article>)}</div>
        </section>

        <section className="products-section" id="products">
          <div className="section-wrap"><Reveal className="section-heading"><div><p className="eyebrow">A FEW PIECES TO FALL FOR</p><h2>Made for your <em>story.</em></h2></div><a className="text-link" href="#collection">Browse the collection <span>&#8599;</span></a></Reveal>
            <div className="product-grid">{products.map((product, index) => <motion.article className="product-card" key={product.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -4 }}><a className="product-image" href="#about"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-tag">HANDWOVEN</span></a><div className="product-info"><div><p>{product.type}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div><div className="product-bottom"><div className="swatches" aria-label="Available colours">{product.colours.map((colour) => <span key={colour} style={{ backgroundColor: colour }} />)}<small>+{product.colours.length} colours</small></div><a className="quick-link" href="#contact">View details &#8599;</a></div></motion.article>)}</div>
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
    </MotionConfig>
  );
}

export default App;
