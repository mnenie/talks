---
layout: cover
---

<div transition transition-500 text-xl font-semibold mt--10 w-full flex="~ justify-center">
  <h1 text="5xl!" v-click ma>ESM-only</h1>
  <div v-click absolute top-35 left-30>Новые пакеты</div>
  <div v-click absolute top-35 left-90>Пакеты для браузера</div>
  <div v-click absolute top-35 left-160>CLI-инструменты</div>
  <div v-click absolute top-80 left-85>Поддержка Node.js</div>
</div>

<!--
Современные библиотеки (vite, meta фреймворки) пишутся только на ESM
Полный отказ от require() и module.exports

Нативная поддержка в <script type="module">
Лучший tree-shaking и оптимизация загрузки

esbuild, rollup, tsup уже работают в ESM-режиме
Меньше преобразований - выше скорость

В LTS-версиях — полная готовность для продакшена -->

---
layout: cover
---

<h1 text="5xl!" flex="~ justify-center">
Node Modules Inspector
</h1>

<div v-click flex="~ col" gap4 items-center justify-center text-xl mt10>
  <div flex gap2 items-center>
    <div i-logos:npm-icon />
    <code>node-modules-inspector@0.6.8</code>
  </div>
  <div flex w-full items-center justify-center gap2>
    <img src="https://github.com/antfu.png" w-6 rounded-full />
    <a op80 href="https://github.com/antfu" target="_blank">antfu</a>
  </div>
</div>