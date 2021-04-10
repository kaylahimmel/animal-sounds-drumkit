// variables
const keysArray = document.querySelectorAll('.key');
keysArray.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// function to play sounds
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

// To-do: refactor so the key.classList.add('playing'); above is in a separate function
// function to add class (adds the style tranformation)
// function addTransition(e) {
//   const currentKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!currentKey) return;
// }

// function to remove class (after style tranformation is complete)
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing'); 
}