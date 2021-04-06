// componets and libaries imports
import navbar from './componets/navbar';
import headerSlide from './componets/headerSlide';
import mainShowcase from './componets/showcase';
import articleSection from './componets/article';
import foodlist from './componets/foodList';
import footerStamp from './componets/footerStamp';
import lastFooter from './componets/footer';

// main div  || body
const mainDiv = document.querySelector('#content');


// rendering componets in order

// navbar
mainDiv.appendChild(navbar());

// header slide
mainDiv.appendChild(headerSlide()[1]);
// slide function
headerSlide();

// showcase section
mainDiv.appendChild(mainShowcase());

// artcle section
mainDiv.appendChild(articleSection());

// main food display
mainDiv.appendChild(foodlist());

// first footer

mainDiv.appendChild(footerStamp());

// last footer

mainDiv.appendChild(lastFooter());
