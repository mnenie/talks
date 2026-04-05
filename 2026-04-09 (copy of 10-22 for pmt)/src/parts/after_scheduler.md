---
layout: center
topTitle: watch
topTitleClass: top-220px transition-none left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: watch
topTitleClass: top-100px left-20
class: 'ml10'
clicks: 8
---

<div grid="~ cols-2 gap-8" mt26>

<div>

<ul>
<li>
Запускает колбэк всякий раз, когда изменяется часть реактивного состояния
</li>
<li v-click>
Использует возможности планировщика
</li>
<li v-click>
Может использоват разные опции поведения
</li>
<li v-click="6">
Может использоваться в 3х режимах
</li>
</ul>

</div>

<div>

````md magic-move {at:1}

```ts
watch(() => a.value, (value, oldValue) => {
  console.log(value)
})
```

```ts
const a = ref(10)

watch(a, (value) => {
  console.log(value)
})
a.value++
a.value++
a.value++

// Результат будет один: 13

```

```ts
watch(() => a.value, (value) => {
  console.log(value)
}, {deep: true})

```

```ts
const a = deepObject();

watch(a, (value) => {
  console.log(value)
}, {deep: false})

```

```ts
watch(() => a.value, (value) => {
  console.log(value)
}, {once: true})

```

```ts
watch(() => a.value, (value) => {
  console.log(value)
}, {immediate: true})

```

```ts
watch(a, (value) => {
  console.log(value)
}, {flush: 'sync'})

```

```ts
watch(a, (value) => {
  console.log(value)
}, {flush: 'pre'}) // по умолчанию

```

```ts
watch(a, (value) => {
  console.log(value)
}, {flush: 'post'})

```

````

</div>

</div>

---
layout: center
topTitle: watchEffect
topTitleClass: top-220px left-1/2 text-5xl translate-x--1/2
---

---
layout: center
topTitle: watchEffect
topTitleClass: top-100px left-20
class: 'ml10'
clicks: 8
dragPos:
  dep1: 840,274,76,40
  dep2: 680,290,76,40
---

<div grid="~ cols-2 gap-8" mt26>

<div v-if="$clicks===2" v-drag="'dep1'">
  <div class="w-full" v-mark.underline.blue="{ at: '1'}" />
  <div font-hand c-blue text-center v-click="1">Dep</div>
</div>

<div v-if="$clicks===2" v-drag="'dep2'">
  <div class="w-full" v-mark.underline.blue="{ at: '1'}" />
  <div font-hand c-blue text-center v-click="1">Dep</div>
</div>

<div>

<ul>
<li>
Автоматически отслеживает реактивные зависимости
</li>
<li v-click="3">
Так же как и watch использует возможности батчинга
</li>
<li v-click="4">
Управляется планировщиком
</li>
</ul>

</div>

<div>

````md magic-move {at:1}

```ts
watchEffect(() => {
  console.log(a.value)
})
```

```ts
watchEffect(() => {
  const { ...user, loading } = fetchUser(id.value)
  console.log(loading.value)
})

```

```ts
watchEffect(() => {
  const { ...user, loading } = fetchUser(id.value)
  console.log(loading.value)
})

```

```ts
const a = ref(10)

watchEffect( () => {
  console.log(a.value)
})
a.value++
a.value++
a.value++

// Результат будет один: 13

```

```ts
watchSyncEffect(() => {
  console.log(a.value)
})

```

```ts
watchEffect(() => {
  console.log(a.value)
}, {flush: 'sync'})

```

```ts
watchPostEffect(() => {
  console.log(a.value)
})

```

```ts
watchEffect(() => {
  console.log(a.value)
}, {flush: 'post'})

```

````

</div>

</div>