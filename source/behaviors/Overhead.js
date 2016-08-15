import Behavior from './Behavior'
import {
  overheadPosition,
  defaultLookAtPosition,
} from '../constants/geometryConstants'

const DURATION = 3000

export default class Overhead extends Behavior {
  begin() {
    this.__storeFromPosition()
    this.__toPosition = overheadPosition.clone()
    this.__toLookAtPosition = defaultLookAtPosition.clone()
    this.__beginAnimation(DURATION)
  }

  animate() {
    this.__animateToPosition()
  }
}
