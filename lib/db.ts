// Mock database
const db = {
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      summary: "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
      description:
        "This e-commerce platform provides businesses with a complete solution for selling products online. It includes features such as product catalog management, shopping cart, secure checkout, user accounts, and order tracking. The admin dashboard allows store owners to manage products, view orders, and analyze sales data.",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe API", "MongoDB", "NextAuth.js"],
      features: [
        "Responsive product catalog with filtering and search",
        "User authentication and account management",
        "Shopping cart with persistent storage",
        "Secure checkout with Stripe integration",
        "Order history and tracking",
        "Admin dashboard for product and order management",
      ],
      challenges: [
        "Implementing a secure and seamless checkout process",
        "Optimizing performance for large product catalogs",
      ],
      solutions: [
        "Integrated Stripe for secure payment processing and implemented server-side validation",
        "Implemented pagination, lazy loading, and image optimization techniques",
      ],
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      liveUrl: "https://ecommerce-platform-demo.vercel.app",
      testimonial: {
        quote:
          "The e-commerce platform John built for us has transformed our business. Sales have increased by 40% since launch.",
        author: "Jane Smith",
        role: "CEO, Fashion Boutique",
      },
    },
    {
      id: "2",
      title: "Task Management App",
      summary: "A collaborative task management application with real-time updates and team features.",
      description:
        "This task management application helps teams organize and track their work efficiently. It features a drag-and-drop interface for managing tasks across different stages, real-time updates for team collaboration, and detailed analytics to monitor productivity. The app is designed to be intuitive and adaptable to different team workflows.",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript", "React DnD", "Chart.js"],
      features: [
        "Drag-and-drop task management",
        "Real-time updates and collaboration",
        "Team and project organization",
        "Task commenting and file attachments",
        "Due date reminders and notifications",
        "Productivity analytics and reporting",
      ],
      challenges: [
        "Implementing real-time synchronization across multiple users",
        "Creating an intuitive drag-and-drop interface",
      ],
      solutions: [
        "Used Firebase Realtime Database for instant data synchronization",
        "Implemented React DnD with custom animations for a smooth user experience",
      ],
      githubUrl: "https://github.com/johndoe/task-management-app",
      liveUrl: "https://task-app-demo.vercel.app",
      testimonial: null,
    },
    {
      id: "3",
      title: "Weather Dashboard",
      summary: "A weather dashboard that provides real-time weather data and forecasts for locations worldwide.",
      description:
        "This weather dashboard application provides users with accurate and up-to-date weather information for any location around the world. It features current conditions, hourly forecasts, and 7-day predictions. The app includes interactive maps, severe weather alerts, and historical weather data comparison. Users can save favorite locations for quick access.",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet Maps", "Geolocation API", "Local Storage"],
      features: [
        "Current weather conditions and details",
        "Hourly and 7-day weather forecasts",
        "Interactive weather maps",
        "Location search and geolocation",
        "Saved favorite locations",
        "Weather alerts and notifications",
        "Historical weather data comparison",
      ],
      challenges: ["Handling and visualizing complex weather data", "Optimizing API calls to stay within rate limits"],
      solutions: [
        "Used Chart.js to create intuitive visualizations of temperature, precipitation, and other metrics",
        "Implemented caching strategies and batched API requests to minimize calls",
      ],
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      testimonial: {
        quote:
          "This weather app has the best UI I've seen. The forecasts are accurate and the maps are incredibly useful.",
        author: "Michael Johnson",
        role: "Outdoor Enthusiast",
      },
    },
  ],
}

export default db
