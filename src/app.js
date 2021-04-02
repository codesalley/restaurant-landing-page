// componets and libaries imports
import navbar from './componets/navbar.js';
import headerSlide from './componets/headerSlide.js';
import mainShowcase from './componets/showcase.js';
import articleSection from './componets/article';
import foodlist from './componets/foodList';
import footerStamp from './componets/footerStamp';
import lastFooter  from './componets/footer';

// main div  || body
const main_div = document.querySelector('#content');


// rendering componets in order 

//navbar
main_div.appendChild(navbar());

//header slide
main_div.appendChild(headerSlide()[1]);
// slide function
headerSlide()[0];

// showcase section
main_div.appendChild(mainShowcase());

// artcle section
main_div.appendChild(articleSection());

// main food display 
main_div.appendChild(foodlist());

// first footer 

main_div.appendChild(footerStamp());

// last footer 

main_div.appendChild(lastFooter());

