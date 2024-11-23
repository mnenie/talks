---
layout: cover
dragPos: 
  t: 584,110,40,32
  n: 680,60,40,32
  v-1: 200,370,40,32
  v-2: 280,390,40,32
  v-3: 380,400,40,32
  v-4: 460,430,40,32
---

<div flex="~ items-center justify-center">
  <img src="https://vitejs.ru/logo-with-shadow.png" h-38 />
  <h2 ml-18 mr-26>VS</h2>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/webpack-icon.png" :class="[$clicks >= 1 ? 'translate-y-20' : '']" h-32 />
  <img v-drag="'t'" v-click="1" v-mark.red.linethrough="{at: 3, strokeWidth: 3, iterations: 4, roughness: 1.6, maxRandomnessOffset: 10, seed: 8 }" src="https://turbo.build/images/docs/pack/turbopack-hero-logo-dark.svg" class="!h-24 !w-fit" />

  <img v-drag="'n'" v-click="2" src="https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png" class="!h-18 !w-fit" />
  <img v-drag="'v-1'" v-click="2" src="https://cdn.iconscout.com/icon/free/png-256/free-vue-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-5-pack-icons-282497.png?f=webp&w=256" class="!h-16 !w-fit" />
  <img v-drag="'v-2'" v-click="2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" class="!h-16 !w-fit" />
  <img v-drag="'v-3'" v-click="2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350" class="!h-16 !w-fit" />
  <p v-drag="'v-4'" v-click="2" text-sm whitespace-nowrap>и еще много других</p>
</div>


---
layout: center
---


| **Измерение**                 | **Vite**             | **Webpack**           | **Сравнение**           |
|------------------------------ |----------------------|-----------------------|-------------------------|
| **Время холодного старта**    |     1.17c            |   9.5c                |     8,33с (87,7%)       |
| **Изменение кода в dev mode** |     0с               |    870мс              |     870мс (100%)        |
| **Время сборки (продакшен)**  |     1.5с             |    8.12c              |  почти в 4,5с быстрее   |
| **Размер финального бандла**  |        230кб         |     340кб             |     110 KB (47,3%)      |


<span text-sm>Mac M1 16CPU, 10 небольших компонентов, Vue3 (vue-router, pinia)</span>

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