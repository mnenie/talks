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