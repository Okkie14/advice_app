# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Home Page](./screenshots/Advice_app.png)

### Links

- Solution URL: [https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub]
- Live Site URL: [https://advice-app-jade.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Using an API to get JSON message and incorporating async and await into the app

```css
.isLoading {
  margin: 1em auto;
  border: 8px solid var(--primary-cyan);
  /* Light grey */
  border-top: 8px solid var(--primary-green);
  /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

```js
async function advice() {
  loading = true;
  quotes.classList.add("hidden");

  if (loading) {
    loadingState.classList.add("isLoading");
    const message = await fetch("https://api.adviceslip.com/advice");

    if (message.status === 200) {
      loadingState.classList.remove("isLoading");
      loading = false;
      const response = await message.json();
      const adviceNumber = response.slip.id;
      const adviceText = response.slip.advice;

      adviceId.innerHTML = adviceNumber;
      adviceMessage.innerHTML = adviceText;
      quotes.classList.remove("hidden");
    } else {
      quotes.classList.add("hidden");
    }
  }
}
```
