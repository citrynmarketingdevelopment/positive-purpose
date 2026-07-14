/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import heroBackgroundPhoto from "../../assets/new/IMG_7296.webp";
import videoCardPhotoA from "../../assets/new/IMG_5375.webp";
import videoCardPhotoB from "../../assets/new/IMG_5825.webp";
import videoCardPhotoC from "../../assets/new/IMG_5829.webp";
import videoCardPhotoD from "../../assets/new/IMG_5990.webp";
import videoCardPhotoE from "../../assets/new/IMG_6033.webp";
import videoCardPhotoF from "../../assets/new/IMG_7233.webp";
import ExploreGallery from "./explore-gallery";
import styles from "./page.module.css";

const placeholderVideoUrl =
  "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&rel=0";

const exploreCards = [
  {
    category: "Individuals",
    title: "What the HCBS Final Rule Means for Individuals",
    src: videoCardPhotoA.src,
    alt: "Group smiling together during a community outing",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Families",
    title: "Family Guide to Rights, Choice, and Community Inclusion",
    src: videoCardPhotoB.src,
    alt: "Participant enjoying an arcade outing",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Providers",
    title: "Provider Responsibilities Under the HCBS Final Rule",
    src: videoCardPhotoC.src,
    alt: "Participant smiling inside a recreation venue",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "DSP Training",
    title: "Direct Support Professional Essentials",
    src: videoCardPhotoD.src,
    alt: "Participants gathered around a table during a social activity",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "English",
    title: "Person-Centered Planning in Everyday Practice",
    src: videoCardPhotoE.src,
    alt: "Two women seated together at dinner",
    videoUrl: placeholderVideoUrl,
  },
  {
    category: "Spanish",
    title: "HCBS Final Rule Overview in Spanish",
    src: videoCardPhotoF.src,
    alt: "Participant smiling while showing painted artwork",
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
  title: "Positive Purpose | HCBS Resource Library",
};

export default function GalleryPage() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      <SiteHeader active="videos" />

      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            alt="Group walking together during a Positive Purpose community outing"
            className={styles.heroImage}
            src={heroBackgroundPhoto.src}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <span className={styles.heroTag}>HCBS Education</span>
            <h1 className={styles.heroTitle}>HCBS Resource Library</h1>
            <p className={styles.heroText}>
              Discover what the HCBS Final Rule means for individuals
              receiving services, families, providers, and direct support
              professionals.
            </p>
          </div>
        </div>
      </section>

      <ExploreGallery cards={exploreCards} />

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to take the next step?</h2>
          <p className={styles.ctaCopy}>
            Positive Purpose is here to support individuals and families with
            person-centered services that promote independence, growth, and
            community involvement. If you&apos;re interested in receiving
            services or joining a compassionate team dedicated to making a
            difference, contact us today.
          </p>
          <div className={styles.ctaActions}>
            <Link
              className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`.trim()}
              href="/#contact"
            >
              Contact Us
            </Link>
            <Link
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`.trim()}
              href="/#careers"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandCol}>
            <div className={styles.footerBrand}>Positive Purpose</div>
            <p className={styles.footerCopy}>
              At Positive Purpose, we believe every individual deserves the
              opportunity to live with dignity, independence, and meaningful
              community inclusion.
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
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
              Sign up to get monthly updates and our monthly social recreation
              calendar
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
          &copy; {year} Positive Purpose LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
