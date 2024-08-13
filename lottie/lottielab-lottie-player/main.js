// import '@lottielab/lottie-player';

import Lottie from '@lottielab/lottie-player/web';
// or: import { LottieWeb as Lottie } from '@lottielab/lottie-player';

window.addEventListener('load', () => {
  const lottie = new Lottie();
  lottie.setAttribute('src', './02-Preparing_rest.json');
  lottie.setAttribute('autoplay', 'true');
  lottie.speed = 1;
  lottie.play();

  document.body.appendChild(lottie);
});

