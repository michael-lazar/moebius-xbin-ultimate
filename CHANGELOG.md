# Moebius XBIN Ultimate Edition Changelog

## Unreleased

# v3.2.1 (2025-07-23)

### Fixed

- Fixed the new zoom system to better support trackpads.
    - Two-finger pinch on trackpad will zoom the canvas.
    - Two-finger touch on trackpad will pan the canvas.
    - Added magnetic snapping at 10% zoom intervals.
    - Added sensitivity threshold to prevent accidental panning.
    - Added a velocity curve to the zooming to make it more
      consistent at different scales.

## v3.2.0 (2025-07-22)

### Added

- Added a hotkey SHIFT+ALT+Left Click to grab the character under the
  cursor and load it into the custom block.

### Changed

- Overhauled the zooming system for the main canvas.
    - The canvas now zooms independently from other elements in the UI.
    - Mousewheel zooming is smoother and more responsive.
    - Mousewheel zooming is anchored to the mouse pointer position.
    - Added more zoom menu items with preset levels from 10% to 500%.
    - Added middle mouse button click-and-drag to pan the canvas.
    - Added middle mouse button double-click to reset zoom to 100%.
    - Fixed window scrolling when moving the cursor while zoomed in.

### Fixed

- Fixed X-flipping for characters 184 (╕) and 213 (╒).
- Fixed "Save as..." resetting the editor state and clearing the
  undo/redo history for the current document.

## v3.2.0 (2025-04-05)

### Added

- Added a new menu option "Reset to Default Palette" to reset the
  color palette to standard ANSI.

### Fixed

- Fixed broken links in the Help menu and removed outdated URLs.
- Fixed GSJCI fonts not loading correctly.
- Fixed "Share Online" menu option to upload .ans files to 16colors.
- Fixed "Load Custom Font" menu option to work again.
- Fixed "Open Reference Image" menu option & hotkey to work again.
- Fixed the debug menu showing even if it had not been enabled.
- Fixed "Open In Current Window" causing every subsequent file to
  be opened in the current window.

### Removed

- Removed miscellaneous server/client code. The server feature of
  moebius does not work with this fork, and I have no intention of
  supporting it going forward.
- Removed the discord rich presence feature.
- Removed several unused dependencies.

## v3.0.1 (2025-04-04)

### Fixed

- Fixed a bug preventing Shift+Mouse Wheel Up from changing the reference image
  opacity.
- Right-justifying a line will no longer reset the background color.
- Remapped the hotkeys for Insert/Delete Row/Column to avoid conflicting with
  the hotkeys for moving the cursor inside the character palette.

## v3.0.0 (2025-03-11)

This is the initial release for this fork.

### Added

- Added a new sidebar tool for fine-tuning the size/position of the reference image.
- Added the ability to open a reference image in a separate, always-on-top window.
- Added support for drag-and-drop files from the desktop.
- Added an outline to the cursor when using the brush tool.
- Added a visual grid to the character palette.
- Added a toggle for zooming the character palette to 200%.

### Fixed

- Misc bug fixes.
