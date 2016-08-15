import Behavior from './Behavior'
import {
  landscapePosition,
  defaultLookAtPosition,
} from '../constants/geometryConstants'

const DURATION = 3000

export default class Landscape extends Behavior {
  begin() {
    this.__storeFromPosition()
    this.__toPosition = landscapePosition.clone()
    this.__toLookAtPosition = defaultLookAtPosition.clone()
    this.__beginAnimation(DURATION)
  }

  animate() {
    this.__animateToPosition()
  }
}
