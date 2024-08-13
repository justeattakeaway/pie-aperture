// import lottie from 'lottie-web/build/player/esm/lottie_light.min.js'
// import lottie from 'lottie-web/build/player/esm/lottie_light_canvas.min.js'
import lottie from 'lottie-web'

lottie.loadAnimation({
  container: document.querySelector('#lottie'), // the dom element that will contain the animation
  renderer: 'canvas',
  loop: true,
  autoplay: true,
  path: './02-Preparing_rest.json' // the path to the animation json
  // path: './generated-02.Preparing_rest.lottie' // the path to the animation json
});