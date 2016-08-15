import THREE from 'three'
import {
  cameraDistance,
  defaultLookAtPosition,
  upVector,
} from './constants/geometryConstants'

const OPTIONS = {
  fov: 45, // degrees
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 20.0,
}

export default class Camera {
  constructor(behavior) {
    this._camera = new THREE.PerspectiveCamera(
      OPTIONS.fov,
      OPTIONS.aspect,
      OPTIONS.near,
      OPTIONS.far
    )
    this._lookAtPosition = defaultLookAtPosition.clone()
    this.useBehavior(behavior)
  }

  useBehavior(behavior, worldObjects) {
    this._behavior = new behavior(this, worldObjects)
    this._behavior.begin()
  }

  getCamera() {
    return this._camera
  }

  getLookAtPosition() {
    return this._lookAtPosition
  }

  setLookAtPosition(lookAtPosition) {
    this._lookAtPosition = lookAtPosition
  }

  /** Frame handler */
  animate() {
    this._behavior.animate()
    this.repoint()
  }

  /** Repoint camera to look at _lookAtPosition with the right 'up' direction */
  repoint() {
    this._camera.quaternion.setFromRotationMatrix(
      new THREE.Matrix4().lookAt(
        this._camera.position,
        this._lookAtPosition,
        upVector
      )
    )
  }
}
