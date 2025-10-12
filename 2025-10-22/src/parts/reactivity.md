---
layout: cover
---

<div transition transition-500 :class="$clicks > 0 && 'translate-y--50 translate-x--20 left-1/2 scale-85 op80'">
  <h1 text="5xl!">Реактивность</h1>
</div>

<span v-if="$clicks <= 0" opacity-75>Свойство состояния системы автоматически реагировать на входящие изменения по заранее заданной последовательности.</span>

<Stepper :steps="[{
  irritant: 'prms-hidden',
  state: 'prms-hidden',
  subscribers: 'prms-hidden',
  effects: 'prms-hidden',
  scheduler: 'prms-hidden',
  arrowState: 'prms-hidden',
  arrowSubscribers: 'prms-hidden',
  arrowIrritant: 'prms-hidden',
  arrowSchedulerState: 'prms-hidden',
  arrowSchedulerEffects: 'prms-hidden',
}, {
  state: '',
},{
  subscribers: '',
  arrowState: ''
},
{
  effects: '',
  arrowSubscribers: ''
},
{
  irritant: 'rounded-full h-11 w-11',
  arrowIrritant: '',
  subscribers: 'border-red/60 bg-red/40',
  effects: 'border-red/60 bg-red/40'
},
{
  scheduler,
  subscribers: '',
  effects: '',
  arrowSchedulerState: '',
  arrowSchedulerEffects: ''
}]" v-slot="config">
  <div>
    <AtomCard :class="[config.state, $clicks > 1 ? 'position-400_220': 'position-490_260']" title="State" />
  </div>
  <div>
    <AtomCard class="position-600_220" :class="config.subscribers" title="Subscribers" />
    <Arrow x1="452" y1="220" x2="514" y2="220" :class="config.arrowState" />
  </div>
  <div>
    <AtomCard class="position-800_320" :class="config.effects" title="Effects" />
    <Arrow x1="682" y1="226" x2="760" y2="282" :class="config.arrowSubscribers" />
  </div>
  <div>
    <AtomCard class="position-200_220" :class="config.irritant" color="purple" />
    <Arrow x1="236" y1="220" x2="340" y2="220" :class="config.arrowIrritant" />
  </div>
  <div>
    <AtomCard class="position-510_420" :class="config.scheduler" title="Scheduler" color="purple" />
    <Arrow x1="500" y1="384" x2="420" y2="260" :class="config.arrowSchedulerState" />
    <Arrow x1="736" y1="330" x2="590" y2="400" :class="config.arrowSchedulerEffects" />
  </div>
</Stepper>

---
layout: cover
dragPos:
  vue: 200,230,100,100
clicks: 4
---

<svg v-drag="'vue'" absolute top-0 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.32 170.02">
  <path fill="#42b883" d="M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"/>
  <path fill="#35495e" d="M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"/>
</svg>

<div absolute left-120 top-16>
  <div
    absolute left-0 border="~ blue rounded-full"
    transition-all duration-400
    bg-blue:20 text-xl text-blue flex="~ items-center justify-center"
    :class="[$clicks>0 ? 'w60 h60 top-24' : 'top-28 w50 h50']"
    v-click="0"
  >
    <div :class="{pr10: $clicks>1}" transition-all duration-400 text-center>
        <span>@vue/reactivity</span>
        <div v-if="$clicks>0" flex="~ col gap items-start" w-fit text-white text-lg ml1>
            <span>ref</span>
            <span :class="{opacity50: $clicks>1}">computed</span>
            <span>reactive</span>
            <span :class="{opacity50: $clicks>1}">watchers</span>
        </div>
    </div>
  </div>
  <div
    absolute w-60 h-60 left-49 top-10 border="~ purple rounded-full"
    bg-purple:20 text-xl text-purple flex="~ items-center justify-center"
    v-click="2"
  >
    <div pl6 transition-all duration-400 text-center>
        <span :class="{pb10: $clicks>2}" transition-all duration-400>@vue/runtime-core</span>
        <div v-if="$clicks>2" flex="~ col gap items-start" w-fit text-white text-lg ml1>
            <span>scheduler</span>
            <span>nextTick</span>
            <span>watchers</span>
            ...
        </div>
    </div>
  </div>
</div>