---
layout: center
topTitle: Ref
topTitleClass: top-220px transition-none left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: Ref
topTitleClass: top-100px left-20
class: 'ml10'
---

<div grid="~ cols-2 gap-8" mt26>

<div>

<v-clicks>

- Использует под капотом get / set
- Если передали объект - оборачивает в reactive
- Если в ref передали объект с ref то будет развернут из-за работы reactive
- Быстрее чем reactive

</v-clicks>

</div>

<div>

````md magic-move {at:2}

```ts
class RefImpl {
  get value() {
    this.dep.track()
    return this._value
  },
  set value(v) {
    this._value = v
    if (hasChanged(this._value, v)) {
      this.dep.trigger()
    }
  }
}

```

```ts
const a = ref({ a: 1 })
console.log(a.value === reactive(a.value)) // true
```

```ts
const a = ref({
  b: ref('hello')
})
// будет доступно обращение через a.value.b
```

```ts
// get / set vs Proxy
```

````

</div>

</div>

<!--
первый на очереди ref - это буквально самый популярный примитив во Vue. За исключением конструктора с инициализацией Dep он определяет get / set для примтивных значений переданных в него (и тут подчернку для примитивных значений, для сложных структур и объектов есть другой механизм о котором мы узнаем позже, но сейчас можно сказать что под капотом он оборачивает условный объект в некую еще неизвестную нам сущность - reactive)-->

---
layout: center
topTitle: shallowRef
topTitleClass: top-220px left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: shallowRef
topTitleClass: top-100px left-1/2 translate-x--1/2
---

````md magic-move

```ts
class RefImpl {
  constructor(value, isShallow) {
    this.value = isShallow 
      ? value
      : toReactive(value)
  }
}
```

```ts
const a = shallowRef({ 
  nested: 1
})
const b = ref(2)
const sum = computed(() => a.value.nested + b.value)

console.log(sum.value) // 3
a.value.nested= 5
console.log(sum.value) // 3 (остается)
```

```ts
const a = shallowRef({ 
  nested: 1
})
const b = ref(2)
const sum = computed(() => a.value.nested + b.value)

console.log(sum.value) // 3
a.value = { nested: 5 }
console.log(sum.value) // 7
```

````
<!--
шэллоу или неглубокая реализация реактивности 
при передачи примитива ведет себя так же как и ref, но вот если передали объект то отслеживает только обращение к .value - внутреннее значение объекта хранится и раскрывается как есть, и не становится глубоко реактивным.-->

---
layout: center
topTitle: Reactive
topTitleClass: top-220px transition-none left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: Reactive
topTitleClass: top-100px left-20
class: 'ml10'
---

<div grid="~ cols-2 gap-8" mt20>

<div>

<v-clicks>

- Работает на основе Proxy с Reflect
- Автоматически развернет все ref
- Вложенные объекты обернет так же в reactive

</v-clicks>

</div>

<div>

````md magic-move {at:2}

```ts
new Proxy(_t, {
  get(target, key, receiver) { 
    // ... Reflect.get(...)
  },
  set(target, key, value, receiver) { 
    // ... Reflect.set(...)
  }
  // ...
})

```

```ts
const a = ref(1);
const b = ref('hello')

const obj = reactive({ a, b })

// Обращение идет через obj.a / obj.b
```

```ts
const obj = reactive({
  a: { 
    b: 1 
  },
})
console.log(isReactive(obj))
```

````

</div>

</div>

<!--самый главный примитив у Vue - он работает на основе Proxy с поддержкой Reflect для удобства
Работает только с объектами и тут важно вспомнить слайд про ref - то есть если мы передали в ref объект то на самом деле он вызовет под капотом toReactive утилиту и обернет в Proxy 
Автоматически развернет все ref.  Вложенные объекты обернет так же в reactive-->

---
layout: center
topTitle: shallowReactive
topTitleClass: top-220px transition-none left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: shallowReactive
topTitleClass: top-100px left-1/2 translate-x--1/2
---

<div mt10>

````md magic-move

```ts
const obj = shallowReactive({
  a: { a_nested: 'a_nested' },
  b:{ b_nested: 'b_nested' }
})
const title = computed(
  () => `${obj.a.a_nested} and ${obj.b.b_nested}`
)
console.log(title.value) // a_nested and b_nested

obj.a.a_nested = 'test'
console.log(title.value) // a_nested and b_nested
```

````

</div>


---
layout: center
topTitle: readonly
topTitleClass: top-220px left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: readonly
topTitleClass: top-100px left-1/2 translate-x--1/2
---

<div mt10>

````md magic-move

```ts
const obj = readonly({
  a: { a_nested: 'a_nested' },
  b:{ b_nested: 'b_nested' }
})
const title = computed(
  () => `${obj.a.a_nested} and ${obj.b.b_nested}`
)
console.log(title.value) // a_nested and b_nested

obj.a.a_nested = 'test' 
// 'a_nested' is a read-only property.

console.log(title.value)
```

````

</div>
<!--
ну и у reactive есть свои доп модификации такие как shallowReactive / readonly / shallowReadonly 
(shallowReactive - отслеживает изменения только с первого уровня вложенности)
readonly - не дает вам изменить значение-->


---
layout: center
topTitle: ReactiveFlags
topTitleClass: top-220px left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: ReactiveFlags
topTitleClass: top-100px left-1/2 translate-x--1/2
---

<div mt10>

```ts {2|3|3|4|4|5|5|6|6}
export enum ReactiveFlags {
  SKIP = '__v_skip',
  IS_REACTIVE = '__v_isReactive',
  IS_READONLY = '__v_isReadonly',
  IS_SHALLOW = '__v_isShallow',
  RAW = '__v_raw',
}
```

````md magic-move {at: 1}

```ts
import { ReactiveFlags } from 'vue'

obj[ReactiveFlags.SKIP] = true
```

```ts
import { markRaw } from 'vue'

markRaw(obj)
```

```ts
import { isReactive } from 'vue'

isReactive(data)
```

```ts
import { readonly } from 'vue'

readonly(data)
```

```ts
import { isReadonly, readonly } from 'vue'

readonly(data)
isReadonly(data)
```

```ts
import { shallowReactive, shallowReadonly } from 'vue'

shallowReactive(data)
shallowReadonly(data)
```

```ts
import { shallowReactive, shallowReadonly } from 'vue'

shallowReactive(data)
shallowReadonly(data)
```

```ts
import { ReactiveFlags } from 'vue'

const r = reactive(data)
console.log(r[ReactiveFlags.RAW] === data)
```

```ts
import { toRaw } from 'vue'

const r = reactive(data)
console.log(toRaw(r) === data)
```
````

</div>


---
layout: center
topTitle: Computed
topTitleClass: top-220px transition-none left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: Computed
topTitleClass: top-100px left-20
class: 'ml10'
---

<div grid="~ cols-2 gap-8" wfull mt26>

<div>

<v-clicks>

- Работает по pull механике
- Перерасчет только в момент вызова
- Может быть writable
- Использует возможности батчинга

</v-clicks>

</div>

<div>

````md magic-move {at:2}

```ts
class ComputedRefImpl<T> {
  get value() {}
  
  set value(nv) {}

  notify(): true | void {}
  
  private _value!: T
  readonly dep!: Dep
  public readonly [ReactiveFlags.IS_READONLY] = !setter
}
```

```ts
const a = ref(5)
const comp = computed(() => a.value * 10)

console.log(comp.value) // 50
a.value = 1
console.log(comp.value) // 10
a.value = 2

// нет подписчиков, никогда больше не будет перевычислен
```

```ts
interface WritableComputedRef<T, S = T> 
extends BaseComputedRef<T, S> {
  [WritableComputedRefSymbol]: true
}

const comp = computed({
  get() {
    // ...
  },
  set(newVal) {
    // ...
  }
})
```

```ts
const a = ref(5)
const comp = computed(() => a.value * 10)

console.log(comp.value) // 50
a.value = 1
console.log(comp.value) // 10
a.value = 2
a.value = 3
a.value = 4

console.log(comp.value) // 40
```

````

</div>

</div>

<!--
computed работает по принципу pull механики - это значит вычисляется только тогда когда обратиться к нему или какой то эффект зависит от данного computed а не тогда, когда зависимости внутри computed изменились

может быть writable если указать get / set 

он использует возможности батчинга 

и вот вопрос, что такое батчинг ? Как Vue понимает когда обновлять ? и как работает планировщик ?-->
