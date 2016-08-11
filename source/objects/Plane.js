import THREE from 'three'
import {planeLength, planeMaxHeight} from '../constants/geometryConstants'

const GEOMETRY_OPTIONS = {
  width: planeLength,
  height: planeLength,
  segments: 12,
}

export default class Plane {
  constructor() {
    const geometry = new THREE.PlaneGeometry(
      GEOMETRY_OPTIONS.width,
      GEOMETRY_OPTIONS.height,
      GEOMETRY_OPTIONS.segments,
      GEOMETRY_OPTIONS.segments
    )
    geometry.vertices.forEach(vertex => {
      vertex.setZ(Math.random() * planeMaxHeight)
    })
    const material = new THREE.MeshLambertMaterial({
      color: 0x222222,
      side: THREE.DoubleSide,
    })
    this._object = new THREE.Mesh(geometry, material)
    this._object.position.set(0.0, 0.0, 0.0)
    this._object.rotation.set(-Math.PI / 2.0, 0.0, 0.0)
  }

  getObject() {
    return this._object
  }

  animate(timestamp) {

  }
}
