const moonPath = "M24 58C24 88.0995 67.5 115.5 54.5 111C24.4005 111 0 85.5995 0 55.5C0 25.4005 24.4005 0.999968 54.5 0.999968C63 -2.5 24 27.9005 24 58Z";
const sunPath ="M109 54.5C109 84.5995 84.5995 109 54.5 109C24.4005 109 0 84.5995 0 54.5C0 24.4005 24.4005 0 54.5 0C84.5995 0 109 24.4005 109 54.5Z";

const darkMode = document.querySelector("#darkmode");

let toggle = false;

darkMode.addEventListener('click',  () => {

    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });

    timeline
    .add({
        targets : ".sun",
        d : [{value : toggle ?  sunPath : moonPath }]
    })
    .add ({
        targets : "#darkmode",
        rotate : toggle ?  0 : 320
    } , 
    "-=350"
    )
    .add({
        targets : "section",
        backgroundColor : toggle ?  "rgb(255,255,255)" : "rgb(22,22,22)" 
    },
    "-=700"
    )
    .add({
        targets : ".title",
        color : toggle ? "rgb(22,22,22)" : "rgb(255,255,255"
    },
    "-=700"
    );

    if (!toggle){
        toggle = true;
        document.getElementById("title").textContent="Good Night!";
        document.getElementById("heading").textContent="Good Night!";
    }else{
        toggle = false;
        document.getElementById("title").textContent="Good Morning!";
        document.getElementById("heading").textContent="Good Morning!";
    }

});


