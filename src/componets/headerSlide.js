import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

export default function headerSlide() {
  const showDiv = document.createElement('div');

  const imagefragment = document.createDocumentFragment();


  const slider = new KeenSlider('#hero-slide', {
    loop: true,
    duration: 5000,
    dragStart: () => {
      // eslint-disable-next-line no-use-before-define
      autoplay(true);
    },
    dragEnd: () => {
      // eslint-disable-next-line no-use-before-define
      autoplay(true);
    },
  });

  let interval = 0;
  function autoplay(run) {
    clearInterval(interval);
    interval = setInterval(() => {
      if (run && slider) {
        slider.next();
      }
    }, 8000);
  }

  showDiv.classList.add('keen-slider');
  showDiv.setAttribute('id', 'hero-slide');
  // looping and apending images to parent div
  for (let i = 1; i <= 5; i += 1) {
    const image = new Image();
    image.src = `/src/assets/images/slider-${i}.jpg`;
    image.classList.add('keen-slider__slide');
    imagefragment.appendChild(image);
  }
  showDiv.appendChild(imagefragment);
  // slider timeout function

  // calling slider fuction
  autoplay(true);
  return [slider, showDiv];
}