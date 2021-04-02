export default function footerStamp() {
  const mainfooter = document.createElement("div");
  const left = document.createElement("div");
  const middle = document.createElement("div");
  const right = document.createElement("div");

  // adding class to main divs
  mainfooter.classList.add("main-footer");
  left.classList.add("left-footer");
  middle.classList.add("middle-footer");
  right.classList.add("right-footer");

  // left footer divs
  const left_h2 = document.createElement("h2");
  const left_p = document.createElement("p");
  const left_social = document.createElement("div");
  const left_frag = document.createDocumentFragment();

  // left footer divs data
  left_h2.innerText = "Bakers";
  left_h2.classList.add("styled");
  left_p.innerText =
    'Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"';
  left_frag.appendChild(left_h2);
  left_frag.appendChild(left_p);

  // middle div
  const middle_h2 = document.createElement("h2");
  const middle_p = document.createElement("p");
  const middle_social = document.createElement("div");
  const middle_frag = document.createDocumentFragment();

  // middle footer divs data
  middle_h2.innerText = "LATEST TWEETS";
  middle_p.innerText =
    'Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"';
  middle_social.innerText =
    "galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";
  middle_frag.appendChild(middle_h2);
  middle_frag.appendChild(middle_p);
  middle_frag.appendChild(middle_social);

  // right foooter divs
  const right_h2 = document.createElement("h2");
  const right_p = document.createElement("input");
  const right_social = document.createElement("div");
  const right_frag = document.createDocumentFragment();

  //right footer data

  right_h2.innerText = "JOING THE CLUB";
  right_p.innerText = "Enter email";
  right_social.innerText = "subscibe";
  right_frag.appendChild(right_h2);
  right_frag.appendChild(right_p);
  right_frag.appendChild(right_social);

  mainfooter.appendChild(left_frag);
  mainfooter.appendChild(middle_frag);
  mainfooter.appendChild(left_frag);

  return mainfooter;
}
