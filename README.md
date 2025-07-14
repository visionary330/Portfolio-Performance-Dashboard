# 📊 Portfolio Performance Dashboard

A responsive, data-driven web application built in React, styled with Tailwind CSS, visualized using Recharts, and structured with TypeScript and Material UI. This dashboard provides a compelling summary of investment performance metrics and holdings insights, incorporating real-world data patterns and clean UX heuristics.

---

## 🧭 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Docker Support](#-docker-support)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Design Heuristics](#-design-heuristics)
- [Testing](#-testing)
- [Next Steps](#-next-steps)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🚀 Features

- **Performance Overview**
  - Line chart: Portfolio vs. S&P 500, Russell 2000, MSCI World
  - KPI Cards: Total Value, Total Return, Monthly Return
  - Cash Flow Bar Chart
  - Market Events Table with Pagination

- **Holdings Overview**
  - Detailed, paginated holdings table with key metrics
  - Sector Allocation Pie Chart
  - Top 5 Holdings Breakdown

- **Responsive & Modular**
  - Reusable components
  - Mobile-optimized layout
  - Mock data structure simulates real-world use cases

---

## ⚙️ Installation (Manual)

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Steps

```bash
git clone https://github.com/visionary330/Portfolio-Performance-Dashboard.git
cd Portfolio-Performance-Dashboard
npm install
```

---

## ▶️ Usage

### Run Development Server

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

---

## 🐳 Docker Support

You can containerize and run the project using Docker.

### 1. Build Docker Image

```bash
docker build -t portfolio-dashboard .
```

### 2. Run Docker Container

```bash
docker run -p 5173:5173 portfolio-dashboard
```

### 3. Access the App

Open your browser and visit:
```
http://localhost:3000
```

### 🐋 Example Dockerfile

```Dockerfile
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app with preview mode
CMD ["npm", "run", "preview"]
```

---

## 🗂 Project Structure

```
src/
├── components/              # Reusable UI elements (charts, tables, cards)
├── data/                    # Mock data (performance, holdings, market events)
├── pages/                   # Route pages: Dashboard, Holdings, Performance
├── App.tsx                  # Root component with routing
├── index.tsx                # Entry point
├── theme.ts                 # MUI theme customization
```

---

## 🧠 Configuration

- Tailwind CSS for styling
- MUI for data table and layout components
- Recharts for financial visualizations
- TypeScript for strict typing

---

## 🎨 Design Heuristics

- **Tufte's Data-Ink Ratio**: Less clutter, more clarity
- **Fitts's Law**: Intuitive click targets and spacing
- **Progressive Disclosure**: KPIs first, deep data second
- **Consistent Layout**: Reusable patterns, grid-based design

---

## ✅ Testing

Run unit tests:

```bash
npm run test
```

With watch mode:

```bash
npm run test -- --watch
```

Generate coverage:

```bash
npm run test -- --coverage
```

---

## 📈 Next Steps

1. Add real API data source and authentication
2. Export reports to CSV/PDF
3. Time range filter and performance drill-downs
4. Theme switching (dark mode)
5. Add E2E tests with Cypress or Playwright

---

## 👨‍💻 Contributors

- Developed by **Ryan Lee**
- Based on UI/UX patterns by **Edward Tufte** and **UX Laws**

---

## 📄 License

[MIT License](./LICENSE)
