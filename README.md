# Java Learning Hub

A responsive, documentation-style programming learning website built with React and Vite. The project provides a structured learning experience with a top navigation bar, expandable left-side topic navigation, searchable topics, and dynamically rendered tutorial content.

The application is completely frontend-based and does not require a backend, database, or authentication system.

## 🚀 Live Demo

**GitHub Pages:**
`https://manikandan4411.github.io/java-learning-hub/`

> Replace `manikandan4411` with your GitHub username.

## 📖 About the Project

Java Learning Hub is an interactive learning portal designed to organize programming concepts in a simple documentation-style interface.

Users can select a technology from the navigation menu, choose a topic or subtopic from the left sidebar, and view the corresponding tutorial content in the main content area.

The project is inspired by the structure and usability of popular programming tutorial websites such as JavaTpoint and W3Schools, while using original project content and implementation.

## ✨ Features

* 📚 Structured programming tutorials
* 🧭 Top navigation menu
* 📑 Expandable left-side sidebar
* 🔍 Client-side topic search
* 📄 Dynamic tutorial content rendering
* 📝 Markdown-based content
* 💻 Java code examples
* ⬅️ Previous topic navigation
* ➡️ Next topic navigation
* 📱 Responsive design
* 🌙 Clean documentation-style UI
* ⚡ Fast Vite development and production builds
* 🚀 GitHub Pages deployment
* 🔧 No backend or database required

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* Tailwind CSS
* React Router
* React Markdown
* React Icons

### Development & Deployment

* Git
* GitHub
* GitHub Pages
* GitHub Actions

## 🏗️ Project Architecture

```text
                    USER
                     │
                     ▼
              GitHub Pages
                     │
                     ▼
              React + Vite
                     │
          ┌──────────┼──────────┐
          │          │          │
          ▼          ▼          ▼
       Navbar     Sidebar     Content
                     │          │
                     │          │
                     ▼          ▼
                Topic Data   Markdown
                     │          │
                     └────┬─────┘
                          ▼
                   Rendered Tutorial
```

## 📂 Project Structure

```text
java-learning-hub/
│
├── public/
│   ├── favicon.ico
│   └── images/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Content.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── TopicNavigation.jsx
│   │   ├── SearchBar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Java.jsx
│   │   ├── SpringBoot.jsx
│   │   └── DSA.jsx
│   │
│   ├── data/
│   │   ├── javaTopics.js
│   │   ├── springBootTopics.js
│   │   └── dsaTopics.js
│   │
│   ├── content/
│   │   ├── java/
│   │   ├── springboot/
│   │   └── dsa/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📚 Topics Covered

### Java

* Introduction
* Features
* Variables
* Data Types
* Operators
* OOP
* Class
* Object
* Inheritance
* Polymorphism
* Abstraction
* Encapsulation
* Exception Handling
* Collections
* Multithreading
* Java 8 Features

### Spring Boot

* Introduction
* Spring vs Spring Boot
* Project Structure
* REST API
* Controller
* Service
* Repository
* Spring Data JPA
* Spring Security

### Data Structures & Algorithms

* Arrays
* Strings
* Two Pointers
* Sliding Window
* Stack
* Queue
* Linked List
* Trees
* Graphs
* Recursion
* Backtracking
* Dynamic Programming

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

Check the installed versions:

```bash
node -v
npm -v
git --version
```

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/java-learning-hub.git
```

Move into the project directory:

```bash
cd java-learning-hub
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at the local development URL shown in the terminal.

## 🏭 Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

The application is deployed using **GitHub Pages**.

The deployment flow is:

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ▼
npm run build
    │
    ▼
dist/
    │
    ▼
GitHub Pages
    │
    ▼
Live Website
```

Every time the project is updated and pushed to GitHub, the GitHub Actions workflow can build and deploy the latest version.

## 🔄 Application Flow

```text
User opens website
        │
        ▼
Select technology
        │
        ▼
Select topic from sidebar
        │
        ▼
React identifies selected topic
        │
        ▼
Corresponding content is loaded
        │
        ▼
Markdown is rendered
        │
        ▼
Tutorial displayed in content area
```

## 💡 Why No Backend?

This project is designed primarily as a documentation and learning website.

The application does not currently require:

* User accounts
* Login/authentication
* Database storage
* User progress tracking
* Comments
* Dynamic API data

Therefore, a frontend-only architecture is sufficient.

Tutorial content is stored locally and rendered by the React application.

## 🔮 Future Enhancements

The project can be extended in the future with:

* User authentication
* Quiz system
* Coding practice
* User progress tracking
* Bookmark/favorites
* Comments
* Admin dashboard
* Content management system
* Backend REST APIs
* PostgreSQL database
* AI-powered learning assistant
* Online code editor
* Dark/light theme customization

A future full-stack architecture could be:

```text
React
  │
  ▼
Spring Boot REST API
  │
  ▼
PostgreSQL
```

## 📌 Key Learning Outcomes

Through this project, the following concepts were practiced:

* React component architecture
* React Router
* State management
* Reusable components
* Dynamic content rendering
* Markdown rendering
* Responsive web design
* Client-side search
* Navigation systems
* Git and GitHub
* Vite production builds
* GitHub Pages deployment

## 👨‍💻 Author

**Manikandan S**

Java Backend Developer | Spring Boot Developer | Software Engineer

## License

Copyright © 2026 Manikandan S. All Rights Reserved.

Theory Hub is available for viewing, personal learning, educational reference, and note-taking only. Copying, modifying, redistributing, or commercially using the original source code and materials without prior written permission is prohibited.

Third-party components and resources remain subject to their respective licenses.

See the [LICENSE](LICENSE) file for details.
