# MapTiler AR Control Changelog

## v1.2.0
### New Features
- Possibility to add a marketting image on top of the 3D view
- Possibility to increase the resolution of the texture for non-iOS devices
- if AR is automatically ran, the intermediate 3D view no longer shows on iOS (at both begining and end of AR)
- The elevation padding of the 3D models now depends on zoom level and minimal elevation
- If possible and desired to go straight to AR mode, the control icon now features a box logo with brackets

### Bug Fixes
- Very small extents at high zoom level are no longer possible as they were generating bad looking meshes. Min zoom: 16

## v1.1.0
### New Features
- Possibility to launch the AR mode automatically (when device allows) with the opt-in option `activateAR` set to `true`
- Corrected colorimetry, now using the "commerce" colorspace

## v1.0.0
### New Features
- First release
