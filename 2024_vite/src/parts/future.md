---
layout: statement
---

<div>
  <h1 class="!text-4xl">Но так ли все идеально ?</h1>
</div>

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
  :disabled="$clicks >= 1" 
/>

<div flex="~ gap-30 items-center" class="translate-y-0">
  <div class="flex flex-col" relative>
    <TechnologyCard 
      title="esbuild" 
      color="yellow" 
      icon="https://avatars.githubusercontent.com/u/65141206?s=200&v=4"
      :disabled="$clicks >= 3"
      class="!w-fit !h-fit" 
    />
    <ul v-click="2" absolute mt-18 text-sm whitespace-nowrap>
      <li>Ограниченный контроль <br/> чанков и тришейкинга</li>
      <li>Ограниченная гибкость</li>
      <li>Нет React Fast Refresh</li>
    </ul>
  </div>
  <div class="flex flex-col" relative>
    <TechnologyCard 
      title="Rollup" 
      color="red" 
      icon="https://seeklogo.com/images/R/rollup-js-logo-F3925E2546-seeklogo.com.png" 
      :disabled="($clicks >= 1 && $clicks < 3) || $clicks > 4"
      class="!w-fit !h-fit" 
    />
    <ul v-click="4" absolute mt-18 text-sm whitespace-nowrap>
      <li>Медленная скорость сборки <br /> по сравнению с нативной</li>
    </ul>
  </div>
  <div class="flex flex-col" relative>
    <TechnologyCard 
      title="SWC" 
      color="orange"
      icon="https://seeklogo.com/images/S/swc-logo-6CDDC10E4E-seeklogo.com.png" 
      iconClass="h-5 my-2.5"
      :disabled="$clicks >= 1 && $clicks < 5"
      class="!w-fit !h-fit" 
    />
    <ul v-click="6" absolute mt-18 text-sm whitespace-nowrap>
      <li>Большой размер бинарника</li>
    </ul>
  </div>
</div>

<div v-drag="'a-1'">
  <SharedArrow inert x1="435" y1="306" x2="435" y2="114" stroke="dashed" :color="[$clicks >=3 ? '#2b2b2b' : '#fde047']" />
</div>

<div v-drag="'a-2'">
  <SharedArrow inert x1="435" y1="230" x2="435" y2="114" stroke="dashed" :color="[($clicks >= 1 && $clicks < 3) || $clicks > 4 ? '#2b2b2b' : '#fca5a5']" />
</div>

<div v-drag="'a-3'">
  <SharedArrow inert x1="435" y1="306" x2="435" y2="114" stroke="dashed" :color="[$clicks >= 1 && $clicks < 5 ? '#2b2b2b' : '#fdba74']" />
</div>


---
layout: center
---

<AnimationHeading :index="0" words="Быстрота ?" />
<AnimationHeading v-click :index="1" words="Нужен один бандлер" />

---
layout: center
---

<div flex="~ items-center justify-center gap-6">
  <img src="https://rolldown.rs/rolldown-round.svg" h-16 />
  <h1 class="!text-5xl mt-4">Rolldown</h1>
</div>
