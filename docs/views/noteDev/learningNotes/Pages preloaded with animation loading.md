---
title: Pages Preloaded with Animation Loading
date: 2020-06-04
tags:
 - Learning Notes
categories:
 - Learning Notes
permalink: /20200604
---

## Introduce
General at the time of the page to enter, sometimes network if it is not a good situation, the user may be suddenly off the page, so in order to improve the user experience, when the page is loaded, let he loaded a loading animation, so the user retention rate will increase a lot, then, let us to achieve it.

### Use window.ohload
For loading animation I use<a href="https://github.danielcardoso.net/load-awesome/" target="_Blank">https://github.danielcardoso.net/load-awesome/</a>,There are a lot of Loading animations to choose from. The most important idea is that there should be a mask layer with the loading, covering the screen. The function is to cover the elements below, otherwise the loading will be displayed together with the content, which will not look good. In fact, this is a camouflage

```html
<!--The mask layer -->
  <div class="loading-wrap">
    <div id="pacman" class="la-pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
```
```css
.loading-wrap{
      width: 100vw;
      height: 100vh;
      position: fixed;
      background-color: #fff;
      -webkit-transition: opacity 1s ease;
      -moz-transition: opacity 1s ease;
      -o-transition: opacity 1s ease;
      transition: opacity 1s ease;
    }
    .la-pacman{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
```
```js
  //Vanila js
  window.onload = function(){
    setTimeout(function(){
    var loader = document.getElementsByClassName("loading-wrap")[0];
    loader.className="loading-wrap fadeout" ;//Fade out using the fade method loading page
    setTimeout(function(){loader.style.display="none"},1000)
    },1000)//Mandatory display loading page 1s
  }

  //Ref is required in React
  componentDidMount() {
    setTimeout(() => {
      this.loader.current.class = "fadeout";// Fade out using the fade method loading page
      setTimeout(() => { this.loader.current.style.display = "none"; }, 500);
    }, 500);// Mandatory display loading page 0.5s
  }
```
