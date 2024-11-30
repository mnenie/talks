---
layout: center
dragPos: 
  a-1: 386,148,9,102,47
  a-2: 490,162,9,102,0
  a-3: 595,148,9,102,-47
---

<TechnologyCard 
  title="Vite" 
  icon="../shared/vite.png" 
  iconClass="h-12"
  class="!w-[210px] translate-y--30 !h-fit" 
/>

<div flex="~ gap-30 items-center" class="translate-y-10">
  <div class="flex flex-col" relative>
    <TechnologyCard 
      v-click="1" 
      title="esbuild" 
      color="yellow" 
      icon="../shared/esbuild.png" 
      iconClass="h-9"
      class="!w-fit" 
    />
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
      icon="../shared/rollup.png" 
      class="!w-fit" 
    />
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
      icon="../shared/swc.png" 
      iconClass="h-5"
      class="!w-fit" 
    />
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