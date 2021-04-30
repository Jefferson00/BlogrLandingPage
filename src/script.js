const menuIcon = document.querySelector('.menuIcon')
const menuMobile = document.querySelector('.menuMobile')

let showingMenu = false;

function showMenu(){
    showingMenu = !showingMenu;

    if(showingMenu){
        menuIcon.setAttribute('style', 'background-image: url(/images/icon-close.svg);')
        menuMobile.classList.add('showMenu');
        menuMobile.classList.remove('closeMenu');
        
    }else{
        menuIcon.setAttribute('style', 'background-image: url(/images/icon-hamburger.svg);')
        menuMobile.classList.add('closeMenu');
       
    }
}

menuIcon.addEventListener('click', showMenu);
