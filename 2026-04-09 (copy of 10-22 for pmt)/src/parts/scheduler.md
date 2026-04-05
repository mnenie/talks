---
layout: center
---

<h1 text="4xl!">Как Vue понимает когда обновлять ?</h1>

---
layout: center
---

<h1 text="4xl!">Как работает планировщик ?</h1>

---
layout: cover
---

<Stepper :steps="[{
  opacityClass: 'opacity-0',
  scheduler: '',
  sync: 'prms-hidden',
  pre: 'prms-hidden',
  post: 'prms-hidden',
  dom: 'prms-hidden',
}, {
  opacityClass: 'opacity-20',
  scheduler: 'opacity-50 scale-50 blur-2',
  pre: '',
  post: '',
  sync: ''
}, {
  scheduler: 'prms-hidden',
  dom: '',
}
]" v-slot="config">
  <div>
    <AtomCard :class="[config.scheduler, $clicks > 1 ? 'position-500_180': 'position-490_260']" title="Scheduler" />
    <AtomCard :class="[config.sync, $clicks > 1 ? 'position-280_250 border-red/60 bg-red/40': 'position-300_110']" title="Sync" />
  </div>
  <div>
    <AtomCard :class="[config.pre, $clicks > 1 ? 'position-544_200': 'position-200_400']" title="Pre" />
    <AtomCard :class="[config.post, $clicks > 1 ? 'position-544_360': 'position-700_100']" title="Post" />
    <AtomCard class="position-680_276" :class="config.dom" title="DOM" color="purple" />
  </div>
</Stepper>

<div
    absolute w-100 h-100 left-100 top-14 border="~ blue/60 rounded-full"
    bg-blue:10 text-xl text-blue flex="~ items-start justify-center"
    p8
    v-click="2"
  >
    <div transition-all duration-400 text-center>
        <span transition-all duration-400>Scheduler</span>
    </div>
</div>

---
layout: cover
topTitle: Scheduler
topTitleClass: top-100px left-20
class: ml10
---

<v-clicks>

- Работает в асинхронном режиме по умолчанию (микротаски)
- Синхронизирует обновления
- Единственный способ взаимодействия - `nextTick()`

</v-clicks>