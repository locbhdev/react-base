# React TypeScript Application

A modern React application built with TypeScript, featuring a comprehensive tech stack and well-organized architecture.

## Technology Stack

### Core
- **Build Tool**: Vite with TypeScript
- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router with global context
- **Styling**: Tailwind CSS v4 (CSS config only)
- **UI Components**: Base UI (React)
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack Query
- **Forms**: Formik with Yup validation
- **Backend**: Supabase
- **Animations**: Motion (formerly Framer Motion)
- **Utilities**: lodash, clsx, class-variance-authority, tailwind-variants

### Development Tools
- **Linting/Formatting**: Biome
- **Type Checking**: TypeScript with strict configuration
- **Dev Tools**: TanStack Router DevTools, React Query DevTools

## Project Structure

```
src/
├── components/          # Common/shared components
│   └── Modal/          # Example: Modal component with proper structure
├── routes/             # TanStack Router configuration
├── features/           # Domain-specific logic organized by feature
│   └── Auth/          # Authentication feature
│       ├── pages/     # Auth pages (Login, Register, ForgotPassword)
│       ├── components/ # Auth-specific components
│       ├── services/  # Supabase services
│       ├── hooks/     # Feature-specific hooks (hooks-first pattern)
│       ├── utils/     # Feature-specific utilities
│       ├── stores/    # Feature-specific stores
│       └── auth.types.ts # Auth-related TypeScript types
├── hooks/              # Common/shared hooks
├── stores/             # Common store configuration
└── utils/              # Common utilities
```

## Features

### Authentication System
- Complete authentication flow with Supabase
- Login, Registration, and Forgot Password pages
- Form validation with Formik and Yup
- Redux state management for auth state
- Hooks-first pattern for UI/logic separation

### Modal Component
- Fully accessible modal with keyboard navigation
- Smooth animations with Motion
- Configurable sizes and behaviors
- TypeScript support with proper types
- Built with class-variance-authority for styling variants

### Development Experience
- Strict TypeScript configuration
- Biome for fast linting and formatting
- Hot module replacement with Vite
- Route generation with TanStack Router CLI

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

3. Generate routes:
```bash
yarn routes:generate
```

4. Start development server:
```bash
yarn dev
```

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run linting
- `yarn lint:fix` - Fix linting issues
- `yarn format` - Format code
- `yarn routes:generate` - Generate route tree

## Environment Configuration

Create a `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Architecture Principles

- **Hooks-first pattern**: Separate UI and business logic
- **Feature-based organization**: Group related functionality
- **Type safety**: Strict TypeScript configuration
- **Component composition**: Reusable and composable components
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized with React Query and proper state management

## Demo Features

Visit the application to see:
- Home page with navigation to auth pages
- Modal component demonstration
- Authentication forms (Login, Register, Forgot Password)
- Responsive design with Tailwind CSS
- Smooth animations with Motion
