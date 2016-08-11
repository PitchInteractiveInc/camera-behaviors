import THREE from 'three'
import TWEEN from 'tween.js'

const DURATION = 3000

export default class Overhead {
  begin(camera) {
    this._fromPosition = camera.getCamera().position
    this._toPosition = new THREE.Vector3(0.0, 4.0, 0.001)
    this._fromLookAtPosition = camera.getLookAtPosition()
    this._toLookAtPosition = new THREE.Vector3(0.0, 0.0, 0.0)

    this._progress = 0.0
    new TWEEN.Tween(this)
      .to({_progress: 1.0}, DURATION)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start()
  }

  animate(camera, worldObjects) {
    camera.getCamera().position.copy(
      this._fromPosition.lerp(this._toPosition, this._progress)
    )
    camera.setLookAtPosition(
      this._fromLookAtPosition.lerp(this._toLookAtPosition, this._progress)
    )
  }
}
