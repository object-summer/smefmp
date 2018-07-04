# Less

## Sass styuls

> 一款比较流行的预处理CSS，支持变量、混合、函数、嵌套、循环等特点
> [官网](http://lesscss.org/)
> [中文网](http://lesscss.cn/)
> http://www.w3cplus.com/css/less

## 概要

## 为什么要有预处理CSS

CSS基本上是设计师的工具，不是程序员的工具。在程序员的眼里，CSS是很头痛的事情，它并不像其它程序语言，比如说PHP、Javascript等等，有自己的变量、常量、条件语句以及一些编程语法，只是一行行单纯的属性描述，写起来相当的费事，而且代码难易组织和维护。

很自然的，有人就开始在想，能不能给CSS像其他程序语言一样，加入一些编程元素，让CSS能像其他程序语言一样可以做一些预定的处理。这样一来，就有了“CSS预处器（CSS Preprocessor）”。

## 什么是预处理CSS

- CSS语言的超集，比CSS更丰满
- 

CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

CSS预处理器技术已经非常的成熟，而且也涌现出了很多种不同的CSS预处理器语言，比如说：Sass（SCSS）、LESS、Stylus、Turbine、Swithch CSS、CSS Cacheer、DT CSS等。如此之多的CSS预处理器，那么“我应该选择哪种CSS预处理器？”也相应成了最近网上的一大热门话题，在Linkedin、Twitter、CSS-Trick、知呼以及各大技术论坛上，很多人为此争论不休。相比过计我们对是否应该使用CSS预处理器的话题而言，这已经是很大的进步了。

到目前为止，在众多优秀的CSS预处理器语言中就属Sass、LESS和Stylus最优秀，讨论的也多，对比的也多。本文将分别从他们产生的背景、安装、使用语法、异同等几个对比之处向你介绍这三款CSS预处理器语言。相信前端开发工程师会做出自己的选择——我要选择哪款CSS预处理器。

## 如何使用预处理Less

### less.js

> 网页运行阶段解析LESS文件

#### 使用方式：


### less compiler

> 开发阶段编译LESS文件成为CSS

#### 使用方式：

##### 安装

- 安装Node.js
- 安装less
    + 命令行执行：npm install -g less

##### 编译操作

### 语法

#### 注释

```less
// 模板注释，这里的注释转换成CSS后将会删除
/* CSS 注释语法 转换为CSS后任然保留 */
```

#### 定义变量

> 将需要重复使用或经常修改的值定义为变量，需要使用的地方引用

- less

  ```less
  @变量名: 变量值;
  @bgColor: #f5f5f5;

  body{
    width: @变量名;
    background-color: @bgColor;
  }
  ```

- css

  ```css
  body{
    width: 变量值;
    background-color: #f5f5f5;
  }
  ```

#### 嵌套

> 如果你在CSS中经常使用子代选择器，那LESS的嵌套语法使用起来非常Happy

- less

  ```less
  .container {
    width: @containerWidth;
    > .row {
      height: 100%;
      a{
        color: #f40;
        &:hover{
          color: #f50;
        }
      }
    }
    div {
      width: 100px;
      .hello {
        background-color: #00f;
      }
    }
  }
  ```

- css

  ```css
  .container {
    width: 1024px;
  }
  .container > .row {
    height: 100%;
  }
  .container > .row a {
    color: #f40;
  }
  .container > .row a:hover {
    color: #f50;
  }
  .container div {
    width: 100px;
  }
  .container div .hello {
    background-color: #00f;
  }
  ```

#### Mixin

```less
/* 定义一个类 */
.roundedCorners(@radius: 5px) {
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
  border-radius: @radius;
}
/* 定义的类应用到另个一个类中 */
＃header {
  .roundedCorners;
}
#footer {
  .roundedCorners(10px);
}
```

#### Import

> 我们可以在开发阶段将样式放到多个文件中，最后通过@import 的方式合并

- less

  ```less
  // main.less
  @btnColor: red;
  @import url('_buttom.less');
  
  body{
    width: 1024px;
  }

  // _buttom.less
  .btn{
    color: @btnColor;
  }
  ```

- css

  ```less
  .btn{
    color: red;
  }
  body{
    width: 1024px;
  }
  ```

#### 函数

##### 内置函数

- lighten：将一个颜色变亮
  + lighten(#000, 10%); // #1a1a1a
- darken：将一个颜色变暗
  + darken(#000, 10%); // #e6e6e6

##### 自定义函数等讲流行框架再说


### 安装NodeJS
