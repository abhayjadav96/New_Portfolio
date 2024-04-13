window.onscroll=function(){


    if(window.scrollY>=60){

        console.log("VISIBLE");
        document.getElementById("nav_bar").style.backgroundColor="rgb(45 45 45)";
        document.getElementById("nav_bar").style.opacity="0.9";
    }
    else{
        document.getElementById("nav_bar").style.backgroundColor="transparent";
        console.log("HIDEN");
    }
    console.log(window.scrollY);
}


function redirectTo(url){

    window.location.href=(url);
}

function openAbout(){

    window.scrollTo({

        top:735,
        behavior:"smooth"
    });
}

function openWork(){

    window.scrollTo({

        top:2140,
        behavior: "smooth"
    });
}

function toTop(){
    
    window.scrollTo({

        top:0,
        behavior:"smooth"
    });
}