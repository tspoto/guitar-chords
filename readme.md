# Guitar Chord Flashcards

This web application is designed to assist in learning guitar chords using interactive flashcards. The flashcards are stored in individual HTML files, and their configurations are managed through a JSON file. The JavaScript component randomizes the flashcards and displays them when the "Show Me the Next Chord" button is clicked.

## Features

- **Interactive Flashcards:** Easily flip between chord fronts and backs for effective learning.
- **JSON Configuration:** Chord details and file paths are stored in a JSON file (`chords.json`) for easy management.
- **Randomization:** The application randomizes the flashcards to keep the learning experience dynamic.

## Project Structure

The flashcards are contained in the `chord-html` directory, with each chord having its own HTML file. The chord configurations, including file paths, are defined in the `chords.json` file.

```plaintext
|-- guitar-chords
    |-- index.html
    |-- css
    |   |-- style.css
    |-- js
    |   |-- chords.json
    |   |-- script.js
    |-- |-- chord-html
            |-- a.html
            |-- a7.html
            |-- ...
            |-- g.html
```

## Future Plans

This project is a work in progress, and there are plans to introduce the following features in future updates:

- **Difficulty Levels:** Implement different difficulty levels for users at various skill levels.
- **Audio Examples:** Add audio samples for each chord to help users recognize and play them accurately.
- **Enhanced User Interface:** Improve the design and add more interactive elements.