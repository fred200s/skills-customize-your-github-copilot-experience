
# 📘 Assignment: Hangman Game Challenge

## 🎯 Objective

Build a classic Hangman word-guessing game using Python. Practice string manipulation, loops, conditional logic, and user interaction while keeping track of guesses and game progress.

## 📝 Tasks

### 🛠️ Game Logic and Word Selection

#### Description

Create a Hangman game that randomly selects a secret word and allows the player to guess letters until they either solve the word or run out of attempts.

#### Requirements
Completed program should:

- Randomly select a word from a predefined list.
- Display the current word progress with blanks for unknown letters (e.g. `_ _ a _ _`).
- Accept letter guesses from the player.
- Track and display incorrect guesses remaining.
- Prevent repeated penalties for the same incorrect letter.
- End the game with a win message when the word is fully guessed.
- End the game with a lose message when the player uses all attempts.

### 🛠️ User Feedback and Game Flow

#### Description

Provide clear status updates after each guess and summarize the final result.

#### Requirements
Completed program should:

- Show the current progress after each guess.
- Display guessed letters so the player can avoid repeats.
- Inform the player when a guessed letter is correct or incorrect.
- Announce the final outcome and reveal the secret word if the player loses.
