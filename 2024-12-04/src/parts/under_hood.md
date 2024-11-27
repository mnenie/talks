---
layout: center
dragPos: 
  a-1: 402,142,9,102,54
  a-2: 484,160,9,102,0
  a-3: 567,142,9,102,-54
---

<TechnologyCard 
  title="Vite" 
  icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" 
  class="!w-fit !h-fit translate-y--30" 
/>

<div flex="~ gap-30 items-center" class="translate-y-0">
  <div class="flex flex-col" relative>
    <TechnologyCard 
      v-click="1" 
      title="esbuild" 
      color="yellow" 
      icon="https://avatars.githubusercontent.com/u/65141206?s=200&v=4" 
      class="!w-fit !h-fit" 
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
      icon="https://seeklogo.com/images/R/rollup-js-logo-F3925E2546-seeklogo.com.png" 
      class="!w-fit !h-fit" 
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
      icon="https://seeklogo.com/images/S/swc-logo-6CDDC10E4E-seeklogo.com.png" 
      iconClass="h-5 my-2.5"
      class="!w-fit !h-fit" 
    />
    <ul v-click="6" absolute mt-18 text-sm whitespace-nowrap>
      <li>React refresh</li>
      <li>Трансформация JSX/TSX</li>
    </ul>
  </div>
</div>

<div v-click="1" v-drag="'a-1'">
  <SharedArrow inert x1="435" y1="306" x2="435" y2="114" stroke="dashed" color="#fde047" />
</div>

<div v-click="2" v-drag="'a-2'">
  <SharedArrow inert x1="435" y1="230" x2="435" y2="114" stroke="dashed" color="#fca5a5" />
</div>

<div v-click="3" v-drag="'a-3'">
  <SharedArrow inert x1="435" y1="306" x2="435" y2="114" stroke="dashed" color="#fdba74" />
</div>