---
layout: center
dragPos:
  s-1: 460,100,40,32
  s-2: 610,165,120,32
  s-3: 600,275,71,32
  s-4: 531,374,133,32
  s-5: 395,374,92,32
  s-6: 300,275,92,32
  s-7: 200,165,92,32
slide: slide-purple
---

<img src="../shared/vite.png" class="h-30 mb-14" />

<div>
  <div v-click="1" v-drag="'s-1'" class="text-2xl !w-fit" >Bundle</div>
  <div v-click="2" v-drag="'s-2'" class="text-2xl !w-fit flex" >Tree Shaking</div>
  <div v-click="3" v-drag="'s-3'" class="text-2xl !w-fit" >Rollup</div>
  <div v-click="4" v-drag="'s-4'" class="text-2xl !w-fit" >esbuild</div>
  <div v-click="5" v-drag="'s-5'" class="text-2xl !w-fit" >HMR</div>
  <div v-click="6" v-drag="'s-6'" class="text-2xl !w-fit" >ESM</div>
  <div v-click="7" v-drag="'s-7'" class="text-2xl !w-fit" >Chunk splitting</div>
</div>

<!-- итак

у нас есть vite и вокруг него существуют некие концепции и инструменты

-->


---
class: ml10
---

<h1>Разберемся с некоторыми определениями</h1>

Bundle, Tree Shaking, HMR, Chunk splitting

<v-clicks at="1" class="[&>li]:mb-5" mt15>

- Bundle(бандл) - это объединение исходных файлов приложения в несколько модулей, которые выполняются браузером
- Tree Shaking - удаление неиспользуемого кода с финального бандла(сборки)
- HMR(горячие модули) - позволяет обновлять модули в процессе работы приложения без полной перезагрузки страницы
- Chunk splitting(разделение на чанки) - это процесс разделения вашего приложения на независимые куски (чанки), которые могут быть загружены по мере необходимости
</v-clicks>

---
class: ml10
---

<h1>Bundle</h1>

<div v-click="1" mt-8>

````md magic-move {lines: true, at: 2}
```ts {all|5|6|7-17|11-13|14|15}

// vite.config.ts
// базовый пример vite.config.ts

export default defineConfig({
  build: {
    outDir: 'mirea', 
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      output: {
        format: 'es', 
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: 'entries/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
        sourcemap: true, 
        manualChunks: {},
      }
    },
  }
})
```

```ts {all|7-12}

// vite.config.ts
// базовый пример vite.config.ts

export default defineConfig({
  build: {
    outDir: 'mirea', 
     watch: {
      include: 'shared/**',
      chokidar: {
        // условно работа с пулингом
      }
    }
  }
})
```
````

</div>

<!-- вернемся к бандлу

итак давайте подробнее рассмотрим как собирается наше приложение с помощью Vite и какие настройки можно использовать для управления сборкой.

файл vite.config.ts позволяет настроить процесс сборки приложения. 
тут мы можем указать
папку для сборки - параметр outDir указывает куда сохраняются файлы. Например, здесь используется outDir: 'mirea'. по умолчанию эта папка называется dist -  это результат сборки. сюда попадают все файлы необходимые для запуска приложения в проде. это оптимизированный код готовый к работе в браузере.

дальше идем к rollupOptions и что такое rollup мы узнаем чють позже важно сейчас лишь знать что через него мы можем настроить 

1. Формат выходных файлов
2. Имена файлов c неким хэшем (для кэширования в браузере) - чанков, ассетов и точек входа
3. Sourcemap для удобной отладки (она используется в основном для того чтобы в браузере вы видели не минифицированне файлы а то как они написаны у вас)
4. ну и так же мы можем управлять чанками через manualChunks (разбиение и объединение)

так же стоит отметить что есть возможность отслеживать изменения в коде и даже может быть в конкретых директориях и пересобирать проект с помощью watch 

(chokidar используется в основном для пулинга когда используются условные контейнеры он лезет вглубь и чререз определенный заданный интервал обновляет сборку)

-->


---
class: ml10
---

<h1>Tree Shaking</h1>

<div v-click="1" mt-8>

````md magic-move {lines: true, at: 2}
```ts
// example.js

export function foo(a, b) {
  return a * b;
}

export function unused(a, b) {
  return a - b;
}
```

```ts
// example.js

export function foo(a, b) {
  return a * b;
}

export function unused(a, b) {
  return a - b;
}
```

```ts
// example.js

export function foo(a, b) {
  return a * b;
}

export function unused(a, b) {
  console.log('тригер')
  return a - b;
}
```
````

````md magic-move {lines: true, at: 2}
```ts
// main.js
import { foo } from './example.js'

foo(1, 2)
```

```ts
// main.js
import { foo } from './example.js'

foo(1, 2)

// unused не попадет в финальный бандл, даже если бы мы ее импортировали
```

```ts
// main.js
import { foo } from './example.js'

foo(1, 2)

// unused ! попадет в финальный бандл
```
````

</div>

<p v-click="3">НО ! Внимательно с <span v-mark.orange="4">сайд-эффектами</span></p>

<!-- Tree shaking еще один довольно интересный инструмент который используется у vite под каптом он буквально автоматически удаляет неиспользуемый код из финального бандла дабы не раздувать его до необъятных размеров -->

---
class: ml10
---

<h1>Chunk splitting</h1>

<div v-click="1" mt-8>

````md magic-move {lines: true, at: 2}
```ts
// в конексте Vue
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
```

```ts
// в конексте Vue
 const routes = [{
    path: '/',
    name: 'Mirea',
    component: () => import('../views/Mirea.vue')
  }]
```
````

```ts
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      output: {
        // ...
        manualChunks: {
          // настройка через manualChunks
        },
      }
    },
  }
})
```
</div>

<!-- рассказать про ленивая загрузку компонентов во вью и про маршруты

если вы хотите еще больше контролировать разделение чанков вы можете использовать параметр manualChunks в rollupOptions например общие библиотки выделить в отдельные чанки 

 -->


