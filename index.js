import React from 'react'
import ReactDOM from 'react-dom'
import Selector from './source/components/Selector'
import World from './source/World'
import Camera from './source/Camera'
import Plane from './source/objects/Plane'
import Mote from './source/objects/Mote'
import Overhead from './source/behaviors/Overhead'
import Landscape from './source/behaviors/Landscape'
import Spin from './source/behaviors/Spin'
import Trail from './source/behaviors/Trail'
import './styles/index.scss'

const objects = [
  new Plane(),
  new Mote(),
]

const behaviors = [
  Overhead,
  Landscape,
  Spin,
  Trail,
]

const camera = new Camera(behaviors[0])
const world = new World(camera)
objects.forEach(object => {
  world.add(object)
})

ReactDOM.render(
  <div>
    <div id="canvas" />
    <Selector
      behaviors={behaviors}
      onSelect={behavior => world.useBehavior(behavior)}
      />
  </div>,
  document.body
)

world.appendTo(document.getElementById('canvas'))
world.nextFrame()
