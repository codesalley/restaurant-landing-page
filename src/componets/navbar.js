export default function navbar() {
    // create nav
    const navfracgent = document.createDocumentFragment();
    const navTag = document.createElement('nav');
    const logoText = document.createElement('h3');
    const nav_list = document.createElement('div');

    logoText.innerText = 'FoodiePad';
    logoText.classList.add('logo');
    
    // nested divs 
    const navTabs = ['Home', 'About', 'Contact']
    navTabs.forEach((e) => {
        let div = document.createElement('div');
        div.innerText = e; 
        navfracgent.appendChild(div)
    })
    nav_list.appendChild(navfracgent);
    
    navTag.appendChild(logoText);
    navTag.appendChild(nav_list);
    

    return navTag;
    
}
