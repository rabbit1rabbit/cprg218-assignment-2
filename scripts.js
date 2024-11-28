jimenez_pets.addEventListener('click', function(){
    console.log("All three pets");
    document.body.classList.remove("lola", "bagel", "brownie");
    document.body.classList.add('jimenez_pets');
    document.getElementById('pet-pic').src="assets/JimenezPets.jpeg"
    document.getElementById('pet-pic').alt="Picture of three animals in a living room. From left to right, Bagel the beagle, Lola the bunny, Brownie the pitbull."
    document.getElementsByClassName('information')[0].innerHTML= "These are the three Jimenez family pets";

}
)

lola_btn.addEventListener('click', function(){
    console.log("Lola the Bunny");
    document.body.classList.remove("jimenez_pets", "bagel", "brownie");
    document.body.classList.add('lola');
    document.getElementById('pet-pic').src="assets/LolaBunny.jpeg"
    document.getElementById('pet-pic').alt="Picture of Lola the bunny."
    document.getElementsByClassName('information')[0].innerHTML= "Lola placeholder text";

}
)

bagel_btn.addEventListener('click', function(){
    console.log("Bagel the Beagle");
    document.body.classList.remove("jimenez_pets", "lola", "brownie");
    document.body.classList.add('bagel');
    document.getElementById('pet-pic').src="assets/BagelBeagle.jpeg"
    document.getElementById('pet-pic').alt="Picture of Bagel the beagle."
    document.getElementsByClassName('information')[0].innerHTML= "Bagel placeholder text";

}
)

brownie_btn.addEventListener('click', function(){
    console.log("Brownie the Pitbull");
    document.body.classList.remove("jimenez_pets", "bagel", "lola");
    document.body.classList.add('brownie');
    document.getElementById('pet-pic').src="assets/BrowniePitbull.jpeg"
    document.getElementById('pet-pic').alt="Picture of Brownie the pitbull"
    document.getElementsByClassName('information')[0].innerHTML= "Brownie placeholder text";

}
)