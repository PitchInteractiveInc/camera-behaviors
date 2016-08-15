import THREE from 'three'

module.exports = {
  planeLength: 2.0,
  planeMaxHeight: 0.05,
  moteRadius: 0.02,
  moteHeight: 0.1,
  cameraDistance: 2.0,
  upVector: new THREE.Vector3(0.0, 1.0, 0.0),
  defaultLookAtPosition: new THREE.Vector3(0.0, 0.0, 0.0),
  // nudge overhead position just south of defaultLookAtPosition
  // to make it easier to maintain 'up' direction
  overheadPosition: new THREE.Vector3(0.0, 4.0, 0.001),
  landscapePosition: new THREE.Vector3(0.0, 1.0, 4.0),
}
