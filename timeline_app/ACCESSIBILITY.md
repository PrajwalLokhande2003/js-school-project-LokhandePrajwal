# Accessibility Improvements

## Timeline
- Timeline markers: `aria-label` added for screen readers.
- `aria-current="step"` on active marker.
- Markers are keyboard-navigable with Arrow keys.

## Modal
- Modal uses `role="dialog"` and `aria-modal="true"`.
- `aria-labelledby` points to the modal title.
- Focus trapped inside modal while open.
- Escape key closes modal.
- Focus returns to triggering marker on close.

## Event Marker
- “Load more” button uses `aria-haspopup="dialog"` and `aria-controls`.

## Header
- Theme toggle is now a `<button>` with `aria-label`.

## Contrast
- Verified all text meets WCAG 2.1 AA contrast (≥4.5:1).