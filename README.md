# Safiri Kenya - Travel & Safari Website

A modern, responsive travel website showcasing Kenya's most beautiful safari destinations. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Custom Cursor**: Interactive cursor effects (desktop only)
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Scroll to Top**: Easy navigation back to top of page
- **Dynamic Components**: 
  - Responsive navigation with mobile menu
  - Interactive destination cards
  - Feature showcase
  - Social media integration
  - Call-to-action sections

## 🖼️ Images

All images are sourced from [Unsplash](https://unsplash.com). To change the images:

1. Navigate to `src/data/destinations.ts` or `src/data/experiences.ts`
2. Replace the image URLs in the `image` property of each item
3. Make sure to use high-quality images that are at least 1200px wide
4. Add `?auto=format&q=80&w=1200` to the Unsplash URL for optimal loading

Example:
```typescript
{
  title: "Maasai Mara",
  image: "https://images.unsplash.com/photo-your-new-image-id?auto=format&q=80&w=1200",
  description: "Your description"
}
```

## 🚀 Technologies Used

- **React 18**: Modern UI development
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first styling
- **Vite**: Fast development & building
- **Lucide React**: Beautiful, consistent icons
- **ESLint**: Code quality maintenance

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- VS Code (recommended)

## 🛠️ VS Code Setup

1. Install recommended extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - TypeScript Vue Plugin (Volar)

2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd safiri-kenya
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Cursor.tsx     # Custom cursor implementation
│   ├── Footer.tsx     # Site footer with social links
│   ├── Navbar.tsx     # Navigation component
│   ├── ScrollToTop.tsx# Scroll to top button
│   └── ThemeToggle.tsx# Dark mode toggle
├── hooks/             # Custom React hooks
│   ├── useTheme.ts    # Dark mode functionality
│   └── useScrollPosition.ts # Scroll position tracking
├── App.tsx           # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom color scheme focusing on amber/natural tones
- Dark mode support with `dark:` variants
- Responsive design breakpoints
- Custom animations and transitions

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Lint code with ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

- Responsive design for all screen sizes
- Touch-friendly interface
- Disabled custom cursor on mobile devices
- Mobile-optimized navigation

## 🔒 Best Practices

- Semantic HTML
- Accessibility considerations
- SEO-friendly structure
- Performance optimized
- Component-based architecture
- Custom hooks for reusable logic
- Consistent code style with ESLint
- Type safety with TypeScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.