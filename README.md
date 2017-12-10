# ts-exhaustive-check

[![npm version][version-image]][version-url]
[![MIT license][license-image]][license-url]

> Exhaustive check for typescript type never.

## Description

This package has a single function called `exhaustiveCheck` that just checks if a typescript type is of type `never`.

It will save you one line of code in the `default` case of `switch` statements if you have `strictNullChecks` enabled.

For more information see [discriminated-unions](https://basarat.gitbooks.io/typescript/content/docs/types/discriminated-unions.html) and [typescript issue 6155](https://github.com/Microsoft/TypeScript/issues/6155).

## Usage

```
yarn add ts-exhaustive-check
```

```typescript
import { exhaustiveCheck } from "ts-exhaustive-check";

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius * s.radius;
    default:
      return exhaustiveCheck(s);
  }
}
```

Without this package the `default` case in the `switch` statement would have been this:

```typescript
function area(s: Shape) {
  switch (s.kind) {
    ...
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}
```

[version-image]: https://img.shields.io/npm/v/ts-exhaustive-check.svg?style=flat
[version-url]: https://www.npmjs.com/package/ts-exhaustive-check
[license-image]: https://img.shields.io/github/license/dividab/ts-exhaustive-check.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
