import THREE from 'three'
import {
  planeLength,
  planeMaxHeight,
  moteRadius,
  moteHeight,
} from '../constants/geometryConstants'

const GEOMETRY_OPTIONS = {
  leavesRadius: moteRadius * 0.75,
  leavesHeight: moteHeight * 0.5,
  segments: 12,
  trunkRadius: moteRadius * 0.2,
  trunkHeight: moteHeight * 0.2,
}

export default class Tree {
  constructor() {
    const leavesGeometry = new THREE.ConeGeometry(
      GEOMETRY_OPTIONS.leavesRadius,
      GEOMETRY_OPTIONS.leavesHeight,
      GEOMETRY_OPTIONS.segments,
      GEOMETRY_OPTIONS.segments
    )
    const leavesMaterial = new THREE.MeshLambertMaterial({
      color: 0x11cc11,
      side: THREE.DoubleSide
    })
    const leavesMesh = new THREE.Mesh(leavesGeometry, leavesMaterial)
    leavesMesh.position.setY(GEOMETRY_OPTIONS.trunkHeight  + GEOMETRY_OPTIONS.leavesHeight * 0.5)

    const trunkGeometry = new THREE.CylinderGeometry(
      GEOMETRY_OPTIONS.trunkRadius,
      GEOMETRY_OPTIONS.trunkRadius,
      GEOMETRY_OPTIONS.trunkHeight,
      GEOMETRY_OPTIONS.segments,
      GEOMETRY_OPTIONS.segments
    )
    const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x7d5207 })
    const trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial)
    trunkMesh.position.setY(GEOMETRY_OPTIONS.trunkHeight)
    this._object = new THREE.Object3D()
    this._object.position.set(
      (Math.random() - 0.5) * 0.8 * planeLength,
      0,
      (Math.random() - 0.5) * 0.8 * planeLength
    )
    this._object.add(leavesMesh)
    this._object.add(trunkMesh)

    this._object.scale.multiplyScalar(Math.random() + 0.75)
  }

  getObject() {
    return this._object
  }

  animate(timestamp) {
  }
}
