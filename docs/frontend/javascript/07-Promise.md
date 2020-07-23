---
title: Promise
---

## Promise 可以做什么？（流程控制）

Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。现已被 ES6 纳入进规范中。

Promise 主要解决了异步编程带来的回调地狱问题，以同步的方式调用异步方法。

## Promise 面试题（插个眼）

关于【Promise】十问 - 知乎 https://zhuanlan.zhihu.com/p/137992403

## Promise 如何使用？

1）创造一个Promise实例

2）Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数

3）可用Promise的try/catch方法预防异常

## 手写实现 Promise/A+，需要注意什么？（知识点）

**1. Promise 是一个类，在执行这个类的时候需要传递一个执行器进去，这个执行器会立即执行**

>传什么执行器？执行了什么？为什么需要？

用过 Promise 的都知道，我们一般这样创建实例 `new Promise((resolve,reject)=>{})`，执行器会在创建时自动执行 `resolve` 和 `reject` 方法；

但此时 Promise 还是等待状态，因此进行状态判断，阻止运行。

必须直到实例调用过 `then()`， `resolve()` 或 `reject()` 才能返回回调。

如果没有执行器，不传入形参，就无法进行异步回调。



**2. Promise 中有三种状态，分别为 成功/满足(fulfilled)、失败/拒绝(rejected)、等待(pending)**
```
实例创建时总是 pending状态

pending 就是没打开盒子的「薛定谔的猫」。

虽然我们 new 了一个薛定谔的猫，但我们可以根据代码逻辑，确定自己想要的成功猫和失败猫。
pending -> fulfilled
pending -> rejected

// 顺便给萌新科普下，Promise返回值会自动包装成 Promise 对象；如果不使用 async/awint，就必须在 then() 里面用函数接受传参和继续下一步逻辑。
var die = '给爷死'
let promise = new Promise((resolve,reject) => {
    if (die === '给爷死') {
        resolve('活着的成功猫')
    } else {
        reject('死掉的失败猫')
    }
})
// 调用 then() 打开盒子。面试题喜欢在 then() 里面继续new Promise()，套娃，考察微任务
promise.then(res => console.log(res))
        .catch(err=>console.log(err))
```


**3. 实例方法 then()**

then() 方法是被定义在原型对象中的。（ES6 中写法为 class 的非静态方法，ES5 中写法为挂载到原型 prototype 上。）

then() 提供两个状态函数 `resolve()` 和 `reject()`，它们能改变 prmoise 实例状态，并返回值
```
resolve: fulfilled // 成功
reject: rejected // 失败

then (successCallback, failCallback) {/* ... */}
```

**4. 实例方法 catch()**

then() 方法是被定义在原型对象中的。

catch() 用于抛出错误。
```
catch (failCallback) {
    return this.then(undefined, failCallback)
}
```


**5. then() 实现细节之回调**

即使 Promise 实例，调用了 Promise.then()，也不会立即触发 `resolve()` 和 `reject()` 的回调。

我们想要主动调用它们，主动改变状态，才触发回调。

要达到这个效果，必须使用异步。

**6. then() 实现细节之闭包**

一个 promise 实例，可能会被多次调用。 

所以对于成功/失败的回调函数，我们需要在实例中，分别开辟一个堆内存来存储。

```
每一个 then 方法中传递的回调函数都要被执行/被存储
异步调用执行完成后，调用 resolve 或 reject 时，我们希望依次调用之前存储回调函数
对于一个 promise 实例，我们需要维护一个成功回调数组，一个失败回调数组。
```

**7. then 方法是可以被链式调用的，后面 then 方法的回调函数拿到的值是上一个 then 方法的回调函数的返回值**

then 方法的链式调用 --> 返回 Promise 对象
拿到上一个 then 方法的回调函数的结果

**8. 如果 then 返回的是一个 Promise 对象，要判断状态，决定调用 resolve 还是 reject**

**9.then 方法链式调用识别 Promise 对象自返回**

不能自己回调自己，会陷入死循环。

报出错误 Chaining cycle detected for promise #

**10. 捕获错误**
```
执行器当中的代码执行过程中发生错误时，状态变为错误状态
then 方法中的回调函数在执行过程中发生错误时，要在下一个 then 方法中报出错误
```

**11.将 then 使用方法**
```
promise
.then() // 返回 Promise 对象
.then(value => console.log(value)) // 函数接受回调
```
**12.Promise.all**

静态方法，参数为一个数组


**13.Promise.resolve**

静态方法，返回一个 promise 对象，参数为普通值或 promise 对象

**14.finally（返回最终结果）**

原型方法/实例方法，finally定义在原型对象上。

无论当前 promise 对象最终是成功还是失败，都会被调用，并且总是能得到最终的值


finally 方法的回调函数中可以 return 一个 promise 对象，此时应该等待这个 promise 对象执行完成之后，再执行下一个 then()

**从第12条开始，都不是 Promise/A+ 必须，只是原生Promise的扩展方法，还有其他方法不列举，有兴趣可以看手写ES5抄过来的，Promise的源码实现的原文地址。**


## 手写 Promise(ES6 / Promise/A+ 规范)

已通过 Promise/A+ 规范测试。

测试插件
>npm install promises-aplus-tests -D

运行测试
>npx promises-aplus-tests promise.js

```javascript
const PENDING = 'pending' // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败

class MyPromise {
  constructor (executor) {
    // 执行器当中的代码执行过程中发生错误时，状态变为错误状态
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
    
  }

  // 直接定义在最顶层的常量和方法，是实例属性，相当于定义在 构造器constructor() 里面的 this 上。
  // 状态定义成常量，为了复用和有提示
  status = PENDING
  
  value = undefined // 成功之后的值
  reason = undefined // 失败的原因

  onFulfilledCallbacks = [] // 成功回调，回调函数存到数组用于指向堆内存（闭包）
  onRejectedCallbacks  = [] // 失败回调，回调函数存到数组用于指向堆内存（闭包）

  resolve = value => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return
    // 将状态改为成功
    this.status = FULFILLED
    // 保存成功之后的值
    this.value = value
    // forEach遍历，存在则调用
    this.onFulfilledCallbacks.forEach(fn => fn());//PromiseA+ 2.2.6.1
  }

  reject = reason => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return
    // 将状态改为失败
    this.status = REJECTED
    // 保存失败的原因
    this.reason = reason
    // forEach遍历，存在则调用
    this.onRejectedCallbacks.forEach(fn => fn());//PromiseA+ 2.2.6.1
  }

  then (successCallback, failCallback) {
    // 如果传入的两个参数不是函数，则直接执行返回结果/报错
    successCallback = typeof successCallback === 'function' ? successCallback : value => value
    failCallback = typeof failCallback === 'function' ? failCallback : reason => { throw reason }

    // 返回状态判断后的 Promise，只 new 一次，因此判断后使用异步获取到 promise
    const promise2 = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            // 后面 then 方法的回调函数拿到的值是上一个 then 方法的回调函数的返回值
            const x = successCallback(this.value)
            // 判断 x 的值是普通值还是 promise 对象
            // 如果是普通值，直接调用 resolve
            // 如果是 promise 对象，查看 promise 对象返回的结果
            // 再根据 promise 对象返回的结果，决定调用 resolve 还是 reject

            // 使用异步代码，获取到 promise2
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            // 后面 then 方法的回调函数拿到的值是上一个 then 方法的回调函数的返回值
            const x = failCallback(this.reason)
            // 判断 x 的值是普通值还是 promise 对象
            // 如果是普通值，直接调用 resolve
            // 如果是 promise 对象，查看 promise 对象返回的结果
            // 再根据 promise 对象返回的结果，决定调用 resolve 还是 reject
            
            // 使用异步代码，获取到 promise2
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else {
        // 等待
        // 将成功回调和失败回调存储起来
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              // 后面 then 方法的回调函数拿到的值是上一个 then 方法的回调函数的返回值
              const x = successCallback(this.value)
              // 判断 x 的值是普通值还是 promise 对象
              // 如果是普通值，直接调用 resolve
              // 如果是 promise 对象，查看 promise 对象返回的结果
              // 再根据 promise 对象返回的结果，决定调用 resolve 还是 reject
  
              // 使用异步代码，获取到 promise2
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              // 后面 then 方法的回调函数拿到的值是上一个 then 方法的回调函数的返回值
              const x = failCallback(this.reason)
              // 判断 x 的值是普通值还是 promise 对象
              // 如果是普通值，直接调用 resolve
              // 如果是 promise 对象，查看 promise 对象返回的结果
              // 再根据 promise 对象返回的结果，决定调用 resolve 还是 reject
  
              // 使用异步代码，获取到 promise2
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    
    return promise2
  }

  finally (callback) {
    // 无论当前 promise 对象最终是成功还是失败，都会被调用
    // 总是能得到最终的值
    // finally 方法的回调函数中可以 return 一个 promise 对象，此时应该等待这个 promise 对象执行完成之后，再执行下一个 then
    return this.then(value => {
      return MyPromise.resolve(callback()).then(() => value)
    }, reason => {
      return MyPromise.resolve(callback()).then(() => {throw reason})
    })
  }

  catch (failCallback) {
    return this.then(undefined, failCallback)
  }

  static all (array) {
    const result = []
    let index = 0
    return new MyPromise((resolve, reject) => {
      const addData = (key, value) => {
        result[key] = value
        index++
        if (index === array.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (current instanceof MyPromise) {
          // promise 对象
          current.then(value => addData(i, value), reason => reject(reason))
        } else {
          // 普通值
        }
      }
      resolve()
    })
  }

  // 静态方法可以与非静态方法重名，静态方法指向类，实例上无法调用。
  static resolve (value) {
    // 判断参数是否为一个 promise
    // 如果是，直接返回这个 promise 对象
    // 如果不是，把值包裹起来，返回一个 promise 对象
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }
   // 测试 promise 需要 deferred
   static deferred () {
    let dfd = {};
    dfd.promise = new MyPromise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
}

const resolvePromise = (promise2, x, resolve, reject) => {
    //PromiseA+ 2.3.1 不能自己返回自己，死循环
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x && typeof x === 'object' || typeof x === 'function') {
    let used; //PromiseA+2.3.3.3.3 只能调用一次
    try {
      let then = x.then;
      if (typeof then === 'function') {
        //PromiseA+2.3.3
        then.call(x, (y) => {
          //PromiseA+2.3.3.1
          if (used) return;
          used = true;
          resolvePromise(promise2, y, resolve, reject);
        }, (r) => {
          //PromiseA+2.3.3.2
          if (used) return;
          used = true;
          reject(r);
        });
      } else {
        //PromiseA+2.3.3.4
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (e) {
        //PromiseA+ 2.3.3.2
        if (used) return;
        used = true;
        reject(e);
    }
  } else {
    //PromiseA+ 2.3.3.4
    resolve(x);
  }
}

module.exports = MyPromise
————————————————
```

## 手写 Promise(ES5 / Promise/A+ 规范)

代码来源：[Promise的源码实现（完美符合Promise/A+规范） - 前端进阶 - SegmentFault 思否](https://segmentfault.com/a/1190000018428848?utm_source=tag-newest)

```javascript
/**
 * 1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行
 * 2. executor 接受两个参数，分别是 resolve 和 reject
 * 3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled
 * 4. promise 的状态一旦确认，就不会再改变
 * 5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 
 *      和 promise 失败的回调 onRejected
 * 6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。
 *      如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。
 *      如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)
 * 7. then 的参数 onFulfilled 和 onRejected 可以缺省
 * 8. promise 可以then多次，promise 的then 方法返回一个 promise
 * 9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)
 * 10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)
 * 11.如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，
 *   就走下一个then的成功，如果失败，就走下一个then的失败
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function MyPromise(executor) {
    let self = this;
    self.status = PENDING;
    self.onFulfilled = [];//成功的回调
    self.onRejected = []; //失败的回调
    //PromiseA+ 2.1
    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilled.forEach(fn => fn());//PromiseA+ 2.2.6.1
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED;
            self.reason = reason;
            self.onRejected.forEach(fn => fn());//PromiseA+ 2.2.6.2
        }
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    //PromiseA+ 2.2.1 / PromiseA+ 2.2.5 / PromiseA+ 2.2.7.3 / PromiseA+ 2.2.7.4
    // 如果是函数，返回函数本身，否则返回值
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    // 如果是函数，返回函数本身，否则返回报错
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let self = this;
    //PromiseA+ 2.2.7
    let promise2 = new MyPromise((resolve, reject) => {
        if (self.status === FULFILLED) {
            //PromiseA+ 2.2.2
            //PromiseA+ 2.2.4 --- setTimeout
            setTimeout(() => {
                try {
                    //PromiseA+ 2.2.7.1
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    //PromiseA+ 2.2.7.2
                    reject(e);
                }
            });
        } else if (self.status === REJECTED) {
            //PromiseA+ 2.2.3
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        } else if (self.status === PENDING) {
            self.onFulfilled.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            self.onRejected.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
    let self = this;
    //PromiseA+ 2.3.1
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used; //PromiseA+2.3.3.3.3 只能调用一次
        try {
            let then = x.then;
            if (typeof then === 'function') {
                //PromiseA+2.3.3
                then.call(x, (y) => {
                    //PromiseA+2.3.3.1
                    if (used) return;
                    used = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                    //PromiseA+2.3.3.2
                    if (used) return;
                    used = true;
                    reject(r);
                });

            }else{
                //PromiseA+2.3.3.4
                if (used) return;
                used = true;
                resolve(x);
            }
        } catch (e) {
            //PromiseA+ 2.3.3.2
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        //PromiseA+ 2.3.3.4
        resolve(x);
    }
}

// 测试 promise 需要 defer api
MyPromise.deferred = function () {
    let dfd = {};
    dfd.promise = new MyPromise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}

module.exports = MyPromise;
```