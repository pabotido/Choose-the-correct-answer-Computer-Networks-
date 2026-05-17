# Choose the Correct Answer – Multiple Choice Quiz

A browser-based multiple-choice quiz application built with vanilla HTML, CSS, and JavaScript.  
Each session presents questions in a **random order** with **shuffled A/B/C/D answer options**, giving a fresh experience every time you play.

---

## Features

- **Randomised question order** – questions are shuffled on every start/restart.
- **Randomised answer options** – A/B/C/D labels are reassigned randomly each round so answer positions are never the same.
- **Single- and multi-select questions** – single-answer questions lock on click; multi-answer questions let you pick multiple options before submitting.
- **Instant feedback** – each answer shows "Right ✅" or "Understand ✅" immediately after selection, and highlights the correct answer in green.
- **Live progress bar** – a gradient bar tracks how far through the quiz you are.
- **Score counter** – running score displayed in the header pill.
- **Back / Next navigation** – step backward and forward through answered questions to review your choices.
- **Restart** – reshuffles both question order and answer options for a completely new session.
- **Responsive design** – works on desktop and mobile (≤ 600 px breakpoint).

---

## Project Structure

```
├── index.html   # App shell – header, quiz card, footer, DOM anchors
├── style.css    # Dark-theme UI (CSS custom properties, grid, transitions)
└── script.js    # Quiz engine – data, shuffle logic, render, answer & nav
```

### `index.html`
Defines the page layout: a sticky header with the progress bar and score pills, a main `.card` containing the question, dynamically injected option buttons, a feedback area, and Back / Next / Restart controls.

### `style.css`
Dark navy colour scheme using CSS custom properties (`--bg-main`, `--color-correct`, `--color-wrong`, etc.).  
Key components: `.pill` badges, `.progress` / `.bar` animated fill, `.opt` option buttons with correct/wrong state classes, and `.btn` / `.btn.ghost` / `.btn.danger` variants.

### `script.js`
1. **Quiz data** – `questions` array; each entry has `no`, `text`, `options` (`{a, b, c, d}`), and `correct` (`"a"–"d"`).
2. **Shuffle engine** – `shuffle()` (Fisher-Yates) + `buildShuffledQuestion()` remaps correct answer keys to new display labels after shuffling.
3. **Validation** – `isValidQuestion()` filters out any malformed entries before play.
4. **State** – `playList`, `userAnswers`, `index`, `score`, and `tempSelected` (multi-select set).
5. **Render** – `render()` builds option buttons via `createElement`, attaches click handlers, and restores previously answered state when navigating back.
6. **Answer logic** – `chooseSingle()` / `toggleMulti()` + `submitMulti()` handle locking options, computing correctness, and updating the score.
7. **Navigation** – Back / Next buttons guard boundaries; Restart calls `startRandomAll()`.

---

## Getting Started

No build step or dependencies required.

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. The quiz starts immediately.

```bash
git clone https://github.com/pabotido/Choose-the-correct-answer-Computer-Networks-.git
cd Choose-the-correct-answer-Computer-Networks-
# open index.html in your browser
```

---

## Adding or Editing Questions

Edit the `questions` array in `script.js`.  
Each question object must follow this shape:

```js
{
  no: 42,                        // display number (optional)
  text: "Your question text?",
  options: {
    a: "Option A text",
    b: "Option B text",
    c: "Option C text",
    d: "Option D text"
  },
  correct: "b"                   // key of the correct option (lowercase)
}
```

For **multi-correct** questions, set `correct` to an array:

```js
correct: ["a", "c"]
```

Any entry that fails validation (missing text, fewer than two options, or an unrecognised correct key) is silently skipped.

---

## Browser Support

Works in all evergreen browsers (Chrome, Firefox, Edge, Safari) that support ES2015+ and CSS custom properties.
