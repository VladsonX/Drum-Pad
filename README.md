# Electronica-2000 Drum Machine

![Project Preview](./Drum%20Pad%20Preview.png)

## Description
**Electronica-2000** is a browser-based virtual drum machine inspired by retro hardware samplers. It features low-latency audio playback and responsive visual feedback, allowing users to create beats using their keyboard or mouse.

## Live Demo
[Play the Drum Machine](https://vladsonx.github.io/Drum-Pad/)

## Tech Stack
* **HTML5** – Semantic structure.
* **CSS3** – Skeuomorphic design, flexbox/grid layout, and glowing animations using `box-shadow` and transitions.
* **Vanilla JavaScript** – DOM manipulation, `keydown`/`click` event handling, and Audio API management.

## Key Features
* **Dual Input Support:** Play using mouse clicks or keyboard hotkeys (mapped to `1-8` and `Q-R`).
* **Visual Feedback:** Keys light up with an orange neon glow upon activation, simulating real pressure-sensitive pads.
* **Rapid Fire Audio:** Implemented logic to handle fast repetitive keystrokes without audio lag (resetting `currentTime` to 0).
* **Responsive Design:** Scales correctly on different screen sizes - *to be added*

## What I Learned
Building this project helped me master:
1.  **Event Listeners:** handling global `keydown` events vs local `click` events.
2.  **Audio Handling:** Solving the issue where audio wouldn't replay instantly if the previous sound hadn't finished.
3.  **UI/UX:** creating immediate visual response to user actions to make the interface feel "tactile".
