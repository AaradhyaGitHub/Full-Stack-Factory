# Project Structure Documentation

## Folder Structure

```
src/
├── pages/
│   ├── Home.jsx
│   ├── Contribute.jsx
│   └── About.jsx
├── components/
│   ├── home/
│   │   ├── CourseCard.jsx
│   │   └── CourseList.jsx
│   ├── contribute/
│   │   └── ContributeForm.jsx
│   ├── about/
│   │   └── TeamInfo.jsx
│   └── shared/
│       ├── Navbar.jsx
│       └── Sidebar.jsx
├── routes/
│   └── AppRoutes.jsx
├── data/
│   └── coursesData.js
└── App.jsx
```

## Routing Structure

```
/ (Root)
├── / (Home)
├── /about
├── /contribute
└── /courses/:courseId
    └── /courses/:courseId/:unitTitle
```

## Component Relationships

```
App
└── Navbar (dynamic, receives navlinks array)
    └── Routes
        ├── Home
        │   └── CourseList (renders CourseCard components)
        │       └── CourseCard (clickable, links to course landing page)
        ├── About
        │   └── AboutComponents
        ├── Contribute
        │   └── ContributeComponents
        └── CourseLanding
            ├── CourseHeader
            └── Sidebar (dynamic, shows unit navigation)
                └── Unit content pages
```

## Component Flow

1. **App.jsx**: Root component that renders the Navbar and routes
2. **Navbar.jsx**: Dynamic navigation component that accepts NAVLINKS array
3. **Home.jsx**: Displays available courses (JS, React, DSA)
4. **CourseLanding.jsx**: Displays specific course details based on the `:courseId` parameter
5. **UnitPage.jsx**: Displays specific unit content based on `:unitTitle` parameter

## Navigation Logic

- The main Navbar receives an array of navigation items and renders them as links
- When a course card is clicked on the Home page, the app navigates to `/courses/:courseId`
- The CourseLanding component creates a dynamic sidebar with links to each unit
- Sidebar navigation is generated using the course data structure

## Data Flow

1. Course data is structured with IDs matching route parameters
2. When navigating to a course page, the app finds the relevant course data using the ID
3. Unit titles are extracted from the course data to populate the sidebar navigation
4. Navigation items are transformed into the format required by the Navbar component

## Key Features

- **Dynamic Navigation**: Both main navbar and course sidebar use the same dynamic navigation component
- **Nested Routing**: Course pages and unit pages use nested routes with parameters
- **Component Isolation**: Each page is responsible for rendering its own components
- **Data-Driven UI**: UI elements are generated based on the data structure

## Data Mapping for Course Landing Page

The CourseLanding component implements an elegant data mapping strategy:

1. It uses `.find()` to locate the specific course data based on the `courseId` parameter:

   ```jsx
   const currentSection = coursesData.find((course) => course.id === courseId);
   ```

2. It then extracts just the unit titles from that course data:

   ```jsx
   const currentSectionUnitTitles = currentSection.units.map((unit) => {
     return unit.title;
   });
   ```

3. Most importantly, it transforms the unit data into the exact props format that the Navbar component expects:
   ```jsx
   const testLinks = currentSection.units.map((unit) => {
     return {
       navItem: unit.title,
       navDest: `/courses/${courseId}/${encodeURIComponent(unit.title)}`
     };
   });
   ```

This approach demonstrates the reusability of the Navbar component. The same component used for main navigation can be repurposed as a sidebar by simply formatting the data correctly. This eliminates the need for a separate sidebar component, making the codebase more maintainable.
