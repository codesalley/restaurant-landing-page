export default function navbar() {
  // create nav
  const navfracgent = document.createDocumentFragment();
  const navTag = document.createElement('nav');
  const logoText = document.createElement('h3');
  const navList = document.createElement('div');

  logoText.innerText = 'FoodiePad';
  logoText.classList.add('logo');

  // nested divs
  const navTabs = ['Home', 'About', 'Contact'];
  navTabs.forEach((e) => {
    const div = document.createElement('div');
    div.innerText = e;
    navfracgent.appendChild(div);
  });
  navList.appendChild(navfracgent);

  navTag.appendChild(logoText);
  navTag.appendChild(navList);


  return navTag;
}
