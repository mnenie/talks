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

<div grid="~ cols-2 gap-8" mt26>

<div :class="{'translate-y-14 transition duration-400': $clicks >= 4}">

<v-clicks>

- Работает на основе Proxy с Reflect
- Автоматически развернет все ref
- Вложенные объекты обернет так же в reactive
- Имеет реализации в shallowReactive / readonly / shallowReadonly

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

```ts
const obj = shallowReactive({
  a: {
    a_nested: 'a_nested'
  },
  b:{
    b_nested: 'b_nested'
  }
})
const title = computed(
  () => `${obj.a.a_nested} and ${obj.b.b_nested}`
)

console.log(title.value) // a_nested and b_nested

obj.a.a_nested = 'test'
console.log(title.value) // a_nested and b_nested
```

```ts
const obj = readonly({
  a: {
    a_nested: 'a_nested'
  },
  b:{
    b_nested: 'b_nested'
  }
})
const title = computed(
  () => `${obj.a.a_nested} and ${obj.b.b_nested}`
)

console.log(title.value) // from a_nested and b_nested

obj.a.a_nested = 'test' 
// 'a_nested' is a read-only property.

console.log(title.value)
```

````

</div>

</div>