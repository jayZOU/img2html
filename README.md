# img2html
将图片转换为html节点(一个特别无聊的轮子......)

## 示例

[HTML页面](http://jayzou.github.io/demo/img2html/)

 原图 | 转换后 
 :--------: | :--------:
 ![enter image description here](http://jayzou.github.io/demo/img2html/test.jpg)    |   ![enter image description here](http://jayzou.github.io/demo/img2html/cover.jpg) 

## 安装
> npm install img2html --save

## 简单使用

```javascript
import {img2html} from 'img2html';
window.addEventListener('load', function() {
    img2html(document.querySelector('.covert-img'), document.querySelector('.covert-html'), 2, "微");
})
```

## API
### elm
必填，img节点，原图

**注：原图尽量不要太大，如果超过300px，那么步长应该设置大于2**

### renderElm
必填，渲染之后像素节点容器

### step
选填，步长，默认值：2
能够有效减少渲染的像素集，如设置为2则渲染的像素集为原图像素集的1/4

### byte
选填，渲染字节，默认值：微
每个像素渲染的值
