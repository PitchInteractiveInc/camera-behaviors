# Camera Behaviors

This is sample code demonstrating a technique of switching between camera
behaviors, as discussed in the accompanying
[blog post](http://pitchinteractive.com/latest/flying-through-data-views).

## Development

### Setup

After cloning the repository, run:

    npm i

### Running

Run

    npm start

Then access `http://localhost:8888/`.

### Deploying

To generate deployable assets, run:

    npm run build

They will be written to `dist/`.

## Dependencies

The front end uses [three.js](http://threejs.org/) for WebGL,
[tween.js](https://github.com/tweenjs/tween.js/) for animations, and
[React](https://facebook.github.io/react/) for HTML5.

JavaScript is written in [ES2015](https://babeljs.io/docs/learn-es2015/)
using [Babel](https://babeljs.io/). Styles are written in
[SASS](http://sass-lang.com/). All assets are preprocessed with
[webpack](https://webpack.github.io/).

## License

This software is distributed under the [ISC](https://spdx.org/licenses/ISC.html)
license.
