# Timeline App

### Task #1
This is a basic structure for a **Timeline Web Application** using semantic HTML5 elements. The layout is designed for future expansion and can serve as a starting point for a timeline or event-based application.

### Task #2 
In this task I applied css for a **Timeline Web Application** using semantic class-based selectors. It applies a dark theme with basic text and background colors, ensures consistent spacing, margins, and borders, and implements a fully responsive layout for all devices via media queries.

### Task #3
This task adds interactivity to the **Timeline Web Application** using vanilla JavaScript. It fetches event data from an external `data.json` file containing 8 sample events (with year, title, description, imageURL, and category).

The script dynamically renders event markers into the #timeline element and attaches click handlers so that selecting a marker opens a modal (#modal) displaying the event’s details. A close button is implemented to hide the modal, ensuring smooth user interaction. The `index.html` file is updated to load `script.js` at the end of the `<body>` to ensure all DOM elements are available before execution.

### Task #4

In this step, I changed the project from plain JavaScript to **TypeScript** so the code is easier to maintain and less error-prone. I set up a `tsconfig.json` file with strict settings to catch mistakes early.

The old `script.js` file was moved and rewritten as `src/index.ts`. I also created types to describe the event data (year, title, description, image, and category), so everything follows the same format.

To keep things organized, I split the code into separate files:

- `fetcher.ts` – gets event data from `data.json`
- `renderer.ts` – builds and displays the timeline markers
- `modal.ts` – opens and closes the event detail popup

I added a build step that compiles the TypeScript into JavaScript and puts it in the `dist/` folder. The `index.html` now loads this compiled code, and I tested it to make sure the app still works in the browser.


### Task #5

Rebuilt the project as a React application using Vite (React + TypeScript template).

Created reusable components:
- `<Header>` for logo + theme switch
- `<Timeline>` that maps event data into `<EventMarker>`
- `<EventMarker>` showing year/title dot
- `<EventModal>` for detailed view (with optional React Portal)
- `<FilterPanel>` placeholder for future filters/bookmarks

Used useState and useEffect hooks to fetch data and control modal visibility.
Styling maintained by importing existing CSS or migrating to CSS Modules / styled-components.


### Task #6

This task ensures the application is accessible to all users, including those with disabilities. Key updates include:

- Added proper **ARIA roles and attributes** for semantic clarity.
- Made modals fully accessible (`role="dialog"` / `<dialog>`).
- Implemented **focus management** (focus trapping inside modal, return on close).
- Enabled **keyboard navigation** (Tab/Arrow keys for timeline, Esc to close modal).
- Improved **color contrast** to meet WCAG AA standards.
- Documented changes in `ACCESSIBILITY.md`.