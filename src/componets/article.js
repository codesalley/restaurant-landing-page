export default function articleSection() {
  const parentArticle = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const readMoreBtn = document.createElement("button");
  

  // add classes
  parentArticle.classList.add("main-article");
  parentArticle.classList.add("setion");

  // page content
  const leftPageContent = [
    "Baked fresh simply delicious",
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" ',
  ];

  // content insetion 
  //button
  readMoreBtn.innerText = 'Read More';
  readMoreBtn.classList.add('btn');

  // h2
  h2.innerText = leftPageContent[0];
  h2.classList.add('article-headin');
  h2.classList.add('styled');
  
  // article content
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

  parentArticle.appendChild(rightDiv);
  parentArticle.appendChild(leftDiv);

  return parentArticle;

}
