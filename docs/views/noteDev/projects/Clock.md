---
title: Clock Demo
date: 2021-03-01
tags:
 - Projects
categories:
 - Projects
permalink: /20210301
---

## Introduction
Front-end Stack: HTML, JavaScript, CSS

### 1.Example

Codes
```html
 <canvas id="clock" width="500" height="500"></canvas>
```
```css
canvas{
        border: 1px solid #000;
        }
```
```js
var ctx = document.getElementById("clock").getContext("2d");
        setInterval(function(){
            ctx.clearRect(0,0,500,500);
            ctx.beginPath();
            ctx.arc(250,250,200,0,2*Math.PI);
            ctx.lineWidth = 10;
            ctx.strokeStyle = "#FFAD40"
            ctx.stroke();

            for(i = 0; i< 12; i++){
                ctx.save();
                ctx.beginPath();
                ctx.translate(250,250);  
                ctx.rotate(Math.PI/6*i);         
                ctx.moveTo(0,-200);
                ctx.lineTo(0,-170);
                // ctx.arc(250,0,0,2*Math.PI);
                ctx.lineWidth = 8;
                ctx.stroke();                       
                ctx.restore();                        
            }
            for(i = 0; i< 60; i++){
                ctx.save();
                ctx.beginPath();
                ctx.translate(250,250);  
                ctx.rotate(Math.PI/30*i);         
                ctx.moveTo(0,-200);
                ctx.lineTo(0,-180);
                ctx.lineWidth = 6;
                ctx.stroke();                       
                ctx.restore();                        
            }

            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            if(hour>12){
                hour = hour - 12;
            }
            var hour12 = hour+min/60;
            ctx.save();
            ctx.beginPath();
            ctx.translate(250,250);
            ctx.rotate(Math.PI/6*hour12)
            ctx.moveTo(0,10);
            ctx.lineTo(0,-110);
            ctx.lineWidth = 8;
            ctx.strokeStyle = "#A65F00";
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.translate(250,250);
            ctx.rotate(Math.PI/30*min)
            ctx.moveTo(0,10);
            ctx.lineTo(0,-140);
            ctx.lineWidth = 6;
            ctx.strokeStyle = "#BF8230";
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.translate(250,250);
            ctx.rotate(Math.PI/30*sec)
            ctx.moveTo(0,10);
            ctx.lineTo(0,-160);
            ctx.lineWidth = 6;
            ctx.strokeStyle = "#FF9200";
            ctx.stroke();
            ctx.restore();
                
        },1000)
```



::: tip
Welcome to check out how it looks like <a href="https://codepen.io/pen/?template=WNRXvXv" target="_Blank">clock.html</a>
:::



