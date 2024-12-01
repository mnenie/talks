---
layout: center
dragPos: 
  t: 584,110,40,32
  n: 680,60,40,32
  v-1: 200,370,40,32
  v-2: 280,390,40,32
  v-3: 380,400,40,32
  v-4: 460,430,40,32
---

<div flex="~ items-center">
  <img src="../shared/vite.png" h-38 />
  <h2 ml-18 mr-26>VS</h2>
  <img src="/base/webpack.webp" :class="[$clicks >= 1 ? 'translate-y-20' : '']" h-32 />
  <img v-drag="'t'" v-click="1" v-mark.red.linethrough="{at: 3, strokeWidth: 3, iterations: 4, roughness: 1.6, maxRandomnessOffset: 10, seed: 8 }" src="/base/turbopack.svg" class="!h-24 !w-fit" />

  <img v-drag="'n'" v-click="2" src="/base/next.png" class="!h-18 !w-18" />
  <img v-drag="'v-1'" v-click="2" src="/base/vue.webp" class="!h-18 !w-17" />
  <img v-drag="'v-2'" v-click="2" src="/base/react.png" class="!h-17 !w-[72px]" />
  <img v-drag="'v-3'" v-click="2" src="/base/svelte.png" class="!h-18 !w-14" />
  <p v-drag="'v-4'" v-click="2" text-sm whitespace-nowrap>и еще много других</p>
</div>

<!-- перейдем к сравнению Vite с его главным соперником на рынке Webpack. мы не будем сравнивать например с turbopack так как это решение оптимизировано для одно next а так же с закрытым исх кодом (к чему бы я присмотрелся настолько что остерегался его тащить в проекты)

а vite и webpack с открытым исх кодом используются для очень многих популярынх библиотек и фреймворков -->


---
layout: center
---


| **Измерение**                 | **Vite**             | **Webpack**           | **Сравнение**           |
|------------------------------ |----------------------|-----------------------|-------------------------|
| **Время холодного старта**    |     1.17c            |   9.5c                |     8,33с (87,7%)       |
| **Изменение кода в dev mode** |     0с               |    870мс              |     870мс (100%)        |
| **Время сборки (продакшен)**  |     1.5с             |    8.12c              |  почти в 4,5с быстрее   |
| **Размер финального бандла**  |        230кб         |     340кб             |     110 KB (47,3%)      |


<span text-sm>Mac M1 c 16GB ОП, 10 небольших компонентов, Vue3 (vue-router, pinia)</span>

<!-- итак я провел небольшое исследование и сравнил два небольших приложений с 10 небольшими компонентами на vite и webpack

исследование проводил на mac m1 с 16 гигами оперативной памяти и использовал vue 3, vue router и pinia 

рассказать про каждый пункт

-->

---
layout: cover
---

<div transition transition-500 flex="~ items-center justify-center"
  :class="$clicks > 0 && 'translate-y--50 scale-60 op80'">
  <h1 class="!text-5xl !mb-12">Почему такая разница ?</h1>
</div>

<div transition transition-500 text-xl font-semibold mt--10>
  <AlertCard v-click color="green" absolute top-58 left-30>esbuild</AlertCard>
  <AlertCard v-click color="green" absolute top-78 left-40>Rollup</AlertCard>
  <AlertCard v-click color="green" absolute top-98 left-20>HMR</AlertCard>

  <AlertCard v-click color="red" absolute top-58 right-30>Babel</AlertCard>
  <AlertCard v-click color="red" absolute top-78 right-40>Webpack</AlertCard>
  <AlertCard v-click color="red" absolute top-98 right-20>WDS</AlertCard>
</div>

<!-- почему же такая разница ?

esbuild + rollup + hmr против babel, webpack, wds

сказать что HMR не обновляет страницу а только заменяет модуль в то время как WDS перезагружает всю страницу целиком что делает процесс менее быстрым и более ресурсозатратным
 -->