import THREE from 'three'
import TWEEN from 'tween.js'

export default class World {
  constructor(camera) {
    this._scene = new THREE.Scene()
    this._camera = camera
    this._renderer = this._buildRenderer()
    this._objects = {}
    this._addLights()
  }

  appendTo(element) {
    element.appendChild(this._renderer.domElement)
  }

  add(object) {
    this._objects[object.constructor.name] = object
    this._scene.add(object.getObject())
  }

  useBehavior(behavior) {
    this._camera.useBehavior(behavior, this._objects)
  }

  _buildRenderer() {
    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setClearColor(0xD0D0D0)
    renderer.setSize(window.innerWidth, window.innerHeight)
    return renderer
  }

  _addLights() {
    const ambientLight = new THREE.AmbientLight(0x404040)
    this._scene.add(ambientLight)

    const spotlight = new THREE.SpotLight(0xffffff, 5.0)
    spotlight.position.set(0.0, 1.0, -2.0)
    this._scene.add(spotlight)
  }

  nextFrame() {
    requestAnimationFrame(this.renderFrame.bind(this))
  }

  renderFrame(timestamp) {
    this.nextFrame()
    TWEEN.update(timestamp)
    Object.keys(this._objects).forEach(key => {
      this._objects[key].animate(timestamp)
    })
    this._camera.animate()
    this._renderer.render(this._scene, this._camera.getCamera())
  }
}
