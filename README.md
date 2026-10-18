# Learning React Fundamentals

My hands-on journey learning **React** from scratch. This repo holds the code I write while learning the core concepts, one small project at a time.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

---

## 📚 What I've Learned So Far

| Concept | Where it's used |
| --- | --- |
| **Components** | `Navbar`, `Home` and `Contact` are split into their own files in `src/components/` |
| **Props** | `Navbar` takes `logoText`, `color` and `items` so it can be reused with different data |
| **Rendering lists** | Navbar links are generated from an array with `.map()` |
| **State (`useState`)** | A click counter, plus the Contact form's name, email and phone fields |
| **Side effects (`useEffect`)** | Logs when the app mounts and updates the browser tab title whenever the count changes |
| **Controlled forms** | Contact form inputs are tied to state, and submitting shows the entered details |
| **Event handling** | `onClick` and `onSubmit` handlers, and `e.preventDefault()` to stop the page reloading |
| **Conditional rendering** | Showing different buttons with the ternary operator (`? :`) |
| **Routing** | `react-router-dom` with `BrowserRouter`, `Routes`, `Route` and `Link` for the Home and Contact pages |

---

## 📁 Project Structure

```
Introduction-to-react/
└── my-react-app/
    ├── public/              # Static files (favicon, icons)
    ├── src/
    │   ├── assets/          # Images and logos
    │   ├── components/
    │   │   ├── Navbar.jsx   # Reusable navigation bar (props + list rendering)
    │   │   ├── Navbar.css
    │   │   ├── Home.jsx     # Home page
    │   │   └── Contact.jsx  # Contact form (controlled inputs + state)
    │   ├── App.jsx          # Main component: routes, counter, hooks
    │   ├── main.jsx         # Entry point, wraps App in BrowserRouter
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## 🚀 Getting Started

**You'll need:** [Node.js](https://nodejs.org/) version 20 or newer.

```bash
# 1. Clone the repo
git clone https://github.com/WIZARD696/Learning-react-Fundamentals.git

# 2. Go into the app folder
cd Learning-react-Fundamentals/Introduction-to-react/my-react-app

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173) in your browser.

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Builds a production version into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with oxlint |

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/): UI library
- [Vite](https://vite.dev/): build tool and dev server
- [React Router](https://reactrouter.com/): page routing
- [oxlint](https://oxc.rs/): linter

---

## 🎯 Next Up

- [ ] Add an **About** page and a **Join us** page (the Navbar already links to them)
- [ ] Fetch data from an API with `useEffect`
- [ ] Share state between components with the Context API
- [ ] Style the app further

---

## 🙋 About

Built by [@WIZARD696](https://github.com/WIZARD696) while learning React. Feedback and suggestions are welcome, so feel free to open an issue!
