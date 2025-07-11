# Moebius XBIN Ultimate Edition Changelog

## Unreleased

### Added

- Added a hotkey SHIFT+ALT+Left Click to grab the character under the
  cursor and load it into the custom block.

### Fixed

- Fixed window scrolling when moving the cursor at 200% zoom.
- Fixed X-flipping for characters 184 (╕) and 213 (╒).

## v3.1.0 (2025-04-05)

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
