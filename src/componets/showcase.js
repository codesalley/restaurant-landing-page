export default function mainShowcase() {
  let parentDive = document.createElement("div");
  let headingDiv = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let listDiv = document.createElement("div");
  let imagefragment = document.createDocumentFragment();

  // text array
  let imageArray = [
    "/src/assets/food/food-1.jpg",
    "/src/assets/food/food-2.jpg",
    "/src/assets/food/food-3.jpg",
  ];
  let textArray = [
    ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently `,
    `desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  ];

  // heading text
  h2.innerText = "We Design Delicious";
  h2.classList.add("styled");
  h2.classList.add("show-heading");

  p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
    p.classList.add('showcase-p');
// append to showcase first child div
headingDiv.appendChild(h2);
headingDiv.appendChild(p);

  // for loop to create images and tag

  for (let i = 0; i < 3; i++) {
    let parent = document.createElement("div");
    parent.classList.add("list-card");
    let image = new Image(200, 200);
    let image_text = document.createElement("div");
    image.src = imageArray[i];
    image.classList.add("img");
    image_text.innerText = textArray[i ];
    image_text.classList.add("image-text");
    parent.appendChild(image);
    parent.appendChild(image_text);
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
