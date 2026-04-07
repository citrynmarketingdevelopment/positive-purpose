/* eslint-disable @next/next/no-img-element */

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
];

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
    icon: "groups",
    title: "Coordinated Family Support",
    description:
      "Bridging the gap between the individual and their support system with holistic family-centered care.",
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
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWmMLlRLeGP_B87wDYx3Vc4UZg6SZRudyWxMIzdoZlOFxJ9PZVcXy2QG1fXWvIHj369MdzIHxLSau2DSUXn7LuyPktRvJJKEcdvMUTjNNRX9I9-DDHHk0i5ukOrPRrrBOKd3hEbExyb1botZ0lbgCE4jdqgofHvqpA4ZF8k_O2EVtCzNfNUHRKCNWV28zYQxZvk1bXQTnf3Sd2j8LYYt0dNqCVHzL0cX3ZdHwlIJhqHpiG6OFMDUoSE7RAWOQcwTMni1DUnAnKLZvV",
    alt: "Celebration at a community gathering",
    frameClass: "pp-gallery-card-a",
    tapeClass: "pp-tape-center pp-tape-primary",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZahcBIgwZq-jilrPwhao8Jy-n5k6vI3uq0qK3xsJoigujt1CjbIv0OeZ7AdzwOa1qQp9sWpXU1KoLnGqukuL7_DDpj-m3VLmW7pLM16LgqATQ17GQsqBxSeTGCsGvon4mC24euTE2TA2sGbdfH_u-7IaLe8scvt32Vg5PQG1ZpaC7H-fwzGWqFZlYUUL9dPjDgkGkmfyjOnRCk2r1M5EjSW7iBOtMy5CJiWsWFr2VO3RlssewF3PEuOrTDYdZIi7OPICfP6dSdhMt",
    alt: "Outdoor picnic with friends",
    frameClass: "pp-gallery-card-b",
    tapeClass: "pp-tape-top-right",
    imageClass: "pp-gallery-image-tall",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0x5eVaVmOQ-BEwAcwgjSVCbBTJk6EeuaQb4lGYH39ZUK5R6OOUh8aMP-Em0D0GZLFx5NXp1hm0_IDp19xq34rRsQaO7lLzRJi8Ii8avHKjD9BQFavt9vZ0HFpzm2uvGshlYxkopPofiIEn5TC4cvzu8iXGw3kved5SZ669W39rAxqhV7xAa0NWO7FwHRamOMnNYGKjpCQ8H8sSmuhsX1tgu4S1lliz-frvSYixPXf7ic_am1KpASgqLsQQPB9nt3sU3AB9xUnAVFT",
    alt: "Collaborative art project",
    frameClass: "pp-gallery-card-c",
    tapeClass: "pp-tape-top-left pp-tape-secondary",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4jzvq_jbVVsiI4vala3bxdMr31fO3iTn6p4Zu02ZU6NJrekDuUsJKV5H74XPXfd0mPt4rMFlYLinPx41qtyZRGcVXuehqIRLMxjZ4Fqd15ZhKlG4z1XGprKSRrd7T5fXF_SCdBAeA21-Z-oARVl2FSHv7vR1ZQOBa1Dx578vjZ2WMGDZzF1jWflkOMCYRWDs2DzoQFr5Hn_bXIuG_4Mc18MPFD-aqMpgxFgO4NQ60lUXm7p1ZWk5E6W6N9XxYhppVcgjWtwO4U1oR",
    alt: "Holiday dinner celebration",
    frameClass: "pp-gallery-card-d",
    tapeClass: "pp-tape-center",
    imageClass: "pp-gallery-image-medium",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzKstWuXkYCbCqZPADI8gokE226adOFWAalbDY1qE2HlKDEVGUFzN-pwkiIyx5xTupe9AUD5xJViliHtj5J5Fyc-ngnQpSmj2kcUJ4u9gnx280NqugDlLkHEwdytJLvdpnGZuuAukhDExwjvetBA4P9_M3885q5jT9j2cj86Gs4CZmNgcd_nI4TS4A47WY9bfYkh52ikNPSBfF6YvblFVPlBTUR8DFbJe7goFa28LehI3nd1hH9c_iuwWk9FTwFQM4luAlQcyy54bu",
    alt: "Friends laughing together at a cafe",
    frameClass: "pp-gallery-card-e",
    tapeClass: "pp-tape-top-left pp-tape-tertiary",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATsgUPKzer5NLasFBXexTYuT-HwEjjJYG3i-87PuKU2vJhABc6AXlmV6wmJecGcmIDJwgpLc9AmMYMNN-NSx7kdBOashv229MWG5nF9S2m9mIs1h1z4nP3UUmBfGxCoH_TASuehP8R0pkdMpLot1p7OkmuJKmpNe0yywmwGe2-LwjFY3jfo5ra-RT8nUU2A7N5Mn2EXEc32L6pYZ0zuFCin5Ep3b345UAVBJBAhWDLHyATMb6VfIS6rp4xud7dVeVPsX9CV4PXGd57",
    alt: "Person with disability learning guitar",
    frameClass: "pp-gallery-card-f",
    tapeClass: "pp-tape-top-right",
    imageClass: "pp-gallery-image-short",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARRCRSR_hfuQvg7f91Y99NUNsziBN6XjBvKPBSeyK7eGFjPhsCy4_wERaWa1PZ6p2XWBLkJFnlgB16A_Xri2meklQEVY3VBShHlnGWU7UXbP1oQwyZEQTAVAsTPFAX_piQvJSI9w4-3GyCqn0JrlzJpCHsY8llZ9dDTF8pAao_ngiHIDMJOjgwOJyxEnWrdeeU_q76TGFaoQS6UEchX14j7xib74nysFgvyro8R39GQBrjBxBlrR5abvQcfgoefvnVt4jvSDOg0Q3V",
    alt: "Shared supportive moment",
    frameClass: "pp-gallery-card-g",
    tapeClass: "pp-tape-center pp-tape-primary",
    imageClass: "pp-gallery-image-tall",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpKSg48t_Yv_uuBEGkqK3CcNF5o28LfXYW-pdw_R-3uStUt_R8MPy1J3WCJgydYJFgyuHH4oR15NOuWjUbSjnZwQTni3e8aWBd0oXHROsDJJzEkvm2HJb73y1Qd3EyUn8FNiRgQuJCa5GWtzHa0_pzscJw_TPDGfycEOUu1RDlAJOLzEKuNNrgkwpEsngpwc6C3gyPy499i4IrbGdXsVoPp40aOkSnKa7QTDReAwVi87iLeR4lJc7gy3CC29FW2B0fpgMB73wGMAmX",
    alt: "Community volunteer activity",
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
    label: "Visit Local Office",
    value: "In the heart of your community",
  },
];

const socialIcons = ["globe", "community"];

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
      <nav className="pp-nav">
        <div className="pp-nav-inner">
          <a className="pp-brand" href="#home">
            Positive Purpose
          </a>
          <div className="pp-nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} className="pp-nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="pp-nav-button" href="#contact">
            Connect
          </a>
        </div>
      </nav>

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
                alt="Adult with disability and support staff member laughing together outdoors"
                className="pp-hero-photo-main"
                imageClassName="pp-hero-main-image"
                priority
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMu0vzNHRXVrrQQljgg7jiyCg0TBkSVULwfmKigAMvDhsEbL_7WzugrSfyeVwUnp1Fbd8V2D3mCY2_vY3QYA9kTX9sLO6w55NXWrHGKK7IT6zveOCnJKv06KrG6bwVlgsaJixS_cO3bmO7kdwPSnYXlvdynUO-6DK88MgSM6jYYd7kfoubmZsi5hZqo7BLrJWnQP75-tqsu207D5shj9NLt2rz8bF_c_ylub0g4fTlFyZuLNCEAQPs-obid-sOF79H4KI9ibVWB89D"
                tapes={["pp-tape-center pp-tape-secondary"]}
              />
              <PhotoFrame
                alt="Genuine connection between two friends"
                className="pp-hero-photo-side pp-hero-photo-left"
                imageClassName="pp-square-photo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsfqexP59qYqWZDZ6jD-rLvGqnVQwGMAWEX5vfl28nG55iCmjacZlLx4Cf7NVcxgGyxtLU-GazXrS01Ca-7OOyCVjtdO5s2ZquLeaYsrEatu8Id55KhLyD5g5f7Va8DuBUWJ7ya_7S5aIRBLy9jKf4VcC2nP1mcWOgJK2sZ_Ati3crG3IRNKeFoHnADIkacKhtkm8gv-8gIzawjnTaqEbrUEklRRRhBifcwtnDQrVnB-_djDwuBa-g00LNis-pDmMgfikdxsEk2Anv"
                tapes={["pp-tape-top-right"]}
              />
              <PhotoFrame
                alt="High-fiving and celebrating independence"
                className="pp-hero-photo-side pp-hero-photo-right"
                imageClassName="pp-square-photo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDajeP1ufKW36Cd4hJcYgIeE0XqX32aHbjyowhenb5sp0YIJ2vxD7Zk-p1UPZzL8JPF5qd_M-6MCWJybBsUjaOvvlDAPgZwJewl6CZZG7LWwX6iYdt8Q42jyW2XSaZMgBdHdwnozA_jFOGwl8RPIXHkEl27QX7lYgKekwV1HOwiOp3dWi97aZ--vobBw5cZofayTdd_dgmokoaQXyGWk11MQfYSuQsxNv6AC-3wrG9Nsi0U7WM_SsoGyI4TqZkODrf0jdHbUc2Kr6BE"
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
              alt="Person with disability making choices during a meal"
              className="pp-about-photo-a"
              imageClassName="pp-about-portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUwvQdkyP-agkAFCMWRHQAs-PKD5ghsT-fFxZ3FqNeW77PaHOPV6UnJzUesVjoAnimop-85wRTUcoYG2S6nsvM_vW823Ft07MSH3-RR1-QsTAZy1P5IAXqRNQqeJywChoN_Q8hfHSg9c37TTvGSfe-dE8ztL9OddTUcjbG8KTcIKZIMTgjzsmcRU0Ec6Fl-wC2P4Sa9GBKAwOx7nzc9gZeUsciv9y6Ry6e5bpNNiAGavDIRIMbcAV-tqeG1Udn8GZozM-1MVf9tku-"
              tapes={["pp-tape-top-right"]}
            />
            <PhotoFrame
              alt="Authentic interaction at a community workshop"
              className="pp-about-photo-b"
              imageClassName="pp-about-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYm1bUmBwt3Z_VwBLdV_2FKRp9EOyj4mn7ZmtUbKawC48O1N0mCA9tNFDR1BsDARryFNhyKQqxcX3MXgLmoZLWJK_2vNUkCZuUdA1aS1SNR5LnSAQ3kFqCCA6q2sWDLPEm2B9YbV1VbwucTcSMRSIG_dZLEAJQCdSwFCV0AquN-afOU9IXvgGnGGfUjxdgSHIOrVc8OLGRHjMozmOqqBK5YkqGHEsQNZyF2hsRUoOSgX-DSLsLqVmipMmjGcXGzHjN0-D-Sux1M5uE"
              tapes={["pp-tape-top-left pp-tape-secondary"]}
            />
            <PhotoFrame
              alt="Person with disability enjoying a walk in the local park"
              className="pp-about-photo-c"
              imageClassName="pp-about-landscape"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdM6srwbKe25GzdJrpdlY7ku4ZSqrUllIjXEdMGmMyZWiu4t9fGdT1qrYRm-tjnLwZ4yowjBITRvJNFZb_RLPr5Rt6uS6T1LR6l6BI9zuhmJZcHkAlLS6r4jZWYH-_Bz-ztqh5BwEGqkPFC4gsdgc3ZQpqpdwy3pjVF8bsCk7qpMY2hKE64O5vMZpAZyD1SjX4ONYryuwUS9GGTqodTPDPQPuihvfjFBERp6VU55XzXbCA24AB-NcpyfO63b1CJQ25zLPymoMlrqqy"
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
              alt="Real moment of connection between participant and advocate"
              className="pp-reasons-main-photo"
              imageClassName="pp-reasons-main-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9qE1Jx33QShYuDIx8jI2IPbxbppIoreZU4uWWTttDdpu3eRn8pyLSVNcEh2G4LnyUaZQqyYqjQT1COJb6fn8klKIpwPRrIorjRLUsURSjRTYga_vHhSUxhMw4P6r8EohgAk1RSxTyZ-AikG8KlPnFpjjJaho4ekyFUZWOUS5XHYJN8mrjRCu6IL2FNuEinw-PdLEe0UOmnnJi0mNBOB7OSNkUJQ8FtQuvZTtViUcfrkuM2MrRH9tkWroo9l_GfOppvDvUgzaOnC1"
              tapes={["pp-tape-top-left pp-tape-secondary", "pp-tape-top-right"]}
            />
            <PhotoFrame
              alt="Joyful smile of a person achieving a personal milestone"
              className="pp-reasons-side-photo"
              imageClassName="pp-square-photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCTC7OhIQlAFi3DzRi0npbeTuiI94pdJMZHitZu5Cm-CpmtB_wLGXszJobJzZtaGXpVS5Myaj0iWloOnIRYRzcDw94kZZ7duLCLtVTgqhDFTcU6uxF-tQCxfnQuGbBMJ_omlmoZwBY7YrebOBzWc2ot97Dw7pfCJke8_qibPu6tafFJZmyqduFTTJ3e6UvS0T_WbY_agEti7oHy2JJ1Zl-XaZVGTgYmacggzKrwaDa-XBw49aZ00b6ywgOkYPqKZdFwWlpbchmbl0a"
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
            <button className="pp-gallery-button" type="button">
              View Full Gallery
              <Icon className="pp-gallery-button-icon" name="external" />
            </button>
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
              Rejecting the clinical for the human kaleidoscope, providing
              dignified support services that are not just a necessity, but a
              high-quality experience.
            </p>
            <div className="pp-social-row">
              {socialIcons.map((icon) => (
                <button key={icon} className="pp-social-button" type="button">
                  <Icon name={icon} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="pp-footer-heading">Quick Links</h3>
            <ul className="pp-footer-list">
              {navLinks.map((link) => (
                <li key={link.href}>
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
                <a href="#contact">Careers</a>
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
              <p className="pp-hours-value">Mon - Fri: 8am - 5pm</p>
              <p className="pp-hours-note">Sat - Sun: Emergency Support</p>
              <div className="pp-hours-contact">
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
