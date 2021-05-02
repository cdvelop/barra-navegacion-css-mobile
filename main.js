// let menu = document.querySelector('.main-navbar');

// let menu = document.querySelectorAll("#main-navbar");
// let menu = document.getElementById('main-navbar');
// console.log(menu);

let ubicacionPrincipalMenu = window.pageYOffset;


window.onscroll = function () {
    // 'use strict';
    
    let despazamientoActualMenu = window.pageYOffset;
    console.log(despazamientoActualMenu +"actual y "+ubicacionPrincipalMenu);

    if (ubicacionPrincipalMenu >= despazamientoActualMenu) {
        document.getElementById('main-navbar').style.top = '0';
        // menu.style.top = '0';
    } else {
        document.getElementById('main-navbar').style.top = '-100px';
        // menu.style.top = '-100px';
    }
    ubicacionPrincipalMenu = despazamientoActualMenu;

};



