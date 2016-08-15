import Behavior from './Behavior'
import {landscapePosition} from '../constants/geometryConstants'

const DURATION = 3000

export default class Landscape extends Behavior {
  begin() {
    this.__beginAnimationToPosition(landscapePosition, DURATION)
  }

  animate(worldObjects) {
    this.__animateToPosition()
  }
}
