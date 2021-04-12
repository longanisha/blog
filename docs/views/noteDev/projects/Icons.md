---
title: Icons
date: 2020-06-01
tags:
 - Projects
categories:
 - Projects
permalink: /20200601
---

## Introduction
Use CSS to create some Icons

### 1.css var()
::: tip
css的var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。
:::
示例
```css
.box{
      width: 100px;
      height: 100px;
      background-color: var(--background-color);
    }
```
::: tip
var接收2个参数，第一个是变量，第二个是默认值，可不传
:::

### 2.伪类:root
::: tip
:root 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 html 元素，除了优先级更高之外，与 html 选择器相同。
:::
示例
```css
  :root {
    --background-color:#000; 
    }
```

### 3.实现动态交互
至于交互事件的话，我就用点击事件来实现吧，用setProperty可以设置自定义属性的css，这样也方便了我们不用写行间样式。
```js

  //点击事件
  btn1.onclick=function(){
    document.documentElement.style.setProperty('--background-color', "green");
  }
```

::: tip
大家可以去这里查看效果<a href="https://github.com/longanisha" target="_Blank">theme.html</a>，注意F12来审查html元素的变化。</br>
相信大多数人都是使用框架开发的，框架的话其实原理也是一样，我这里是写死了的静态，改成动态的就好了，而且html定义的样式，对于单页面应用来说，这可是全局的，记得之前的全国默哀时，所有页面的样式都变灰，也是在html新增一个filter的css，即可全局了，这个主题换肤也是利用相同的原理实现的。
:::



