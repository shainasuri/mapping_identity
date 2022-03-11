
let myCursor = document.querySelector(".cursor")
document.addEventListener("mousemove", function(event){
    // console.log(event);
    myCursor.style.top = (event.pageY - 90) + "px";
    myCursor.style.left = (event.pageX - 90) + "px";
})

let categoryOne = document.querySelector(".category-1")

document.addEventListener("mouseover", function(event){
    categoryOne.style.color = blue;
})

// ----------------------------- LAYER 1 -----------------------------
anime({
    targets: '#container-1',
    
    translateX: 400, 
    rotate: 360,
    translateY: 370,
    duration: 20000, 
        
        scale: 1.2, 
        // duration: 15000, 
        // loop: true,
});


// anime({
//     targets: '#container-1',
//     translateX: 400, 
//     translateY: 300,
//     duration: 20000, 
//         rotateZ: 360, 
//         // scale: 1.3, 
//         // duration: 15000, 
//         // loop: true,
// });

anime({
    targets: '#identity',
    translateX: 400, 
    translateY: 200,
    // rotateZ: 10, 
    scale: 1.3, 
    duration: 20000, 
    // loop: true,
});
anime({
    targets: '#photography',
    translateX: 150, 
    translateY: 220,
    // rotateZ: 10, 
    scale: 1.3, 
    duration: 20000, 
    delay: anime.stagger(200, {start: 500}),
    // loop: true,
});
anime({
    targets: '#technology',
    translateX: 300, 
    translateY: -110,
    // rotateZ: 10, 
    scale: 1.3, 
    duration: 20000,
    delay: anime.stagger(200, {start: 500}), 
    // loop: true,
});
anime({
    targets: '#design',
    translateX: 10, 
    translateY: 100,
    // rotateZ: 10, 
    scale: 1.3, 
    duration: 20000, 
    delay: anime.stagger(200, {start: 500}),
    // loop: true,
});
anime({
    targets: '#research',
    translateX: -80, 
    translateY: 250,
    // rotateZ: 10, 
    scale: 1.3, 
    duration: 20000, 
    delay: anime.stagger(200, {start: 500}),
    // loop: true,
});

// ----------------------------- LAYER 2 - IDENTITY -----------------------------

anime({
    targets: '#representation',
    translateX: 350, 
    translateY: 160,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 50000, 
    delay: anime.stagger(300, {start: 500}),
    // loop: true,
});

anime({
    targets: '#india',
    translateX: 450, 
    translateY: 150,
    // rotateZ: 10, 
    scale: 1.45, 
     duration: 50000, 
    delay: anime.stagger(310, {start: 500}),
    // loop: true,
});

anime({
    targets: '#culture',
    translateX: 450, 
    translateY: 100,
    // rotateZ: 10, 
    scale: 1.45, 
     duration: 50000, 
    delay: anime.stagger(320, {start: 500}),
    // loop: true,
});

anime({
    targets: '#family',
    translateX: 400, 
    translateY: 210,
    // rotateZ: 10, 
    scale: 1.45, 
     duration: 50000, 
    delay: anime.stagger(330, {start: 500}),
    // loop: true,
});

anime({
    targets: '#history',
    translateX: 300, 
    translateY: 70,
    // rotateZ: 10, 
    scale: 1.45, 
     duration: 50000, 
    delay: anime.stagger(340, {start: 500}),
    // loop: true,
});

// ----------------------------- LAYER 3 - PHOTOGRAPHY -----------------------------

anime({
    targets: '#cinematography',
    translateX: 80, 
    translateY: 40,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#film',
    translateX: 210, 
    translateY: 140,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#cinema',
    translateX: 150, 
    translateY: 100,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#fashion',
    translateX: 100, 
    translateY: 130,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#music',
    translateX: 230, 
    translateY: 10,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});


// ----------------------------- LAYER 4 - TECHNOLOGY -----------------------------

anime({
    targets: '#metaverse',
    translateX: 450, 
    translateY: -250,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 50000, 
    delay: anime.stagger(340, {start: 500}),
});
anime({
    targets: '#digitization',
    translateX: 400, 
    translateY: -200,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 50000, 
    delay: anime.stagger(340, {start: 500}),
});
anime({
    targets: '#websites',
    translateX: 280, 
    translateY: -200,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 50000, 
    delay: anime.stagger(340, {start: 500}),
});
anime({
    targets: '#software',
    translateX: 180, 
    translateY: -180,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 50000, 
    delay: anime.stagger(340, {start: 500}),
});
anime({
    targets: '#equipment',
    translateX: 200, 
    translateY: -250,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 50000, 
    delay: anime.stagger(340, {start: 500}),
});
anime({
    targets: '#visual',
    translateX: 290, 
    translateY: -180,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 50000, 
    delay: anime.stagger(340, {start: 500}),
});


// ----------------------------- LAYER 5 - DESIGN -----------------------------

anime({
    targets: '#minimalism',
    translateX: 50, 
    translateY: -50,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#modernism',
    translateX: -100, 
    translateY: 250,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#editorial',
    translateX: -70, 
    translateY: 100,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#typography',
    translateX: -100, 
    translateY: 140,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#graphic',
    translateX: 10, 
    translateY: 180,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#video',
    translateX: 20, 
    translateY: -30,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});

anime({
    targets: '#art',
    translateX: 10, 
    translateY: 200,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 15000, 
    // loop: true,
});
anime({
    targets: '#art-direction',
    translateX: -100, 
    translateY: -10,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#curation',
    translateX: -100, 
    translateY: 150,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#composition',
    translateX: 60, 
    translateY: 30,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 70000, 
    delay: anime.stagger(400, {start: 500}),
});

// ----------------------------- LAYER 6 - RESEARCH -----------------------------

anime({
    targets: '#current-issues',
    translateX: -230, 
    translateY: 230,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#brainstorm',
    translateX: -100, 
    translateY: 270,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#sustainability',
    translateX: -220, 
    translateY: 150,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#archives',
    translateX: 30, 
    translateY: 270,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#footprint',
    translateX: -100, 
    translateY: 250,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#origins',
    translateX: 260, 
    translateY: 210,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#impact',
    translateX: -200, 
    translateY: 250,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#growth',
    translateX: 410, 
    translateY: -50,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#development',
    translateX: 450, 
    translateY: -130,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#experimentation',
    translateX: 350, 
    translateY: -30,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});
anime({
    targets: '#exploration',
    translateX: 300, 
    translateY: -80,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 80000, 
    delay: anime.stagger(400, {start: 500}),
});


// ----------------------------- LAYER 7 - BRANDS/PEOPLE -----------------------------

anime({
    targets: '#apple',
    translateX: 160, 
    translateY: -80,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#steve',
    translateX: 160, 
    translateY: -120,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#pangaia',
    translateX: -250, 
    translateY: 110,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#rafael',
    translateX: 180, 
    translateY: 190,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#dariusz',
    translateX: 140, 
    translateY: -10,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#vivian',
    translateX: 150, 
    translateY: 270,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#ming',
    translateX: 60, 
    translateY: 290,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#zoya',
    translateX: 450, 
    translateY: 40,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#chloe',
    translateX: 210, 
    translateY: 40,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});
anime({
    targets: '#cindy',
    translateX: 250, 
    translateY: 220,
    // rotateZ: 10, 
    scale: 1.45, 
    duration: 90000, 
    delay: anime.stagger(500, {start: 500}),
});






console.log('anime');