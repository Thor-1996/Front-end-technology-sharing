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

<div align="center">
  <img src="https://image.xjq.icu/2021/5/26/2021.5.26-http%E8%AF%B7%E6%B1%82.png" alt=""   style="zoom:100%;"  />
</div>

#### 起始行

每个报文的起始行都是由三个字段组成：**请求方法、URL 和 HTTP 版本**

##### 请求方法

HTTP 请求方法一般分为 8 种，它们分别是

<div align="center">
  <img src="https://images2018.cnblogs.com/blog/1418466/201808/1418466-20180810112625596-2103906128.png" alt=""   style="zoom:100%;"  />
</div>

patch 局部更新 put 全局更新

connect HTTP 代理使用的就是 connect 这个方法，connect 在网页开发中不会使用到。

option 请求是跨域请求中非简单请求会发出的预检请求

<div align="center">
  <img src="https://image.xjq.icu/2021/5/26/2021.5.26-%E7%AE%80%E5%8D%95%E8%AF%B7%E6%B1%82.png" alt=""   style="zoom:100%;"  />
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

**HTTP/0.9**：功能简单，只支持 GET 方法，只能发送 HTML 格式字符串。

**HTTP/1.0**：支持多种数据格式，增加 POST、HEAD 等方法，增加头信息，每次只能发送一个请求（无持久连接）

**HTTP/1.1**：默认持久连接、请求管道化（并发）、增加缓存处理、增加 Host 字段、支持断点传输分块传输等。

**HTTP/2.0**：二进制分帧、多路复用、头部压缩、服务器推送

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

### HTTP 状态码

| 类别 | 描述         |    举例 |
| :--: | :----------- | ------: |
| 1xx  | 信息性状态码 |     101 |
| 2xx  | 成功         | 200 204 |
| 3xx  | 重定向       | 301 304 |
| 4xx  | 客户端错误   | 401 404 |
| 5xx  | 服务端错误   | 503 505 |

### 实际运用

- 下载图片文件
- 资源重定向
- 强缓存和协商缓存
- referer 防盗链处理
- cookie 通信
- csrf 防御监控 content-type 请求 MIME 类型为图片，返回的 MIME 类型为 Text,JSON,HTML
- 等等...

### 跨域的形成原因及解决方式

产生原因：**浏览器的同源策略** 相同协议 相同域名 相同端口号 才是同源；
注意：本地 ip 请求 localhost 也是跨域请求

解决措施：

- 反向代理：浏览器与服务器存在同源策略限制，服务器与服务器通信不存在同源策略限制

  浏览器 --> 代理服务器 --> 目标服务器
  目标服务器 --> 代理服务器 --> 浏览器

- CORS 跨域资源共享，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。

Access-Control-Allow-Origin: \* / http://localhost:8080
Access-Control-Allow-Metheds: get post

Access-Control-Allow-Credentials: true;
同时前端 ajax 请求配置 withCredentials:true; 才可以携带跨域 cookie

- JSONP 动态创建 script 标签，并且调用预先约定的回调函数（一般不用）

## Part2 javascript 之 Event Loop

### 处理异步的 4 种方式

- 回调函数（callback）
- Promise
- generator yield（一般不用）
- async await

回调

```javascript
navigator.geolocation.getCurrentPosition(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
```

promise

```javascript
function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

getCurrentPosition()
  .then((res) => {
    console.log(res);
  })
  .then((err) => {
    console.log(err);
  });
```

async await

```javascript
function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function task() {
  try {
    const res = await getCurrentPosition();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
```

### 什么是事件循环（Event Loop）?

（1）所有同步任务都在主线程上执行，形成一个执行栈

（2）主线程之外，还存在一个"任务队列"。遇到异步任务，就将其放在"任务队列"

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"的任务，并放入执行栈。

（4）主线程不断重复上面的三步，直至所有任务执行完毕。

输出打印顺序：

```javascript
setTimeout(() => {
  console.log("timeout");
}, 0);

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("start");
```

```javascript
Promise.resolve().then(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
});
setTimeout(() => {
  console.log("3");
  Promise.resolve().then(() => {
    console.log("4");
  });
}, 0);
```

```javascript
setTimeout(() => {
  console.log("t1");
  Promise.resolve().then(() => {
    console.log("p1");
  });
}, 0);

setTimeout(() => {
  console.log("t2");
  Promise.resolve().then(() => {
    console.log("p2");
  });
}, 0);
```

```javascript
function fun1() {
  console.log("fun1");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("time1");
    }, 0);

    console.log("promise1");
    resolve();
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

setTimeout(() => {
  console.log("time4");
}, 0);

fun1();
console.log("start");
fun2();
console.log("end");
```
