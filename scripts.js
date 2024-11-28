jimenez_pets.addEventListener('click', function(){
    console.log("All three pets");
    document.body.classList.remove("lola", "bagel", "brownie");
    document.body.classList.add('jimenez_pets');
    document.getElementById('pet-pic').src="assets/JimenezPets.jpeg"
    document.getElementById('pet-pic').alt="Picture of three animals in a living room. From left to right, Bagel the beagle, Lola the bunny, Brownie the pitbull."
    document.getElementsByClassName('information')[0].innerHTML= "These three animals in the picture are the pets of the Jimenez Family. From left to right there is Bagel the beagle, Lola the bunny, and Brownie the pitbull. My family was against the idea of owning pets up until we got our first pet. In 2017 my brother adopted our first pet and ever since then my family has been open to getting more pets.";

}
)

lola_btn.addEventListener('click', function(){
    console.log("Lola the Bunny");
    document.body.classList.remove("jimenez_pets", "bagel", "brownie");
    document.body.classList.add('lola');
    document.getElementById('pet-pic').src="assets/LolaBunny.jpeg"
    document.getElementById('pet-pic').alt="Picture of Lola the bunny."
    document.getElementsByClassName('information')[0].innerHTML= "Lola is the first pet that my family got. Around October 2017 my older brother decided to adopt a white Netherland dwarf rabbit. My brother wanted a pet for quite  a while and decided the time was right when the both of us were away from home for university. My parents were surprised that my brother got a pet but they quickly found themselves adoring the bunny. Lola was usually pretty relaxed but during nights she was very energetic and loved to run. Unfortunately Lola passed away in March 2024.";

}
)

bagel_btn.addEventListener('click', function(){
    console.log("Bagel the Beagle");
    document.body.classList.remove("jimenez_pets", "lola", "brownie");
    document.body.classList.add('bagel');
    document.getElementById('pet-pic').src="assets/BagelBeagle.jpeg"
    document.getElementById('pet-pic').alt="Picture of Bagel the beagle."
    document.getElementsByClassName('information')[0].innerHTML= "Bagel was the first dog that our family adopted. Bagel was adopted by my older brother around April 2020. Bagel was one years old when she was adopted. Her previous family had to give her away because they were moving away and could not bring a pet. My brother always wanted a dog and after a couple years of having Lola he decided that he was ready to get another pet. Bagel is a very relaxed dog who loves food and going for walks. She will always sit by someones legs whenever there is food around.";

}
)

brownie_btn.addEventListener('click', function(){
    console.log("Brownie the Pitbull");
    document.body.classList.remove("jimenez_pets", "bagel", "lola");
    document.body.classList.add('brownie');
    document.getElementById('pet-pic').src="assets/BrowniePitbull.jpeg"
    document.getElementById('pet-pic').alt="Picture of Brownie the pitbull"
    document.getElementsByClassName('information')[0].innerHTML= "Brownie was adopted around December 2022. We got him when he was just 3 months old. Brownie was given to us by my aunt’s friend when he was just 3 months old. He was a very energetic puppy and always loved to run around. When we first got him he was smaller than Bagel but within 4 months he was already bigger than her. At first I wasn’t very fond of bigger dogs but after spending time with Brownie I can definitely see the appeal in owning a big dog.";

}
)