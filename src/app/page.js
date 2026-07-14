/* eslint-disable @next/next/no-img-element */
import SiteHeader, { siteNavLinks } from "../components/site-header";
import galleryPhotoA from "../assets/new/IMG_5825.webp";
import galleryPhotoB from "../assets/new/IMG_6033.webp";
import galleryPhotoC from "../assets/new/IMG_7535.webp";
import galleryPhotoD from "../assets/new/IMG_5393.webp";
import heroMiddlePhoto from "../assets/new/IMG_5375.webp";
import heroTopPhoto from "../assets/positive-purpose-02.webp";
import aboutRightPhoto from "../assets/new/IMG_5990.webp";
import aboutLandscapePhoto from "../assets/new/IMG_7296.webp";
import reasonsSidePhoto from "../assets/new/IMG_7233.webp";
import heroBottomPhoto from "../assets/new/IMG_5829.webp";
import aboutLeftPhoto from "../assets/positive-purpose-06.webp";
import galleryPhotoE from "../assets/new/IMG_5977.webp";
import reasonsMainPhoto from "../assets/positive-purpose-05.webp";
import galleryPhotoF from "../assets/positive-purpose-01.webp";
import galleryPhotoG from "../assets/positive-purpose-08.webp";
import galleryPhotoH from "../assets/positive-purpose-09.webp";

const commitmentItems = [
  {
    icon: "heart",
    title: "Individualized Support",
    description:
      "We tailor our approach to meet the unique needs and dreams of every person we serve.",
  },
  {
    icon: "community",
    title: "Community Connection",
    description:
      "Fostering deep, meaningful relationships and active participation in local life.",
  },
  {
    icon: "accessibility",
    title: "Choice-Based Services",
    description:
      "Empowering individuals to take the lead in their own care decisions.",
  },
];

const serviceCards = [
  {
    icon: "home",
    title: "Supported Living (SLS)",
    description:
      "Live in your own home with 24/7 personalized support that adapts to your daily routine and personal goals.",
    href: "#contact",
    accentClass: "pp-service-accent-primary",
    iconClass: "pp-icon-badge-primary",
    cardClass: "pp-service-card-tilt-right",
  },
  {
    icon: "bolt",
    title: "Independent Living (ILS)",
    description:
      "Focused on skill-building for those who want to navigate life with more autonomy and confidence.",
    href: "#contact",
    accentClass: "pp-service-accent-secondary",
    iconClass: "pp-icon-badge-secondary",
    cardClass: "pp-service-card-tilt-left",
  },
  {
    icon: "sparkles",
    title: "Social Recreation",
    description:
      "Our Social Recreation Program aims to provide inclusive, engaging social opportunities in our local community and beyond. Our calendar changes monthly!",
    href: "#contact",
    accentClass: "pp-service-accent-tertiary",
    iconClass: "pp-icon-badge-tertiary",
    cardClass: "pp-service-card-tilt-strong",
  },
];

const reasonItems = [
  {
    icon: "clock",
    title: "24 Years of Dedication",
    description:
      "A deep-rooted history of service and advocacy in the community that you can trust.",
    colorClass: "pp-reason-mark-primary",
  },
  {
    icon: "celebrate",
    title: "Individualized Care",
    description:
      "We don't believe in one size fits all. Your plan is as unique as your fingerprints.",
    colorClass: "pp-reason-mark-secondary",
  },
  {
    icon: "megaphone",
    title: "Strong Advocacy",
    description:
      "We stand beside you, ensuring your voice is heard and your rights are protected.",
    colorClass: "pp-reason-mark-tertiary",
  },
];

const galleryPhotos = [
  {
    src: galleryPhotoF.src,
    alt: "Two participants smiling together at a community picnic",
    frameClass: "pp-gallery-card-a",
    tapeClass: "pp-tape-center pp-tape-primary",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: galleryPhotoG.src,
    alt: "Participant enjoying an adaptive beach outing",
    frameClass: "pp-gallery-card-b",
    tapeClass: "pp-tape-top-right",
    imageClass: "pp-gallery-image-tall",
  },
  {
    src: galleryPhotoA.src,
    alt: "Community member enjoying an arcade outing",
    frameClass: "pp-gallery-card-c",
    tapeClass: "pp-tape-top-left pp-tape-secondary",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: galleryPhotoB.src,
    alt: "Two women sharing a meal together",
    frameClass: "pp-gallery-card-d",
    tapeClass: "pp-tape-center",
    imageClass: "pp-gallery-image-medium",
  },
  {
    src: galleryPhotoE.src,
    alt: "Beach day with adaptive recreation support",
    frameClass: "pp-gallery-card-e",
    tapeClass: "pp-tape-top-left pp-tape-tertiary",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: galleryPhotoC.src,
    alt: "Bowling activity during an evening community outing",
    frameClass: "pp-gallery-card-f",
    tapeClass: "pp-tape-top-right",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: galleryPhotoH.src,
    alt: "Group celebrating together at a local event",
    frameClass: "pp-gallery-card-g",
    tapeClass: "pp-tape-center pp-tape-primary",
    imageClass: "pp-gallery-image-tall",
  },
  {
    src: galleryPhotoD.src,
    alt: "Participants sitting together during a community outing",
    frameClass: "pp-gallery-card-h",
    tapeClass: "pp-tape-top-left",
    imageClass: "pp-gallery-image-short",
  },
];

const contactItems = [
  {
    icon: "mail",
    label: "Email Us",
    value: "Tamerla@positivepurpose.net",
  },
  {
    icon: "phone",
    label: "Call Us",
    value: "661-322-5222",
  },
  {
    icon: "location",
    label: "Office Address",
    value: "8501 Brimhall Rd #401, Bakersfield, CA 93312",
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61575768532932",
    icon: "facebook",
    label: "Follow us on Facebook",
  },
  {
    href: "https://www.tiktok.com/@positive.purpose?_r=1&_t=ZT-965axTtN4ft",
    icon: "tiktok",
    label: "Follow us on TikTok",
  },
];

const careerRequirements = [
  "A completed employment application",
  "A valid driver's license",
  "Current vehicle registration",
  "Proof of current automobile insurance",
];

const consultingServices = [
  "Development and review of program designs",
  "HCBS Final Rule education and compliance",
  "Vendorization guidance and operational support",
  "General consultation for service providers and agency leadership",
  "Best practices for person-centered service delivery",
];

function Icon({ name, className = "" }) {
  const icons = {
    heart: (
      <path d="M12 21.25 4.5 14a5.45 5.45 0 0 1 0-7.71 5.45 5.45 0 0 1 7.71 0L12 7l-.21-.71a5.45 5.45 0 0 1 7.71 0 5.45 5.45 0 0 1 0 7.71Z" />
    ),
    community: (
      <>
        <path d="M16 20v-1.5A3.5 3.5 0 0 0 12.5 15H7.5A3.5 3.5 0 0 0 4 18.5V20" />
        <circle cx="10" cy="9" r="3.5" />
        <path d="M20 20v-1a3.5 3.5 0 0 0-2.75-3.42" />
        <path d="M15.5 5.6a3.5 3.5 0 0 1 0 6.8" />
      </>
    ),
    accessibility: (
      <>
        <circle cx="12" cy="4.75" r="2.25" />
        <path d="M8 10.5 12 12.5 16 10.5" />
        <path d="M12 7.5v8.5" />
        <path d="m10 21 2-5 2 5" />
        <path d="M7 15.5h10" />
      </>
    ),
    home: (
      <>
        <path d="m3 10.5 9-7 9 7" />
        <path d="M5.5 9.5V20h13V9.5" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
    bolt: <path d="M13 2 4.5 13.25H11L10 22l8.5-11.25H13.5Z" />,
    groups: (
      <>
        <path d="M16.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H8a3.5 3.5 0 0 0-3.5 3.5V20" />
        <circle cx="10.5" cy="9" r="3.5" />
        <path d="M21 20v-1a3.5 3.5 0 0 0-2.75-3.42" />
        <path d="M16.5 5.6a3.5 3.5 0 0 1 0 6.8" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.75 4.25L18 9l-4.25 1.75L12 15l-1.75-4.25L6 9l4.25-1.75Z" />
        <path d="m18.5 14.5.85 2.15 2.15.85-2.15.85-.85 2.15-.85-2.15-2.15-.85 2.15-.85Z" />
        <path d="m5.5 14.5.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
      </>
    ),
    apartment: (
      <>
        <path d="M4 21h16" />
        <path d="M6 21V7l6-3 6 3v14" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
        <path d="M11 21v-4h2v4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.25 2.75" />
      </>
    ),
    celebrate: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6.5 21v-1a5.5 5.5 0 0 1 11 0v1" />
        <path d="m4 10 1.75.75" />
        <path d="m20 10-1.75.75" />
        <path d="m7.25 3.75.9 1.75" />
        <path d="m16.75 3.75-.9 1.75" />
      </>
    ),
    megaphone: (
      <>
        <path d="M5 11h3l9-4v10l-9-4H5a2 2 0 0 1-2-2 2 2 0 0 1 2-2Z" />
        <path d="M8 13v5a2 2 0 0 0 2 2h.5" />
        <path d="M19 9v6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),
    external: (
      <>
        <path d="M14 5h5v5" />
        <path d="M10 14 19 5" />
        <path d="M19 14v5H5V5h5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M21 16.4v2.8a1.8 1.8 0 0 1-1.97 1.8A18.55 18.55 0 0 1 10.95 18 18.08 18.08 0 0 1 6 13.05 18.55 18.55 0 0 1 3 4.97 1.8 1.8 0 0 1 4.8 3h2.8a1.8 1.8 0 0 1 1.76 1.43c.14.73.36 1.45.65 2.13a1.8 1.8 0 0 1-.4 1.97L8.3 9.84a14.5 14.5 0 0 0 5.86 5.86l1.31-1.31a1.8 1.8 0 0 1 1.97-.4c.68.29 1.4.51 2.13.65A1.8 1.8 0 0 1 21 16.4Z" />
    ),
    location: (
      <>
        <path d="M12 21s-6-4.4-6-10a6 6 0 1 1 12 0c0 5.6-6 10-6 10Z" />
        <circle cx="12" cy="11" r="2.5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    facebook: (
      <>
        <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v5h3v-5h2.25l.4-3H14v-1.5c0-.7.3-1.5 1.5-1.5H17V6h-2Z" />
      </>
    ),
    tiktok: (
      <>
        <path d="M14 4v8.1a3.35 3.35 0 1 1-2.35-3.2" />
        <path d="M14 4a4.2 4.2 0 0 0 4.2 4.2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={`pp-icon ${className}`.trim()}
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

function Tape({ className = "" }) {
  return <span className={`pp-tape ${className}`.trim()} aria-hidden="true" />;
}

function PhotoFrame({
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  src,
  tapes = [],
}) {
  return (
    <div className={`pp-photo-frame ${className}`.trim()}>
      {tapes.map((tapeClass, index) => (
        <Tape key={`${src}-${index}`} className={tapeClass} />
      ))}
      <img
        alt={alt}
        className={`pp-photo ${imageClassName}`.trim()}
        loading={priority ? "eager" : "lazy"}
        src={src}
      />
    </div>
  );
}

function ServiceCard({
  accentClass,
  cardClass,
  description,
  href,
  icon,
  iconClass,
  title,
}) {
  return (
    <article className={`pp-canvas-card pp-paper-stack pp-service-card ${cardClass}`.trim()}>
      <div className={`pp-icon-badge ${iconClass}`.trim()}>
        <Icon name={icon} />
      </div>
      <h3 className="pp-card-title">{title}</h3>
      <p className="pp-card-copy">{description}</p>
      <a className={`pp-inline-link ${accentClass}`.trim()} href={href}>
        Learn More
        <Icon className="pp-inline-link-icon" name="arrow" />
      </a>
    </article>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="pp-page">
      <SiteHeader active="home" />

      <section className="pp-hero-section" id="home">
        <div className="pp-shell pp-hero-grid">
          <div className="pp-hero-copy">
            <div className="pp-kicker">Community-Centered Care</div>
            <h1 className="pp-hero-title">
              Empowering Independence.
              <br />
              <span className="pp-hero-highlight">Supporting Community.</span>
              <br />
            </h1>
            <p className="pp-hero-text">
              Providing compassionate, high-quality support for adults with
              developmental disabilities to live life on their own terms.
            </p>
            <div className="pp-hero-actions">
              <a className="pp-button pp-button-primary" href="#contact">
                Contact Us
              </a>
              <a className="pp-button pp-button-secondary" href="#services">
                Explore Services
              </a>
            </div>
          </div>

          <div className="pp-hero-media">
            <div className="pp-hero-stack">
              <PhotoFrame
                alt="Support team members and participants smiling together during a community ride"
                className="pp-hero-photo-main"
                imageClassName="pp-hero-main-image"
                priority
                src={heroMiddlePhoto.src}
                tapes={["pp-tape-center pp-tape-secondary"]}
              />
              <PhotoFrame
                alt="Participant smiling during a community outing"
                className="pp-hero-photo-side pp-hero-photo-left"
                imageClassName="pp-square-photo"
                src={heroBottomPhoto.src}
                tapes={["pp-tape-top-right"]}
              />
              <PhotoFrame
                alt="Two people posing together outside the office"
                className="pp-hero-photo-side pp-hero-photo-right"
                imageClassName="pp-square-photo"
                src={heroTopPhoto.src}
                tapes={["pp-tape-top-left pp-tape-tertiary"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pp-section" id="about">
        <div className="pp-shell pp-about-grid">
          <div className="pp-about-copy">
            <div className="pp-canvas-card pp-paper-stack pp-about-card">
              <h2 className="pp-section-title">Our Commitment</h2>
              <p className="pp-lead-copy">
                Positive Purpose LLC is committed to enhancing quality of life
                for intellectually and developmentally disabled individuals,
                their family units, and support teams.
              </p>
              <div className="pp-feature-list">
                {commitmentItems.map((item) => (
                  <article key={item.title} className="pp-feature-row">
                    <Icon className="pp-feature-icon" name={item.icon} />
                    <div>
                      <h3 className="pp-feature-title">{item.title}</h3>
                      <p className="pp-feature-copy">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="pp-about-collage">
            <PhotoFrame
              alt="Three young adults posing together outside"
              className="pp-about-photo-a"
              imageClassName="pp-about-portrait"
              src={aboutLeftPhoto.src}
              tapes={["pp-tape-top-right"]}
            />
            <PhotoFrame
              alt="Participants gathered around a table during a social activity"
              className="pp-about-photo-b"
              imageClassName="pp-about-square"
              src={aboutRightPhoto.src}
              tapes={["pp-tape-top-left pp-tape-secondary"]}
            />
            <PhotoFrame
              alt="Group walking together during a community outing"
              className="pp-about-photo-c"
              imageClassName="pp-about-landscape"
              src={aboutLandscapePhoto.src}
              tapes={["pp-tape-center"]}
            />
          </div>
        </div>
      </section>

      <section className="pp-section pp-section-services" id="services">
        <div className="pp-shell">
          <div className="pp-section-intro">
            <h2 className="pp-section-title">Comprehensive Services</h2>
            <p className="pp-section-subtitle">
              Designed with dignity and warmth to support the beautiful
              kaleidoscope of human life.
            </p>
          </div>

          <div className="pp-services-grid">
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section" id="why-choose-us">
        <div className="pp-shell pp-reasons-grid">
          <div className="pp-reasons-copy">
            <h2 className="pp-section-title">Why Positive Purpose?</h2>
            <div className="pp-reason-list">
              {reasonItems.map((item) => (
                <article key={item.title} className="pp-reason-row">
                  <div className={`pp-reason-mark ${item.colorClass}`.trim()}>
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h3 className="pp-feature-title pp-reason-title">{item.title}</h3>
                    <p className="pp-reason-copy">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pp-reasons-media">
            <PhotoFrame
              alt="Group photo outside during a community program"
              className="pp-reasons-main-photo"
              imageClassName="pp-reasons-main-image"
              src={reasonsMainPhoto.src}
              tapes={["pp-tape-top-left pp-tape-secondary", "pp-tape-top-right"]}
            />
            <PhotoFrame
              alt="Participant smiling while showing painted artwork"
              className="pp-reasons-side-photo"
              imageClassName="pp-square-photo"
              src={reasonsSidePhoto.src}
              tapes={["pp-tape-center pp-tape-short"]}
            />
          </div>
        </div>
      </section>

      <section className="pp-section pp-gallery-section" id="gallery">
        <div className="pp-shell pp-gallery-shell">
          <div className="pp-gallery-header">
            <div>
              <h2 className="pp-section-title">Moments of Connection</h2>
              <p className="pp-gallery-copy">
                A glimpse into the vibrant lives and heart-felt community
                interactions we support.
              </p>
            </div>
            <a className="pp-gallery-button" href="/gallery">
              View Full Gallery
              <Icon className="pp-gallery-button-icon" name="external" />
            </a>
          </div>

          <div className="pp-gallery-grid">
            {galleryPhotos.map((photo) => (
              <PhotoFrame
                key={photo.src}
                alt={photo.alt}
                className={photo.frameClass}
                imageClassName={photo.imageClass}
                src={photo.src}
                tapes={[photo.tapeClass]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section pp-resource-section" id="mission">
        <div className="pp-shell pp-resource-shell">
          <div className="pp-section-intro pp-resource-intro">
            <h2 className="pp-section-title">Mission, Careers &amp; Consulting</h2>
            <p className="pp-section-subtitle pp-resource-subtitle">
              Learn more about our mission, employment opportunities, and
              professional consulting services.
            </p>
          </div>

          <div className="pp-resource-grid">
            <article className="pp-canvas-card pp-paper-stack pp-resource-card pp-resource-card-mission">
              <div className="pp-resource-kicker">Mission</div>
              <h3 className="pp-card-title pp-resource-title">Our mission</h3>
              <p className="pp-resource-copy">
                Positive Purpose is an organization committed to enhancing the
                quality of life for intellectually challenged individuals, their
                family units, and the support team serving them. Positive
                Purpose was created to provide supported living, and community
                based residential services, to people with physical,
                developmental and intellectual disabilities. We utilize
                individual service plans to provide training to enhance skill
                development, promote independence and increase community
                inclusion.
              </p>
            </article>

            <article
              className="pp-canvas-card pp-paper-stack pp-resource-card pp-resource-card-careers"
              id="careers"
            >
              <div className="pp-resource-kicker">Careers</div>
              <h3 className="pp-card-title pp-resource-title">
                Join the Positive Purpose Team
              </h3>
              <p className="pp-resource-copy">
                At Positive Purpose, we&apos;re always looking for compassionate,
                dependable individuals who are passionate about making a
                difference in the lives of others.
              </p>
              <div className="pp-resource-actions">
                <a
                  className="pp-button pp-button-primary pp-resource-button"
                  download="PositivePurposeEmploymentApplication.pdf"
                  href="/employment-application.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  View or Download Application
                </a>
              </div>
              <p className="pp-resource-subheading">
                To apply, please visit our office in person with:
              </p>
              <ul className="pp-resource-list">
                {careerRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="pp-resource-copy">
                Qualified applicants may be required to complete a
                pre-employment drug screening. Relevant experience and
                professional references are encouraged and will be considered
                during the hiring process.
              </p>
              <p className="pp-resource-copy">
                Positive Purpose is proud to be an Equal Opportunity Employer.
                We are committed to creating an inclusive workplace where all
                qualified applicants receive equal consideration for employment
                regardless of race, color, religion, sex, national origin, age,
                disability, veteran status, or any other protected
                characteristic under applicable law.
              </p>
            </article>

            <article
              className="pp-canvas-card pp-paper-stack pp-resource-card pp-resource-card-consulting"
              id="consulting"
            >
              <div className="pp-resource-kicker">Consulting</div>
              <h3 className="pp-card-title pp-resource-title">
                Consulting &amp; Professional Training
              </h3>
              <p className="pp-resource-copy">
                With more than 25 years of experience serving individuals with
                developmental and intellectual disabilities, Tamerla Prince
                offers personalized consulting and professional training for
                providers, agencies, and individuals looking to grow their
                knowledge and succeed in the human services field.
              </p>
              <p className="pp-resource-copy">
                As the owner of two vendored service agencies and a former
                Vendor Advisory Chair, Tamerla has extensive experience
                navigating California&apos;s developmental services system. She
                provides one-on-one consultation tailored to your
                organization&apos;s needs, whether you&apos;re starting a new
                program, expanding existing services, or strengthening
                compliance with state regulations.
              </p>
              <p className="pp-resource-subheading">
                Consulting services include:
              </p>
              <ul className="pp-resource-list">
                {consultingServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="pp-resource-copy">
                In addition to her developmental services expertise, Tamerla
                owns and operates a Residential Care Facility for the Elderly
                (RCFE) and offers consultation for individuals and
                organizations interested in RCFE operations, regulatory
                requirements, and quality care practices.
              </p>
              <p className="pp-resource-copy">
                Tamerla is also a Direct Support Professional (DSP) Trainer
                through the Fresno Regional Training Hub and a Certified CPI
                (Crisis Prevention Institute) Instructor, providing engaging,
                practical training designed to equip support professionals with
                the knowledge and skills they need to deliver exceptional,
                person-centered services.
              </p>
              <p className="pp-resource-copy">
                Whether you&apos;re launching a new agency, enhancing an
                existing program, seeking regulatory guidance, or looking for
                high-quality staff training, Tamerla is committed to helping
                you achieve your goals with practical expertise and
                individualized support.
              </p>
              <p className="pp-resource-copy">
                Contact Tamerla today to learn more about consulting services,
                professional training opportunities, or to schedule a
                personalized consultation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pp-section" id="contact">
        <div className="pp-shell pp-contact-grid">
          <div className="pp-contact-copy">
            <div className="pp-contact-heading">
              <h2 className="pp-section-title">Let&apos;s Connect</h2>
              <p className="pp-contact-intro">
                Ready to start a journey towards a more independent and enriched
                life? We&apos;re here to listen and walk alongside you.
              </p>
            </div>

            <div className="pp-contact-list">
              {contactItems.map((item) => (
                <article key={item.label} className="pp-contact-item">
                  <div className="pp-contact-mark">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <p className="pp-contact-label">{item.label}</p>
                    <p className="pp-contact-value">{item.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pp-canvas-card pp-paper-stack pp-contact-card">
            <Tape className="pp-tape-center pp-tape-secondary" />
            <form className="pp-contact-form">
              <div className="pp-form-field">
                <label htmlFor="full-name">Your Full Name</label>
                <input id="full-name" placeholder="E.g. Jane Doe" type="text" />
              </div>

              <div className="pp-form-grid">
                <div className="pp-form-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" placeholder="jane@example.com" type="email" />
                </div>
                <div className="pp-form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" placeholder="(555) 000-0000" type="tel" />
                </div>
              </div>

              <div className="pp-form-field">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  placeholder="Tell us your story..."
                  rows="4"
                />
              </div>

              <button className="pp-submit-button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="pp-footer">
        <div className="pp-footer-pattern" aria-hidden="true" />
        <div className="pp-shell pp-footer-grid">
          <div className="pp-footer-brand-block">
            <h2 className="pp-footer-brand">Positive Purpose</h2>
            <p className="pp-footer-copy">
              At Positive Purpose, we believe every individual deserves the
              opportunity to live with dignity, independence, and meaningful
              community inclusion. Whether you&apos;re seeking quality support
              services for yourself or a loved one, or you&apos;re passionate
              about making a difference in the lives of others, we&apos;d love
              to hear from you. Contact us today to learn more about our
              services or explore rewarding career opportunities with our team.
            </p>
            <div className="pp-social-row">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  aria-label={social.label}
                  className="pp-social-button"
                  href={social.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="pp-footer-heading">Quick Links</h3>
            <ul className="pp-footer-list">
              {siteNavLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="pp-footer-heading">Information</h3>
            <ul className="pp-footer-list">
              <li>
                <a href="#contact">Privacy Policy</a>
              </li>
              <li>
                <a href="#contact">Terms of Service</a>
              </li>
              <li>
                <a href="#mission">Mission</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#consulting">Consulting</a>
              </li>
              <li>
                <a href="#contact">Local Events</a>
              </li>
            </ul>
          </div>

          <div className="pp-footer-contact">
            <h3 className="pp-footer-heading">Get In Touch</h3>
            <div className="pp-hours-card">
              <p className="pp-hours-label">Office Hours</p>
              <p className="pp-hours-value">Mon - Thu: 8am - 5pm</p>
              <p className="pp-hours-value">Fri: 9am - 3pm</p>
              <p className="pp-hours-note">Sat - Sun: Emergency Support</p>
              <div className="pp-hours-contact">
                <p>
                  <Icon className="pp-footer-inline-icon" name="location" />
                  8501 Brimhall Rd #401, Bakersfield, CA 93312
                </p>
                <p>
                  <Icon className="pp-footer-inline-icon" name="mail" />
                  Tamerla@positivepurpose.net
                </p>
                <p>
                  <Icon className="pp-footer-inline-icon" name="phone" />
                  661-322-5222
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pp-footer-bottom">
          &copy; {year} Positive Purpose LLC. Designed with heart for the human
          kaleidoscope.
        </div>
      </footer>
    </main>
  );
}
