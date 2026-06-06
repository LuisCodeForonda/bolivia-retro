---
name: Sonic Momentum
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e7bdbb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad8886'
  outline-variant: '#5d3f3e'
  surface-tint: '#ffb3b1'
  primary: '#ffb3b1'
  on-primary: '#680011'
  primary-container: '#ff535a'
  on-primary-container: '#5b000d'
  inverse-primary: '#bf0027'
  secondary: '#dec1af'
  on-secondary: '#3f2c20'
  secondary-container: '#574335'
  on-secondary-container: '#ccb09f'
  tertiary: '#f4bb92'
  on-tertiary: '#4a280a'
  tertiary-container: '#b98661'
  on-tertiary-container: '#422105'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#fbddca'
  secondary-fixed-dim: '#dec1af'
  on-secondary-fixed: '#28180d'
  on-secondary-fixed-variant: '#574335'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#f4bb92'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#653d1e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 64px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style

This design system is engineered for a high-energy, modern broadcasting environment. It balances the raw intensity of live media with the polished professionalism of a digital-first radio station. The aesthetic sits at the intersection of **High-Contrast Modern** and **Tonal Minimalism**, utilizing a dark-first interface to prioritize content immersion and reduce visual fatigue during long listening sessions.

The emotional response should be one of "vibrant authority"—the UI feels urgent and alive (via the red accents) yet grounded and sophisticated (via the deep brown and black foundation). It avoids the clinical coldness of standard tech platforms by introducing rich, warm coffee tones that evoke a "studio booth" atmosphere.

## Colors

The palette is anchored in a "Dark Studio" concept.
- **Vibrant Red (Primary):** Used exclusively for high-action items: "Live" indicators, primary playback controls, and critical call-to-actions. It signifies energy and the "on-air" status.
- **Deep Black (Neutral Base):** The primary canvas color. It provides a void-like depth that makes imagery and text pop.
- **Dark Brown (Secondary):** Used for large container surfaces to add warmth and differentiate from the pure black background.
- **Coffee Brown (Tertiary):** An accent neutral used for secondary information, borders, or hover states to soften the high contrast.
- **White:** Reserved for maximum legibility on dark backgrounds, used for all primary body and headline text.

## Typography

This design system utilizes two distinct sans-serif families to manage hierarchy and energy. 

**Sora** is the voice of the brand. Its geometric construction and ultra-bold weights provide the "Modern & Energetic" feel required for display text and headlines. It is used to command attention, much like a radio host's voice.

**Hanken Grotesk** serves as the functional workhorse. It is highly legible at smaller sizes for track listings, descriptions, and UI controls. We use a slightly generous line height for body text to maintain the "breathing room" requested in the layout philosophy.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with an emphasis on "Negative Space as Luxury." By allowing generous gaps between sections, we ensure the user is never overwhelmed by the high-contrast color palette.

- **Desktop:** 12-column grid with wide 64px margins. Content is organized into modular "blocks" that can span multiple columns.
- **Rhythm:** We use a strict 8px base unit. Vertical spacing between different content types should be aggressive (e.g., 80px gaps between "Live Now" and "Recent Podcasts") to ensure clarity.
- **Safe Zones:** High-interactivity components (like the radio player) should be surrounded by at least 32px of clear space to avoid accidental clicks.

## Elevation & Depth

In a dark-themed, high-energy system, depth is communicated through **Tonal Layering** rather than traditional shadows. 

1. **Level 0 (Base):** Deep Black (#0A0A0A) - The main background.
2. **Level 1 (Containers):** Dark Brown (#3D2B1F) - Used for cards and secondary content areas. 
3. **Level 2 (Interactive):** Coffee Brown (#8B5E3C) - Used for hover states and active navigation elements.

**Outlines:** Use subtle 1px borders in Coffee Brown to define card boundaries without introducing heavy visual noise. Avoid dropshadows unless they are "Glow" effects using the primary Red, reserved exclusively for the currently playing track or "Live" status.

## Shapes

The shape language is **Rounded (Level 2)**. This decision softens the aggressive high-contrast color palette, making the interface feel professional and modern rather than "Brutalist."

- **Standard Elements:** 0.5rem (8px) radius for buttons and input fields.
- **Featured Content:** 1rem (16px) radius for large cards and album art containers.
- **System Icons:** Should follow the same rounded logic, avoiding sharp corners to maintain visual consistency with the UI containers.

## Components

### Radio Player (Global)
The player is a fixed, sleek bar at the bottom of the viewport or a floating persistent module. It uses the **Deep Black** background with a **Vibrant Red** progress bar and play/pause button. Metadata (Track/Artist) uses **White** for high contrast.

### Dark-Themed Cards
Cards use the **Dark Brown** surface. Image containers within cards should have a subtle 1px border of **Coffee Brown**. Typography within cards is strictly **White** (headlines) and **Light Grey/Coffee** (metadata).

### Clean Form Inputs
Input fields use a transparent background with a 1px **Coffee Brown** border. Upon focus, the border transitions to **Vibrant Red**. Labels are placed above the field in **Sora Bold** at 12px, using an uppercase style.

### Live Indicator (Chip)
A compact, pill-shaped component with a **Vibrant Red** background and a pulsing animation. Text inside is **White** and bold.

### Action Buttons
- **Primary:** Solid **Vibrant Red** with **White** text.
- **Secondary:** Outlined **Coffee Brown** with **White** text.
- **Ghost:** No background, **White** text, used for tertiary actions like "View More."