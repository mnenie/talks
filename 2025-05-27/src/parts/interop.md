---
grow: right
class: mt2
---

<h2>Interop</h2>

<span>Совместимость и <span v-mark.gray.linethrough="{at: 5, strokeWidth: 3, iterations: 4, roughness: 1.6, maxRandomnessOffset: 10, seed: 8 }" >проблемы, с которыми вы можете столкнуться</span> <span v-click="5" v-mark.green="{ at: 5, }">постепенное решение</span></span>

<div mt-10>

````md magic-move
```ts{all|3-5|9-10}
// a.cjs 

module.exports = function cjsf(a, b) {
  return a + b;
}

// b.mjs

import cjsf from './a.cjs';
console.log(cjsf(2, 3));
```
```ts{all|4}
// a.cjs 

(async () => {
    // асинхронное заражение
  const mod = await import('./b.mjs'); 
  console.log(mod.mjsf(5, 5));
})();

// b.mjs

export default function mjsf(a, b) {
  return a + b;
}
```
```ts{all|12}
// a.cjs 

const mjsf = require('./b.mjs');
console.log(mjsf(2, 3));

// b.mjs

function mjsf(a, b) {
  return a + b;
}

export { mjsf as 'module.exports' }; // 22+
```
````
</div>

<!-- в первом случае мы полуаем потерю tree shaking и невозможность именнованных экспортов

"разношерстность" - cjs синхронный и при esm и его импорте в cjs вся цепочка становится асинхронной (заражение) из за сущности esm модулей и их работы

для того чтобы у нас легко портирвать функции и модули в cjs код в node 22 была выпущена возможность явного экспорта и затем ьесшовного использования в cjs -->
