let text = document.querySelector("#text");
let slika = document.querySelector("#slika");
let labela = document.querySelector("#labela");
let dugme1 = document.querySelector("#dugme1");
let dugme2 = document.querySelector("#dugme2");

var click = new Audio();
click.src = "zvuk/click.mp3";

function klik() {
  click.play();
}

dugme2.addEventListener("click", instructions);

function instructions() {
    slika.setAttribute("src", "slike/instructions.jpg");
    text.innerHTML = "How to play"
    dugme2.innerHTML = "Next";
    dugme2.addEventListener("click", story);
    }

    function story() {
    slika.setAttribute("src", "slike/story.jpg");
    text.innerHTML = "You were driving through the forest road when you suddenly see a little girl standing in front of you"
    dugme2.addEventListener("click", story2);
    }

    function story2() {
        slika.setAttribute("src", "slike/story2.jpg");
        text.innerHTML = "You hit the brake and lost control over your car slamming into a nearby tree"
        dugme2.addEventListener("click", beginning);
        }


        function beginning() {
            slika.setAttribute("src", "slike/beginning.jpg");
            text.innerHTML = "You got out of the car and found yourself in the dark woods";
            dugme1.style.visibility="hidden";
            labela.style.visibility="visible";
            dugme2.innerHTML = "Go deeper in the woods";
            dugme2.addEventListener("click", cabin);
            }
            
            function cabin() {
                dugme1.style.visibility="visible";
 slika.setAttribute("src", "slike/cabin.gif");         
        text.innerHTML = "You see a small cabin in the distance";
        dugme1.innerHTML = "Go back in the woods";
        dugme2.innerHTML = "Go to the cabin";
        dugme1.addEventListener("click", monster);
        dugme2.addEventListener("click", porch);
            }

            function monster() {
                slika.setAttribute("src", "slike/monster.gif");
                dugme2.style.visibility="visible";
                dugme1.style.visibility="hidden";
                dugme2.innerHTML = "The End";
                labela.style.visibility="hidden";
            text.innerHTML = "Suddenly a big monster appears and kills you!";
            dugme2.addEventListener("click", end);
            }

            function porch() {
                slika.setAttribute("src", "slike/porch.jpg");
                dugme2.style.visibility="visible";
                labela.style.visibility="visible";
                dugme1.style.visibility="visible";
                dugme1.innerHTML = "Go inside";
                dugme2.innerHTML = "Look around";
        text.innerHTML = "You stepped on the cabin porch, the door is unlocked";
       dugme1.addEventListener("click", inside);
       dugme2.addEventListener("click", porch2);
            }

            function porch2() {
                slika.setAttribute("src", "slike/porch2.jpg");
                dugme2.style.visibility="hidden";
                labela.style.visibility="visible";
                dugme1.style.visibility="visible";
                dugme1.innerHTML = "Go inside";
                
        text.innerHTML = "The sky is full of stars...";
       dugme1.addEventListener("click", inside);
    
            }

            function inside() {
                slika.setAttribute("src", "slike/inside.jpg");
                dugme2.style.visibility="visible";
                labela.style.visibility="visible";
                dugme1.style.visibility="visible";
                dugme1.innerHTML = "Go to ladder";
                dugme2.innerHTML = "Go to kitchen";
        text.innerHTML = "You enter the cabin, there is no one here...";
        dugme1.addEventListener("click", ladder);
       dugme2.addEventListener("click", kitchen);
            }

            function ladder() {
                slika.setAttribute("src", "slike/ladder.jpg");
                dugme2.style.visibility="visible";
                labela.style.visibility="visible";
                dugme1.style.visibility="visible";
                dugme1.innerHTML = "Go up";
                dugme2.innerHTML = "Go down";
        text.innerHTML = "There is a ladder here";
        dugme1.addEventListener("click", up);
       dugme2.addEventListener("click", down);
            }

            function kitchen() {
                slika.setAttribute("src", "slike/kitchen.jpg");
                dugme2.style.visibility="visible";
                labela.style.visibility="visible";
                dugme1.style.visibility="visible";
                dugme1.innerHTML = "Go to ladder";
                dugme2.innerHTML = "Go to cooker";
        text.innerHTML = "You enter the kitchen";
        dugme1.addEventListener("click", ladder);
       dugme2.addEventListener("click", cooker);
            }

            function cooker() {
                slika.setAttribute("src", "slike/cooker.jpg");
                dugme2.style.visibility="hidden";
                dugme1.style.visibility="visible";
                labela.style.visibility="visible";
                dugme1.innerHTML = "Go to ladder";
                dugme2.innerHTML = "Go to cooker";
        text.innerHTML = "There is a cooker";
        dugme1.addEventListener("click", ladder);
     }

     function up() {
        slika.setAttribute("src", "slike/up.jpg");
        dugme2.style.visibility="visible";
        labela.style.visibility="visible";
        dugme1.style.visibility="hidden";
        dugme2.innerHTML = "Go down";
text.innerHTML = "There is a small bedroom here";
dugme2.addEventListener("click", down);
}

function down() {
    slika.setAttribute("src", "slike/down.jpg");
    dugme2.style.visibility="visible";
    labela.style.visibility="visible";
    dugme1.style.visibility="hidden";
    dugme2.innerHTML = "Go in the basement";
text.innerHTML = "There is a ladder that goes to the basement";
dugme2.addEventListener("click", basement);
}

function basement() {
    slika.setAttribute("src", "slike/basement.jpg");
    dugme2.style.visibility="visible";
    labela.style.visibility="visible";
    dugme1.style.visibility="hidden";
    dugme2.innerHTML = "Go forward";
text.innerHTML = "You enter the dark basement";
dugme2.addEventListener("click", hallway);
}

function hallway() {
    slika.setAttribute("src", "slike/hallway.jpg");
    dugme2.style.visibility="visible";
    labela.style.visibility="visible";
    dugme1.style.visibility="hidden";
    dugme2.innerHTML = "Go forward";
text.innerHTML = "You enter the hallway";
dugme2.addEventListener("click", sewer);
}

function sewer() {
    slika.setAttribute("src", "slike/sewer.png");
    dugme2.style.visibility="visible";
    labela.style.visibility="visible";
    dugme1.style.visibility="visible";
    dugme1.innerHTML = "Go forward";
    dugme2.innerHTML = "Look up";
text.innerHTML = "The basement is connected to the sewer?";
dugme1.addEventListener("click", gator);
dugme2.addEventListener("click", surface);
}

function gator() {
    slika.setAttribute("src", "slike/gator.gif");
    dugme2.style.visibility="visible";
    dugme1.style.visibility="hidden";
    labela.style.visibility="hidden";
    dugme2.innerHTML = "The End";
text.innerHTML = "Suddenly a big alligator appears and kills you!";
dugme2.addEventListener("click", end2);
}

function surface() {
    slika.setAttribute("src", "slike/surface.jpg");
    dugme2.style.visibility="visible";
    labela.style.visibility="visible";
    dugme1.style.visibility="hidden";
    dugme2.innerHTML = "Go to surface";
text.innerHTML = "There is a ladder that leads to surface!";
dugme2.addEventListener("click", story3);
}

function story3() {
    slika.setAttribute("src", "slike/gators.jpg");
    dugme2.style.visibility="visible";
    dugme1.style.visibility="hidden";
    labela.style.visibility="hidden";
    dugme2.innerHTML = "Next";
text.innerHTML = "You climbed the ladder and exited to the surface...";
dugme2.addEventListener("click", chopper);
}



function chopper() {
    slika.setAttribute("src", "slike/chopper.jpg");
    dugme2.style.visibility="visible";
    dugme1.style.visibility="hidden";
    labela.style.visibility="visible";
    dugme2.innerHTML = "Go to the chopper";
text.innerHTML = "There is the chopper here!";
dugme2.addEventListener("click", story4);
}

function story4() {
    slika.setAttribute("src", "slike/fly.jpg");
    dugme2.style.visibility="visible";
    dugme1.style.visibility="hidden";
    labela.style.visibility="hidden";
    dugme2.innerHTML = "Next";
text.innerHTML = "You enter the chopper and fly out of the woods...";
dugme2.addEventListener("click", outro);
}

function outro() {
    slika.setAttribute("src", "slike/outro.jpg");
    dugme2.style.visibility="visible";
    dugme1.style.visibility="hidden";
    labela.style.visibility="hidden";
    dugme2.innerHTML = "Next";
text.innerHTML = "To be continued...";
dugme2.addEventListener("click", end3);
}

function end() {
    slika.setAttribute("src", "slike/end.jpg");
    dugme2.style.visibility="hidden";
    dugme1.style.visibility="hidden";
    labela.style.visibility="hidden";
  text.innerHTML = "Please refresh the browser to play again";
}

function end2() {
    slika.setAttribute("src", "slike/end.jpg");
    dugme2.style.visibility="hidden";
    dugme1.style.visibility="hidden";
    labela.style.visibility="hidden";
  text.innerHTML = "Please refresh the browser to play again";
}

function end3() {
    slika.setAttribute("src", "slike/end.jpg");
    dugme2.style.visibility="hidden";
    dugme1.style.visibility="hidden";
    labela.style.visibility="hidden";
  text.innerHTML = "Please refresh the browser to play again";
}

            function look() {
                let labela2 = document.querySelector("#labela").value;
                if(labela2 == "tree") {
                alert("There are lots of trees around");
                }
                    if(labela2 == "grass") {
                        alert("The grass is green");
                    }
                        if(labela2 == "girl") {
                            alert("The little girl disappeared!");
                }
                if(labela2 == "car") {
                    alert("The car is totally wrecked");
        }
  if(labela2 == "cabin") {
            alert("There is a small cabin, better go there to see if there is somebody who can help");
}
if(labela2 == "window") {
    alert("You can see the light in the window, hopefully there is somebody in there");
}
if(labela2 == "sky") {
    alert("It's night still...");
}
if(labela2 == "eyes") {
    alert("What's that?");
}

if(labela2 == "porch") {
    alert("Beautiful porch, there a lot's of stuff here");
}

if(labela2 == "chair") {
    alert("A chair, looks comfortable");
}

if(labela2 == "toy") {
    alert("That's a bunny!");
}

if(labela2 == "plant") {
    alert("It's real plant");
}

if(labela2 == "light") {
    alert("Light is out");
}

if(labela2 == "curtains") {
    alert("The curtains are open");
}

if(labela2 == "picture") {
    alert("The pictures of family and friends");
}

if(labela2 == "kitchen") {
    alert("The kitchen looks clean");
}

if(labela2 == "cooker") {
    alert("The cooker looks new, like it's never been used before");
}

if(labela2 == "ladder") {
    alert("A wooden ladder, it looks stable");
}

if(labela2 == "basement") {
    alert("A huge basement, I wonder where it leads...");
}

if(labela2 == "stuff") {
    alert("Just a garbage...");
}

if(labela2 == "hallway") {
    alert("Damn, this hallway looks narrow");
}

if(labela2 == "sewer") {
    alert("It's dark and dirty!");
}

if(labela2 == "wall") {
    alert("The walls are hard and rocky!");
}

if(labela2 == "lamp") {
    alert("It illuminates the room");
}

if(labela2 == "water") {
    alert("The sewer is full of it...");
}

if(labela2 == "aligator") {
    alert("It sure is scary!");
}

if(labela2 == "crocodile") {
    alert("It sure is scary!");
}

if(labela2 == "croc") {
    alert("It sure is scary!");
}

if(labela2 == "gator") {
    alert("It sure is scary!");
}

if(labela2 == "fan") {
    alert("It's useful when it's hot");
}

if(labela2 == "bed") {
    alert("It looks comfortable");
}
if(labela2 == "pillow") {
    alert("It's soft and fluffy!");
}

if(labela2 == "nightstand") {
    alert("There is nothing in there");
}
if(labela2 == "stars") {
    alert("They are beautiful!");
}

if(labela2 == "chopper") {
    alert("The engine is running!");
}

if(labela2 == "door") {
    alert("It's made of wood...");
}
            }
        
        







    

        
