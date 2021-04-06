export default function articleSection() {
  const parentArticle = document.createElement('div');
  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const readMoreBtn = document.createElement('button');


  // add classes
  parentArticle.classList.add('main-article');
  parentArticle.classList.add('setion');
  parentArticle.id = 'tabs-section';

  // page content
  const leftPageContent = [
    'Baked fresh simply delicious',
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" ',
  ];

  // content insetion
  // button
  readMoreBtn.innerText = 'Read More';
  readMoreBtn.classList.add('btn');

  // h2
  // eslint-disable-next-line prefer-destructuring
  h2.innerText = leftPageContent[0];
  h2.classList.add('article-headin');
  h2.classList.add('styled');

  // article content
  // eslint-disable-next-line prefer-destructuring
  p.innerText = leftPageContent[1];
  p.classList.add('article-content');

  // add all left divs to parent

  leftDiv.appendChild(h2);
  leftDiv.appendChild(p);
  leftDiv.appendChild(readMoreBtn);

  // right div content

  rightDiv.innerText = 'Welcome to try';
  rightDiv.classList.add('right-article-text');
  rightDiv.classList.add('styled');

  // add all div nodes to parents

  // parentArticle.appendChild(rightDiv);
  // parentArticle.appendChild(leftDiv);


  // tabs
  const dishMenu = document.createElement('ul');
  const fufu = document.createElement('li');
  const gob3 = document.createElement('li');
  const tz = document.createElement('li');
  // food 1

  gob3.innerText = 'Overview';
  fufu.innerText = 'Fufu';
  tz.innerText = 'Tuo Zaafi';

  dishMenu.appendChild(gob3);
  dishMenu.appendChild(fufu);
  dishMenu.appendChild(tz);

  // content to navigate with

  // welcome
  const welcomeNote = document.createElement('div');
  welcomeNote.appendChild(rightDiv);
  welcomeNote.appendChild(leftDiv);

  // first food
  const fufuDish = document.createElement('div');
  const fufuHeading = document.createElement('h2');
  const fufuContent = document.createElement('p');

  // first food content
  fufuHeading.innerText = 'Fufu a special delicacy';
  fufuHeading.classList.add('article-headin');
  fufuHeading.classList.add('styled');
  fufuContent.innerText = 'Fufu (or fufuo, foofoo, foufou) is a popular West African food. In Twi, fufu means "mash or mix" for a soft and doughy staple food of the Akan ethnic groups in Ghana and other West African countries.';
  fufuContent.classList.add('article-content');
  fufuDish.appendChild(fufuHeading);
  fufuDish.appendChild(fufuContent);
  fufuDish.classList.add('main-article');
  fufuDish.classList.add('setion');

  // second food
  const tzDish = document.createElement('div');
  const tzHeading = document.createElement('h2');
  const tzContent = document.createElement('p');

  // secound foos content
  tzHeading.innerText = 'Tuo Zaafi';
  tzHeading.classList.add('article-headin');
  tzHeading.classList.add('styled');
  tzContent.innerText = 'The food of northern Ghana is dominated by the use of grains, herbs, and meat, as these are the primary food products of the region.';
  tzContent.classList.add('article-content');
  tzDish.appendChild(tzHeading);
  tzDish.appendChild(tzContent);
  tzDish.classList.add('main-article');
  tzDish.classList.add('setion');


  // main tab data into a nodes of array

  const tabsNodes = [welcomeNote, fufuDish, tzDish];

  parentArticle.appendChild(dishMenu);

  parentArticle.appendChild(tabsNodes[0]);

  const tabs = dishMenu.childNodes;
  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].addEventListener('click', (() => {
      parentArticle.replaceChild(tabsNodes[i], parentArticle.childNodes[1]);
    }));
  }
  return parentArticle;
}
