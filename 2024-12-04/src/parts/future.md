---
layout: statement
---

<div>
  <h1 class="!text-4xl">Но так ли все идеально ?</h1>
</div>

---
layout: center
dragPos: 
  a-1: 386,162,9,102,47
  a-2: 490,175,9,102,0
  a-3: 595,161,9,102,-47
---

<TechnologyCard 
  title="Vite" 
  icon="/base/vite.png" 
  iconClass="h-12"
  class="!w-[210px] translate-y--30 !h-fit" 
  :disabled="$clicks >= 1" 
/>

<div flex="~ gap-30 items-center" class="translate-y-10">
  <div class="flex flex-col" relative>
    <TechnologyCard 
      title="esbuild" 
      color="yellow" 
      :disabled="$clicks >= 3"
      icon="/base/esbuild.png" 
      iconClass="h-9"
      class="!w-fit" 
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
      class="!w-fit" 
    />
    <ul v-click="4" absolute mt-18 text-sm whitespace-nowrap>
      <li>Медленная скорость сборки <br /> по сравнению с нативной</li>
    </ul>
  </div>
  <div class="flex flex-col" relative>
    <TechnologyCard 
      title="SWC" 
      color="orange"
      icon="/base/swc.png" 
      iconClass="h-5"
      class="!w-fit" 
      :disabled="$clicks >= 1 && $clicks < 5"
    />
    <ul v-click="6" absolute mt-18 text-sm whitespace-nowrap>
      <li>Большой размер бинарника</li>
    </ul>
  </div>
</div>

<div v-drag="'a-1'">
  <SharedArrow inert x1="435" y1="314" x2="435" y2="114" stroke="dashed" :color="$clicks >=3 ? '#2b2b2b' : '#fde047'" />
</div>

<div v-drag="'a-2'">
  <SharedArrow inert x1="435" y1="252" x2="435" y2="114" stroke="dashed" :color="($clicks >= 1 && $clicks < 3) || $clicks > 4 ? '#2b2b2b' : '#fca5a5'" />
</div>

<div v-drag="'a-3'">
  <SharedArrow inert x1="435" y1="314" x2="435" y2="114" stroke="dashed" :color="$clicks >= 1 && $clicks < 5 ? '#2b2b2b' : '#fdba74'" />
</div>


---
layout: center
---

<AnimationHeading :index="0" words="Скорость ?" />
<AnimationHeading v-click :index="1" words="Нужен один бандлер" />

---
layout: center
---

<div flex="~ items-center justify-center gap-6">
  <img src="/base/rolldown.png" h-16 />
  <h1 class="!text-5xl mt-4">Rolldown</h1>
</div>


---
layout: center
dragPos:
  a-1: 488,154,9,102,0
  a-2: 488,307,9,102,0
---

<div class="flex flex-col gap-30">
  <TechnologyCard 
    title="Vite" 
    icon="/base/vite.png"
    iconClass="h-12 my-1" 
    class="!w-[200px] !h-fit flex items-center justify-center pl-2" 
  />
  <TechnologyCard
    v-click="1" 
    title="Rolldown" 
    icon="/base/rolldown.png" 
    color="yellow" 
    iconClass="h-8 my-1"
    class="!w-[200px] flex items-center justify-center" 
  />
  <TechnologyCard 
    v-click="2"
    title="OXC" 
    icon="/base/oxc.svg" 
    color="blue" 
    class="!w-[200px] flex items-center justify-center pl-2" 
  />
</div>

<div v-drag="'a-1'" v-click="1" >
  <SharedArrow inert x1="435" y1="214" x2="435" y2="114" stroke="dashed" color="#fde047" />
</div>

<div v-drag="'a-2'" v-click="2" >
  <SharedArrow inert x1="435" y1="214" x2="435" y2="114" stroke="dashed" color="#60a5fa" />
</div>


<AlertCard v-click="3" color="yellow" class="!text-sm absolute top-48 left-20">Глубокий pre-bundling</AlertCard>
<AlertCard v-click="3" color="yellow" class="!text-sm absolute top-68 left-20">Продашен бандлинг</AlertCard>
<AlertCard v-click="3" color="yellow" class="!text-sm absolute top-88 left-20">Контроль чанков</AlertCard>

<AlertCard v-click="4" color="blue" class="!text-sm absolute top-28 right-20">Резолвер</AlertCard>
<AlertCard v-click="4" color="blue" class="!text-sm absolute top-48 right-20">Трансформация</AlertCard>
<AlertCard v-click="4" color="blue" class="!text-sm absolute top-68 right-20">Минификация</AlertCard>
<AlertCard v-click="4" color="blue" class="!text-sm absolute top-88 right-20">Линтер (50-100x быстрее)</AlertCard>
<AlertCard v-click="4" color="blue" class="!text-sm absolute top-108 right-20">Парсер (3x быстрее)</AlertCard>


---
layout: statement
---

<div transition transition-500
  :class="$clicks > 0 && 'translate-y--62 scale-60 op80'">
  <h1 class="!text-5xl">Сборка Vue Core</h1>
  <div transition transition-500 ease-in-out text-7 mb2 :class="$clicks > 0 ? '' : 'op0'">От Vite Conf 2024</div>
</div>

<div transition transition-500 text-xl font-semibold mt--10 :class="[$clicks > 0 ? '-mt-50' : '-mt-10']">
 <div v-click class="grid grid-cols-3 grid-flow-row auto-rows-max gap-20 text-xl font-semibold absolute">
  <div class="flex flex-col gap-14">
    <p>Vue 3.2</p>
    <p>Vue 3.5 (main ветка)</p>
    <p>Vue 3.5 (rolldown ветка)</p>
  </div>
  <div class="flex flex-col h-full justify-between">
    <span text-sm>Rollup + rollup-plugin-typescript2 + terser, tsc + api-extractor для dts bundling</span>
    <span text-sm>Rollup + rollup-plugin-esbuild + swc minify <br> tsc + rollup-plugin-dts для dts bundling</span>
    <span text-sm>Rolldown (built-in transform + minify) <br> oxc-transform + rollup-plugin-dts для dts bundling</span>
  </div>
    <div class="flex flex-col gap-14">
      <p class="text-orange-300">114с</p>
      <p class="text-yellow-300">8.52с</p>
      <p class="text-green-300">1.11с</p>
  </div>
</div>
</div>