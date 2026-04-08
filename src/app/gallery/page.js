/* eslint-disable @next/next/no-img-element */

import SiteHeader from "../../components/site-header";
import ExploreGallery from "./explore-gallery";
import styles from "./page.module.css";

const placeholderVideoUrl =
  "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&rel=0";

const exploreCards = [
  {
    category: "Community",
    title: "Meet the Support Team",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMDKdrZfwTv3W-hP59yBxjaWoXn5n9yvJWGySPPEOrpiwnrZneeJd9Z-r99JoVoE4JbB0LT7C9RbJouSnWbmWEwT5kElEkrsBnJBGvV4-V4Uhl5lsFsecDfy3Tafc44OP47mgBKzXf7Ko1Z4jPhdbqmQqA3PSyyZyAbwqgbZXizn686-1zpbo64nXx9azrmv12HJrJpmUE-q9d5UAMfBHCvOW4wsEJcbVt1bOBcsADVtCLPs9Qc6_rpBzFWf74uAEKsbKDLfTq89pk",
    alt: "Meet the Support Team",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Creative Arts",
    title: "Annual Art Showcase",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsbMw15jTEVedCTkMSilP3wQSvUpxO_9b0QlYZvy8j917RGiZAV2c80iRAWwfkmXrHkc2fU5rhUZlyOCOx3h2ADohLfP9aci324CN6KoUTDDGHojybBCEBS1AwCNIx2sumjLz-jud8-cPzOaQrSl0EQyjoNlkHc7bUPpzx7FberCvvOCVTs6UGM7Z5jNKN4OEIWkw9TRw9UGgNoGzob8zc9bL4xVoXtC_uRE-WrUX7ZB72nNM_RU7E4Jhm6UygyTGdQE-RU42mRnn3",
    alt: "Art Showcase",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Wellness",
    title: "Morning Yoga Sessions",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXFWe6dXOjFpJgunb03NkHgpT6fAYdNGOBmT2bhZ_aCfDJp5R36j8TaPBXu2n2vK-TF3Ty3PLEEWo_WY9q0PT22VvMzorU-yAk_viMHXBdoT3xWdlMPeo3pxvRaoWHxqy5wqUqZBqw-zci6rtWKVR08Hd26DcZd3hRJBhojwHbextfePEPZPERNaPjzypLYd-4D4o6zG9_31Sz12moCVYphsckWvvanUlmMqozmsy5T9pheQ8G4nBsJHQ_2XT7JHYlmoZLFxfXj3rs",
    alt: "Yoga Session",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Success Stories",
    title: "David's Career Path",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRA_FipOKMoJxPqRSC8YFYP_7TAW9UlRelXw5pngRmWPHmhsPChbhIJ8xnBvcRLtJXHY1Ih8dun-lLbjUSAfzRuCO8pWjoTwvDDouCogRBGvL1XpsVEgLJv10hMLl64iHIQurn0wctQenAWS_wz2rSXmRJGbM0C_uIHBm-mDeR1gb-gH7JB_soelviUN-XFcNMC__e11dO_46x2OVTAcdE6hdkwYb0eFe7aHPCNaOFKs898k6kIvR30ZJEuPhJb9UIuPFU65hYFd4W",
    alt: "David's Career",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Community",
    title: "Weekend Social Recap",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF84Fad4xiXxBm8fa037RD3QU-lfHfImqEf3IE6CEZSvXzhWNNMZEA7z9Nf-jtAsSCRxfbhmeNYemXIpy0lRJxMG8ccBXQqyGKUyxB4FiVFnjDZ6vciAgbYfeyOR5JEyYuCYyQYdHK3Kj3GCLbQzX6OlY_B1PhDDCAYFG0tVkc3CDo5Wnu0PGLGk_8rM8Q_IISMp8j3t4xBWi2vcZXqCt8x7I5RSXEjTzi0qozMVas7X6t0RfMuxmbn3sOrUd1p3EhDNdp88ZohILu",
    alt: "Weekend Social Recap",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Activities",
    title: "Community Garden Project",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcKKkS-mgD5fX2qrfhPgu3NKokF5ZlXWHuKxsOMhuquNulqMDEraLQuT80jiVI64YMzlFhzozLz5--zZ3Owin4w6o1h60frrG9--j1AoCn--NHwPyUGUniIrkV1Kn2WDP36UOxDPXMzq3SFlFLUl_Mip4njGUsQoHFWDjlonAYKWztUo35H47mi38rn2KGAszXMMj5H3Db4IaCNNONPCy26prwrttXcCkEXbB7VPrRQS9ICGKYzVMj8QsPrLWejTMLI701LfnyprwT",
    alt: "Community Garden Project",
    videoUrl: placeholderVideoUrl,
  },
];

function Icon({ name, className = "" }) {
  const icons = {
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    heart: (
      <path d="M12 21.25 4.5 14a5.45 5.45 0 0 1 0-7.71 5.45 5.45 0 0 1 7.71 0L12 7l-.21-.71a5.45 5.45 0 0 1 7.71 0 5.45 5.45 0 0 1 0 7.71Z" />
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),
  };

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
      {icons[name]}
    </svg>
  );
}

export const metadata = {
  title: "Positive Purpose | Gallery",
};

export default function GalleryPage() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      <SiteHeader active="videos" />

      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            alt="Community Garden Project"
            className={styles.heroImage}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcKKkS-mgD5fX2qrfhPgu3NKokF5ZlXWHuKxsOMhuquNulqMDEraLQuT80jiVI64YMzlFhzozLz5--zZ3Owin4w6o1h60frrG9--j1AoCn--NHwPyUGUniIrkV1Kn2WDP36UOxDPXMzq3SFlFLUl_Mip4njGUsQoHFWDjlonAYKWztUo35H47mi38rn2KGAszXMMj5H3Db4IaCNNONPCy26prwrttXcCkEXbB7VPrRQS9ICGKYzVMj8QsPrLWejTMLI701LfnyprwT"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <span className={styles.heroTag}>Our Impact</span>
            <h1 className={styles.heroTitle}>
              Moments of{" "}
              <span className={styles.heroTitleAccent}>Joy &amp; Growth</span>
            </h1>
            <p className={styles.heroText}>
              Experience the vibrant daily life at Positive Purpose through our
              curated collection of stories, achievements, and community
              milestones.
            </p>
          </div>

        </div>
      </section>

      <ExploreGallery cards={exploreCards} />

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Be Part of the Story</h2>
          <p className={styles.ctaCopy}>
            Our videos only capture a glimpse of the empowerment happening
            every day. Join us to experience it firsthand.
          </p>
          <div className={styles.ctaActions}>
            <a
              className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`.trim()}
              href="#"
            >
              Get Involved
            </a>
            <a
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`.trim()}
              href="#"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandCol}>
            <div className={styles.footerBrand}>Editorial Inclusivity</div>
            <p className={styles.footerCopy}>
              Creating a world where every story is heard and every individual
              is empowered to grow.
            </p>
            <div className={styles.footerSocials}>
              <button className={styles.footerSocial} type="button">
                <Icon name="globe" />
              </button>
              <button className={styles.footerSocial} type="button">
                <Icon name="heart" />
              </button>
            </div>
          </div>

          <div>
            <h3 className={styles.footerHeading}>Explore</h3>
            <ul className={styles.footerList}>
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerHeading}>Resources</h3>
            <ul className={styles.footerList}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerHeading}>Newsletter</h3>
            <p className={styles.footerNewsletterCopy}>
              Stay updated with our latest stories.
            </p>
            <div className={styles.newsletterField}>
              <input
                className={styles.newsletterInput}
                placeholder="Email Address"
                type="email"
              />
              <button className={styles.newsletterButton} type="button">
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          &copy; {year} Editorial Inclusivity. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
