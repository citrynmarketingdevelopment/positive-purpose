"use client";

/* eslint-disable @next/next/no-img-element */

import { startTransition, useEffect, useState } from "react";
import styles from "./page.module.css";

const INITIAL_VISIBLE_CARDS = 3;

function PlayIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`${styles.icon} ${className}`.trim()}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`${styles.icon} ${className}`.trim()}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default function ExploreGallery({ cards }) {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_CARDS);

  const visibleCards = cards.slice(0, visibleCount);
  const hasMoreVideos = visibleCount < cards.length;

  useEffect(() => {
    if (!activeCard) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCard]);

  const handleLoadMore = () => {
    startTransition(() => {
      setVisibleCount(cards.length);
    });
  };

  return (
    <>
      <section className={styles.exploreSection}>
        <div className={styles.exploreHeader}>
          <div className={styles.exploreIntro}>
            <h2 className={styles.sectionTitle}>
              HCBS Final Rule Video Series - Learn at your own pace with our
              English &amp; Spanish Video Collection
            </h2>
            <p className={styles.sectionCopy}>
              Browse practical video topics covering rights, settings,
              person-centered planning, and service expectations under the HCBS
              Final Rule.
            </p>
          </div>
          <div className={styles.filterGroup}>
            <button
              className={`${styles.filterButton} ${styles.filterButtonActive}`.trim()}
              type="button"
            >
              All Videos
            </button>
            <button className={styles.filterButton} type="button">
              English
            </button>
            <button className={styles.filterButton} type="button">
              Spanish
            </button>
          </div>
        </div>

        <div className={styles.exploreMediaShell}>
          <div className={styles.exploreGrid}>
            {visibleCards.map((card, index) => (
              <button
                aria-label={`Play video: ${card.title}`}
                key={card.title}
                className={[
                  styles.exploreCard,
                  styles.exploreCardButton,
                  visibleCount > INITIAL_VISIBLE_CARDS &&
                  index >= INITIAL_VISIBLE_CARDS
                    ? styles.exploreCardReveal
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={
                  visibleCount > INITIAL_VISIBLE_CARDS &&
                  index >= INITIAL_VISIBLE_CARDS
                    ? { "--reveal-delay": `${(index - INITIAL_VISIBLE_CARDS) * 90}ms` }
                    : undefined
                }
                type="button"
                onClick={() => setActiveCard(card)}
              >
                <img alt={card.alt} className={styles.exploreImage} src={card.src} />
                <div className={styles.exploreHoverOverlay}>
                  <span className={styles.explorePlayBadge}>
                    <PlayIcon className={styles.explorePlayIcon} />
                  </span>
                </div>
                <div className={styles.exploreCardOverlay}>
                  <span className={styles.exploreCategory}>{card.category}</span>
                  <h4 className={styles.exploreTitle}>{card.title}</h4>
                </div>
              </button>
            ))}
          </div>

          {hasMoreVideos ? (
            <div className={styles.loadMoreWrap}>
              <button
                className={styles.loadMoreButton}
                type="button"
                onClick={handleLoadMore}
              >
                Load All Videos
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {activeCard ? (
        <div
          aria-labelledby="gallery-lightbox-title"
          aria-modal="true"
          className={styles.videoLightbox}
          role="dialog"
          onClick={() => setActiveCard(null)}
        >
          <div
            className={styles.videoLightboxPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close video"
              className={styles.videoLightboxClose}
              type="button"
              onClick={() => setActiveCard(null)}
            >
              <CloseIcon className={styles.videoLightboxCloseIcon} />
            </button>
            <div className={styles.videoLightboxFrameWrap}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.videoLightboxFrame}
                src={activeCard.videoUrl}
                title={activeCard.title}
              />
            </div>
            <div className={styles.videoLightboxMeta}>
              <p className={styles.videoLightboxCategory}>{activeCard.category}</p>
              <h3
                className={styles.videoLightboxTitle}
                id="gallery-lightbox-title"
              >
                {activeCard.title}
              </h3>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
