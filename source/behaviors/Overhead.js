import Behavior from './Behavior'
import {overheadPosition} from '../constants/geometryConstants'

const DURATION = 3000

export default class Overhead extends Behavior {
  begin() {
    this.__beginAnimationToPosition(overheadPosition, DURATION)
  }

  animate(worldObjects) {
    this.__animateToPosition()
  }
}
