# React TypeScript Boilerplate

A modern, production-ready React application boilerplate built with TypeScript and featuring a comprehensive tech stack with best practices and clean architecture.

## 🚀 Technology Stack

### Core Framework & Build Tools
- **React 19** - Latest React with concurrent features
- **TypeScript 5.6+** - Strict type checking and modern JS features
- **Vite 7.1+** - Lightning-fast build tool and dev server
- **TanStack Router 1.131+** - Type-safe file-based routing with global context

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework (CSS config only)
- **Base UI Components** - Headless, accessible React components
- **Class Variance Authority (CVA)** - Component styling variants
- **Tailwind Variants** - Advanced Tailwind CSS utilities
- **Tailwind Merge** - Intelligent Tailwind class merging

### State Management & Data Fetching
- **Redux Toolkit** - Modern Redux with simplified API
- **TanStack Query** - Powerful data synchronization for React
- **React Redux** - Official React bindings for Redux

### Forms & Validation
- **Formik** - Build forms without tears
- **Yup** - Schema validation library

### Backend & Database
- **Supabase** - Open source Firebase alternative
- **PostgreSQL** - Robust relational database (via Supabase)

### Development Tools
- **ESLint 9** - Modern JavaScript/TypeScript linting
- **Prettier** - Opinionated code formatter with Tailwind plugin
- **TypeScript ESLint** - TypeScript-specific linting rules
- **TanStack Router DevTools** - Route debugging and inspection
- **TanStack Query DevTools** - Query state visualization

### Utilities & Helpers
- **Motion (Framer Motion)** - Production-ready motion library
- **Lodash** - Modern JavaScript utility library
- **clsx** - Conditional className utility
- **Vaul** - Drawer component for React

## 📁 Project Structure

```
src/
├── components/          # Shared/reusable components
│   └── [ComponentName]/ # Individual component directories
│       ├── index.ts     # Component exports
│       ├── Component.tsx # Main component file
│       ├── types.ts     # Component-specific types
│       └── styles/      # Component styling (if needed)
├── routes/              # TanStack Router file-based routing
│   ├── __root.tsx       # Root route layout
│   └── index.tsx        # Home page route
├── features/            # Feature-based organization
│   └── [FeatureName]/   # Individual feature directories
│       ├── components/  # Feature-specific components
│       ├── hooks/       # Feature-specific hooks
│       ├── pages/       # Feature page components
│       ├── services/    # API services and data fetching
│       ├── stores/      # Feature-specific Redux slices
│       ├── utils/       # Feature-specific utilities
│       └── types.ts     # Feature-specific TypeScript types
├── hooks/               # Shared custom hooks
├── stores/              # Global Redux store configuration
├── utils/               # Shared utility functions
│   ├── cn.ts           # Tailwind class merging utility
│   ├── supabase.ts     # Supabase client configuration
│   └── index.ts        # Utility exports
└── main.tsx            # Application entry point
```

## ✨ Key Features

### 🏗️ Architecture Principles
- **Feature-based organization** - Group related functionality together
- **Hooks-first pattern** - Separate UI and business logic
- **Type safety** - Strict TypeScript configuration throughout
- **Component composition** - Reusable and composable components
- **Accessibility** - WCAG compliant components and patterns

### 🛠️ Development Experience
- **Hot Module Replacement** - Instant feedback during development
- **Type-safe routing** - Full TypeScript support for routes
- **Automatic route generation** - File-based routing with CLI tools
- **Modern linting** - ESLint 9 with TypeScript support
- **Code formatting** - Prettier with Tailwind CSS class sorting
- **Dev tools integration** - Router and Query dev tools included

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **Yarn** package manager (recommended) or npm

### Installation

1. **Clone and install dependencies:**
```bash
git clone <your-repo-url>
cd react-app
yarn install
```

2. **Set up environment variables:**
```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

3. **Generate routes:**
```bash
yarn routes:generate
```

4. **Start development server:**
```bash
yarn dev
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server with HMR |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint checks |
| `yarn lint:fix` | Fix ESLint issues automatically |
| `yarn format` | Format code with Prettier |
| `yarn format:check` | Check code formatting |
| `yarn routes:generate` | Generate TanStack Router route tree |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Additional environment variables
VITE_APP_NAME=React TypeScript Boilerplate
VITE_APP_VERSION=1.0.0
```

### TypeScript Configuration

The project uses strict TypeScript settings in `tsconfig.app.json`:
- `strict: true` - Enable all strict type checking options
- `noImplicitAny: true` - Error on expressions with implied 'any' type
- `strictNullChecks: true` - Enable strict null checks
- `noUncheckedIndexedAccess: true` - Add undefined to unindexed access
- `exactOptionalPropertyTypes: true` - Exact optional property types

### ESLint & Prettier

- **ESLint 9** with flat config format
- **Prettier** with Tailwind CSS class sorting
- **TypeScript ESLint** rules for type safety
- **React Hooks** rules for proper hook usage

## 🏛️ Architecture Guidelines

### Component Organization
```typescript
// ✅ Good: Feature-based organization
src/features/UserProfile/
├── components/
│   ├── ProfileCard.tsx
│   └── EditProfileForm.tsx
├── hooks/
│   └── useUserProfile.ts
├── services/
│   └── userProfileService.ts
└── types.ts

// ❌ Avoid: Generic component dumping
src/components/
├── Button.tsx
├── Modal.tsx
├── UserCard.tsx
├── ProductCard.tsx
└── ... (100+ components)
```

### Naming Conventions
- **Components**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase with "use" prefix (`useUserProfile.ts`)
- **Types**: PascalCase (`UserProfileData`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Files/Folders**: camelCase or kebab-case

### State Management
- **Local state**: `useState` for component-specific state
- **Shared state**: Redux Toolkit for global application state
- **Server state**: TanStack Query for API data and caching
- **Form state**: Formik for complex forms with validation

## 🤝 Contributing

1. Follow the established project structure
2. Use TypeScript strictly - no `any` types
3. Write meaningful commit messages
4. Format code with Prettier before committing
5. Ensure all ESLint rules pass
6. Add proper TypeScript types for new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding!** 🎉

Built with ❤️ using React, TypeScript, and modern web technologies.
