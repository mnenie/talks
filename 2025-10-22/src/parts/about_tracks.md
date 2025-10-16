---
layout: center
---

<h1 text="4xl!">Но как устроен tracking ?</h1>

---
layout: center
---

<h1 text="4xl!">Как работает сам механизм под капотом ?</h1>

---
layout: center
---

<img src="/track-trigger.png" w-160 />

---
layout: center
topTitle: Dep
topTitleClass: top-220px left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: Dep
topTitleClass: top-160px left-1/2 translate-x--1/2
---

````md magic-move

```ts
interface Dep {
  trigger: () => void // уведомляет
  track: () => void // трэйкает (добавляет)
}

```

```ts
interface EventEmitter {
  emit: (payload: any) => void
  on: (listener: (payload: any) => void) => void
}
```

````

---
layout: cover
topTitle: Dep
topTitleClass: top-90px left-20 !text-[2.8rem]
class: ml12 mt10
---

<v-clicks>

- Используется под капотом у ref и computed
- Класс для управления зависимостями между реактивными данными и эффектами
- Использует связь между собой и активным эффектом
- Уведомляет об изменениях своих подписчиков 

</v-clicks>


<div v-click="4" flex="~ gap-10" pt10></div>

---
layout: cover
dragPos: 
    span: 420,190,200,40
---

<Stepper :steps="[{
  dep: 'prms-hidden',
  activeEffect: 'prms-hidden',
  arrowTo: 'prms-hidden',
  arrowFrom: 'prms-hidden'
}, {
  dep: '',
},{
  activeEffect: '',
}, {
  arrowTo: '',
  arrowFrom: ''
}]" v-slot="config">
  <div>
    <AtomCard :class="[config.dep, $clicks > 1 ? 'position-300_260': 'position-490_260']" title="Dep" />
  </div>
  <div>
    <AtomCard class="position-650_260" :class="config.activeEffect" title="active Effect" />
    <SvgArrow x1="346" y1="250" x2="566" y2="250" :class="config.arrowTo" pulse />
    <SvgArrow x1="566" y1="270" x2="346" y2="270" :class="config.arrowFrom" pulse />
  </div>
</Stepper>

<span v-click="4" v-drag="'span'" text="xl">Linked List</span>