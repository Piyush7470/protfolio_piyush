import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function JourneyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-3xl">
        A snapshot of my education, technical skills, professional experience, projects, certifications, and events.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-slate-300 dark:border-slate-700 pl-8 pb-8">
          <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px] top-0"></div>
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h2 className="text-2xl font-bold">Projects & Experience</h2>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold">Yukti Tech IT Services Pvt Ltd</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-2">Indore, MP • Apr 2022 – May 2023</p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Created infrastructure for seamless building, deployment, and integration.</li>
                  <li>Provided fleet-wide visibility for machines and ownership accounting.</li>
                  <li>Onboarded shared services into resource management for efficient distribution.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Bentek Automation Pvt. Ltd.</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-2">May 2023 – Sep 2024 • Front-end in Java</p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Built and maintained applications handling high-speed concurrent customer requests.</li>
                  <li>Contributed to high-level/low-level designs, estimations, and UX-focused delivery.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Kitchen Story — Freelancing</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-2">Nov 2023 – Dec 2023</p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Developed a user-friendly e-commerce application for groceries and nearby shop access.</li>
                  <li>Integrated Razorpay for secure payments and smooth checkout flow.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Codedevh — Freelancing</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-2">Jul 2025 – Aug 2025</p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Built LMS with 3 modules and role-based login.</li>
                  <li>Developed Admin Dashboard and integrated Stripe payments.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Gym Management</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-2"><a className="underline" href="https://gym-management-uv5c.vercel.app/" target="_blank" rel="noreferrer">Live Link</a> • React.js, React Hooks, Node.js, Express, MongoDB</p>
                <p className="text-slate-600 dark:text-slate-400 mb-2">Streamlined registrations, workout scheduling, trainer assignments, and membership tracking.</p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Implemented dynamic membership management, workout plans, and schedules.</li>
                  <li>Built REST APIs for auth, trainer allocation, and membership operations.</li>
                  <li>Used MongoDB for secure and scalable data storage.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px]"></div>
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Master of Computer Application (MCA)</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Lovely Professional University, Punjab • Sep 2024 – Pursuing</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">BCA — Bachelor of Computer Application</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Awadhesh Pratap Singh University, Rewa (MP) • Graduated May 2022</p>
                <p className="text-slate-600 dark:text-slate-400">Percentage: 68.70%</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Higher Secondary (Class 12)</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Children Academy High School, Rewa • State Board</p>
                <p className="text-slate-600 dark:text-slate-400">Percentage: 57.60%</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Secondary (Class 10)</h3>
                <p className="text-emerald-600 dark:text-emerald-400 mb-1">Children Academy High School, Rewa • State Board</p>
                <p className="text-slate-600 dark:text-slate-400">Percentage: 52.70%</p>
              </div>
            </div>
          </div>

          <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px]"></div>
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h2 className="text-2xl font-bold">Technical Skillset</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
              <li>Algorithms and Data Structures</li>
              <li>Programming: Java, JavaScript, HTML5, CSS3, Firebase</li>
              <li>Operating Systems: Windows 11</li>
              <li>Frameworks: React.js</li>
              <li>Server-side: Java 8</li>
              <li>Databases: MySQL, SSMS, MongoDB</li>
              <li>APIs & Tools: Postman, REST APIs, Git, Version Control</li>
              <li>Servers: Apache Tomcat 9.0, XAMPP</li>
              <li>Editors/IDEs: VS Code, IntelliJ IDEA, Sublime Text 3</li>
            </ul>
          </div>

          <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-[9px]"></div>
          <div>
            <div className="flex items-center mb-2">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h2 className="text-2xl font-bold">Competitive Programming</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">HackerRank: <span className="font-medium">piyushnapit86</span></p>

            <div className="flex items-center mb-2">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h2 className="text-2xl font-bold">Certifications & Awards</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 mb-8">
              <li>Caltech University of California – Full Stack Web Developer</li>
              <li>Postman – API Testing</li>
              <li>AISSCE – Hackathon (Associated with GeeksforGeeks)</li>
              <li>GeeksforGeeks – Hackathon Team Lead</li>
              <li>HackerRank – React.js Certificate</li>
              <li>Simplilearn – Java SE 8 Developer</li>
              <li>Crio.do – DSA Problem Solver (Beginner)</li>
              <li>Meta – Front-end Development</li>
              <li>Microsoft – Foundation of Front-end Development</li>
              <li>MongoDB – Skill Development (MongoDB School)</li>
              <li>Oracle – OCI 2025 Certified Generative AI Professional</li>
              <li>GeeksforGeeks Hackathon (AISSCE campus) – Cleared 2 rounds</li>
            </ul>

            <div className="flex items-center mb-2">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h2 className="text-2xl font-bold">Events</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
              <li>GDG (Google Developer Group) – Jalandhar, Punjab</li>
              <li>Microsoft Ignite – Learned foundational cloud computing workflows</li>
              <li>GeeksforGeeks Hackathon (AISSCE campus) – Organized and competed (cleared 2 rounds)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
