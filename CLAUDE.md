# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BiMEET (Baldosa Inteligente para Micro-Generación y Monitoreo Energético) is a React-based web application that serves as both a public marketing site and a monitoring dashboard for an innovative piezoelectric floor tile technology that converts pedestrian footsteps into clean electricity.

**Key Technologies:**
- React 19.1.1 with TypeScript 5.8.3
- Vite 7.1.2 (build tool with SWC compiler)
- Tailwind CSS 4.1.13
- React Router 7.9.1
- Chart.js 4.5.0 with react-chartjs-2

## Development Commands

All commands must be run from the `client/` directory:

```bash
# Start development server with HMR
npm run dev

# Build for production (TypeScript compile + Vite build → dist/)
npm run build

# Run ESLint on all TypeScript/JavaScript files
npm run lint

# Preview production build locally
npm run preview
```

## Architecture

### Route Structure

**Public Routes (Unauthenticated):**
- `/` - Home page with hero, features, and benefits sections
- `/quienes-somos` - About us page with mission, vision, and team
- `/contacto` - Contact form
- `/login` - Login/registration form
- `*` - 404 error page

**Private Routes (Authenticated):**
- `/dashboard` - Main monitoring dashboard with real-time metrics and charts

Routes are defined in `src/routes/` with separate public and private route files, each wrapped in their own layout components.

### Directory Organization

```
client/src/
├── components/           # Reusable React components
│   ├── bimeet/          # Dashboard-specific components
│   │   ├── home/graphics/  # Charts: EnergyChart, FootstepsChart, EfficiencyChart
│   │   └── layout/         # Dashboard navbar
│   └── public/          # Public site components
│       ├── home/           # HeroSection, FeaturesSection, BenefitsSection
│       ├── about-us/       # WhoWeAreSection, TeamSection
│       ├── contact/        # ContactForm
│       └── layout/         # Public navbar and footer
├── pages/               # Page-level components
│   ├── bimeet/home/        # Dashboard.tsx
│   └── public/             # Home, Login, AboutUs, Contact, ErrorPage
├── layout/              # Layout wrappers
│   ├── public/MainLayout.tsx
│   └── bimeet/MainLayout.tsx
├── routes/              # Route definitions
│   ├── AppRoutes.tsx
│   ├── publicRoutes.tsx
│   └── privateRoutes.tsx
├── types/               # TypeScript interfaces (*.ds.ts convention)
├── constants/           # Static data (team info, mission/vision)
├── hooks/               # Custom React hooks
├── styles/              # Global CSS with custom variables
└── assets/              # Images and static files
```

### Component Hierarchy Pattern

Components follow a clear hierarchy:
- **Layouts** provide consistent structure with navigation
- **Pages** compose multiple sections and handle routing
- **Sections** are medium-sized compositions (e.g., HeroSection, FeaturesSection)
- **Components** are small, reusable pieces (e.g., Counters, charts)

### Type Safety

TypeScript strict mode is enabled. All interfaces are defined in `src/types/` with the `*.ds.ts` naming convention:
- `auth/auth.ds.ts` - Form props for login/registration
- `contact/contact.ds.ts` - Contact form data structure
- `layout/navbar.ds.ts` - Navigation item interface
- `our-values/our-values.ds.ts` - Team member props

### Styling Architecture

**Design System:**
- CSS custom properties defined in `src/styles/index.css`
- Tailwind utilities for component styling
- Reference CSS variables: `bg-[var(--color-primary)]`

**Color Palette:**
- Primary: `#2ecc71` (Emerald - Sustainability)
- Primary Dark: `#145a32` (Robustness)
- Accent: `#f1c40f` (Electric Yellow - Energy)
- Accent Warm: `#e67e22` (Orange - Dynamism)
- Info: `#3498db` (Sky Blue - Connectivity)
- Neutral Light: `#ecf0f1` (Clean)
- Neutral Dark: `#1c1c1c` (Contrast)

**Responsive Design:**
- Mobile-first approach
- Breakpoints: `md:` (tablet), `lg:` (desktop)

## Key Features

### Dashboard Components (client/src/components/bimeet/home/graphics/)

1. **Counters.tsx** - Displays 4 key metrics:
   - Energy Generated (kWh)
   - Total Steps
   - Battery Level (%)
   - System Efficiency (%)

2. **EnergyChart.tsx** - Line chart showing hourly energy generation
3. **FootstepsChart.tsx** - Bar chart showing daily footsteps
4. **EfficiencyChart.tsx** - Doughnut chart showing energy distribution (used/lost/stored)

All charts use Chart.js and accept data via props for easy integration with real APIs.

### Data Flow

**Current State:** Mock data is hardcoded in components
**Future Ready:** Components are structured to receive data from API endpoints:
- Dashboard metrics endpoint
- Chart data endpoints
- Contact form submission endpoint
- Authentication endpoint

## Coding Conventions

### File Naming
- Page components: PascalCase in `pages/`
- Reusable components: PascalCase in `components/`
- Type files: `*.ds.ts` suffix
- Hooks: `use*.tsx` format
- Constants: lowercase with `.ts` extension

### Component Patterns
- Use functional components with TypeScript
- Define prop types with interfaces
- Use `useState` for local state management
- Handle form changes with `onChange` callbacks
- Process form submissions with `handleSubmit` functions

### Styling Guidelines
- Prefer Tailwind utilities in `className`
- Use CSS variables for theme colors
- Apply responsive classes: `md:` and `lg:` prefixes
- Use gradients: `bg-gradient-to-br from-[color] to-[color]`

### Code Quality
- TypeScript strict mode - all variables must be typed
- Run `npm run lint` before committing
- Avoid `any` type
- Use semantic HTML for accessibility
- Label all form inputs properly

## Backend Integration (Future)

The `/api` directory is currently empty but reserved for backend implementation.

**Forms ready for API integration:**
- Login form: collects name, email, password
- Contact form: collects name, email, subject, message
- Dashboard: ready to consume real-time sensor data

**Suggested API endpoints:**
```
POST /api/auth/login
POST /api/contact
GET /api/dashboard/metrics
GET /api/dashboard/charts
```

## Project Context

BiMEET is a Colombian project (Bogotá-based) developed by a three-person team:
- Juan Sebastián Hernández
- Juan Diego Rodríguez
- José David Álvarez

The application demonstrates smart city applications and sustainable energy solutions through an interactive dashboard and educational marketing content.
