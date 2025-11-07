import Image from "next/image"
import { Code, Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      image: "/certificates/aws.png",
      link: "https://aws.amazon.com/certification/"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      image: "/certificates/react.png",
      link: "https://www.meta.com/developers/"
    },
    {
      title: "Full Stack Development",
      issuer: "MERN Stack",
      year: "2022",
      image: "/certificates/mern.png",
      link: "#"
    }
  ]

  const badges = [
    {
      name: "JavaScript Expert",
      image: "/badges/js.png",
      link: "#"
    },
    {
      name: "React Master",
      image: "/badges/react.png",
      link: "#"
    },
    {
      name: "Node.js Pro",
      image: "/badges/node.png",
      link: "#"
    },
    {
      name: "TypeScript",
      image: "/badges/ts.png",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">About Me</h1>

      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 group">
              <div className="absolute inset-0 bg-emerald-600/20 dark:bg-emerald-400/20 rounded-xl blur-3xl group-hover:blur-2xl transition-all duration-300"></div>
              <Image 
                src="/profile.jpg" 
                alt="Piyush Napit" 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">JavaScript</span>
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">TypeScript</span>
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">React</span>
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">Next.js</span>
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">Node.js</span>
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in animation-delay-200">My Story</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 animate-fade-in animation-delay-300">
            Hello! I'm Piyush Napit, a passionate full-stack developer with over 3 years of experience building web
            applications. My journey in tech began during my university years when I discovered my love for turning
            ideas into reality through code.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-6 animate-fade-in animation-delay-400">
            After graduating with a degree in Computer Application, I worked at several tech companies where I honed my
            skills in modern web development. I've had the opportunity to work on a diverse range of projects, from
            e-commerce platforms to complex data visualization tools.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-10 animate-fade-in animation-delay-500">
            What drives me is creating intuitive, accessible, and performant applications that solve real problems. I'm
            constantly learning and exploring new technologies to stay at the forefront of web development.
          </p>

          <h2 className="text-2xl font-bold mb-4 animate-fade-in animation-delay-600">What I Do</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in animation-delay-700">
              <Code className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Building responsive, accessible websites and web applications with modern technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in animation-delay-800">
              <Briefcase className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Providing technical expertise and guidance for your digital projects and challenges.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 animate-fade-in animation-delay-900">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {certifications.map((cert, index) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${(index + 10) * 100}ms` }}
              >
                <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {cert.issuer} • {cert.year}
                </p>
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4 animate-fade-in animation-delay-1200">Badges & Achievements</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {badges.map((badge, index) => (
              <a
                key={badge.name}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(index + 13) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-emerald-600/10 dark:bg-emerald-400/10 group-hover:bg-emerald-600/20 dark:group-hover:bg-emerald-400/20 transition-colors"></div>
                <Image
                  src={badge.image}
                  alt={badge.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <span className="text-white text-sm font-medium">{badge.name}</span>
                </div>
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4 animate-fade-in animation-delay-1500">Education</h2>
          <div className="space-y-6 mb-10">
            <div className="flex gap-4 animate-fade-in animation-delay-1600">
              <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Master of Computer Application (MCA)</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Lovely Professional University, Punjab • Sep 2024 – Pursuing</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-in animation-delay-1700">
              <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">BCA — Bachelor of Computer Application</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Awadhesh Pratap Singh University, Rewa (MP) • Graduated May 2022</p>
                <p className="text-slate-600 dark:text-slate-400">Percentage: 68.70%</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-in animation-delay-1800">
              <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Higher Secondary (Class 12)</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Children Academy High School, Rewa • State Board</p>
                <p className="text-slate-600 dark:text-slate-400">Percentage: 57.60%</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-in animation-delay-1900">
              <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Secondary (Class 10)</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Children Academy High School, Rewa • State Board</p>
                <p className="text-slate-600 dark:text-slate-400">Percentage: 52.70%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
