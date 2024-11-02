---
title: 条件类型 Conditional type
author: 关阳尧晨
date: 2023-03-18
---
[home](/)

[[toc]]

## 对象类型 (Object types)

在 JavaScript 中，最基本的将数据成组和分发的方式就是通过对象。在 TypeScript 中，我们通过对象类型（object types）来描述对象。

对象类型可以是匿名的：

``` ts
function green(person: { name: string; age: number }){
    return "Hello "+ person.name
}
```

也可以使用接口进行定义:

``` ts
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return "Hello " + person.name
}
```

或者通过类型别名:

``` ts
type Person = {
    name: string;
    age: number;
};

function greet(person: Person) {
    return "Hello " + person.name
}
```

## 属性修饰符 (Property Modifiers)

对象类型中的每个属性可以说明它的类型, 属性是否可选, 属性是否可读等信息.

### 可选属性 (Optional Properties)

我们可以在属性名后面加一个 ? 标记表示这个属性是可选的:

```ts
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function painShape(opts: PaintOptions) {
    // ...
}

const shape = getShape();
painShape({ shape });
painShape({ shape, xPos: 100 });
