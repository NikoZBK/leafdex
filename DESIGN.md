# Leafdex Design System Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Quick Reference](#quick-reference)
3. [Core Design System](#core-design-system)
   - [Design Principles](#design-principles)
   - [Color System](#color-system)
   - [Typography](#typography)
   - [Spacing & Layout](#spacing--layout)
   - [Component Library](#component-library)
   - [Accessibility Standards](#accessibility-standards)
4. [Shared Specifications](#shared-specifications)
   - [Common Components](#common-components)
   - [Shared Patterns](#shared-patterns)
   - [Universal Behaviors](#universal-behaviors)
5. [Platform-Specific Guidelines](#platform-specific-guidelines)
   - [Mobile Design](#mobile-design)
   - [Web Design](#web-design)
6. [Implementation](#implementation)
   - [CSS Framework](#css-framework-implementation)
   - [Design System Governance](#design-system-governance)

## Introduction

This design system document serves as the single source of truth for Leafdex's visual language, component behavior, and implementation guidelines. It ensures consistency across the application while enabling efficient collaboration.

**Purpose of this document:**

- Define shared design vocabulary
- Document implementation standards
- Establish quality and accessibility requirements
- Support design and development workflows

**Team Members:**

- Chandan Marle
- Nikolay Ostroukhov
- Omar Natour
- Samuel Hernandez

**Referenced Design Guidelines:**

- [Material Design](https://material.io/design) (Primary influence)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [WCAG 2.1 AA Standards](https://www.w3.org/TR/WCAG21/)

## Quick Reference

### Essential Design Tokens

#### Colors

- Primary: `#2E7D32` <span style="display: inline-block; width: 20px; height: 20px; background-color: #2E7D32; vertical-align: middle; margin-left: 8px;"></span>
- Accent: `#FF9800` <span style="display: inline-block; width: 20px; height: 20px; background-color: #FF9800; vertical-align: middle; margin-left: 8px;"></span>
- Text: `#212121` <span style="display: inline-block; width: 20px; height: 20px; background-color: #212121; vertical-align: middle; margin-left: 8px;"></span>
- Background: `#FFFFFF` <span style="display: inline-block; width: 20px; height: 20px; background-color: #FFFFFF; border: 1px solid #ddd; vertical-align: middle; margin-left: 8px;"></span>

#### Typography

- Base Font: System font stack
- Base Size: 16px
- Line Height: 1.5
- Scale: 1.25 (major third)

#### Spacing

- Base Unit: 8px
- Common Values:
  - xs: 8px
  - sm: 16px
  - md: 24px
  - lg: 32px
  - xl: 48px

#### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Critical Components

#### Buttons

```css
/* Primary Button */
height: 48px;
border-radius: 24px;
padding: 0 16px;
background: #2e7d32;
color: white;
font-size: 14px;
font-weight: 500;
```

#### Cards

```css
/* Standard Card */
padding: 16px;
border-radius: 12px;
background: white;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
```

#### Input Fields

```css
/* Text Input */
height: 56px;
padding: 0 16px;
border-radius: 8px;
border: 1px solid #bdbdbd;
font-size: 16px;
```

### Key Behaviors

#### Touch Targets

- Minimum size: 44×44px
- Spacing between: 8px minimum

#### States

- Hover: 200ms transition
- Active: 100ms transition
- Focus: 2px outline in primary color
- Disabled: 40% opacity

#### Animations

- Page transitions: 300ms
- Micro-interactions: 200ms
- Loading states: Indeterminate

### Accessibility Requirements

#### Contrast

- Text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

#### Touch

- Target size: 44×44px minimum
- Spacing: 8px minimum between targets
- No overlapping touch areas

### Common CSS Classes

```css
/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 16px;
}
.flex {
  display: flex;
  gap: 16px;
}

/* Spacing */
.p-sm {
  padding: 16px;
}
.m-sm {
  margin: 16px;
}
.gap-sm {
  gap: 16px;
}

/* Typography */
.text-h1 {
  font-size: 24px;
  line-height: 32px;
}
.text-body {
  font-size: 16px;
  line-height: 24px;
}
.text-caption {
  font-size: 12px;
  line-height: 16px;
}

/* Colors */
.bg-primary {
  background-color: #2e7d32;
}
.text-primary {
  color: #2e7d32;
}
.bg-accent {
  background-color: #ff9800;
}
```

## Core Design System

### Design Principles

Leafdex's design is guided by four core principles:

1. **Collectible and Engaging**  
   Interface elements inspire users to discover and collect more plants, with gamification elements and collection-focused features.

2. **Educational and Informative**  
   Every design decision prioritizes clearly communicating plant information in an educational context, making learning about plants fun and rewarding.

3. **Accessible to All**  
   The app is designed to be usable by everyone, regardless of device, ability, or technical proficiency.

4. **Efficient and Responsive**  
   The interface responds quickly to user input with appropriate feedback, minimizing steps for common tasks.

### Color System

#### Primary Palette

| Name                | Hex     | RGB                | Usage                                | Preview                                                                                                                    |
| ------------------- | ------- | ------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Green Primary       | #2E7D32 | rgb(46, 125, 50)   | Primary actions, key UI elements     | <span style="display: inline-block; width: 20px; height: 20px; background-color: #2E7D32; vertical-align: middle;"></span> |
| Green Secondary     | #81C784 | rgb(129, 199, 132) | Secondary elements, highlights       | <span style="display: inline-block; width: 20px; height: 20px; background-color: #81C784; vertical-align: middle;"></span> |
| Green Light         | #C8E6C9 | rgb(200, 230, 201) | Backgrounds, subtle indicators       | <span style="display: inline-block; width: 20px; height: 20px; background-color: #C8E6C9; vertical-align: middle;"></span> |
| Accent Orange       | #FF9800 | rgb(255, 152, 0)   | Call to action, important highlights | <span style="display: inline-block; width: 20px; height: 20px; background-color: #FF9800; vertical-align: middle;"></span> |
| Accent Orange Light | #FFE0B2 | rgb(255, 224, 178) | Secondary highlights, backgrounds    | <span style="display: inline-block; width: 20px; height: 20px; background-color: #FFE0B2; vertical-align: middle;"></span> |

#### Neutral Palette

| Name        | Hex     | RGB                | Usage                     | Preview                                                                                                                                            |
| ----------- | ------- | ------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Black       | #212121 | rgb(33, 33, 33)    | Primary text              | <span style="display: inline-block; width: 20px; height: 20px; background-color: #212121; vertical-align: middle;"></span>                         |
| Gray Dark   | #757575 | rgb(117, 117, 117) | Secondary text            | <span style="display: inline-block; width: 20px; height: 20px; background-color: #757575; vertical-align: middle;"></span>                         |
| Gray Medium | #BDBDBD | rgb(189, 189, 189) | Disabled states, dividers | <span style="display: inline-block; width: 20px; height: 20px; background-color: #BDBDBD; vertical-align: middle;"></span>                         |
| Gray Light  | #F5F5F5 | rgb(245, 245, 245) | Backgrounds, cards        | <span style="display: inline-block; width: 20px; height: 20px; background-color: #F5F5F5; border: 1px solid #ddd; vertical-align: middle;"></span> |
| White       | #FFFFFF | rgb(255, 255, 255) | Primary background        | <span style="display: inline-block; width: 20px; height: 20px; background-color: #FFFFFF; border: 1px solid #ddd; vertical-align: middle;"></span> |

#### Semantic Colors

| Name    | Hex     | RGB               | Usage                             | Preview                                                                                                                    |
| ------- | ------- | ----------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Success | #4CAF50 | rgb(76, 175, 80)  | Success states, confirmations     | <span style="display: inline-block; width: 20px; height: 20px; background-color: #4CAF50; vertical-align: middle;"></span> |
| Warning | #FFC107 | rgb(255, 193, 7)  | Warnings, alerts                  | <span style="display: inline-block; width: 20px; height: 20px; background-color: #FFC107; vertical-align: middle;"></span> |
| Error   | #F44336 | rgb(244, 67, 54)  | Error states, destructive actions | <span style="display: inline-block; width: 20px; height: 20px; background-color: #F44336; vertical-align: middle;"></span> |
| Info    | #2196F3 | rgb(33, 150, 243) | Informational elements            | <span style="display: inline-block; width: 20px; height: 20px; background-color: #2196F3; vertical-align: middle;"></span> |

#### Color Contrast Requirements

- Text: Minimum 4.5:1 contrast ratio against backgrounds (WCAG AA)
- Large Text (18pt+): Minimum 3:1 contrast ratio
- UI Components and Graphical Objects: Minimum 3:1 contrast ratio

#### Dark Mode Palette

| Light Mode | Dark Mode Equivalent |
| ---------- | -------------------- |
| #FFFFFF    | #121212              |
| #F5F5F5    | #1E1E1E              |
| #2E7D32    | #81C784              |
| #212121    | #E0E0E0              |

### Typography

#### Font Families

**Cross-Platform Strategy:**

- iOS: San Francisco (System font)
- Android: Roboto (System font)
- Web fallbacks: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
  Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
```

#### Type Scale

| Name      | Size | Weight        | Line Height | Letter Spacing |
| --------- | ---- | ------------- | ----------- | -------------- |
| Display   | 34px | Regular (400) | 40px        | -0.5px         |
| Heading 1 | 24px | Medium (500)  | 32px        | 0px            |
| Heading 2 | 20px | Medium (500)  | 28px        | 0.15px         |
| Heading 3 | 18px | Medium (500)  | 24px        | 0.15px         |
| Subtitle  | 16px | Medium (500)  | 24px        | 0.15px         |
| Body 1    | 16px | Regular (400) | 24px        | 0.5px          |
| Body 2    | 14px | Regular (400) | 20px        | 0.25px         |
| Caption   | 12px | Regular (400) | 16px        | 0.4px          |
| Button    | 14px | Medium (500)  | 16px        | 0.75px         |

#### Typography Rules

- **Hierarchy:** Maintain clear hierarchy with no more than 3 levels of headings per screen
- **Line Length:** Aim for 60-80 characters per line for optimal readability
- **Truncation:** Use ellipsis (...) for truncated text with full text available on tap/hover
- **Alignment:** Left-align text for most content (localization-aware)
- **Font Scaling:** Support dynamic type (iOS) and text scaling (Android) up to 200%

### Spacing & Layout

#### Spacing Scale

The spacing system uses an 8px baseline grid with 4px for fine adjustments.

| Name | Size | Usage                                    |
| ---- | ---- | ---------------------------------------- |
| xxxs | 2px  | Minimum spacing, fine details            |
| xxs  | 4px  | Tight spacing, icons                     |
| xs   | 8px  | Default spacing between related elements |
| sm   | 16px | Standard padding, margins                |
| md   | 24px | Separation between sections              |
| lg   | 32px | Major section divisions                  |
| xl   | 48px | Screen padding, major layout blocks      |
| xxl  | 64px | Large screen separations                 |

#### Layout Grid

- **Base Unit:** 8px
- **Columns:** 4 (small phones), 8 (standard phones), 12 (tablets/landscape)
- **Gutters:** 16px (phones), 24px (tablets)
- **Margins:** 16px (phones), 24px (tablets), 40px (large screens)

#### Layout Principles

1. **Consistent Alignment**

   - Align elements to the same baseline where possible
   - Maintain consistent left/right margins within contexts

2. **Visual Hierarchy**

   - Use space to establish relationships between elements
   - Group related items with tighter spacing
   - Separate distinct sections with larger spacing

3. **White Space**

   - Embrace white space to improve readability and focus
   - Maintain minimum 16px padding from screen edges
   - Provide breathing room around interactive elements

4. **Content Density**
   - Optimize for touch on mobile (minimum 44×44px touch targets)
   - Adjust density contextually (denser for browse, spacious for focus)

### Component Library

#### Core Components

##### Collection Cards

**Plant Collection Card**

- Background: White
- Padding: 0 bottom, 0 horizontal, 12px top
- Corner Radius: 12px top, 16px bottom
- Image Container: 160px height
- Content Padding: 12px
- Shadow: 0 2px 4px rgba(0,0,0,0.1)
- Collection Status: Badge showing "New", "Rare", or "Common"
- Progress Indicator: Collection completion status

**Collection Progress**

- Circular progress indicator
- Collection count display
- Milestone celebrations
- Achievement badges

##### Buttons

**Primary Button**

- Height: 48px
- Padding: 16px horizontal
- Background: Green Primary (#2E7D32)
- Text: White, Button typography
- Corner Radius: 24px (pill-shaped)
- Shadow: 0 2px 4px rgba(0,0,0,0.2)

**Secondary Button**

- Height: 48px
- Padding: 16px horizontal
- Border: 1.5px solid Green Primary (#2E7D32)
- Background: Transparent
- Text: Green Primary, Button typography
- Corner Radius: 24px (pill-shaped)

**Text Button**

- Height: 36px
- Padding: 8px horizontal
- Background: Transparent
- Text: Green Primary, Button typography
- No border or shadow

##### Cards

**Standard Card**

- Background: White
- Padding: 16px
- Corner Radius: 12px
- Shadow: 0 1px 3px rgba(0,0,0,0.12)
- Border: None

**Plant Card**

- Background: White
- Padding: 0 bottom, 0 horizontal, 12px top
- Corner Radius: 12px top, 16px bottom
- Image Container: 160px height
- Content Padding: 12px
- Shadow: 0 2px 4px rgba(0,0,0,0.1)

##### Input Fields

**Text Input**

- Height: 56px
- Padding: 16px horizontal, 12px vertical
- Border: 1px solid Gray Medium
- Active Border: 2px solid Green Primary
- Background: White
- Corner Radius: 8px
- Label: Body 2, Gray Dark
- Float Label: When focused/filled
- Helper Text: Caption, positioned below input

**Search Bar**

- Height: 48px
- Padding: 8px horizontal
- Border: None
- Background: Gray Light
- Corner Radius: 24px
- Icon: 24px, leading
- Clear Button: When text is present

##### Bottom Navigation

- Height: 56px
- Icons: 24×24px
- Labels: Caption typography
- Active Indicator: Highlight color + label
- Divider: 1px separator on top
- Maximum Items: 5

### Component Behavior

#### States for Interactive Elements

**Buttons:**

1. **Default:** Base styling
2. **Hover:** Lighten background by 10%
3. **Pressed/Active:** Darken background by 10%, slight scale down (98%)
4. **Focused:** 2px outline in primary color (keyboard focus)
5. **Disabled:** 40% opacity, non-interactive

**Input Fields:**

1. **Default:** Base styling
2. **Hover:** Slight border darkening
3. **Focused:** Highlighted border, optional float label animation
4. **Filled:** Maintains distinct appearance from empty state
5. **Error:** Red border and helper text
6. **Disabled:** 40% opacity, non-interactive

**Touch Targets:**

- Minimum size: 44×44px
- Visual feedback on touch via ripple or highlight
- State change should occur within 100ms of interaction

### Accessibility Standards

#### WCAG 2.1 AA Compliance

**Perceivable:**

- Provide text alternatives for non-text content
- Provide captions and alternatives for multimedia
- Content can be presented in different ways
- Make it easier for users to see and hear content

**Operable:**

- All functionality available from keyboard
- Users have enough time to read and use content
- Do not design content that could cause seizures
- Provide ways to help users navigate and find content

**Understandable:**

- Text is readable and understandable
- Content appears and operates in predictable ways
- Help users avoid and correct mistakes

**Robust:**

- Content is compatible with current and future user tools

#### Implementation Requirements

**Color & Contrast:**

- Text contrast ratio: 4.5:1 minimum (7:1 for AAA)
- UI component contrast ratio: 3:1 minimum
- Don't use color alone to convey information
- Support high contrast mode

**Text & Typography:**

- Support text resizing up to 200% without loss of content
- No fixed text sizes (use relative units: rem/em)
- Line height (line spacing) at least 1.5 times the font size
- Paragraph spacing at least 2 times the font size
- Letter spacing at least 0.12 times the font size

**Screen Readers:**

- All UI elements have appropriate labels
- Images have alt text
- Custom components use appropriate ARIA roles
- Proper heading structure (H1-H6)
- Focus management for dynamic content

**Input Methods:**

- All functionality available via keyboard
- Touch targets minimum 44×44px
- Focus indicators visible and clear
- No pointer-specific events without alternatives

### Shared Specifications

#### Common Components

**Plant Cards:**

- Consistent styling across platforms
- Image aspect ratio: 16:9
- Content padding: 16px
- Shadow: 0 2px 4px rgba(0,0,0,0.1)
- Border radius: 12px
- Status badges: "New", "Rare", "Common"

**Buttons:**

- Primary, Secondary, and Text variants
- Consistent height: 48px
- Border radius: 24px
- Font: Button typography
- States: Default, Hover, Active, Focus, Disabled

**Form Inputs:**

- Text inputs
- Search fields
- Dropdowns
- Checkboxes
- Radio buttons
- Consistent validation states

**Loading States:**

- Spinners
- Skeleton loaders
- Progress indicators
- Pull-to-refresh behavior

#### Shared Patterns

**Data Display:**

- Lists and grids
- Tables and data grids
- Charts and graphs
- Image galleries
- Modal dialogs

**Feedback:**

- Toast notifications
- Alert messages
- Success/error states
- Loading indicators
- Empty states

**Navigation:**

- Breadcrumbs
- Tabs
- Accordions
- Dropdown menus
- Search functionality

**Content Organization:**

- Headers and subheaders
- Section dividers
- Card layouts
- List views
- Grid layouts

#### Universal Behaviors

**Animations:**

- Page transitions: 300ms duration
- Micro-interactions: 200ms duration
- Loading states: Indeterminate
- Success/error feedback: 500ms duration

**Gestures:**

- Swipe to delete
- Pull to refresh
- Pinch to zoom
- Long press for context menu
- Double tap to like

**Accessibility:**

- Screen reader support
- Keyboard navigation
- Focus management
- Color contrast
- Text scaling

**Error Handling:**

- Form validation
- Network error states
- Empty states
- Offline support
- Retry mechanisms

**Data Management:**

- Caching behavior
- Offline storage
- Sync mechanisms
- Data persistence
- State management

## Platform-Specific Guidelines

### Mobile Design

#### Navigation

- Bottom tab bar navigation
- Maximum 5 primary navigation items
- Gesture-based navigation (swipe back)
- Native platform navigation patterns

#### Layout

- Single column layout
- Full-width cards and content blocks
- 16px screen edge padding
- Stacked sections for complex content

#### Touch Targets

- Minimum size: 44×44px
- Adequate spacing between interactive elements
- Clear visual feedback on touch
- Support for both tap and long-press interactions

#### Platform-Specific Considerations

**iOS:**

- Respect safe areas (notches, home indicator)
- Use iOS-style bottom sheets
- Follow iOS tab bar conventions
- Support dynamic type scaling
- Use SF Symbols for icons
- Implement iOS-style animations

**Android:**

- Support back button navigation
- Implement Material Design motion patterns
- Account for diverse device shapes and sizes
- Use Material Design icons
- Support RTL layouts
- Implement Android-style bottom sheets

#### Mobile-Specific Components

**Bottom Navigation Bar:**

- Height: 56px
- Icons: 24×24px
- Labels: Caption typography
- Active Indicator: Highlight color + label
- Divider: 1px separator on top

**Mobile Cards:**

- Full-width design
- Touch-friendly padding
- Clear visual hierarchy
- Swipe actions where appropriate

**Mobile Forms:**

- Full-width inputs
- Native keyboard types
- Clear input validation
- Easy-to-tap form controls

### Web Design

#### Navigation

- Top navigation bar
- Side navigation for complex sections
- Breadcrumb navigation for deep hierarchies
- Sticky headers for long content

#### Layout

- Responsive grid system
- Multi-column layouts
- Flexible content areas
- Sticky sidebars where appropriate

#### Breakpoints

| Breakpoint | Width Range | Typical Devices             |
| ---------- | ----------- | --------------------------- |
| xs         | 0-575px     | Small phones                |
| sm         | 576-767px   | Standard phones             |
| md         | 768-991px   | Large phones, small tablets |
| lg         | 992-1199px  | Tablets, small desktops     |
| xl         | 1200px+     | Large tablets, desktops     |

#### Web-Specific Features

**Hover States:**

- Subtle hover effects
- Tooltips for additional information
- Dropdown menus
- Interactive elements

**Desktop Interactions:**

- Keyboard shortcuts
- Drag and drop functionality
- Right-click context menus
- Multi-select capabilities

#### Responsive Design Patterns

1. **Stacking:**

   - Single-column on smallest screens
   - Progressive enhancement for larger screens

2. **Column Drop:**

   - Multi-column layouts collapse to fewer columns
   - Content reordering based on importance

3. **Layout Shifter:**

   - Different layouts for different sizes
   - Not just proportional scaling

4. **Off-Canvas:**
   - Secondary content moves off-screen
   - Hamburger menu for mobile

## Implementation

### CSS Framework Implementation

#### TailwindCSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32',
          light: '#81C784',
          lighter: '#C8E6C9',
          dark: '#1B5E20',
        },
        accent: {
          DEFAULT: '#FF9800',
          light: '#FFE0B2',
        },
        neutral: {
          black: '#212121',
          darkGray: '#757575',
          mediumGray: '#BDBDBD',
          lightGray: '#F5F5F5',
          white: '#FFFFFF',
        },
        semantic: {
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#F44336',
          info: '#2196F3',
        },
      },
      fontSize: {
        display: ['34px', { lineHeight: '40px', letterSpacing: '-0.5px' }],
        h1: ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        h2: ['20px', { lineHeight: '28px', letterSpacing: '0.15px' }],
        h3: ['18px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        subtitle: [
          '16px',
          { lineHeight: '24px', letterSpacing: '0.15px', fontWeight: '500' },
        ],
        body1: ['16px', { lineHeight: '24px', letterSpacing: '0.5px' }],
        body2: ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        caption: ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        button: [
          '14px',
          { lineHeight: '16px', letterSpacing: '0.75px', fontWeight: '500' },
        ],
      },
      spacing: {
        xxxs: '2px',
        xxs: '4px',
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        xxl: '64px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in',
        'scale-in': 'scaleIn 200ms ease-out',
        'slide-in-bottom': 'slideInBottom 300ms ease-out',
        'slide-in-right': 'slideInRight 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      borderColor: ['active', 'focus', 'disabled'],
      ringColor: ['focus', 'active'],
      ringWidth: ['focus', 'active'],
      scale: ['active'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
```

#### Common Component Classes

**Buttons:**

```html
<!-- Primary Button -->
<button
  class="bg-primary hover:bg-primary-dark text-white font-medium text-button px-sm py-xxs rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 active:scale-98 disabled:opacity-40"
>
  Button Text
</button>

<!-- Secondary Button -->
<button
  class="bg-transparent border-1.5 border-primary text-primary font-medium text-button px-sm py-xxs rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:bg-primary-lighter hover:bg-opacity-20 active:scale-98 disabled:opacity-40"
>
  Button Text
</button>
```

**Cards:**

```html
<!-- Standard Card -->
<div class="bg-neutral-white p-sm rounded-md shadow">Card Content</div>

<!-- Plant Card -->
<div class="bg-neutral-white rounded-md overflow-hidden shadow">
  <div class="h-40 bg-gray-200">
    <!-- Image goes here -->
  </div>
  <div class="p-xs">
    <h3 class="text-h3 text-neutral-black">Plant Name</h3>
    <p class="text-body2 text-neutral-darkGray">Plant description</p>
  </div>
</div>
```

**Form Inputs:**

```html
<!-- Text Input -->
<div class="relative">
  <label for="input" class="text-body2 text-neutral-darkGray block mb-xxs"
    >Label</label
  >
  <input
    type="text"
    id="input"
    class="w-full h-14 px-sm py-xs rounded-default border border-neutral-mediumGray focus:border-primary focus:ring-1 focus:ring-primary text-body1 text-neutral-black"
  />
  <p class="text-caption text-neutral-darkGray mt-xxs">Helper text</p>
</div>
```

#### Responsive Utility Classes

```html
<!-- Responsive Grid Example -->
<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-sm"
>
  <!-- Grid items -->
</div>

<!-- Responsive Spacing Example -->
<div class="p-sm md:p-md lg:p-lg">
  <!-- Content with responsive padding -->
</div>

<!-- Responsive Typography Example -->
<h1 class="text-h2 md:text-h1 lg:text-display font-medium">
  Responsive Heading
</h1>
```

#### Dark Mode Support

```html
<!-- Dark Mode Aware Component -->
<div
  class="bg-neutral-white dark:bg-neutral-black text-neutral-black dark:text-neutral-white"
>
  Dark mode compatible content
</div>
```

### Design System Governance

#### Version Control

- Design system follows [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH)
- Major versions for breaking changes
- Minor versions for new features (backwards compatible)
- Patch versions for bug fixes

For example:

- A patch update would be v1.0.0 -> v1.0.1
- A minor update would be v1.0.0 -> v1.1.0
- A major update would be v1.0.0 -> v2.0.0

Examples of updates:

- Patch
  - Fix a bug or typo
  - CSS changes
- Minor
  - New component
  - New feature that is backwards compatible
  - Refactoring of existing component
  - New variation of existing component
- Major
  - Breaking change to existing component
  - New feature that is not backwards compatible
  - Major UI change
  - Major backend change
  - New API

#### Contribution Process

Note: I'm not expecting us to adhere to this process exactly, but it's a good process to follow.

1. **Request:** Team member identifies need for new component or modification
2. **Review:** Design team reviews request against existing components
3. **Design:** Component is designed with all states and variations
4. **Implementation:** Component is implemented and tested
5. **Documentation:** Full documentation added to design system
6. **Release:** Component added to next version release

#### Quality Checklist

**For All Components:**

- [ ] Meets accessibility standards (WCAG 2.1 AA)
- [ ] Works across supported platforms/browsers
- [ ] Responsive across breakpoints
- [ ] Handles all states (default, hover, active, focus, disabled)
- [ ] Follows naming conventions
- [ ] Dark mode support
- [ ] Documentation complete

#### Resources

- **Design File Location:** [Figma Link]
- **Component Storybook:** [Storybook Link]
- **Design Token Repository:** [GitHub Link]
- **Implementation Examples:** [CodeSandbox Link]
