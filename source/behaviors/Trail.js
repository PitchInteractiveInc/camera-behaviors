import THREE from 'three'
import TWEEN from 'tween.js'
import Behavior from './Behavior'

const DURATION = 3000
const MOTE_HISTORY_LENGTH = 80

export default class Trail extends Behavior {
  begin() {
    this._doInit = true
    this._moteHistory = []
  }

  animate(worldObjects) {
    if (this._doInit) {
      // actually begin now that we have worldObjects
      this._doInit = false

      this._fromPosition = this._camera.getCamera().position
      this._fromLookAtPosition = this._camera.getLookAtPosition()
    }
    const motePosition = worldObjects.Mote.getObject().position

    // go to
    this._moteHistory.push(motePosition)
    if (this._moteHistory < MOTE_HISTORY_LENGTH) {
      return
    }
    this._moteHistory.splice(0, this._moteHistory - MOTE_HISTORY_LENGTH)

    this._camera.getCamera().position.copy(
      this._fromPosition.lerp(
        this._moteHistory[0].clone().setY(0.1),
        0.05
      )
    )

    // look at
    this._camera.setLookAtPosition(
      this._fromLookAtPosition.lerp(
        motePosition,
        0.1
      )
    )
  }
}
