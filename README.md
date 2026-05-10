# شهد (Shahed) Waitlist Landing Page

A luxury, production-grade landing page for "Shahed", a Buy Now Pay Later (BNPL) service targeting Jordan.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Noto Sans Arabic (AR), Playfair Display (Logo)
- **Data Storage**: Local JSON file (`/data/waitlist.json`)

## Features
- **Bilingual Support**: RTL layout with Arabic primary and English secondary text.
- **Jordanian Phone Validation**: Ensures numbers follow the `07XXXXXXXX` format.
- **Responsive Design**: Mobile-first approach optimized for all devices.
- **Modern Animations**: Smooth fade-in and slide-up effects for a premium feel.
- **API Integration**: Server-side processing for waitlist submissions.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Folder Structure
- `app/`: Contains the main page, layout, and API routes.
- `components/`: Reusable UI components (Hero, Form, HowItWorks).
- `data/`: Local storage for the waitlist entries.
- `public/`: Static assets.

## License
© 2026 شهد. جميع الحقوق محفوظة.
