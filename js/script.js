fetch('js/chords.json')
.then(response => response.json())
.then(data => {
var cards = data;
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
   })
   .catch(error => console.error('Error:', error));
}

document.getElementById('next_button').addEventListener('click', function() {
    shuffle_array(cards);
    current_card_index = 0;
    display_chord();
});
   
/*document.getElementById('repeat_button').addEventListener('click', function() {
    display_chord();
});*/

shuffle_array(cards);
display_chord();
})
.catch(error => console.error('Error:', error));