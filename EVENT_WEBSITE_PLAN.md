# Event Website Planning Document
## RHR Company Event Website

---

## Project Overview

Transform the award-winning website template into a company event website with 4 pages:
1. **Landing Page** (Homepage) - Keep existing design
2. **Rundown Kegiatan** (Event Schedule/Rundown)
3. **Gallery** (Event Photo Gallery)
4. **RHR Green Idea** (Green Initiative Showcase)

**Purpose**: Static preview website for company event (no login/authentication required)

---

## Site Structure

```
/                       → Landing Page (existing Hero + sections)
/rundown-kegiatan       → Event Schedule/Timeline
/gallery                → Photo Gallery
/rhr-green-idea         → Green Initiative Page
```

---

## Technical Implementation Plan

### 1. Setup Routing System

**Add React Router**
```bash
npm install react-router-dom
```

**Update `main.jsx`**
- Wrap app with `<BrowserRouter>`
- Configure routes for all pages

**Update `App.jsx`**
- Keep as landing page component
- OR create `pages/` folder structure:
  - `pages/LandingPage.jsx`
  - `pages/RundownKegiatan.jsx`
  - `pages/Gallery.jsx`
  - `pages/RHRGreenIdea.jsx`

---

### 2. Navigation Updates

**Update `Navbar.jsx`**

Current links:
```
Nexus, Vault, Prologue, About, Contact
```

New links:
```
Home, Rundown Kegiatan, Gallery, RHR Green Idea
```

**Navigation Structure**:
- Logo → Link to home (`/`)
- "Home" → Landing page (`/`)
- "Rundown Kegiatan" → Schedule page (`/rundown-kegiatan`)
- "Gallery" → Gallery page (`/gallery`)
- "RHR Green Idea" → Green idea page (`/rhr-green-idea`)
- Keep audio toggle button
- Make responsive for mobile

---

## Page Specifications

### Page 1: Landing Page (/)

**Status**: Keep existing design

**Sections to Keep**:
- ✅ Hero section with video background
- ✅ About section with animations
- ✅ Features section (Bento grid)
- ✅ Story section
- ✅ Contact section
- ✅ Footer

**Modifications Needed**:
- Update text content to match company event theme
- Replace videos/images with event-related media
- Update company branding (logo, colors if needed)
- Modify "Products" button text (maybe "Event Info")

**Content to Replace**:
- Hero video backgrounds → Event promotional videos
- Logo → Company/Event logo
- Text content → Event description
- Feature cards → Event highlights/features
- Contact section → Event contact information

---

### Page 2: Rundown Kegiatan (/rundown-kegiatan)

**Purpose**: Display event schedule/timeline

**Layout Components**:
1. **Hero Section**
   - Page title: "Rundown Kegiatan"
   - Subtitle/description
   - Background image or video

2. **Timeline Section**
   - Vertical timeline design
   - Time-based schedule display
   - Event activities listed chronologically

**Content Structure**:
```
Time | Activity | Description | Location (optional)
-----|----------|-------------|--------------------
08:00 | Registration | ... | Hall A
09:00 | Opening Ceremony | ... | Main Stage
...
```

**Features to Implement**:
- Animated timeline (GSAP ScrollTrigger)
- Interactive time blocks
- Responsive timeline (horizontal on mobile)
- Color-coded activities (optional)
- Icons for different activity types

**Components to Create**:
- `TimelineItem.jsx` - Individual schedule item
- `Timeline.jsx` - Timeline container
- `RundownHero.jsx` - Page hero section

---

### Page 3: Gallery (/gallery)

**Purpose**: Display event photos in gallery format

**Layout Components**:
1. **Hero Section**
   - Page title: "Gallery"
   - Event description
   - Photo count indicator

2. **Gallery Grid**
   - Masonry/Grid layout
   - Image lightbox/modal
   - Lazy loading for performance

**Gallery Features**:
- **Grid Layout Options**:
  - Option A: Masonry grid (Pinterest-style)
  - Option B: Fixed grid (3-4 columns)
  - Option C: Bento-style grid (like Features section)

- **Interactive Features**:
  - Click to enlarge images
  - Lightbox/modal view
  - Image navigation (prev/next)
  - Smooth transitions
  - GSAP animations on scroll

- **Filtering** (Optional):
  - Category tabs (Day 1, Day 2, Activities, etc.)
  - Filter by event type

**Components to Create**:
- `GalleryHero.jsx` - Page hero section
- `GalleryGrid.jsx` - Gallery grid container
- `GalleryItem.jsx` - Individual photo item
- `Lightbox.jsx` - Image modal/lightbox

**Assets Needed**:
- Event photos (WebP format recommended)
- Thumbnail versions for performance
- Placeholder images during development

---

### Page 4: RHR Green Idea (/rhr-green-idea)

**Purpose**: Showcase company's green/sustainability initiatives

**Layout Components**:
1. **Hero Section**
   - Page title: "RHR Green Idea"
   - Mission statement
   - Hero image/video

2. **Green Initiatives Section**
   - Card-based layout
   - Each card = one green initiative
   - Icons, images, descriptions

3. **Impact Section** (Optional)
   - Statistics/metrics
   - Animated counters
   - Infographics

4. **Call-to-Action**
   - Participation encouragement
   - Contact information

**Content Structure**:
```
Initiative Cards:
- Title
- Description
- Icon/Image
- Impact metrics (optional)
```

**Features to Implement**:
- 3D hover effects (reuse BentoTilt component)
- Scroll animations
- Interactive cards
- Video backgrounds (optional)
- Green-themed color scheme

**Components to Create**:
- `GreenIdeaHero.jsx` - Page hero
- `GreenInitiative.jsx` - Initiative card
- `ImpactMetrics.jsx` - Statistics display
- `GreenCTA.jsx` - Call-to-action section

**Design Considerations**:
- Use green color palette
- Nature/eco-themed imagery
- Clean, modern layout
- Emphasize sustainability message

---

## Shared Components

### Components to Keep & Reuse
- ✅ `Navbar.jsx` (update links)
- ✅ `Footer.jsx` (update links/content)
- ✅ `Button.jsx`
- ✅ `AnimatedTitle.jsx`
- ✅ `BentoTilt.jsx` (for 3D effects)
- ✅ `BentoCard.jsx` (for feature cards)

### New Components to Create
- `PageHero.jsx` - Reusable page hero section
- `Timeline.jsx` + `TimelineItem.jsx`
- `GalleryGrid.jsx` + `GalleryItem.jsx`
- `Lightbox.jsx`
- `GreenInitiative.jsx`
- `ImpactMetrics.jsx`

---

## Asset Requirements

### Images
- [ ] Company/Event logo
- [ ] Landing page hero images/videos
- [ ] Event photos for gallery (multiple)
- [ ] Green initiative images
- [ ] Background images for each page

### Videos (Optional)
- [ ] Landing page hero videos
- [ ] Event highlight reel
- [ ] Green initiative showcase videos

### Audio
- [ ] Background music (if keeping audio feature)

### Content/Copy
- [ ] Event name and description
- [ ] Event schedule/rundown data
- [ ] Green initiative descriptions
- [ ] Contact information
- [ ] Social media links

---

## Styling & Theming

### Color Scheme Options

**Option A: Keep Original**
- Blue palette: #DFDFF0, #4FB7DD
- Violet: #5724ff
- Yellow: #edff66

**Option B: Company Branding**
- Use company brand colors
- Update Tailwind config

**Option C: Event Theme**
- Custom event-themed colors

### Typography
- Keep existing font setup OR
- Add company brand fonts

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Test on all devices

---

## Development Phases

### Phase 1: Setup & Routing
- [ ] Install React Router
- [ ] Create folder structure (`pages/`, `components/`)
- [ ] Setup routing in `main.jsx`
- [ ] Create placeholder pages
- [ ] Update Navbar with new links

### Phase 2: Landing Page
- [ ] Review existing content
- [ ] Replace placeholder content with event content
- [ ] Update images/videos
- [ ] Update company branding
- [ ] Test all animations

### Phase 3: Rundown Kegiatan Page
- [ ] Create page structure
- [ ] Build Timeline components
- [ ] Add schedule data
- [ ] Implement animations
- [ ] Make responsive

### Phase 4: Gallery Page
- [ ] Create page structure
- [ ] Build Gallery grid
- [ ] Implement Lightbox
- [ ] Add lazy loading
- [ ] Add images
- [ ] Test performance

### Phase 5: RHR Green Idea Page
- [ ] Create page structure
- [ ] Build initiative cards
- [ ] Add content
- [ ] Implement animations
- [ ] Add metrics section

### Phase 6: Polish & Testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Animation smoothness
- [ ] Image optimization
- [ ] Final content review

---

## Technical Considerations

### Performance
- Lazy load images (React lazy, Intersection Observer)
- Optimize videos (compress, proper formats)
- Code splitting for routes
- Minify assets

### SEO (Optional)
- Meta tags for each page
- Open Graph tags
- Descriptive page titles
- Alt text for images

### Accessibility
- Keyboard navigation
- ARIA labels
- Alt text for images
- Proper heading hierarchy
- Focus states

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Test on different devices

---

## Data Structure Examples

### Rundown Data (`rundownData.js`)
```javascript
export const rundownData = [
  {
    id: 1,
    time: "08:00 - 09:00",
    title: "Registration",
    description: "Check-in and welcome coffee",
    location: "Main Lobby",
    icon: "registration"
  },
  {
    id: 2,
    time: "09:00 - 09:30",
    title: "Opening Ceremony",
    description: "Welcome speech by CEO",
    location: "Main Hall",
    icon: "ceremony"
  },
  // ... more items
];
```

### Gallery Data (`galleryData.js`)
```javascript
export const galleryData = [
  {
    id: 1,
    src: "/img/gallery/event-01.webp",
    alt: "Event opening ceremony",
    category: "ceremony",
    caption: "Opening ceremony"
  },
  {
    id: 2,
    src: "/img/gallery/event-02.webp",
    alt: "Team activity",
    category: "activities",
    caption: "Team building session"
  },
  // ... more items
];
```

### Green Initiatives Data (`greenIdeaData.js`)
```javascript
export const greenIdeaData = [
  {
    id: 1,
    title: "Zero Waste Initiative",
    description: "Reducing waste to landfill by 90%",
    icon: "♻️",
    image: "/img/green/zero-waste.webp",
    impact: "500kg waste reduced monthly"
  },
  {
    id: 2,
    title: "Green Energy",
    description: "Solar panels for office power",
    icon: "☀️",
    image: "/img/green/solar.webp",
    impact: "40% energy from renewable sources"
  },
  // ... more items
];
```

---

## File Structure (Proposed)

```
award-winning-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx (updated)
│   │   ├── Footer.jsx (updated)
│   │   ├── Button.jsx
│   │   ├── AnimatedTitle.jsx
│   │   ├── BentoTilt.jsx
│   │   ├── BentoCard.jsx
│   │   ├── shared/
│   │   │   └── PageHero.jsx (new)
│   │   ├── timeline/
│   │   │   ├── Timeline.jsx (new)
│   │   │   └── TimelineItem.jsx (new)
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.jsx (new)
│   │   │   ├── GalleryItem.jsx (new)
│   │   │   └── Lightbox.jsx (new)
│   │   └── green/
│   │       ├── GreenInitiative.jsx (new)
│   │       └── ImpactMetrics.jsx (new)
│   ├── pages/
│   │   ├── LandingPage.jsx (move from App.jsx)
│   │   ├── RundownKegiatan.jsx (new)
│   │   ├── Gallery.jsx (new)
│   │   └── RHRGreenIdea.jsx (new)
│   ├── data/
│   │   ├── rundownData.js (new)
│   │   ├── galleryData.js (new)
│   │   └── greenIdeaData.js (new)
│   ├── App.jsx (router setup)
│   ├── main.jsx (updated)
│   └── index.css
├── public/
│   ├── img/
│   │   ├── event/ (new - event images)
│   │   ├── gallery/ (new - gallery photos)
│   │   └── green/ (new - green initiative images)
│   ├── videos/
│   │   └── event/ (new - event videos)
│   └── ...
└── EVENT_WEBSITE_PLAN.md (this file)
```

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Gather all assets** (images, videos, content)
3. **Start Phase 1** (Setup & Routing)
4. **Iterate** through phases 2-6
5. **Test and deploy**

---

## Questions to Answer Before Development

1. **Branding**:
   - Company logo available?
   - Brand colors (hex codes)?
   - Brand fonts?

2. **Content**:
   - Event name and tagline?
   - Event date and location?
   - Full rundown/schedule ready?
   - Gallery photos available (how many)?
   - Green initiatives descriptions?

3. **Features**:
   - Keep background audio feature?
   - Video backgrounds on all pages?
   - Animation intensity (keep heavy animations or simplify)?
   - Lightbox library preference or custom?

4. **Technical**:
   - Hosting platform?
   - Domain name?
   - Analytics needed?
   - Contact form functionality needed?

---

## Notes

- This is a **static preview website** - no backend/database needed
- All data can be stored in JavaScript files
- Focus on visual impact and smooth animations
- Reuse existing components where possible to maintain consistency
- Keep the "award-winning" aesthetic while adapting to event theme

---

**Document Version**: 1.0
**Last Updated**: 2026-01-07
**Status**: Planning Phase
