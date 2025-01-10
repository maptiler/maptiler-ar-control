# MapTiler AR Control Changelog

## v3.0.2
- Fix declarations files generation

## v3.0.0
### Others
- Using MapTiler SDK JS v3

## 2.1.3
### Others
- Updating with SDK v2.4.0

## 2.1.2
### New Features
- Display the attribution on top of the 3D model view (web)

## 2.1.1
### Others
- updating license file for source-available publishing

## 2.1.0
### New Features
- Now working also with Capacitor inside a mobile app (iOS only)
### Others
- Optimization of the UMD bundle size
### Bug Fixes
- Readme images are now stored on MapTiler CDN to be visible from NPM

## 2.0.1
### Bug Fixes
- Fixed: when displayed bound were wider than 180° the Haversine distance used was from the back of Earth, resulting in a too narrow 3D model
### Others
- Now using MapTiler SDK `math.wgs84ToTileIndex()` function instead of a custom function

## 2.0.0
### New Features
- Update dependency to MapTiler SDK v2
### Others
- Now using USDZ exporter from ThreeJS as it is no longer limited to 1024 textures

## 1.3.0
### Bug Fixes
- Package.json optimisation for greater compatibility
- updated ThreeJS and Model-Viewer dep
- Remode legacy Threejs constant
- encapsulated the event calls `.on`, `.once` and `.off`
- fixes in the readme

## 1.2.0
### New Features
- Possibility to add a marketting image on top of the 3D view
- Possibility to increase the resolution of the texture for non-iOS devices
- if AR is automatically ran, the intermediate 3D view no longer shows on iOS (at both begining and end of AR)
- The elevation padding of the 3D models now depends on zoom level and minimal elevation
- If possible and desired to go straight to AR mode, the control icon now features a box logo with brackets
### Bug Fixes
- Very small extents at high zoom level are no longer possible as they were generating bad looking meshes. Min zoom: 16

## 1.1.0
### New Features
- Possibility to launch the AR mode automatically (when device allows) with the opt-in option `activateAR` set to `true`
- Corrected colorimetry, now using the "commerce" colorspace

## 1.0.0
### New Features
- First release
