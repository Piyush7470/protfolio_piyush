import Link from "next/link"
import { Github, Linkedin, Mail, Mountain } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Mountain className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <span>Piyush Napit</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Full-stack developer specializing in creating exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Piyush7470"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-700 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-napit-354314204/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-700 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:piyushnapit86@gmail.com"
                aria-label="Email"
                className="text-slate-700 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/journey"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-design"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-slate-600 dark:text-slate-400 space-y-2">
              <p>Greater Noida</p>
              <p>
                <a
                  href="mailto:sm2552744@gmail.com"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  piyushnapit86@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel: 9109065135"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  +91 8962538416
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-slate-600 dark:text-slate-400">
          <p>© {currentYear} Piyush Napit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
