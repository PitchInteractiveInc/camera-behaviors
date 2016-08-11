import THREE from 'three'
import {
  planeLength,
  planeMaxHeight,
  moteRadius,
  moteHeight,
} from '../constants/geometryConstants'

const GEOMETRY_OPTIONS = {
  radius: moteRadius,
  height: moteHeight,
  segments: 32,
}

const MOVEMENT_RADIUS = planeLength * 0.25

export default class Mote {
  constructor() {
    const geometry = new THREE.ConeGeometry(
      GEOMETRY_OPTIONS.radius,
      GEOMETRY_OPTIONS.height,
      GEOMETRY_OPTIONS.segments,
      GEOMETRY_OPTIONS.segments
    )
    const material = new THREE.MeshLambertMaterial({
      color: 0x11cccc,
      side: THREE.DoubleSide
    })
    this._object = new THREE.Mesh(geometry, material)
    this._position = {
      x: 0.0,
      y: moteRadius * 2.0 + planeMaxHeight,
      z: 0.0,
    }
  }

  getObject() {
    return this._object
  }

  animate(timestamp) {
    const time = timestamp * 0.001
    this._updatePosition(time)
    this._object.position.set(
      this._position.x,
      this._position.y,
      this._position.z
    )
    this._object.rotation.set(
      Math.cos(time) * Math.PI * 0.5,
      0.0,
      Math.sin(time) * Math.PI * 0.5
    )
  }

  _updatePosition(time) {
    this._position.x = Math.cos(time) * MOVEMENT_RADIUS
    this._position.z = Math.sin(time) * MOVEMENT_RADIUS
  }
}
