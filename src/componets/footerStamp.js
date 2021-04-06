export default function footerStamp() {
  const mainfooter = document.createElement('div');
  const left = document.createElement('div');
  const middle = document.createElement('div');
  const right = document.createElement('div');

  // adding class to main divs
  mainfooter.classList.add('main-footer');
  left.classList.add('left-footer');
  middle.classList.add('middle-footer');
  right.classList.add('right-footer');

  // left footer divs
  const leftH2 = document.createElement('h2');
  const leftP = document.createElement('p');
  const leftFrag = document.createDocumentFragment();

  // left footer divs data
  leftH2.innerText = 'Bakers';
  leftH2.classList.add('styled');
  leftP.innerText = 'Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"';
  leftFrag.appendChild(leftH2);
  leftFrag.appendChild(leftP);

  // middle div
  const middleH2 = document.createElement('h2');
  const middleP = document.createElement('p');
  const middleSocial = document.createElement('div');
  const middleFrag = document.createDocumentFragment();

  // middle footer divs data
  middleH2.innerText = 'LATEST TWEETS';
  middleP.innerText = 'Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"';
  middleSocial.innerText = 'galley of type and scrambled it to make a type specimen book. It has survived not only five centuries';
  middleFrag.appendChild(middleH2);
  middleFrag.appendChild(middleP);
  middleFrag.appendChild(middleSocial);

  // right foooter divs
  const rightH2 = document.createElement('h2');
  const rightP = document.createElement('input');
  const rightSocial = document.createElement('div');
  const rightFrag = document.createDocumentFragment();

  // right footer data

  rightH2.innerText = 'JOING THE CLUB';
  rightP.innerText = 'Enter email';
  rightSocial.innerText = 'subscibe';
  rightFrag.appendChild(rightH2);
  rightFrag.appendChild(rightP);
  rightFrag.appendChild(rightSocial);

  mainfooter.appendChild(leftFrag);
  mainfooter.appendChild(middleFrag);
  mainfooter.appendChild(leftFrag);

  return mainfooter;
}
