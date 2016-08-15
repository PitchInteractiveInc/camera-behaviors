import THREE from 'three'
import TWEEN from 'tween.js'
import Behavior from './Behavior'
import {spinPosition} from '../constants/geometryConstants'

const DURATION = 3000

export default class Spin extends Behavior {
  constructor(camera, worldObjects) {
    super(camera, worldObjects)
    this._mote = worldObjects.Mote
  }

  begin() {
    this.__storeFromPosition()
    this.__toPosition = spinPosition
    this._updateLookAtPosition()
    this.__beginAnimation(DURATION)
  }

  animate() {
    this._updateLookAtPosition()
    this.__animateToPosition()
  }

  _updateLookAtPosition() {
    this.__toLookAtPosition = this._mote.getObject().position
  }
}
