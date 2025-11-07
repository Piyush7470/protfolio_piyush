"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-3xl">
        Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you! Fill out the
        form below or reach out through any of the provided contact methods.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <Github className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <a
                  href="https://github.com/Piyush7470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  github.com/Piyush7470
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:piyushnapit86@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  piyushnapit86@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href="tel:8962538416"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                 +91  8962538416
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">Noida, UP</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Availability</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            I'm currently available for freelance work and open to discussing new opportunities. My typical response
            time is within 24 hours.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg">
                There was an error sending your message. Please try again.
              </div>
            )}

            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent dark:bg-slate-700 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent dark:bg-slate-700 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent dark:bg-slate-700 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 focus:border-transparent dark:bg-slate-700 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
