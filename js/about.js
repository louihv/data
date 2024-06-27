function exp(){
    document.getElementById("expands").style.transform="scale(1.8)";
    document.getElementById("expands").style.transition="all 0.5s ease-in-out"; 
    document.getElementById("expands").style.top="560px";
    document.getElementById("expands").style.left="257px";
    document.getElementById("expands").style.opacity="0.2";
    document.getElementById("expands").style.borderRadius="0%";
    document.getElementById("animate").style.display="block";
    document.getElementById("hove").style.display="block";
    document.getElementById("en").style.display="none";
    document.getElementById("history").style.zIndex="5";
    document.getElementById("history").style.transform="scale(1)";
    document.getElementById("history").style.transition="all 0.5s ease-in-out";
    
    document.getElementById("left").style.display="block";
    document.getElementById("top_title").style.display="block";
    document.getElementById("right").style.display="block";
    document.getElementById("bot").style.display="block";
    document.getElementById("bot_right").style.display="block";
    document.getElementById("top_right").style.display="block";
    document.getElementById("left").style.transform="scale(1.0)";
    document.getElementById("right").style.transform="scale(1.0)";
    document.getElementById("bot").style.transform="scale(1.0)";
    document.getElementById("bot_right").style.transform="scale(1.0)";
    document.getElementById("left").style.transition="all 0.5s ease-in-out";
    document.getElementById("right").style.transition="all 0.5s ease-in-out";
    document.getElementById("bot").style.transition="all 0.5s ease-in-out";
    document.getElementById("bot_right").style.transition="all 0.5s ease-in-out";

    const yOffseto = -300; 
    const element = document.getElementById('en');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffseto;
    window.scrollTo({top: y, behavior: 'smooth'});
   }

function list(){
    const yOffset = 1200; 
    const element = document.getElementById('hove');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({top: y, behavior: 'smooth'});
    document.getElementById("expands").style.transform="scale(1)";
    document.getElementById("expands").style.transition="all 0.5s ease-in-out";
    document.getElementById("expands").style.borderRadius="49%";
    document.getElementById("expands").style.left="350px";
    document.getElementById("expands").style.opacity="1";
    document.getElementById("hove").style.display="none";
    document.getElementById("top_title").style.display="none";
    document.getElementById("history").style.zIndex="-1";
    document.getElementById("history").style.transform="scale(0.02)";
    document.getElementById("history").style.transition="all 0.5s ease-in-out";
    document.getElementById("last_img").style.display="block";
    document.getElementById("last_img").style.transition="all 1.2s ease-in-out";
    document.getElementById("last_img").style.transform="scale(1)";
    document.getElementById("square").style.display="block";
    document.getElementById("zodi").style.display="block";
    document.getElementById("zodia").style.display="block";
    document.getElementById("end_button").style.display="block";
    document.getElementById("left").style.display="none";
    document.getElementById("right").style.display="none";
    document.getElementById("bot").style.display="none";
    document.getElementById("bot_right").style.display="none";
    document.getElementById("top_right").style.display="none";
    document.getElementById("baby_zodiac").style.display="block";
}
function okay(){
    const yOffset = -1800; 
    const element = document.getElementById('end_button');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});

    document.getElementById("en").style.display="block";
    document.getElementById("last_img").style.display="none";
    document.getElementById("square").style.display="none";
    document.getElementById("zodi").style.display="none";
    document.getElementById("zodia").style.display="none";
    document.getElementById("end_button").style.display="none";
    document.getElementById("baby_zodiac").style.display="none";
}