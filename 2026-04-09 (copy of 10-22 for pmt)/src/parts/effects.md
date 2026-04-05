---
layout: center
topTitle: ReactiveEffect
topTitleClass: transition-none top-220px left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: ReactiveEffect
topTitleClass: top-160px left-1/2 translate-x--1/2
dragPos:
  dep1: 532,304,76,40
  dep2: 620,304,76,40
  effect: 490,310,210,40
---

```ts {*|3}
const dogs = ref(10)
const cats = ref(19)
const totalAnimals = computed(() => cats.value + dogs.value)
```

<div v-if="$clicks===1" v-drag="'dep1'">
  <div class="w-full" v-mark.underline.blue="{ at: '1'}" />
  <div font-hand c-blue text-center v-click="1">Dep</div>
</div>

<div v-if="$clicks===1" v-drag="'dep2'">
  <div class="w-full" v-mark.underline.blue="{ at: '1'}" />
  <div font-hand c-blue text-center v-click="1">Dep</div>
</div>

<div v-drag="'effect'">
  <div class="w-full" v-mark.underline.purple="{ at: '2'}" />
  <div font-hand c-purple text-center v-click="2">Effect</div>
</div>

---
layout: cover
topTitle: ReactiveEffect
topTitleClass: top-90px left-20 !text-[2.8rem]
class: ml12 mt10
---

<v-clicks>

- Сохраняет список отслеживаемых зависимостей
- Допускает принудительный запуск с помощью определенной функции
- Сигнализирует о потребности в перерасчете и перед этим помечается как "грязный"

</v-clicks>


<div v-click="4" flex="~ gap-10" pt16>
<AtomCard :withConfig="false" title="computed (до 3.5)" />
<AtomCard :withConfig="false" title="watch + watchEffect" />
<AtomCard :withConfig="false" title="render" />
<AtomCard :withConfig="false" title="effectScope" />
</div>

---
layout: center
topTitle: effectScope
topTitleClass: top-220px left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: effectScope
topTitleClass: top-120px left-1/2 translate-x--1/2
class: mt8
---

````md magic-move
```ts
const counter = ref(0)

const doubled = computed(() => counter.value * 2)

watch(doubled, () => console.log(doubled.value))

watchEffect(() => console.log('Count:', doubled.value))
```

```ts
const counter = ref(0)

const scope = effectScope()

scope.run(() => {
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count:', doubled.value))
})
```

```ts
const counter = ref(0)

const scope = effectScope()

scope.run(() => {
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count:', doubled.value))
})

scope.stop()
```
````

---
layout: center
topTitle: effectScope
topTitleClass: top-160px left-1/2 translate-x--1/2
---

````md magic-move
```ts
const scope = getCurrentScope() // Возвращает текущий активный скоуп эффекта
if (!scope) {
   throw new Error('err')
}
```

```ts
onScopeDispose(() => {
   // Вызовется когда скоуп эффекта будет остановлен
})
```
````