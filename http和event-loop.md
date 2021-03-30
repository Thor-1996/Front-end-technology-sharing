## Part1 Http 简介

### 什么是 http?

​HTTP 的全称叫做 ==超文本传输协议(Hypertext Transfer Protocol)==。

<div align="center">
<img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f77381d78ded?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""   style="zoom:33%;"  />
</div>

#### 什么是超文本？

在互联网早期的时候，我们输入的信息只能保存在本地，无法和其他电脑进行交互。我们保存的信息通常都以==文本==即简单字符的形式存在，文本是一种能够被计算机解析的有意义的二进制数据包。而随着互联网的高速发展，两台电脑之间能够进行数据的传输后，人们不满足只能在两台电脑之间传输文字，还想要传输图片、音频、视频，甚至点击文字或图片能够进行超链接的跳转，那么文本的语义就被扩大了，这种语义扩大后的文本就被称为==超文本(Hypertext)==。

### 什么是 http 报文？

一句话概括：用来承载超文本的载体。
主要由以下三大部分组成：

- 起始行：描述请求或响应的基本信息；
- 头部字段：使用 key-value 形式更详细地说明报文；
- 消息正文：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。

其中起始行和头部字段并成为 请求头 或者 响应头，统称为 Header；消息正文也叫做实体，称为 body。HTTP 协议规定每次发送的报文必须要有 Header，但是可以没有 body，也就是说头信息是必须的，实体信息可以没有。而且在 header 和 body 之间必须要有一个空行（CRLF）

<div align="center">
<img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f77382f2e9cc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""   style="zoom:33%;"  />
</div>

####

## Part2 javascript 之 Event Loop
