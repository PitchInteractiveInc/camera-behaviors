import THREE from 'three'
import TWEEN from 'tween.js'

export default class Behavior {
  constructor(camera, worldObjects) {
    this._camera = camera

    // position to be set up in begin()
    this.__fromPosition = null
    this.__fromLookAtPosition = null
    this.__toPosition = null
    this.__toLookAtPosition = null
  }

  /** To override. Called once after instantiation */
  begin() {
  }

  /** To override. Called on each animation frame */
  animate() {
  }

  /** Store current camera position / look-at position, to transition from */
  __storeFromPosition() {
    this.__fromPosition = this._camera.getCamera().position
    this.__fromLookAtPosition = this._camera.getLookAtPosition()
  }

  /** Start animation tween */
  __beginAnimation(duration) {
    this._progress = 0.0
    new TWEEN.Tween(this)
      .to({_progress: 1.0}, duration)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start()
  }

  /** Frame handler animating position / look-at position */
  __animateToPosition() {
    this._camera.getCamera().position.copy(
      this.__fromPosition.lerp(this.__toPosition, this._progress)
    )
    this._camera.setLookAtPosition(
      this.__fromLookAtPosition.lerp(this.__toLookAtPosition, this._progress)
    )
  }
}
