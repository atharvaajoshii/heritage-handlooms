import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import './ShopCollections.css';

const collections = [
  {
    title: 'Sarees',
    description: 'Timeless drapes, woven with tradition.',
    action: 'Explore Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Traditional Indian silk saree',
    destination: '#products',
  },
  {
    title: 'Handloom Fabrics',
    description: 'Textures and colours for your own creations.',
    action: 'Explore Fabrics',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Red and gold handloom saree draped on a model',
    destination: '#products',
  },
  {
    title: 'New Arrivals',
    description: 'Discover the latest additions to our collection.',
    action: 'Discover More',
    image: 'https://images.unsplash.com/photo-1610189012906-4c9c8f32baf4?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Intricate handwoven textile pattern',
    fallbackImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    destination: '#products',
  },
];

function ShuttleJourney({ active, reducedMotion, compact }) {
  return (
    <div className="loom-journey" aria-hidden="true">
      {!reducedMotion && !compact && (
        <motion.img
          className="loom-shuttle-image"
          src="/images/handloom-shuttle.png"
          alt=""
          draggable="false"
          initial={{ left: '-55%', opacity: 0 }}
          animate={active ? { left: '100%', opacity: [0, 1, 1, 0] } : { left: '-55%', opacity: 0 }}
          transition={{
            left: { duration: 2.65, ease: 'linear' },
            opacity: { duration: 2.65, times: [0, 0.06, 0.9, 1], ease: 'linear' },
          }}
        />
      )}
    </div>
  );
}

function CollectionCard({ collection, index, active, reducedMotion, compact }) {
  const delay = reducedMotion ? 0 : compact ? index * 0.15 : [0.63, 1.29, 1.96][index];
  return (
    <motion.article
      className="shop-collection"
      key={collection.title}
      initial={reducedMotion ? false : { opacity: 0, x: -30, scale: 0.97 }}
      animate={reducedMotion || active ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.97 }}
      transition={{ duration: reducedMotion ? 0 : 0.58, delay: active ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        className="shop-collection__link"
        href={collection.destination}
        whileHover={reducedMotion ? undefined : { y: -4 }}
        whileTap={reducedMotion ? undefined : { scale: 0.99 }}
      >
        <span className="shop-collection__image-wrap">
          <img
            className="shop-collection__image"
            src={collection.image}
            alt={collection.imageAlt}
            loading="lazy"
            onError={(event) => {
              const imageElement = event.currentTarget;
              if (collection.fallbackImage && !imageElement.dataset.fallbackUsed) {
                imageElement.dataset.fallbackUsed = 'true';
                imageElement.src = collection.fallbackImage;
              }
            }}
          />
          <span className="shop-collection__image-index">0{index + 1} / 03</span>
        </span>
        <span className="shop-collection__details">
          <span className="shop-collection__title">{collection.title}</span>
          <span className="shop-collection__description">{collection.description}</span>
          <span className="shop-collection__action">{collection.action}<span aria-hidden="true">&#8599;</span></span>
        </span>
      </motion.a>
    </motion.article>
  );
}

function ShopCollections() {
  const sectionRef = useRef(null);
  const hasEntered = useInView(sectionRef, { once: true, amount: 0.12 });
  const reducedMotion = useReducedMotion();
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 560px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 560px)');
    const updateCompact = (event) => setCompact(event.matches);
    mediaQuery.addEventListener('change', updateCompact);
    return () => mediaQuery.removeEventListener('change', updateCompact);
  }, []);

  return (
    <section
      className={`shop-collections${reducedMotion ? ' is-reduced-motion' : ''}`}
      id="collection"
      ref={sectionRef}
      aria-labelledby="shop-collections-title"
    >
      <div className="shop-collections__inner">
        <header className="shop-collections__intro">
          <p className="shop-collections__eyebrow">DISCOVER OUR COLLECTION</p>
          <h2 id="shop-collections-title">Woven for Every Story.</h2>
          <p className="shop-collections__supporting-copy">
            From timeless silk sarees to distinctive handloom fabrics, discover textiles that carry generations of craftsmanship.
          </p>
        </header>

        <div className="shop-collections__cards-frame" id="regions">
          <ShuttleJourney active={hasEntered} reducedMotion={reducedMotion} compact={compact} />
          <div className="shop-collections__grid">
            {collections.map((collection, index) => (
              <CollectionCard
                collection={collection}
                index={index}
                active={hasEntered}
                reducedMotion={reducedMotion}
                compact={compact}
                key={collection.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCollections;
