const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function mycart() {
    let first = document.getElementById('first');
   
    first.style.display = "none";
    
}

function mysec() {
    let sec = document.getElementById('sec');

    sec.style.display = "none";

}

function mytrd() {
    let trd = document.getElementById('trd');

    trd.style.display = "none";

}

function myfort() {
    let fort = document.getElementById('fort');

    fort.style.display = "none";

}




function myims() {
    let ims = document.getElementById('product1');

if(ims.style.display === "none") {

    ims.style.display = "inline";

}else{

    ims.style.display = "none";
}

}

// saleme id none ka function

// function mynone() {
//     let none = document.getElementById('none');

//     if(none.style.display === "none") {
//         none.style.display = "flex";
//     }
//     else {
//         none.style.display = "none";
//     }
// }





// function myims() {
//     let imsf = document.getElementById('ims');

//     imsf.style.display = "none";

// }