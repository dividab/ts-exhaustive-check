# ts-exhaustive-check

[![npm version][version-image]][version-url]
[![MIT license][license-image]][license-url]

> Exhaustive check for typescript type never.

## Usage

This package has a single function that just checks if a typescript type is of type `never`.

It can be used like this:

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

For more information see [discriminated-unions](https://basarat.gitbooks.io/typescript/content/docs/types/discriminated-unions.html) and [typescript issue 6155](https://github.com/Microsoft/TypeScript/issues/6155).

[version-image]: https://img.shields.io/npm/v/ts-exhaustive-check.svg?style=flat
[version-url]: https://www.npmjs.com/package/ts-exhaustive-check
[license-image]: https://img.shields.io/github/license/jonaskello/ts-exhaustive-check.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
