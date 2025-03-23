// /app/projects/layout.js
export default function ProjectsLayout({ children }) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Shared header or navigation */}
          {/* Render nested pages */}
          {children}
        </div>
      </div>
    )
  }