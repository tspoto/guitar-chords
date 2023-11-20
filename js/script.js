fetch('js/chords.json')
.then(response => response.json())
.then(data => {
 var cards = data;
 var last_card = null;
 var current_card_index = 0;

 function shuffle_array(array) {
 for (let i = array.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [array[i], array[j]] = [array[j], array[i]];
 }
 }

 function display_chord() {
 var card_content = document.getElementById('card_content');
 fetch(cards[current_card_index].chord)
 .then(response => response.text())
 .then(data => {
 card_content.innerHTML = data;
 last_card = cards[current_card_index];
 })
 .catch(error => console.error('Error:', error));
 }

 function next_card() {
 do {
 shuffle_array(cards);
 current_card_index = 0;
 } while (cards[current_card_index] === last_card);
 display_chord();
 }

 document.getElementById('next_button').addEventListener('click', next_card);
 window.addEventListener('keydown', function(event) {
 if (event.code === 'Space') {
 next_card();
 }
 });

 // Add click event listener to all elements with class "card"
 var elements = document.getElementsByClassName("card");
 for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', next_card);
 }

 shuffle_array(cards);
 display_chord();
})
.catch(error => console.error('Error:', error));
