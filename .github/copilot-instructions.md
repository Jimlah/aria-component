# React Aria Components Demo

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

React Aria Components Demo is a Next.js application showcasing 80+ styled, accessible UI components built with React Aria Components, TypeScript, and Tailwind CSS. The application demonstrates form controls, selection components, and interactive elements with proper accessibility features.

## Working Effectively

### Bootstrap and Setup
- Install dependencies: `npm install` - takes up to 60 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- Build the application: `npm run build` - takes up to 60 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- Lint code: `npm run lint` - takes up to 30 seconds. NEVER CANCEL. Set timeout to 60+ seconds.

### Development Workflow
- Start development server: `npm run dev` - starts in ~2 seconds, ready at http://localhost:3000
- Start production server: `npm run start` - requires build first, starts in ~1 second
- ALWAYS run `npm run build` before `npm run start` or it will fail with production build error

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint with Next.js configuration

## Validation

### ALWAYS Test These Scenarios After Making Changes
1. **Form Interactions**: 
   - Enter text in email field
   - Toggle password visibility button
   - Select radio buttons (Light/Dark theme)
   - Toggle checkbox and switch components
   - Move slider component
2. **Component Responsiveness**:
   - Verify components render correctly
   - Check hover states and focus indicators
   - Validate accessibility attributes
3. **Console Warnings**:
   - Monitor browser console for React warnings
   - Accessibility warnings are expected but should not increase
   - TypeScript errors should not appear

### Manual Testing Required
- ALWAYS manually validate changes by running the application
- No automated test suite exists - rely on manual browser testing
- Take screenshots of UI changes for documentation
- Test both development (`npm run dev`) and production (`npm run start`) modes

### Pre-commit Validation
- ALWAYS run `npm run lint` before committing changes
- ALWAYS run `npm run build` to verify TypeScript compilation
- ALWAYS test core functionality manually in browser

## Codebase Structure

### Key Directories
```
src/
├── app/                    # Next.js app router
│   ├── globals.css        # Tailwind CSS imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main demo page with all components
└── components/
    └── ui/                # 80+ React Aria Components
        ├── Button.tsx
        ├── TextField.tsx
        ├── Checkbox.tsx
        └── ... (80+ more components)
```

### Component Patterns
- All components use `"use client"` directive
- Components wrap React Aria Components with Tailwind styling
- Styling uses `clsx` + `tailwind-merge` pattern
- TypeScript with strict mode enabled
- Import alias `@/*` maps to `./src/*`

### Core Dependencies
- **Next.js 15.1.5** - React framework with app router
- **React 19** - Latest React version
- **React Aria Components** - Accessible UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety with strict mode
- **Lucide React** - Icon library

## Common Tasks

### Adding New Components
- Create component in `src/components/ui/`
- Follow existing pattern: wrap React Aria Component
- Use `clsx` + `tailwind-merge` for styling
- Export default and add to main page demo
- Test accessibility and interactions

### Styling Changes
- Modify Tailwind classes in component files
- Use `tailwind-merge` to handle class conflicts
- Test responsive behavior
- Validate focus and hover states

### Configuration Files
- `tailwind.config.ts` - Tailwind configuration with React Aria plugin
- `next.config.ts` - Next.js configuration (minimal)
- `tsconfig.json` - TypeScript strict mode with path mapping
- `eslint.config.mjs` - ESLint with Next.js and TypeScript rules

## Expected Command Outputs

### npm run build
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    69.4 kB         175 kB
└ ○ /_not-found                          979 B           106 kB
```

### npm run dev
```
▲ Next.js 15.1.5
- Local:        http://localhost:3000
- Network:      http://10.1.0.174:3000

✓ Starting...
✓ Ready in 1346ms
```

### npm run lint
```
✔ No ESLint warnings or errors
```

## Troubleshooting

### Common Issues
- **Production start fails**: Run `npm run build` first before `npm run start`
- **TypeScript errors**: Check import paths and component prop types
- **Styling issues**: Verify Tailwind classes and check for conflicts
- **Accessibility warnings**: Expected for demo purposes, focus on not increasing them

### Performance Notes
- Build includes automatic Next.js telemetry
- Static pages are pre-rendered for optimal performance  
- Components use React 19 concurrent features
- Development mode includes fast refresh

### Security Notes
- No sensitive data in codebase
- All dependencies are public packages
- No API keys or credentials required
- Client-side only application