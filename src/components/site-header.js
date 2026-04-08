import Link from "next/link";

export const siteNavLinks = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/#about", label: "About" },
  { key: "services", href: "/#services", label: "Services" },
  { key: "videos", href: "/videos", label: "Videos" },
];

export default function SiteHeader({ active = "home" }) {
  return (
    <nav className="pp-nav">
      <div className="pp-nav-inner">
        <Link className="pp-brand" href="/">
          Positive Purpose
        </Link>
        <div className="pp-nav-links" aria-label="Primary">
          {siteNavLinks.map((link) => (
            <Link
              key={link.key}
              className={`pp-nav-link ${active === link.key ? "pp-nav-link-active" : ""}`.trim()}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link className="pp-nav-button" href="/#contact">
          Connect
        </Link>
      </div>
    </nav>
  );
}
