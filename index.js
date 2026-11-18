// =====================================================
// Drum Kit
// Click a drum button or press its key to play a sound.
// =====================================================

// ---------- Data ----------

// Maps each key to the sound file it plays.
// Adding a new drum later = add one line here (plus a button in the HTML).
const soundFiles = {
  w: "crash.mp3",
  a: "kick-bass.mp3",
  s: "snare.mp3",
  d: "tom-1.mp3",
  j: "tom-2.mp3",
  k: "tom-3.mp3",
  l: "tom-4.mp3",
};

// ---------- Functions ----------

// Plays the sound that belongs to a key.
function playSound(key) {
  const soundFile = soundFiles[key];

  // Not a drum key? Do nothing. (Also stops the code below from crashing.)
  if (!soundFile) {
    return;
  }

  const sound = new Audio("./sounds/" + soundFile);
  sound.play();
}

// Briefly adds the "pressed" CSS class so the button looks pushed down.
function animateButton(key) {
  // Each button has its key as a class name, e.g. <button class="w drum">
  const button = document.querySelector("." + key);

  // No button for this key? Do nothing.
  if (!button) {
    return;
  }

  button.classList.add("pressed");

  // Remove the class after 100ms so the button returns to normal.
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

// One function that does everything for a key, so clicks and
// key presses share the same logic.
function playDrum(key) {
  // toLowerCase() makes it work even when Caps Lock is on.
  const lowerCaseKey = key.toLowerCase();

  // Not a drum key? Tell the user, then stop.
  if (!(lowerCaseKey in soundFiles)) {
    alert("Please press a valid key (w, a, s, d, j, k, l) to play the sound.");
    return;
  }

  playSound(lowerCaseKey);
  animateButton(lowerCaseKey);
}

// ---------- Event listeners ----------

// Returns a list of all the drum buttons.
const drumButtons = document.querySelectorAll(".drum");

// Mouse: give every button a click listener.
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    // "this" is the button that was clicked, so innerHTML is its letter.
    playDrum(this.innerHTML);
  });
}

// Keyboard: listen on the whole page.
// "event" is filled in by the browser; event.key is the key that was pressed.
document.addEventListener("keydown", function (event) {
  playDrum(event.key);
});
