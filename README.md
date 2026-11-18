# 🥁 Drum Kit

A small browser drum kit built with plain HTML, CSS and JavaScript. Click a drum with the mouse or press its key on the keyboard to play a sound.

## Features

- Seven drums, each with its own sound
- Works with both **mouse clicks** and **keyboard presses**
- Visual "pressed" animation on every hit
- Ignores keys that are not drums, and works with Caps Lock on

## Keys

| Key | Sound     |
| --- | --------- |
| `w` | Crash     |
| `a` | Kick bass |
| `s` | Snare     |
| `d` | Tom 1     |
| `j` | Tom 2     |
| `k` | Tom 3     |
| `l` | Tom 4     |

## Live demo

[Play the Drum Kit](https://marahm-dev.github.io/drum-kit/)

## How to run

1. Download or clone this repository
2. Open `index.html` in your browser

No installation or build step needed.

## How it works

- `soundFiles` is an object that maps each key to its sound file.
- Every button gets a `click` listener, and the whole page gets a `keydown` listener.
- Both call the same `playDrum(key)` function, which plays the sound (`playSound`) and shows the animation (`animateButton`).
- The animation adds the CSS class `pressed` to the button and removes it after 100 ms with `setTimeout`.

## Concepts practiced

- Selecting elements with `querySelectorAll` and `querySelector`
- Event listeners and callback functions
- The `this` keyword inside an event handler
- The event object (`event.key`)
- Objects used as lookup tables
- The `Audio` object
- Adding and removing CSS classes with `classList`
