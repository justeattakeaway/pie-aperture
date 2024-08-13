import * as jlottie from '@lottiefiles/jlottie';

const element = document.getElementById('my-animation');

jlottie.loadAnimation({
  container: element,
  loop: true,
  autoplay: true,
  useWebWorker: false,
  path: './02-Preparing_rest.json',
});
