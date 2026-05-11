"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-primary/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="text-primary">陈</span>
            <span className="text-white">龙</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-dark-400 hover:text-primary transition-colors"
              >
                {link === "Home"
                  ? "首页"
                  : link === "About"
                  ? "关于"
                  : link === "Projects"
                  ? "项目"
                  : link === "Skills"
                  ? "技能"
                  : "联系"}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-dark-400"
          >
            &copy; {new Date().getFullYear()} 陈龙 · Analog IC Design Engineer
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
