# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

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

- Complete each step of the sequence
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![](/assets/images/multi-step-form-screenshot.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/oluwadara5000/multi-step-form)
- Live Site URL: [Live Link](https://four-step-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript


### What I learned

```css
.period {
  display: flex;
  background-color: #f8f9fe;
  margin-top: 30px;
  justify-content: center;
  font-weight: 700;
  padding: 15px 0;
  position: absolute;
}

.toggle {
  position: relative;
}

.toggle input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.slider{
  position: relative;
  display: block;
  cursor: pointer;
  background-color: #01285d;
  transition: 0.5s;
  width: 40px;
  height: 100%;
}

.slider::before{
  content: "";
  position: absolute;
  height: 80%;
  width: 30%;
  background-color: #ffffff;
  transition: 0.5s;
  top: 2px;
  left: 2px;
}

input:checked + .slider:before {
  transform: translateX(23px);
}

.slider.round {
  border-radius: 20px;
}

.slider.round:before{
  border-radius: 20px;
}
```
```js
toggle.addEventListener("change", function () {
  if (toggle.checked) {
    } else {
}
});

```