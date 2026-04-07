# 🍽️ Eat & Split

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-06B6D4?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14.0-339933?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

> **Effortlessly split bills with friends & track shared expenses in real-time**

---

## 🚀 Live Demo

[🔗 **View Live Demo →**](https://split.khush.pro)

---

## 📌 About the Project

**Eat & Split** is a modern, intuitive bill-splitting application built with React. Designed for friend groups, roommates, and travel buddies, this app simplifies the often-complicated process of tracking shared expenses and settling debts. Instead of manual calculations and forgotten IOU's, Eat & Split maintains a real-time ledger of who owes whom and by exactly how much.

### Why It Exists

Managing shared expenses among friends can be tedious and error-prone. This application was created to:
- **Eliminate math headaches** — Automatically calculate splits
- **Prevent disputes** — Maintain a transparent, persistent record
- **Save time** — Quick, intuitive interface for recording transactions
- **Reduce friction** — Know exact amounts owed at a glance

### Who It's For

- **Friend Groups** sharing meals, events, or outings
- **Roommates** splitting rent, utilities, and household expenses
- **Travel Companions** pooling costs for accommodations and activities
- **Event Organizers** tracking shared event expenses

---

## ✨ Features

- ✅ **Add & Manage Friends** — Build your friend list with avatars
- ✅ **Split Bills** — Specify amounts and who paid, automatically calculate balances
- ✅ **Real-time Balance Tracking** — See exactly who owes you or who you owe
- ✅ **Persistent Storage** — All data saved to browser localStorage
- ✅ **Visual Status Indicators** — Green (owed to you), Red (you owe), Gray (settled)
- ✅ **Responsive Design** — Seamlessly works on mobile, tablet, and desktop
- ✅ **Smooth Animations** — Polished, modern UI with delightful transitions
- ✅ **Dark Theme** — Easy on the eyes with a modern glassmorphism aesthetic
- ✅ **Input Validation** — Prevents invalid bill entries with error feedback
- ✅ **Custom Avatars** — Use URLs to personalize friend profiles

---

## 💡 Use Cases

| Scenario | How Eat & Split Helps |
|----------|----------------------|
| **Dinner Night Out** | Group orders appetizers and mains. One person pays. Automatic split. Done. |
| **Shared Apartment** | Roommates pay utilities on different months. Track who's ahead/behind. |
| **Weekend Trip** | One friend books hotel, another rents car, third handles groceries. Perfect balance tracking. |
| **Game Night** | Someone covers pizza, drinks, snacks. Calculate who pays back what. |
| **Project Collaboration** | Split shared resources, tools, or service subscriptions equally. |

---

## 🎯 Benefits

- **🧮 Zero Manual Calculation** — No more scribbling on napkins or using calculator apps
- **💰 Financial Transparency** — Every transaction is logged and visible
- **⚡ Instant Updates** — See balance changes immediately upon submitting a split
- **🔄 Persistent Data** — Automatically saved in your browser—never lose your records
- **🎨 Beautiful UX** — Modern, dark theme with smooth animations and intuitive navigation
- **📱 Mobile-First** — Fully functional on smartphones, perfect for on-the-go tracking
- **⚙️ No Backend Required** — Runs entirely in the browser—no server, no sign-up, instant use

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend Framework** | React | 19.0.0 |
| **Styling** | Tailwind CSS | 4.2.2 |
| **CSS Processing** | PostCSS | 8.5.8 |
| **Autoprefixer** | Autoprefixer | 10.4.27 |
| **Build Tool** | Create React App (react-scripts) | 5.0.1 |
| **Font** | Outfit (Google Fonts) | Latest |
| **Storage** | Browser localStorage | Native |
| **Testing** | React Testing Library | 16.2.0 |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 14.0 (includes npm)
- **npm** >= 6.0 or **yarn** >= 1.22
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eat-n-split.git
   cd eat-n-split
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Verify installation**
   ```bash
   npm --version
   node --version
   ```

### Environment Variables

**Eat & Split** is a client-side application and does not require environment variables. All data is stored locally in your browser.

Optional: If you customize the app to use external APIs in the future, create a `.env.local` file:
```
# Example future configuration
REACT_APP_API_URL=http://localhost:3001
```

### Run Locally

Start the development server with hot-reload:

```bash
npm start
```

The app will automatically open in your default browser at `http://localhost:3000`

**Features in dev mode:**
- ✅ Hot module reloading (changes appear instantly)
- ✅ React DevTools integration
- ✅ Enhanced error messages

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Output will be in the `build/` directory. Ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.)

**Build features:**
- ✅ Minified and optimized code
- ✅ ~50% smaller bundle size
- ✅ Production-ready performance

### Run Tests

Execute the test suite:

```bash
npm test
```

Press `a` to run all tests, or `q` to quit.

### Eject (Advanced)

If you need full control over build configuration:

```bash
npm run eject
```

⚠️ **Warning:** This is irreversible. Only do this if you understand what you're doing.

---

## 📖 How to Use

### For First-Time Users

#### 1. **Meet Your Starting Friends**
   - You'll see 3 sample friends: Clark, Sarah, and Anthony
   - Each has a balance (owed to you, you owe them, or settled)

#### 2. **Add a New Friend**
   - Click **"+ Add New Friend"** button
   - Enter their name and provide an image URL (or leave default)
   - Click **"Add Friend"**
   - New friend appears in your list with a $0 balance

#### 3. **Split a Bill**
   - Click **"Select"** on a friend's card
   - A bill-splitting form appears on the right
   - Enter the **total bill amount**
   - Enter **your portion** (friend's portion auto-calculates)
   - Choose **who paid** (you or your friend)
   - Click **"Split Bill ✨"**

#### 4. **Track Balances**
   - **Green badge**: "Owes you $X" (they owe money)
   - **Red badge**: "You owe $X" (you owe money)
   - **Gray badge**: "You're fully even" (settled)

#### 5. **Manage & Adjust**
   - Click **"Select"** again to deselect and close the form
   - Continue splitting bills as needed
   - All changes auto-save to your browser

### Pro Tips

- 💡 **Persistent Data**: Close your browser—your data stays. Clear browser storage to reset.
- 💡 **Fair Splits**: Always verify that friend's expense + your expense = bill total
- 💡 **Payment Direction**: Use "Who is paying?" to handle any payer arrangement
- 💡 **Mobile Friendly**: Works perfectly on phones for tracking expenses while out

---

## 📁 Project Structure

```
eat-n-split/
├── public/                      # Static assets & HTML entry point
│   ├── index.html              # Main HTML file
│   ├── favicon.ico             # App icon
│   └── manifest.json           # PWA manifest
│
├── src/                         # React source code
│   ├── components/             # Reusable React components
│   │   ├── Button.js           # Reusable button component
│   │   ├── FormAddFriend.js    # Add friend form
│   │   ├── FormSplitBill.js    # Bill splitting form
│   │   ├── Friend.js           # Individual friend card
│   │   ├── FriendList.js       # List of friends
│   │   └── TitleBar.js         # App header/title
│   │
│   ├── App.js                  # Main app component & state management
│   ├── index.js                # React DOM entry point
│   ├── index.css               # Global styles & Tailwind directives
│   └── initialFriends.js       # Sample friend data
│
├── package.json                # Dependencies & npm scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `App.js` | Main component managing friends, selected friend, and form visibility |
| `FormSplitBill.js` | Handles bill input, validates amounts, updates friend balance |
| `FormAddFriend.js` | Captures new friend name and avatar URL |
| `Friend.js` | Displays individual friend with balance badge and select button |
| `initialFriends.js` | Sample data loaded on first app load |

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Fork** the repository
   ```bash
   git clone https://github.com/yourusername/eat-n-split.git
   cd eat-n-split
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and test locally
   ```bash
   npm start
   npm test
   ```

4. **Commit your changes**
   ```bash
   git commit -m "Add: [Brief description of your changes]"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** with a clear title and description

### Contribution Ideas

- 🎨 UI/UX improvements (new themes, animations)
- 🐛 Bug fixes and edge case handling
- ⚡ Performance optimizations
- 📱 Enhanced mobile experience
- 🌍 Internationalization (i18n) support
- 💾 Export/import functionality
- 🔧 New features (groups, notes, payment reminders)

---

## 👤 Author

Made with ❤️ by **[Khush Vachhani](https://github.com/kapvm4444)**  
🔗 [Portfolio](https://khush.pro) | 💼 [LinkedIn](https://linkedin.com/in/khushvachhani)

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Avatars from [DiceBear Avatars](https://www.dicebear.com/)
- Icons from emoji
- Inspired by the need for simple, elegant expense tracking

---

## 📝 Changelog

### v0.1.0 (Initial Release)
- ✅ Core bill-splitting functionality
- ✅ Friend management (add, view, balance tracking)
- ✅ localStorage persistence
- ✅ Responsive design
- ✅ Dark theme with glassmorphism

---

<div align="center">

**[⬆ Back to Top](#-eat--split)**

Have a question? [Open an Issue](https://github.com/yourusername/eat-n-split/issues)

</div>

