# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![](./final.jpeg)


### Links

- Live Site URL: [github page](https://macluiggy.github.io/pricing-component-with-toggle-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- media queries
- [bootstrap](https://getbootstrap.com/) - CSS framework


### What I learned

I learned to use javascript to change the price between one price and another, using the for statement to iterate between each price and show and hide each price when the switch is pressed.This is the code I used to change the price between annual and monthly:

```js
for(let i = 0, length1 = anual.length; i < length1; i++){
			if (checkbox.checked) {
			// statement
			anual[i].className = 'show';
			mensual[i].className = 'hide';
			} else {
				// statement
				anual[i].className = 'hide';
				mensual[i].className = 'show';
			}
		}
```

### Useful resources

[w3school](https://www.w3schools.com/) and [stackoverflow](https://stackoverflow.com/) were of great help to solve some doubts.

## Author

- Frontend Mentor - [@macluiggy](https://www.frontendmentor.io/profile/macluiggy)
- LinkedIn - [Luiggy Macias](https://www.linkedin.com/in/luiggy-macias-402696155/)
