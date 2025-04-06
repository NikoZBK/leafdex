# Leafdex Design System Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Quick Reference](#quick-reference)
   - [Essential Design Tokens](#essential-design-tokens)
   - [Critical Components](#critical-components)
   - [Key Behaviors](#key-behaviors)
   - [Accessibility Requirements](#accessibility-requirements)
3. [Core Design System](#core-design-system)
   - [Design Principles](#design-principles)
   - [Color System](#color-system)
   - [Typography](#typography)
   - [Spacing & Layout](#spacing--layout)
   - [Component Library](#component-library)
   - [Accessibility Standards](#accessibility-standards)
4. [Implementation](#implementation)
   - [CSS Framework Implementation](#css-framework-implementation)
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

- [DaisyUI Documentation](https://daisyui.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG 2.1 AA Standards](https://www.w3.org/TR/WCAG21/)

## Quick Reference

### Essential Design Tokens

#### Colors (DaisyUI Theme)

- Primary: `primary` (semantic color)
- Secondary: `secondary` (semantic color)
- Accent: `accent` (semantic color)
- Base: `base-100` (background), `base-content` (text)
- Neutral: `neutral` (semantic color)

#### Typography

- Base Font: System font stack (DaisyUI default)
- Base Size: 16px (DaisyUI default)
- Line Height: 1.5 (DaisyUI default)

#### Spacing

- DaisyUI uses Tailwind's default spacing scale
- Base Unit: 4px (1rem = 16px)
- Common Values:
  - xs: 0.5rem (8px)
  - sm: 1rem (16px)
  - md: 1.5rem (24px)
  - lg: 2rem (32px)
  - xl: 3rem (48px)

#### Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Critical Components

#### Buttons

```html
<!-- Primary Button -->
<button class="btn btn-primary">Button Text</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Button Text</button>

<!-- Accent Button -->
<button class="btn btn-accent">Button Text</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">Button Text</button>
```

#### Cards

```html
<!-- Standard Card -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### Input Fields

```html
<!-- Text Input -->
<div class="form-control">
  <label class="label">
    <span class="label-text">Input Label</span>
  </label>
  <input type="text" class="input input-bordered" />
</div>
```

### Key Behaviors

#### States

- Hover: DaisyUI default transitions
- Active: DaisyUI default states
- Focus: DaisyUI default focus rings
- Disabled: DaisyUI default disabled states

#### Animations

- DaisyUI default transitions
- DaisyUI default loading states

### Accessibility Requirements

#### Contrast

- DaisyUI themes are WCAG compliant by default
- Text contrast: 4.5:1 minimum
- UI components: 3:1 minimum

#### Touch

- Target size: 44×44px minimum
- Spacing: 8px minimum between targets

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

#### DaisyUI Theme Colors

- Primary: Semantic color for main actions
- Secondary: Semantic color for secondary actions
- Accent: Semantic color for highlights
- Base: Background and text colors
- Neutral: Neutral colors for UI elements

#### Color Usage

- Use semantic color names (primary, secondary, accent)
- Avoid hardcoded colors
- Let DaisyUI handle dark mode colors

### Typography

#### DaisyUI Typography

- System font stack by default
- Responsive text sizes
- DaisyUI default line heights
- DaisyUI default letter spacing

### Spacing & Layout

#### DaisyUI Spacing

- Use Tailwind's spacing scale
- Responsive spacing utilities
- Consistent spacing patterns

#### Layout Grid

- DaisyUI responsive grid system
- Flexbox utilities
- Grid utilities

### Component Library

#### Core Components

##### Collection Cards

```html
<div class="card bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="/plant.jpg" alt="Plant" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Plant Name</h2>
    <p>Collection status</p>
    <div class="card-actions">
      <button class="btn btn-primary">Collect</button>
    </div>
  </div>
</div>
```

##### Buttons

```html
<!-- Primary Button -->
<button class="btn btn-primary">Collect</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Share</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">Learn More</button>
```

##### Input Fields

```html
<!-- Text Input -->
<div class="form-control">
  <label class="label">
    <span class="label-text">Plant Name</span>
  </label>
  <input type="text" class="input input-bordered" />
</div>

<!-- Search Bar -->
<div class="form-control">
  <div class="input-group">
    <input
      type="text"
      placeholder="Search plants..."
      class="input input-bordered"
    />
    <button class="btn btn-square">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</div>
```

### Accessibility Standards

#### WCAG 2.1 AA Compliance

DaisyUI components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Color contrast
- Screen reader support

#### Implementation Requirements

- Use semantic HTML
- Follow DaisyUI component patterns
- Maintain proper heading structure
- Ensure keyboard navigation
- Support screen readers

## Implementation

### CSS Framework Implementation

#### TailwindCSS and DaisyUI Configuration

```javascript
// style.css
@import 'tailwindcss';
@plugin '@tailwindcss/typography';
@plugin 'daisyui' {
  themes: light, dark, lemonade --default, forest --prefersdark;
  root: ':root';
  logs: true;
}
```

#### Common Component Classes

**Buttons:**

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-accent">Accent Button</button>
<button class="btn btn-ghost">Ghost Button</button>
```

**Cards:**

```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>
```

**Form Inputs:**

```html
<div class="form-control">
  <label class="label">
    <span class="label-text">Input Label</span>
  </label>
  <input type="text" class="input input-bordered" />
</div>
```

#### Responsive Utility Classes

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Grid items -->
</div>

<div class="p-4 md:p-6 lg:p-8">
  <!-- Content with responsive padding -->
</div>
```

#### Dark Mode Support

```html
<div class="bg-base-100 text-base-content">
  <!-- Content that adapts to theme -->
</div>
```

### Design System Governance

#### Version Control

- Follow DaisyUI versioning
- Update Tailwind CSS as needed
- Document any customizations

#### Contribution Process

1. **Request:** Team member identifies need for new component or modification
2. **Review:** Team reviews request against DaisyUI components
3. **Implementation:** Component is implemented using DaisyUI patterns
4. **Documentation:** Update documentation with DaisyUI references
5. **Release:** Component added to next version release

#### Quality Checklist

**For All Components:**

- [ ] Uses DaisyUI components where possible
- [ ] Follows DaisyUI patterns
- [ ] Maintains accessibility
- [ ] Responsive across breakpoints
- [ ] Dark mode compatible
- [ ] Documentation complete

#### Resources

- **Design File Location:** [Figma Link]
- **Component Storybook:** [Storybook Link]
- **Design Token Repository:** [GitHub Link]
- **Implementation Examples:** [CodeSandbox Link]
