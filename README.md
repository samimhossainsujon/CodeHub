# 🚀 CodeHub

A modern, beautiful, and feature-rich code repository platform built with Next.js, TypeScript, and Tailwind CSS. Discover, share, and collaborate on code repositories with an elegant UI and powerful features.

---

## ✨ Features

- 🔍 **Explore Repositories:** Browse and search through a curated list of repositories with rich metadata.
- 🗂️ **File Tree & Code Viewer:** Navigate project files and view code with syntax highlighting.
- 📊 **Repository Stats:** See stars, forks, contributors, and more at a glance.
- 🏷️ **Tags & Badges:** Visual indicators for language, privacy, and repository status.
- 🧑‍💻 **Issues & Pull Requests:** Track issues and pull requests in a clean, tabbed interface.
- 🌗 **Dark/Light Theme:** Seamless theme switching with system preference support.
- 🧩 **Reusable UI Components:** Built with a robust design system using Radix UI and custom Tailwind components.
- ⚡ **Blazing Fast:** Optimized for performance and static export (SSG).

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, SSG, SSR)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) & [tailwindcss-animate](https://github.com/joe-bell/tailwindcss-animate)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Zod](https://zod.dev/) for validation
- [Vercel](https://vercel.com/) for deployment

---

## 📦 Folder Structure

```
CodeHub/
├── src/
│   ├── app/           # Next.js app directory (routing, pages)
│   ├── components/    # Reusable UI and layout components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Mock data and utilities
│   └── ...
├── public/            # Static assets
├── styles/            # Global styles (Tailwind)
├── package.json       # Project metadata and scripts
├── tailwind.config.ts # Tailwind CSS config
└── ...
```

---

## 🚦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/codehub.git
cd codehub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Build for production

```bash
npm run build
npm start
```

---

## 🌈 UI Highlights

- **Modern Dashboard:** Responsive, accessible, and visually appealing.
- **Tabs, Cards, Badges:** Built with Radix UI and custom Tailwind components.
- **Dark Mode:** Automatic and manual theme switching.
- **File Tree & Code Viewer:** Intuitive navigation and code display.

---

## 🧪 Mock Data

The app uses mock data for repositories, file trees, and code content. You can customize these in `src/lib/mock-data.ts` for demos or prototyping.

---

## 🚀 Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) and supports static export (`output: export`).

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for new features, bug fixes, or improvements.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

> Made with ❤️ by the CodeHub Team
