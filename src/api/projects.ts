// Description: Get all projects
// Endpoint: GET /api/projects
// Request: {}
// Response: { projects: Array<{ id, title, description, image, techStack, liveLink, githubLink }> }
export const getProjectsData = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          {
            id: '1',
            title: 'Cafe Buddy Services',
            description: 'Developed a full-stack application with a Node.js backend and responsive web interface for cyber cafe services like PAN card and resume design. Integrated a WhatsApp bot using WhatsApp-Web.js for document submission and order tracking via OpenRouter AI API.',
            image: 'https://i.ibb.co/DPxqvGyM/1752864322877-404129203.png',
            techStack: ['Node.js', 'Express.js', 'SQLite', 'WhatsApp-Web.js', 'Multer', 'Axios'],
            liveLink: 'https://cafebuddy.site',
            githubLink: '', // No GitHub link provided
          },
          {
            id: '2',
            title: 'Telegram Quiz Bot with AI Chat',
            description: 'Created a Python-based Telegram bot for quizzes (Police Bharti, UPSC) with JSON-stored questions. Integrated Hugging Face InferenceClient for multilingual AI responses and added an auto-sleep feature with robust error handling.',
            image: 'https://i.ibb.co/rGyqd4V1/Gemini-Generated-Image-l0h6ftl0h6ftl0h6.png',
            techStack: ['Python', 'python-telegram-bot', 'Hugging Face', 'JSON', 'asyncio'],
            liveLink: 'https://t.me/GagGoblin_bot',
            githubLink: '', // No GitHub link provided
          },
          {
            id: '3', // Or whatever the next number is
            title: 'RSLT Media | Visual Strategy Platform',
            description: 'Engineered a high-performance portfolio with a "Cinematic UI" using React & Framer Motion. Features a custom "Headless CMS" that commits directly to GitHub via Octokit for content management, and a dual-channel lead notification system using EmailJS.',
            image: 'https://i.ibb.co/n8BrpvMY/RSLT.png', // ⚠️ ACTION: Take a screenshot and upload to ImgBB to get your real link
            techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Octokit'],
            liveLink: 'https://rslt-portfolio.vercel.app', // Update with your actual Vercel link
            githubLink: '', // Update with your actual Repo link
          },
          {
            id: '4', // Or next available ID
            title: 'Money Manager Ledger (₹)',
            description: 'Developed a local-first personal finance application designed to manage peer-to-peer debts, investments, and personal expenses. Built to solve the complexity of tracking money owed to/by friends and family, it features real-time net-balance calculations, investment tracking, and automated liquidity alerts without requiring a backend or user login.',
            image: 'https://i.ibb.co/tT2sr46J/Money-Ledger.png', // Replace with your screenshot link
            techStack: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'LocalStorage API', 'Intl Currency API'],
            liveLink: 'https://rahulsonawane-rgb.github.io/Diary', // Add your live link if hosted (e.g., GitHub Pages)
            githubLink: '', 
          },
          {
            id: '5',
            title: 'Worker Management System',
            description: 'Built a web-based Worker Management System using Google Apps Script, integrated with Google Sheets for data storage. Features include worker management, daily attendance tracking, attendance correction, and custom pay report generation.',
            image: 'https://i.ibb.co/VcBqx03b/Worker-Project.jpg',
            techStack: ['Google Apps Script', 'Google Sheets', 'HTML', 'CSS', 'JavaScript'],
            liveLink: '', // No live demo link provided
            githubLink: '',
          },
        ],
      });
    }, 500);
  });
};