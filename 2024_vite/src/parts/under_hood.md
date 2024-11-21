---
layout: center
dragPos: 
  a-1: 402,142,9,102,54
  a-2: 484,160,9,102,0
  a-3: 567,142,9,102,-54
---

<TechnologyCard title="Vite" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" class="!w-fit !h-fit translate-y--30" />

<div flex="~ gap-20 items-center" class="translate-y-0">
  <div class="flex flex-col" relative>
    <TechnologyCard v-click="1" title="esbuild" color="yellow" icon="https://avatars.githubusercontent.com/u/65141206?s=200&v=4" class="!w-fit !h-fit">
      <template #icon>
        <SharedArrow inert  color="#DADADA" />
      </template>
    </TechnologyCard>
  </div>
  <TechnologyCard v-click="2" title="Rollup" color="red" icon="https://seeklogo.com/images/R/rollup-js-logo-F3925E2546-seeklogo.com.png" class="!w-fit !h-fit" />
  <TechnologyCard v-click="3" title="SWC" color="orange" iconClass="h-5 my-2.5" icon="https://seeklogo.com/images/S/swc-logo-6CDDC10E4E-seeklogo.com.png" class="!w-fit !h-fit" />
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