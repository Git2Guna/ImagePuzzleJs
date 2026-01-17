const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
const h7 = document.getElementById('h7');
const h8 = document.getElementById('h8');
const h9 = document.getElementById('h9');
const h = document.getElementById('h');
const winOverlay = document.getElementById('winOverlay');

function move(num) {
    switch(num){
        case 1: if(h4.src.includes("blank.jpg")) swap(h1,h4); else if(h2.src.includes("blank.jpg")) swap(h1,h2); break;
        case 2: if(h5.src.includes("blank.jpg")) swap(h2,h5); else if(h3.src.includes("blank.jpg")) swap(h2,h3); else if(h1.src.includes("blank.jpg")) swap(h2,h1); break;
        case 3: if(h6.src.includes("blank.jpg")) swap(h3,h6); else if(h2.src.includes("blank.jpg")) swap(h3,h2); break;
        case 4: if(h5.src.includes("blank.jpg")) swap(h4,h5); else if(h1.src.includes("blank.jpg")) swap(h4,h1); else if(h7.src.includes("blank.jpg")) swap(h4,h7); break;
        case 5: if(h8.src.includes("blank.jpg")) swap(h5,h8); else if(h6.src.includes("blank.jpg")) swap(h5,h6); else if(h4.src.includes("blank.jpg")) swap(h5,h4); else if(h2.src.includes("blank.jpg")) swap(h5,h2); break;
        case 6: if(h5.src.includes("blank.jpg")) swap(h6,h5); else if(h3.src.includes("blank.jpg")) swap(h6,h3); else if(h9.src.includes("blank.jpg")) swap(h6,h9); break;
        case 7: if(h8.src.includes("blank.jpg")) swap(h7,h8); else if(h4.src.includes("blank.jpg")) swap(h7,h4); break;
        case 8: if(h9.src.includes("blank.jpg")) swap(h8,h9); else if(h7.src.includes("blank.jpg")) swap(h8,h7); else if(h5.src.includes("blank.jpg")) swap(h8,h5); break;
        case 9: if(h8.src.includes("blank.jpg")) swap(h9,h8); else if(h6.src.includes("blank.jpg")) swap(h9,h6); break;
    }
    checkWin();
}

function swap(a,b){
    const temp = a.src;
    a.src = b.src;
    b.src = temp;
}

function checkWin(){
    if (
        h1.src.includes("blank.jpg") &&
        h2.src.includes("2.jpg") &&
        h3.src.includes("3.jpg") &&
        h4.src.includes("4.jpg") &&
        h5.src.includes("5.jpg") &&
        h6.src.includes("6.jpg") &&
        h7.src.includes("7.jpg") &&
        h8.src.includes("8.jpg") &&
        h9.src.includes("9.jpg")
    ){
        h1.src = h.src; // final piece

        // SHOW POKEMON WIN IMAGE
        winOverlay.style.display = "block";

        // 🎉 CONFETTI ANIMATION
        let end = Date.now() + 3000;
        (function frame(){
            confetti({particleCount: 8, spread: 100, origin:{x: Math.random(),y:0.6}});
            if(Date.now()<end) requestAnimationFrame(frame);
        })();

        // HIDE POKEMON IMAGE AFTER 3 SECONDS AND SHOW WON BACKGROUND
        setTimeout(()=>{
            winOverlay.style.display = "none";
            document.body.style.backgroundImage = "url('/images/won.jpg')";
        }, 3000);
    }
}

function Reset(){
    // RESET PUZZLE
    h1.src = "/images/9.jpg";
    h2.src = "/images/8.jpg";
    h3.src = "/images/7.jpg";
    h4.src = "/images/6.jpg";
    h5.src = "/images/5.jpg";
    h6.src = "/images/4.jpg";
    h7.src = "/images/3.jpg";
    h8.src = "/images/2.jpg";
    h9.src = "/images/blank.jpg";

    // RESET BACKGROUND AND WIN IMAGE
    document.body.style.backgroundImage = "url('/images/pokie.png')";
    winOverlay.style.display = "none";
}