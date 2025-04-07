# LeafDex Component Documentation

## UI Components

### Navbar

**Location:** `leafDex_Web/src/components/ui/Navbar.tsx`

#### Purpose

The Navbar component provides the main navigation interface for the application, including links to different sections and user actions.

#### Props

```typescript
interface NavbarProps {
  // No props required as it's a standalone navigation component
}
```

#### Example Usage

```tsx
<MainLayout>
  <Navbar />
  <Outlet />
</MainLayout>
```

### PlantCard

**Location:** `leafDex_Web/src/components/ui/PlantCard.tsx`

#### Purpose

Displays individual plant information in a card format, including image, name, and basic details.

#### Props

```typescript
interface PlantCardProps {
  plant: {
    id: string;
    name: string;
    image: string;
    category: string;
    // ... other plant properties
  };
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}
```

#### Example Usage

```tsx
<PlantCard plant={plantData} onEdit={handleEdit} onDelete={handleDelete} />
```

### PlantList

**Location:** `leafDex_Web/src/components/ui/PlantList.tsx`

#### Purpose

Renders a list of PlantCard components with optional filtering and sorting capabilities.

#### Props

```typescript
interface PlantListProps {
  plants: Plant[];
  onFilterChange?: (filter: FilterOptions) => void;
  onSortChange?: (sort: SortOptions) => void;
}
```

#### Example Usage

```tsx
<PlantList
  plants={plants}
  onFilterChange={handleFilter}
  onSortChange={handleSort}
/>
```

### SearchBar

**Location:** `leafDex_Web/src/components/ui/SearchBar.tsx`

#### Purpose

Provides search functionality for plants with real-time filtering.

#### Props

```typescript
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}
```

#### Example Usage

```tsx
<SearchBar onSearch={handleSearch} placeholder="Search plants..." />
```

### PlantForm

**Location:** `leafDex_Web/src/components/ui/PlantForm.tsx`

#### Purpose

Form component for adding or editing plant information.

#### Props

```typescript
interface PlantFormProps {
  initialData?: Plant;
  onSubmit: (data: PlantFormData) => void;
  onCancel: () => void;
}
```

#### Example Usage

```tsx
<PlantForm
  initialData={existingPlant}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

## Page Components

### IdentifiedPlantsPage

**Location:** `leafDex_Web/src/pages/IdentifiedPlantsPage.tsx`

#### Purpose

Main page for displaying and managing identified plants.

#### Props

No props required as it's a page component.

#### Example Usage

```tsx
<Route path="/plants" element={<IdentifiedPlantsPage />} />
```

### AboutPage

**Location:** `leafDex_Web/src/pages/AboutPage.tsx`

#### Purpose

Displays information about the LeafDex application and its features.

#### Props

No props required as it's a page component.

#### Example Usage

```tsx
<Route path="/about" element={<AboutPage />} />
```

### LoginPage

**Location:** `leafDex_Web/src/pages/LoginPage.tsx`

#### Purpose

Handles user authentication and login functionality.

#### Props

No props required as it's a page component.

#### Example Usage

```tsx
<Route path="/login" element={<LoginPage />} />
```

### ContactPage

**Location:** `leafDex_Web/src/pages/ContactPage.tsx`

#### Purpose

Provides contact information and a contact form for user inquiries.

#### Props

No props required as it's a page component.

#### Example Usage

```tsx
<Route path="/contact" element={<ContactPage />} />
```

### SignupPage

**Location:** `leafDex_Web/src/pages/SignupPage.tsx`

#### Purpose

Handles new user registration and account creation.

#### Props

No props required as it's a page component.

#### Example Usage

```tsx
<Route path="/signup" element={<SignupPage />} />
```

## Context Components

### ImageContext

**Location:** `leafDex_Web/src/uploadContext.tsx`

#### Purpose

Manages the state of uploaded plant images across the application.

#### Context Value

```typescript
interface ImageContextValue {
  images: string[];
  addImage: (img: string) => void;
}
```

#### Example Usage

```tsx
const { images, addImage } = useContext(ImageContext);
```

## Layout Components

### MainLayout

**Location:** `leafDex_Web/src/layouts/MainLayout.tsx`

#### Purpose

Provides the main application layout structure including the navbar and content area.

#### Props

No props required as it's a layout component.

#### Example Usage

```tsx
<Route element={<MainLayout />}>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
</Route>
```

## Component Dependencies

### Styling

All components use the shared styling system defined in `styles/classes.ts`. The styling system provides consistent classes for:

- Layout and spacing
- Typography
- Colors and themes
- Component-specific styles

### Context Dependencies

- `ImageContext`: Used by components that need to manage plant images
- `AuthContext`: Used by components that need authentication state

### Routing

Components are organized into:

- Page components (in `/pages`)
- Layout components (in `/layouts`)
- UI components (in `/components/ui`)

## Best Practices

1. **Component Organization**

   - Keep components focused and single-responsibility
   - Use TypeScript interfaces for prop definitions
   - Document complex props and behaviors

2. **State Management**

   - Use context for global state
   - Use local state for component-specific data
   - Implement proper error handling

3. **Styling**

   - Use the shared classes system
   - Maintain consistent spacing and typography
   - Follow responsive design principles

4. **Performance**
   - Implement proper memoization where needed
   - Optimize image loading
   - Use lazy loading for routes
