export default function navbar() {
    // create nav
    const navfracgent = document.createDocumentFragment();
    const navTag = document.createElement('nav');
    const logoText = document.createElement('h3');
    logoText.innerText = 'FoodiePad';
    logoText.classList.add('logo');
    navfracgent.appendChild(logoText);
    
    // nested divs 
    const navTabs = ['Home', 'About', 'Contact']
    navTabs.forEach((e) => {
        let div = document.createElement('div');
        div.innerText = e; 
        navfracgent.appendChild(div)
    })
   

    navTag.appendChild(navfracgent);
    

    return navTag;
    
}
