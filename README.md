# RoboRoar 30449 Website

Official website for RoboRoar 30449, a middle school all-girls FIRST Tech Challenge (FTC) robotics team.

## About RoboRoar 30449

RoboRoar 30449 is a middle school all-girls FIRST Tech Challenge robotics team founded in Summer 2025. We are dedicated to inspiring young women to become tomorrow's STEM leaders through innovation, teamwork, and confidence.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd RoboRoar30449-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Project Structure

```
src/
├── pages/           # Route-based page components
│   ├── Index.tsx    # Home page
│   ├── About.tsx    # About page
│   ├── Vision.tsx   # Vision & Values
│   ├── Team.tsx     # Team members
│   ├── Competitions.tsx
│   ├── Sponsors.tsx
│   ├── Join.tsx
│   ├── Contact.tsx
│   └── Outreach.tsx # (Hidden from navigation)
├── components/      # Reusable components
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/         # shadcn/ui components
├── assets/         # Images and static files
├── hooks/          # Custom React hooks
└── lib/            # Utility functions
```

## Brand Colors

- **Navy**: `hsl(220, 45%, 17%)` - Primary brand color
- **Gold**: `hsl(47, 93%, 54%)` - Secondary/accent color
- **Pink**: `hsl(345, 83%, 55%)` - Accent color

## Contact

**Email**: roboroar30449@gmail.com

## License

© 2025 RoboRoar 30449. All rights reserved.
