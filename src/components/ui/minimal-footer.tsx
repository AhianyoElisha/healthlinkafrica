import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import logoSvg from "@/assets/healthlinkafrica.svg";

export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  link: string;
}

export interface MinimalFooterProps {
  brandName?: string;
  brandDescription?: string;
  resources?: FooterLink[];
  company?: FooterLink[];
  socialLinks?: SocialLink[];
}

export function MinimalFooter({
  brandName = "Health Link Africa",
  brandDescription = "Connecting communities to faster, smarter care across Sub-Saharan Africa.",
  resources = [
    { title: "Blog", href: "#" },
    { title: "Help Center", href: "#" },
    { title: "Contact Support", href: "/contact" },
    { title: "Community", href: "#" },
  ],
  company = [
    { title: "About Us", href: "#" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "#" },
    { title: "Contact", href: "/contact" },
  ],
  socialLinks = [
    { icon: <FacebookIcon className="size-4" />, link: "#" },
    { icon: <InstagramIcon className="size-4" />, link: "#" },
    { icon: <LinkedinIcon className="size-4" />, link: "#" },
    { icon: <TwitterIcon className="size-4" />, link: "#" },
  ],
}: MinimalFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)] mx-auto max-w-4xl md:border-x">
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="grid max-w-4xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="flex items-center gap-2 w-max opacity-75">
              <img src={logoSvg} alt={brandName} className="h-32 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
              {brandDescription}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-accent rounded-md border p-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className="w-max py-1 text-sm duration-200 hover:underline"
                  to={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">Company</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className="w-max py-1 text-sm duration-200 hover:underline"
                  to={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-border absolute inset-x-0 h-px w-full" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 pt-2 pb-5">
          <p className="text-muted-foreground text-center font-thin">
            &copy; 2024&ndash;{year} Health Link Africa. Accra, Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
}
