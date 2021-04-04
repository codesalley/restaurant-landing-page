import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

export default function headerSlide(){
    let showDiv = document.createElement('div');
    
    let imagefragment = document.createDocumentFragment();
    var slider = new KeenSlider('#hero-slide', {
        loop: true, 
        duration: 5000,
        dragStart: () => {
            autoplay(true);
        },
        dragEnd: () => {
            autoplay(true)
        }
    });

    showDiv.classList.add('keen-slider');
    showDiv.setAttribute('id', 'hero-slide')
    // looping and apending images to parent div
    for(let i = 1; i <= 5; i++){
        let image = new Image();
        image.src = `/src/assets/images/slider-${i}.jpg`;
        image.classList.add('keen-slider__slide');
        imagefragment.appendChild(image);
    }
    showDiv.appendChild(imagefragment);
    // slider timeout function
    var interval = 0
    function autoplay(run) {
        clearInterval(interval)
        interval = setInterval(() => {
          if (run && slider) {
            slider.next()
          }
        }, 8000)
      }
      // calling slider fuction
      autoplay(true);
    return [slider, showDiv];
}