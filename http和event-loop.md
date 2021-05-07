## Part1 Http 简介

### 什么是 http?

​HTTP 的全称叫做 ==超文本传输协议(Hypertext Transfer Protocol)==。

<div align="center">
<img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f77381d78ded?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="www"   style="zoom:33%;"  />
</div>

#### 什么是超文本？

在互联网早期的时候，我们输入的信息只能保存在本地，无法和其他电脑进行交互。我们保存的信息通常都以==文本==即简单字符的形式存在，文本是一种能够被计算机解析的有意义的二进制数据包。而随着互联网的高速发展，两台电脑之间能够进行数据的传输后，人们不满足只能在两台电脑之间传输文字，还想要传输图片、音频、视频，甚至点击文字或图片能够进行超链接的跳转，那么文本的语义就被扩大了，这种语义扩大后的文本就被称为==超文本(Hypertext)==。

### 什么是 http 报文？

一句话概括：用来承载超文本的载体，本质是纯文本，不是二进制代码，所以方便读写。
主要由以下三大部分组成：

- 起始行：描述请求或响应的基本信息；
- 头部字段：使用 key-value 形式更详细地说明报文；
- 消息正文：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。

其中起始行和头部字段并成为 请求头 或者 响应头，统称为 Header；消息正文也叫做实体，称为 body。HTTP 协议规定每次发送的报文必须要有 Header，但是可以没有 body，也就是说头信息是必须的，实体信息可以没有。而且在 header 和 body 之间必须要有一个空行（CRLF）

<div align="center">
  <img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f77382f2e9cc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""   style="zoom:33%;"  />
</div>

<p align="center">http报文结构</p>

#### 起始行

每个报文的起始行都是由三个字段组成：**请求方法、URL 和 HTTP 版本**

##### 请求方法

HTTP 请求方法一般分为 8 种，它们分别是

<div align="center">
  <img src="https://images2018.cnblogs.com/blog/1418466/201808/1418466-20180810112625596-2103906128.png" alt=""   style="zoom:100%;"  />
</div>

##### URL 统一资源定位符

以 http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocumen 为例

<div align="center">
  <img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f773aee975ef?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""   style="zoom:30%;"  />
</div>

==http://== 告诉浏览器使用何种协议。对于大部分 Web 资源，通常使用 HTTP 协议或其安全版本，HTTPS 协议。另外，浏览器也知道如何处理其他协议。例如， ==mailto:== 协议指示浏览器打开邮件客户端；==ftp:== 协议指示浏览器处理文件传输。 ==file:///== 指示浏览器访问本地文件

<div align="center">
  <img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f773d35c1097?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""   style="zoom:30%;"  />
</div>

两个主机之间要发起 TCP 连接需要两个条件，主机 + 端口。如果省略端口，那么 http 协议默认为**80**端口，https 默认为**443**端口

<div align="center">
  <img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f773d0294a55?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""   style="zoom:30%;"  />
</div>

以端口后面的第一个 / 开始，到 ? 号之前结束，中间的 每一个/ 都代表了层级（上下级）关系。

<div align="center">
  <img src="https://user-gold-cdn.xitu.io/2020/1/10/16f8f773d4374cfe?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""   style="zoom:30%;"  />
</div>

紧跟着路径后面的是 ==查询参数==。 这些参数是用 & 符号分隔的键/值对列表。key1 = value1 是第一对，key2 = value2 是第二对参数

##### HTTP 版本

###### HTTP/0.9

HTTP 0.9 是最早发现的一个版本，在 1991 年发布，只接受 GET 一种请求方法，并且不支持请求头。只支持纯文本一种内容，服务器只能回应 HTML 格式的字符串，里边不能插入图片。HTTP 0.9 具有典型的无状态性，每个事务独立进行处理，事务结束时就释放这个连接。由此可见，HTTP 协议的无状态特点在其第一个版本 0.9 中已经成型。

###### HTTP/1.0

1） HTTP 1.0 是 HTTP 协议的第二个版本在 1996 年发布，如今仍然被广泛使用，尤其是在代理服务器中。

2） 1.0 版本不仅仅支持 GET 命令还有 POST 和 HEAD 等请求方法。

3） HTTP 的请求和回应格式也发生了变化，除了要传输的数据之外，每次通信都包含头信息，用来描述一些信息。

4） 不再局限于 0.9 版本的 HTML 格式，根据 Content-Type 可以支持多种数据格式，这使得互联网不仅仅可以用来传输文字，还可以传输图像、音频、视频等二进制文件。

5） 同时也开始支持 cache，就是当客户端在规定时间内访问统一网站，直接访问 cache 即可。

6） 除了数据部分，每次通信都必须包括头信息（HTTP header）。

7） 其他的新增功能还包括状态码（status code）、多字符集支持、多部分发送（multi-part type）、权限（authorization）、缓存（cache）、内容编码（content encoding）等。

8） 但是 1.0 版本的工作方式是每次 TCP 连接只能发送一个请求，当服务器响应后就会关闭这次连接，下一个请求需要再次建立 TCP 连接，就是不支持 keep-alive。 TCP 连接的建立成本很高，因为需要客户端和服务器三次握手，并且开始时发送速率较慢（slow start）。所以，HTTP 1.0 版本的性能比较差。随着网页加载的外部资源越来越多，这个问题就愈发突出了。为了解决这个问题，有些浏览器在请求时，用了一个非标准的 Connection 字段。

###### HTTP/1.1

1） 最大变化，就是引入了持久连接（persistent connection），即 TCP 连接默认不关闭，可以被多个请求复用，不用声明 Connection: keep-alive。客户端和服务器发现对方一段时间没有活动，就可以主动关闭连接。不过，规范的做法是，客户端在最后一个请求时，发送 Connection: close，明确要求服务器关闭 TCP 连接。

2） 加入了管道机制，在同一个 TCP 连接里，允许多个请求同时发送，增加了并发性，进一步改善了 HTTP 协议的效率。举例来说，客户端需要请求两个资源。以前的做法是，在同一个 TCP 连接里面，先发送 A 请求，然后等待服务器做出回应，收到后再发出 B 请求。管道机制则是允许浏览器同时发出 A 请求和 B 请求，但是服务器还是按照顺序，先回应 A 请求，完成后再回应 B 请求。

3） 一个 TCP 连接现在可以传送多个回应，势必就要有一种机制，区分数据包是属于哪一个回应的。这就是 Content-length 字段的作用，声明本次回应的数据长度。

4） 分块传输编码，使用 Content-Length 字段的前提条件是，服务器发送回应之前，必须知道回应的数据长度。对于一些很耗时的动态操作来说，这意味着，服务器要等到所有操作完成，才能发送数据，显然这样的效率不高。更好的处理方法是，产生一块数据，就发送一块，采用"流模式"（stream）取代"缓存模式"（buffer）。因此，1.1 版规定可以不使用 Content-Length 字段，而使用"分块传输编码"（chunked transfer encoding）。只要请求或回应的头信息有 Transfer-Encoding 字段，就表明回应将由数量未定的数据块组成。

5） 新增了请求方式 PUT、PATCH、OPTIONS、DELETE 等。

6） 客户端请求的头信息新增了 Host 字段，用来指定服务器的域名。

7） HTTP/1.1 支持文件断点续传，RANGE:bytes，HTTP/1.0 每次传送文件都是从文件头开始，即 0 字节处开始。RANGE:bytes=XXXX 表示要求服务器从文件 XXXX 字节处开始传送，断点续传。即返回码是 206（Partial Content）

###### HTTP/2.0

1）二进制协议： HTTP/1.1 版的头信息肯定是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"（frame）：头信息帧和数据帧。

2）多工： HTTP/2 复用 TCP 连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了"队头堵塞"（HTTP2.0 使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比 HTTP1.1 大了好几个数量级）。
举例来说，在一个 TCP 连接里面，服务器同时收到了 A 请求和 B 请求，于是先回应 A 请求，结果发现处理过程非常耗时，于是就发送 A 请求已经处理好的部分， 接着回应 B 请求，完成后，再发送 A 请求剩下的部分。

3）头信息压缩： HTTP 协议不带有状态，每次请求都必须附上所有信息。所以，请求的很多字段都是重复的，比如 Cookie 和 User Agent，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响速度。
HTTP/2 对这一点做了优化，引入了头信息压缩机制（header compression）。一方面，头信息使用 gzip 或 compress 压缩后再发送；另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就提高速度了。

4）服务器推送： HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送（server push）。

意思是说，当我们对支持 HTTP2.0 的 web server 请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取。这种方式非常合适加载静态资源。
服务器端推送的这些资源其实存在客户端的某处地方，客户端直接从本地加载这些资源就可以了，不用走网络，速度自然是快很多的。

###### 总结

HTTP/0.9：功能捡漏，只支持 GET 方法，只能发送 HTML 格式字符串。
HTTP/1.0：支持多种数据格式，增加 POST、HEAD 等方法，增加头信息，每次只能发送一个请求（无持久连接）
HTTP/1.1：默认持久连接、请求管道化、增加缓存处理、增加 Host 字段、支持断点传输分块传输等。
HTTP/2.0：二进制分帧、多路复用、头部压缩、服务器推送

### HTTP 首部字段

**HTTP** 首部字段根据实际用途呗分为以下 4 中类型。

- 通用首部字段：请求报文和响应报文都会用到的字段
- 请求首部字段：从客户端像服务端发送请求报文时使用的首部。补充了请求的附加内容、客户端信息、响应内容相关优先级等信息
- 响应首部字段：从服务器向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息
- 实体首部字段：针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息

HTTP/1.1 规范定义了如下 47 种首部字段。

#### 通用首部

<div align="center">
  <img src="https://image.xjq.icu/2021/5/6/2021.5.6-%E9%80%9A%E7%94%A8%E9%A6%96%E9%83%A8.png" alt=""   style="zoom:90%;"  />
</div>

#### 请求首部

<div align="center">
  <img src="https://image.xjq.icu/2021/5/6/2021.5.6-%E8%AF%B7%E6%B1%82%E9%A6%96%E9%83%A8.png" alt=""   style="zoom:90%;"  />
</div>

#### 响应首部

<div align="center">
  <img src="https://image.xjq.icu/2021/5/6/2021.5.6-%E5%93%8D%E5%BA%94%E9%A6%96%E9%83%A8.png" alt=""   style="zoom:90%;"  />
</div>

#### 实体首部

<div align="center">
  <img src="https://image.xjq.icu/2021/5/6/2021.5.6-%E5%AE%9E%E4%BD%93%E9%A6%96%E9%83%A8.png" alt=""   style="zoom:90%;"  />
</div>

Content-Disposition 响应头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。

`Content-Disposition: inline`

`Content-Disposition: attachment`

`Content-Disposition: attachment; filename="filename.jpg"`

### HTTP 状态码

| 类别 | 描述         |    举例 |
| :--: | :----------- | ------: |
| 1xx  | 信息性状态码 |     101 |
| 2xx  | 成功         | 200 204 |
| 3xx  | 重定向       | 301 304 |
| 4xx  | 客户端错误   | 401 404 |
| 5xx  | 服务端错误   | 503 505 |

### 跨域的形成原因及解决方式

产生原因：**浏览器的同源策略**

解决措施：

- 反向代理：服务器通信不存在跨域限制
- CORS 跨域资源共享，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。
- JSONP 动态创建 script 标签，并且调用预先约定的回调函数

## Part2 javascript 之 Event Loop

### 什么是事件循环（Event Loop）?

Javascript 遇到**同步任务**直接执行，遇到**异步任务**，将其放到**任务队列**等待**主线程**同步任务执行完毕，再依次读取任务队列的异步任务执行。

### 处理异步的 4 种方式

- 回调函数（callback）
- Promise
- generator yield
- async await

**例题：输出打印顺序**

```javascript
function fun1() {
  console.log("fun1");
  return new Promise((resolve) => {
    console.log("promise1");
    resolve();
    console.log("promise2");
    setTimeout(() => {
      console.log("time1");
    }, 0);
  }).then(() => {
    setTimeout(() => {
      console.log("time2");
    }, 0);
    console.log("promise3");
  });
}

function fun2() {
  console.log("fun2");
  setTimeout(() => {
    console.log("time3");
  }, 0);
}

async function fun3() {
  console.log("fun3-1");
  await fun2();
  console.log("fun3-2");
}

setTimeout(() => {
  console.log("time4");
}, 0);
fun1();
console.log("start");
fun3();
console.log("end");
```
