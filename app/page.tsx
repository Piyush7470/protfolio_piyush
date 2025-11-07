import Link from "next/link"
import Image from "next/image"
import AnimatedBackground from "@/components/AnimatedBackground"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="relative min-h-[90vh] flex items-center">
        <AnimatedBackground />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
                Hi, I'm <span className="text-emerald-600 dark:text-emerald-400 animate-gradient">Piyush Napit</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-8 text-slate-700 dark:text-slate-300 animate-fade-in animation-delay-200">
                Full-stack Developer crafting exceptional digital experiences
              </h2>
              <p className="text-base sm:text-lg mb-10 text-slate-600 dark:text-slate-400 max-w-2xl animate-fade-in animation-delay-400">
                I build accessible, user-friendly applications with modern technologies. Specializing in React, Next.js,
                Node.js, and everything in between.
              </p>
              <div className="flex flex-wrap gap-4 mb-12 animate-fade-in animation-delay-600">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-2 transition-all hover:scale-105 transform"
                >
                  View My Work <ArrowRight size={18} className="animate-bounce-x" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-lg transition-all hover:scale-105 transform"
                >
                  Get In Touch
                </Link>
                <a
                  href="/PiyushNapit.pdf"
                  download="PiyushNapit.pdf"
                  className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-2 transition-all hover:scale-105 transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-bounce-y"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
              <div className="flex gap-6 animate-fade-in animation-delay-800">
                <a
                	href="https://github.com/Piyush7470"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-700 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors hover:scale-110 transform"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-700 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors hover:scale-110 transform"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:piyushnapit86@gmail.com"
                  aria-label="Email"
                  className="text-slate-700 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors hover:scale-110 transform"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-12 lg:mb-0 animate-fade-in animation-delay-400">
              <div className="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[280px] sm:h-[350px] lg:h-[400px] mx-auto">
                <div className="absolute inset-0 bg-emerald-600/20 dark:bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-600/20 dark:border-emerald-400/20 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="./profile.jpg"
                    alt="Piyush Napit"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-slate-200 dark:bg-slate-700 relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt="Project thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    A brief description of this amazing project and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Tailwind</span>
                  </div>
                  <Link
                    href={`/projects/${i}`}
                    className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline inline-flex items-center"
                  >
                    View Project <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            I'm currently available for freelance work and open to new opportunities. If you have a project that needs
            some creative input, let's connect!
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg inline-flex items-center gap-2 transition-all"
          >
            Contact Me <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
