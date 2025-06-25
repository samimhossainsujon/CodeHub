export const mockRepositories = [
  {
    id: '1',
    name: 'awesome-react-components',
    description: 'A curated list of awesome React components and libraries. Perfect for building modern web applications with reusable UI elements.',
    language: 'TypeScript',
    stars: 15420,
    forks: 2103,
    isPrivate: false,
    updatedAt: '2 days ago',
    owner: 'john-doe',
  },
  {
    id: '2',
    name: 'python-ml-toolkit',
    description: 'Machine learning toolkit for Python with various algorithms and utilities for data science projects.',
    language: 'Python',
    stars: 8765,
    forks: 1234,
    isPrivate: false,
    updatedAt: '5 hours ago',
    owner: 'jane-smith',
  },
  {
    id: '3',
    name: 'golang-microservices',
    description: 'Microservices architecture example built with Go, featuring Docker containers and Kubernetes deployment.',
    language: 'Go',
    stars: 5432,
    forks: 876,
    isPrivate: true,
    updatedAt: '1 week ago',
    owner: 'tech-corp',
  },
  {
    id: '4',
    name: 'rust-web-framework',
    description: 'High-performance web framework written in Rust with async support and minimal overhead.',
    language: 'Rust',
    stars: 12543,
    forks: 1876,
    isPrivate: false,
    updatedAt: '3 days ago',
    owner: 'rust-team',
  },
  {
    id: '5',
    name: 'vue-dashboard-ui',
    description: 'Modern dashboard UI components built with Vue 3 and TypeScript. Includes charts, tables, and forms.',
    language: 'JavaScript',
    stars: 3210,
    forks: 543,
    isPrivate: false,
    updatedAt: '1 day ago',
    owner: 'ui-team',
  },
  {
    id: '6',
    name: 'swift-ios-app',
    description: 'iOS application template with modern Swift practices, SwiftUI, and Core Data integration.',
    language: 'Swift',
    stars: 2187,
    forks: 321,
    isPrivate: false,
    updatedAt: '4 days ago',
    owner: 'mobile-dev',
  },
];

export const mockFileTree = [
  {
    name: 'src',
    type: 'folder' as const,
    path: 'src',
    children: [
      {
        name: 'components',
        type: 'folder' as const,
        path: 'src/components',
        children: [
          { name: 'Header.tsx', type: 'file' as const, path: 'src/components/Header.tsx' },
          { name: 'Footer.tsx', type: 'file' as const, path: 'src/components/Footer.tsx' },
          { name: 'Button.tsx', type: 'file' as const, path: 'src/components/Button.tsx' },
        ],
      },
      {
        name: 'pages',
        type: 'folder' as const,
        path: 'src/pages',
        children: [
          { name: 'Home.tsx', type: 'file' as const, path: 'src/pages/Home.tsx' },
          { name: 'About.tsx', type: 'file' as const, path: 'src/pages/About.tsx' },
        ],
      },
      { name: 'App.tsx', type: 'file' as const, path: 'src/App.tsx' },
      { name: 'index.tsx', type: 'file' as const, path: 'src/index.tsx' },
    ],
  },
  {
    name: 'public',
    type: 'folder' as const,
    path: 'public',
    children: [
      { name: 'index.html', type: 'file' as const, path: 'public/index.html' },
      { name: 'favicon.ico', type: 'file' as const, path: 'public/favicon.ico' },
    ],
  },
  { name: 'package.json', type: 'file' as const, path: 'package.json' },
  { name: 'README.md', type: 'file' as const, path: 'README.md' },
  { name: 'tsconfig.json', type: 'file' as const, path: 'tsconfig.json' },
];

export const mockFileContents: { [key: string]: string } = {
  'src/App.tsx': `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;`,
  'src/components/Header.tsx': `import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>My App</h1>
        </Link>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
}`,
  'src/components/Button.tsx': `import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}`,
  'README.md': `# Awesome React App

This is a modern React application built with TypeScript and modern web development practices.

## Features

- ⚡ Fast and performant
- 🎨 Modern UI design
- 📱 Fully responsive
- 🔧 TypeScript support
- 🧪 Comprehensive testing

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/username/awesome-react-app.git
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm start
\`\`\`

## Available Scripts

- \`npm start\` - Runs the app in development mode
- \`npm test\` - Launches the test runner
- \`npm run build\` - Builds the app for production
- \`npm run eject\` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`,
  'package.json': `{
  "name": "awesome-react-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.45",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.3.3"
  }
}`,
};

export const mockRepositoryStats = {
  stars: 15420,
  forks: 2103,
  watchers: 1876,
  commits: 3542,
  contributors: 47,
  lastUpdate: 'December 15, 2024',
};