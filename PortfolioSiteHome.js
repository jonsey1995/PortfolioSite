/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
	document.getElementById("myModal").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
	document.getElementById("myModal").style.marginLeft = "0";
}


// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
/*
var spanishAdventure = new Array();

spanishAdventure[0] = new Image();
spanishAdventure[0].src = 'Assets/SpanishAdventure/Belay.jpg';

spanishAdventure[1] = new Image();
spanishAdventure[1].src = 'Assets/SpanishAdventure/Chulilla.jpg';

spanishAdventure[2] = new Image();
spanishAdventure[2].src = 'Assets/SpanishAdventure/Lights.jpg';

spanishAdventure[3] = new Image();
spanishAdventure[3].src = 'Assets/SpanishAdventure/RoadTripping.jpg';

spanishAdventure[4] = new Image();
spanishAdventure[4].src = 'Assets/SpanishAdventure/SiuranaSunset.jpg';

spanishAdventure[5] = new Image();
spanishAdventure[5].src = 'Assets/SpanishAdventure/HarryKneebar.jpg';

spanishAdventure[6] = new Image();
spanishAdventure[6].src = 'Assets/SpanishAdventure/Liam7b+.jpg';

var num = 1;

function galleryNext(){
num=num+1
if (num==7)
{num=1}
document.getElementById('mySlides').src=spanishAdventure[num];
});

function galleryPrev(){
num=num-1
if (num==0)
{num=6}
document.getElementById('mySlides').src=spanishAdventure[num];
});

*/