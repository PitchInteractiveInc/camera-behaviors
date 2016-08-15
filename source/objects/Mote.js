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
    this._lastTimestamp = timestamp
    const time = this._scaleTime(timestamp)
    this._updatePosition(this._position, time)
    this._object.position.set(
      this._position.x,
      this._position.y,
      this._position.z
    )
    // The bobbing motion in the object's rotation was not intentional
    // but adds some nice personality!
    this._object.rotation.set(
      Math.cos(time) * Math.PI * 0.5,
      0.0,
      Math.sin(time) * Math.PI * 0.5
    )
  }

  /**
   * Guess future position timeDelta millis in the future.
   * Even if it weren't possible to know the object's position in the future
   * exactly, having a reasonable guess can help produce smooth animations.
   */
  guessFuturePosition(timeDelta) {
    const time = this._scaleTime(this._lastTimestamp + timeDelta)
    const futurePosition = this._object.position.clone()
    this._updatePosition(futurePosition, time)
    return futurePosition
  }

  /** Scale time in millis down for trigonometric functions */
  _scaleTime(timestamp) {
    return timestamp * 0.001
  }

  _updatePosition(position, time) {
    position.x = Math.cos(time) * MOVEMENT_RADIUS
    position.z = Math.sin(time) * MOVEMENT_RADIUS
  }
}
