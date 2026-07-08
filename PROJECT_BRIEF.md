# Project Brief: Personal Website for Girlfriend

## Goal

Build a romantic, elegant, personal single-page website made specially for my girlfriend.

The website should feel like a digital love letter, not a generic landing page.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Responsive design
- No backend

## Design Direction

Style:

- Soft
- Romantic
- Elegant
- Clean
- Dreamy
- Premium

Colors:

- Cream
- White
- Dusty pink
- Soft gold accent

Fonts:

- Heading: Playfair Display or similar serif font
- Body: Inter or similar sans-serif font

Avoid:

- Too many heart icons
- Childish design
- Overcrowded layout
- Neon colors
- Cheap Valentine's poster vibe

## Website Structure

### 1. Hero Section

Purpose:
Create a cinematic first impression.

Content:

- Title: "For [Her Name]"
- Subtitle: "A little place on the internet, made just for you."
- Background: soft gradient or romantic image placeholder
- CTA: "Start Reading"

### 2. Opening Message

Purpose:
Explain why this website exists.

Content:
A short romantic paragraph about making this website for her.

### 3. Our Story

Purpose:
Show the relationship journey.

Use timeline layout.

Timeline items:

- First met
- First chat
- First date
- Favorite memory
- Today

Each item should have:

- Date placeholder
- Title
- Short description

### 4. Things I Love About You

Purpose:
Show personal details.

Use elegant cards.

Examples:

- Your smile
- The way you care
- Your laugh
- Your patience
- Your little random habits

### 5. Gallery

Purpose:
Display memories.

Use photo grid with placeholder images.
Each image should have a short caption.

### 6. Open When

Purpose:
Create emotional interaction.

Use cards that can be clicked/opened.

Cards:

- Open when you miss me
- Open when you're sad
- Open when you're tired
- Open when you need a reminder

Each card opens a modal or expandable letter.

### 7. Playlist

Purpose:
Show songs that remind me of her.

Use music cards with:

- Song title
- Artist placeholder
- Short reason

No autoplay.

### 8. Future With You

Purpose:
Show hopes and dreams.

Use bucket list cards.

Examples:

- Travel together
- Build a peaceful life
- Celebrate more anniversaries
- Grow together

### 9. Final Letter

Purpose:
End with a heartfelt message.

Use a beautiful letter-style section.

### 10. Footer

Text:
"Made with love, just for you."

## Interaction Requirements

- Smooth scrolling
- Fade-in animations
- Soft hover effects
- Mobile responsive
- Button to scroll to next section
- Optional music toggle UI, but no autoplay

## Code Requirements

- Use reusable components
- Use clean folder structure
- Separate data into a constants file
- Easy to edit text, photos, timeline, and songs
- Use semantic HTML
- Use accessible buttons and modals

## Suggested Structure

src/
components/
sections/
Hero.tsx
OpeningMessage.tsx
OurStory.tsx
ThingsILove.tsx
Gallery.tsx
OpenWhen.tsx
Playlist.tsx
FutureWithYou.tsx
FinalLetter.tsx
Footer.tsx
ui/
SectionTitle.tsx
Card.tsx
data/
loveData.ts
pages/
index.tsx
styles/
globals.css

## Important Notes

The final result should feel personal, elegant, and emotional.
Use placeholder content, but make it easy for me to replace with real names, dates, photos, and messages.
