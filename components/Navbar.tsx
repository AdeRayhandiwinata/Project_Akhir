"use client";

import Link from "next/link";
import { useState } from "react";
import { Car, Menu, X, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { href: "#mobil", label: "Armada" },
  { href: "#cara", label: "Cara Sewa" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Car className="h-6 w-6 text-primary" />
          <span>DriveRent</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm", className: "rounded-full px-5" })}
          >
            <Phone className="mr-1.5 h-3.5 w-3.5" />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/40 bg-white px-6 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm", className: "mt-2 w-full rounded-full" })}
          >
            <Phone className="mr-1.5 h-3.5 w-3.5" />
            Hubungi Kami
          </a>
        </div>
      )}
    </header>
  );
}
