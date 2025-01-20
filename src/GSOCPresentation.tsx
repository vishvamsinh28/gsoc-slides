import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GSOCPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "1. What is Open Source?",
      content: [
        "Software with freely available source code for viewing, modification, and distribution",
        "Built on principles of transparency, collaboration, and community ownership",
        "Powers 80% of the internet (Linux, Apache, etc.)",
        "Drives innovation in AI (TensorFlow, PyTorch)",
        "Enables modern web development (React, Vue.js)",
        "Learn from real-world codebases and build meaningful portfolio"
      ]
    },
    {
      title: "2. What is GSoC?",
      content: [
        "Founded in 2005 by Google to promote open source",
        "19,000+ students from 112 countries have completed GSoC",
        "Over 800 open source organizations supported",
        "Paid remote internship (3-4 months) with one-on-one mentorship",
        "Real-world project development with flexible working hours",
        "Many contributors become maintainers or work at major tech companies"
      ]
    },
    {
      title: "3. GSoC Statistics 2024",
      content: [
        "200+ mentor organizations and 1000+ mentors globally",
        "Projects across 40+ programming languages",
        "Web/Cloud (30%), AI/ML (25%), Development Tools (20%)",
        "Scientific Computing (15%), Other (10%)",
        "80% completion rate",
        "65% contributors continue involvement"
      ]
    },
    {
      title: "4. Journey with AsyncAPI",
      content: [
        "Discovery through API documentation search",
        "Started with documentation improvements",
        "Graduated to feature implementations",
        "Overcame initial challenges with API concepts",
        "Grew into technical writing",
        "Made significant community impact"
      ]
    },
    {
      title: "5. Why Consider GSoC?",
      content: [
        "Real-world software development experience",
        "Understanding of software architecture",
        "Code review and collaboration skills",
        "30% higher interview success rate",
        "Competitive stipend ($1,500-$6,000)",
        "Conference invitations and networking opportunities"
      ]
    },
    {
      title: "6. Are You Good Enough?",
      content: [
        "Basic programming knowledge required",
        "Git fundamentals needed",
        "Communication skills in English essential",
        "Consistency valued over expertise",
        "Learning attitude over current knowledge",
        "Many first-time contributors and non-CS students succeed"
      ]
    },
    {
      title: "7. Getting Started",
      content: [
        "Master Git basics (clone, commit, push, pull)",
        "Learn one programming language well",
        "Familiarize with basic command line usage",
        "Use resources like GitHub Learning Lab and freeCodeCamp",
        "Set up development environment (VS Code, Git)",
        "Study organization-specific tutorials"
      ]
    },
    {
      title: "8. Choosing an Organization",
      content: [
        "Evaluate technology stack familiarity",
        "Assess project complexity level",
        "Check community responsiveness",
        "Review documentation quality",
        "Watch for red flags: inactive repos, poor responses",
        "Research past projects and GitHub activity"
      ]
    },
    {
      title: "9. Eligibility Details",
      content: [
        "Must be 18+ years of age",
        "Enrolled in accredited institution",
        "Available worldwide with proper work authorization",
        "Maximum two GSoC completions allowed",
        "Gap year students eligible",
        "Working professionals eligible if studying"
      ]
    },
    {
      title: "10. Connecting with Organizations",
      content: [
        "Use Discord/Slack as primary communication channels",
        "Engage in mailing lists and GitHub discussions",
        "Read documentation before asking questions",
        "Introduce yourself properly to the community",
        "Share your interests and skills clearly",
        "Help other newcomers and participate in community calls"
      ]
    },
    {
      title: "11. Starting Contributions",
      content: [
        "Set up development environment properly",
        "Read contribution guidelines thoroughly",
        "Find and work on good first issues",
        "Follow proper fork and PR process",
        "Write clear commit messages",
        "Maintain good test coverage"
      ]
    },
    {
      title: "12. GSoC Proposal Writing",
      content: [
        "Include project abstract (250 words)",
        "Provide detailed implementation plan",
        "Create timeline with clear milestones",
        "Share personal background",
        "Document previous contributions",
        "Demonstrate clear problem understanding"
      ]
    },
    {
      title: "13. Success Tips",
      content: [
        "Start 3-4 months before applications",
        "Maintain regular contribution schedule",
        "Balance with current commitments",
        "Provide weekly updates to mentors",
        "Keep clear documentation",
        "Focus on technical growth"
      ]
    },
    {
      title: "14. Dos and Don'ts",
      content: [
        "DO: Document work comprehensively",
        "DO: Test thoroughly before submitting",
        "DO: Maintain regular communication",
        "DON'T: Submit untested code",
        "DON'T: Miss community meetings",
        "DON'T: Copy other proposals"
      ]
    },
    {
      title: "15. Timeline Breakdown",
      content: [
        "January: Organization applications",
        "February-March: Student exploration",
        "March: Proposal preparation",
        "May: Community bonding",
        "June-August: Coding periods",
        "September: Final evaluation"
      ]
    },
    {
      title: "16. Project Details",
      content: [
        "Code development (70% of projects)",
        "Documentation (15% of projects)",
        "Testing/QA (10% of projects)",
        "UI/UX (5% of projects)",
        "Size options: Small (~90h, $1,500) to Large (~350h, $6,000)",
        "Flexible duration: 10-22 weeks part-time"
      ]
    },
    {
      title: "17. Common Q&A",
      content: [
        "Application success rates vary by organization",
        "Multiple organization applications allowed",
        "Program can be balanced with studies",
        "Required skill level varies by project",
        "Learning curve depends on project complexity",
        "Post-program opportunities abundant"
      ]
    },
    {
      title: "18. Practical Demonstration",
      content: [
        "Learn to find good first issues",
        "Practice making your first PR",
        "Draft compelling proposals",
        "Set up local development environment",
        "Master Git commands and GitHub interface",
        "Study successful PRs and merged features"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">
            Google Summer of Code
          </h1>
          <p className="text-lg text-indigo-600">
            Comprehensive Guide {currentSlide + 1}/{slides.length}
          </p>
        </div>

        {/* Slide Content */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 min-h-[400px] relative transition-all duration-300">
          <h2 className="text-3xl font-bold mb-8 text-indigo-800">
            {slides[currentSlide].title}
          </h2>
          <ul className="space-y-4">
            {slides[currentSlide].content.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-lg text-gray-700"
              >
                <span className="text-indigo-500 font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center px-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-4 rounded-full transition-colors ${
              currentSlide === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:bg-indigo-100'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide indicators */}
          <div className="flex space-x-2 overflow-x-auto py-2 px-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index
                    ? 'bg-indigo-600'
                    : 'bg-indigo-200 hover:bg-indigo-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-4 rounded-full transition-colors ${
              currentSlide === slides.length - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:bg-indigo-100'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GSOCPresentation;
