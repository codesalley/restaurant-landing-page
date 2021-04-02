export default function foodList() {
  // divs creation || declarations
  const headingDiv = document.createElement("div");
  const bodyDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const mainList = document.createElement("div");
  const listbucket = document.createDocumentFragment();

  // list data

  let dataArray = [
    {
      src: "/src/assets/food/food-4.jpg",
      h2: "MONKEY BREAD",
      p:
        " scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      src: "/src/assets/food/food-5.jpg",
      h2: "ONION BIALY",
      p:
        " scrambled it to make a type specimen book. It has surviv emaining essentially unchanged.",
    },
    {
      src: "/src/assets/food/food-6.jpg",
      h2: "CREEK OLIVE",
      P:
        "with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    },
    {
      src: "/src/assets/food/food-7.jpg",
      h2: "KAISER ROLL",
      p:
        "desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      src: "/src/assets/food/food-8.jpg",
      h2: "APRICOT NUT",
      p:
        'since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"',
    },
    {
      src: "/src/assets/food/food-9.jpg",
      h2: "CIABATTA",
      p:
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  for (let i = 0; i < dataArray.length; i++) {
    let listDiv = document.createElement("div");
    let img = new Image(200, 180);
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    img.src = dataArray[i].src;
    h2.innerText = dataArray[i].h2;
    p.innerHTML = dataArray[i].p;
    listDiv.appendChild(img);
    listDiv.appendChild(h2);
    listDiv.appendChild(p);
    listDiv.classList.add("list-item");
    listbucket.appendChild(listDiv);
  }

  // heading html structure
  h2.innerText = "Tast of romance";
  h2.classList.add("styled");
  p.innerText =
    "galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining";
  p.classList.add("foodlist-p");

  headingDiv.appendChild(h2);
  headingDiv.appendChild(p);

  // body html striucture
  mainList.appendChild(listbucket);
  bodyDiv.appendChild(headingDiv);
  bodyDiv.appendChild(mainList);

  return bodyDiv;
}
