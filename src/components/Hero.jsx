import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  // Smooth scroll handler for anchor links
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', targetId);
      }
    }
  };

  // Ensure background video autoplays smoothly with sound muted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled gracefully if browser restricts autoplay
        });
      }
    }
  }, []);

  return (
    <section className="hero hero-centered" id="home" aria-label="Hero">
      {/* CINEMATIC VIDEO BACKGROUND — FULL OPACITY */}
      <div className="hero-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=90"
          tabIndex="-1"
        >
          <source src="/videos/hero-weaving.mp4" type="video/mp4" />
        </video>

        {/* Subtle transparent cinematic scrim so video stays fully visible while keeping text crisp */}
        <div className="hero-bg-overlay" />
      </div>

      {/* CENTERED EDITORIAL CONTENT */}
      <div className="hero-content-center">
        {/* Heritage stamp badge */}
        <div className="hero-stamp-badge hero-fade-1">
          <span className="hero-stamp-badge-star" aria-hidden="true">&#10022;</span>
          <span>ROOTED IN TRADITION &bull; PURE HANDLOOM</span>
        </div>

        {/* Eyebrow with balanced rules */}
        <div className="hero-eyebrow hero-fade-2">
          <span className="hero-eyebrow-rule" aria-hidden="true" />
          <span className="hero-eyebrow-text">WOVEN WITH TIMELESS TRADITION</span>
          <span className="hero-eyebrow-rule" aria-hidden="true" />
        </div>

        {/* Main headline */}
        <h1 className="hero-title hero-fade-3">
          Every thread holds a <em className="hero-accent">story.</em>
        </h1>

        {/* Supporting description */}
        <p className="hero-description hero-fade-4">
          Discover the beauty of Indian handloom sarees, woven with patience, tradition, and the hands of skilled artisans.
        </p>

        {/* Primary and secondary CTAs */}
        <div className="hero-actions hero-fade-5">
          <a
            className="button hero-btn-primary"
            href="#collection"
            onClick={(e) => handleScrollTo(e, '#collection')}
          >
            <span>Explore the Collection</span>
            <span className="hero-btn-arrow" aria-hidden="true">&#8599;</span>
          </a>

          <a
            className="hero-link-secondary"
            href="#craft"
            onClick={(e) => handleScrollTo(e, '#craft')}
          >
            <span>Discover Our Craft</span>
            <span className="hero-link-arrow" aria-hidden="true">&#8594;</span>
          </a>
        </div>

        {/* Restrained editorial caption */}
        <div className="hero-caption-center hero-fade-5">
          <span className="hero-caption-pip" aria-hidden="true" />
          <span>A legacy, carefully woven.</span>
          <span className="hero-caption-pip" aria-hidden="true" />
        </div>

        {/* Understated scroll indicator */}
        <div className="hero-scroll hero-fade-5">
          <a
            href="#collection"
            className="hero-scroll-btn"
            aria-label="Scroll to explore collections"
            onClick={(e) => handleScrollTo(e, '#collection')}
          >
            <span className="hero-scroll-line-box" aria-hidden="true">
              <span className="hero-scroll-line" />
            </span>
            <span className="hero-scroll-label">Scroll to explore</span>
          </a>
        </div>
      </div>

    </section>
  );
}
