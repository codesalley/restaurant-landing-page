export default function mainShowcase() {
  const parentDive = document.createElement('div');
  const headingDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const listDiv = document.createElement('div');
  const imagefragment = document.createDocumentFragment();

  // text array
  const imageArray = [
    '/src/assets/food/food-1.jpg',
    '/src/assets/food/food-2.jpg',
    '/src/assets/food/food-3.jpg',
  ];
  const textArray = [
    ' Lorem Ipsum has been the industry\'s printer took a galley of type and scra unchanged.',
    'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ',
    'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ];

  // heading text
  h2.innerText = 'We Design Delicious';
  h2.classList.add('styled');
  h2.classList.add('show-heading');

  p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
  p.classList.add('showcase-p');
  // append to showcase first child div
  headingDiv.appendChild(h2);
  headingDiv.appendChild(p);

  // for loop to create images and tag

  for (let i = 0; i < 3; i += 1) {
    const parent = document.createElement('div');
    parent.classList.add('list-card');
    const image = new Image(200, 200);
    const imageText = document.createElement('div');
    image.src = imageArray[i];
    image.classList.add('img');
    imageText.innerText = textArray[i];
    imageText.classList.add('image-text');
    parent.appendChild(image);
    parent.appendChild(imageText);
    imagefragment.appendChild(parent);
  }

  // append generated image and text to list-div so i can style it
  listDiv.appendChild(imagefragment);
  listDiv.classList.add('showcase-list');

  // add class to main for better styling
  parentDive.classList.add('main-showcase');
  parentDive.appendChild(headingDiv);
  parentDive.appendChild(listDiv);

  return parentDive;
}
