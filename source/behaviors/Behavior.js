import THREE from 'three'
import TWEEN from 'tween.js'

export default class Behavior {
  constructor(camera) {
    this._camera = camera
  }

  /** To override */
  begin() {
  }

  /** To override */
  animate(worldObjects) {
  }

  /** Set up a Tween from current position to requested one */
  __beginAnimationToPosition(position, duration) {
    this._fromPosition = this._camera.getCamera().position
    this._toPosition = position
    this._fromLookAtPosition = this._camera.getLookAtPosition()
    this._toLookAtPosition = new THREE.Vector3(0.0, 0.0, 0.0)

    this._progress = 0.0
    new TWEEN.Tween(this)
      .to({_progress: 1.0}, duration)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start()
  }

  /** Frame handler implementing __beginAnimationToPosition animation */
  __animateToPosition() {
    this._camera.getCamera().position.copy(
      this._fromPosition.lerp(this._toPosition, this._progress)
    )
    this._camera.setLookAtPosition(
      this._fromLookAtPosition.lerp(this._toLookAtPosition, this._progress)
    )
  }
}
