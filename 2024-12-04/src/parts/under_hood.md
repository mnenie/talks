---
layout: center
dragPos: 
  a-1: 386,148,9,102,47
  a-2: 490,162,9,102,0
  a-3: 595,148,9,102,-47
---

<TechnologyCard 
  title="Vite" 
  class="!w-[210px] translate-y--30 !h-fit" 
>
  <img src="../shared/vite.png" h-12 />
</TechnologyCard>

<div flex="~ gap-30 items-center" class="translate-y-10">
  <div class="flex flex-col" relative>
    <TechnologyCard 
      v-click="1" 
      title="esbuild" 
      color="yellow" 
      class="!w-fit" 
    >
      <img src="../shared/esbuild.png" h-9 />
    </TechnologyCard>
    <ul v-click="4" absolute mt-18 text-sm>
      <li>Pre-bundling</li>
      <li>Трансформация</li>
      <li>Минификация</li>
    </ul>
  </div>
  <div class="flex flex-col" relative>
    <TechnologyCard 
      v-click="2" 
      title="Rollup" 
      color="red" 
      class="!w-fit" 
    >
      <img src="../shared/rollup.png" h-9 />
    </TechnologyCard>
    <ul v-click="5" absolute mt-18 text-sm whitespace-nowrap>
      <li>Продашен бандлинг</li>
      <li>Контроль чанков</li>
      <li>Экосистема плагинов</li>
    </ul>
  </div>
  <div class="flex flex-col" relative>
    <TechnologyCard 
      v-click="3" 
      title="SWC" 
      color="orange" 
      class="!w-fit" 
    >
      <img src="../shared/swc.png" h-5 />
    </TechnologyCard>
    <ul v-click="6" absolute mt-18 text-sm whitespace-nowrap>
      <li>React refresh</li>
      <li>Трансформация JSX/TSX</li>
    </ul>
  </div>
</div>

<div v-click="1" v-drag="'a-1'">
  <SharedArrow inert x1="435" y1="344" x2="435" y2="114" stroke="dashed" color="#fde047" />
</div>

<div v-click="2" v-drag="'a-2'">
  <SharedArrow inert x1="435" y1="274" x2="435" y2="114" stroke="dashed" color="#fca5a5" />
</div>

<div v-click="3" v-drag="'a-3'">
  <SharedArrow inert x1="435" y1="344" x2="435" y2="114" stroke="dashed" color="#fdba74" />
</div>

<!-- давайте перейдем к подкапотным инструментам котрые использует vite

Esbuild - сборщик написанный на быстром go - отсюда его высокая скорость работы
Используется для пре-бандлинга зависимостей,
для быстрой трансформации кода, для минификации кода для разработки и продакшена.
помогает сделать HMR молниеносным

Rollup - основной инструмент для сборки в продакшен ! которая оптимизирована для браузеров.
позволяет гибко управлять чанками, 


SWC - ну и темная лошадка применяемая для react приложений 
для трансформации JSX/TSX и для React refresh обеспечивая мгновенное обновление компонентов во время разработки.

 -->