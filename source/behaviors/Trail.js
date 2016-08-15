import THREE from 'three'
import TWEEN from 'tween.js'
import Behavior from './Behavior'

const DURATION = 3000

const TO_POSITION_LOOKAHEAD_MS = -400
const TO_LOOK_AT_POSITION_LOOKAHEAD_MS = 250

export default class Trail extends Behavior {
  constructor(camera, worldObjects) {
    super(camera, worldObjects)
    this._mote = worldObjects.Mote
  }

  begin() {
    this.__storeFromPosition()
    this._updateToPositions()
    this.__beginAnimation(DURATION)
  }

  animate() {
    this._updateToPositions()
    this.__animateToPosition()
  }

  _updateToPositions() {
    this.__toPosition = this._mote.guessFuturePosition(
      TO_POSITION_LOOKAHEAD_MS
    )
    this.__toLookAtPosition = this._mote.guessFuturePosition(
      TO_LOOK_AT_POSITION_LOOKAHEAD_MS
    )
  }
}
