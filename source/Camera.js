import THREE from 'three'
import {cameraDistance, UP} from './constants/geometryConstants'

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
    // this._camera.position.set(0.0, cameraDistance, 3.0)
    this._lookAtPosition = new THREE.Vector3(0.0, 0.0, 0.0)
    this.useBehavior(behavior)
  }

  useBehavior(behavior) {
    this._behavior = new behavior()
    this._behavior.begin(this)
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

  animate(worldObjects) {
    this._behavior.animate(this, worldObjects)
    this.repoint()
  }

  repoint() {
    this._camera.quaternion.setFromRotationMatrix(
      new THREE.Matrix4().lookAt(
        this._camera.position,
        this._lookAtPosition,
        UP
      )
    )
  }
}
