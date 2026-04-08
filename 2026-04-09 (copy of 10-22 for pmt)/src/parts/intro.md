---
layout: cover
dragPos:
  vue: 440,230,80,80
---

<svg v-drag="'vue'" absolute top-0 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.32 170.02">
  <path fill="#42b883" d="M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"/>
  <path fill="#35495e" d="M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"/>
</svg>

<Stepper :steps="[{
  opacityClass: 'opacity-0',
  ref: 'prms-hidden',
  computed: 'prms-hidden',
  reactive: 'prms-hidden',
  props: 'prms-hidden',
  slots: 'prms-hidden',
  shallowRef: 'prms-hidden',
  shallowReactive: 'prms-hidden',
  readonly: 'prms-hidden',
  watch: 'prms-hidden',
  watchEffect: 'prms-hidden',
  vModel: 'prms-hidden',
  effectScope: 'prms-hidden',
  customRef: 'prms-hidden',
  effect: 'prms-hidden',
  dep: 'prms-hidden',
}, {
  ref: '',
  computed: '',
  reactive: '',
  watch: '',
  watchEffect: ''
}, {
  opacityClass: 'opacity-20',
  ref: 'opacity-50 scale-50 blur-2',
  computed: 'opacity-50 scale-50 blur-2',
  reactive: 'opacity-50 scale-50 blur-2',
  watch: 'opacity-50 scale-50 blur-2',
  watchEffect: 'opacity-50 scale-50 blur-2',
  props: '',
  slots: '',
  vModel: '',
}, {
  opacityClass: 'opacity-30',
  ref: 'opacity-25 scale-25 blur-4',
  computed: 'opacity-25 scale-25 blur-4',
  reactive: 'opacity-25 scale-25 blur-4',
  props: 'opacity-25 scale-25 blur-2',
  watch: 'opacity-50 scale-50 blur-4',
  slots: 'opacity-50 scale-50 blur-2',
  watchEffect: 'opacity-50 scale-50 blur-4',
  vModel: 'opacity-50 scale-50 blur-2',
  shallowRef: '',
  shallowReactive: '',
  readonly: '',
}, {
  opacityClass: 'opacity-40',
  ref: 'opacity-25 scale-25 blur-6',
  computed: 'opacity-25 scale-25 blur-6',
  reactive: 'opacity-25 scale-25 blur-6',
  props: 'opacity-25 scale-25 blur-4',
  watch: 'opacity-50 scale-50 blur-6',
  slots: 'opacity-50 scale-50 blur-4',
  watchEffect: 'opacity-50 scale-50 blur-6',
  vModel: 'opacity-50 scale-50 blur-4',
  shallowRef: 'opacity-50 scale-50 blur-2',
  shallowReactive: 'opacity-50 scale-50 blur-2',
  readonly: 'opacity-50 scale-50 blur-2',
  effectScope: '',
  customRef: '',
},{
  deep: 'opacity-50',
  ref: 'opacity-12 scale-12 blur-8',
  computed: 'opacity-12 scale-12 blur-8',
  reactive: 'opacity-12 scale-12 blur-8',
  props: 'opacity-12 scale-12 blur-6',
  slots: 'opacity-12 scale-12 blur-6',
  vModel: 'opacity-25 scale-25 blur-6',
  watch: 'opacity-25 scale-25 blur-8',
  watchEffect: 'opacity-25 scale-25 blur-8',
  shallowRef: 'opacity-50 scale-50 blur-4',
  shallowReactive: 'opacity-50 scale-50 blur-4',
  readonly: 'opacity-50 scale-50 blur-4',
  effectScope: 'opacity-50 scale-50 blur-2',
  customRef: 'opacity-50 scale-50 blur-2',
  effect: '',
  dep: '',
}]" v-slot="config">
  <AtomCard class="position-300_110" :class="config.ref" title="ref" />
  <AtomCard class="position-200_320" :class="config.computed" title="computed" />
  <AtomCard class="position-700_100" :class="config.reactive" title="reactive" />
  <AtomCard class="position-820_260" :class="config.watch" title="watch" />
  <AtomCard class="position-520_460" :class="config.watchEffect" title="watchEffect" />
  <AtomCard class="position-96_273" :class="config.props" title="props" />
  <AtomCard class="position-869_321" :class="config.props" title="slots" />
  <AtomCard class="position-692_89" :class="config.vModel" title="vModel" />
  <AtomCard class="position-788_101" :class="config.shallowRef" title="shallowRef" />
  <AtomCard class="position-342_75" :class="config.readonly" title="readonly" />
  <AtomCard class="position-200_400" :class="config.shallowReactive" title="shallowReactive" />
  <AtomCard class="position-788_101" :class="config.effectScope" title="effectScope" />
  <AtomCard class="position-200_200" :class="config.customRef" title="customRef" />
  <AtomCard class="position-802_259" :class="config.effect" title="effect" />
  <AtomCard class="position-208_408" :class="config.dep" title="Dep" />
</Stepper>

<!--Итак, у нас есть Vue. Он славится классным dx, высокой производительностью в разных средах исполнения, решениям из коробки с официальной экосистемой ну и конечно главным его преимуществом является система реактивности. как раз сегодня мы поговорим про нее

Когда мы начинаем изучать Vue со стороны взаимодействия с api реактивности, мы погружаемся в такие примитивы как ref, reactive, watch, его брат watchEffect, computed. По сути эти 5 столпов которые так или иначе встречаются из проекта в проект. Изучая дальше, встречаются определения vmodel, props, slots
Но рассказывать только про них было бы не сильно интересно, для нас важно а что скрывается в конце цепочки богатой системы реактивности: далее у нас появляются shallow примитивы, активный скоуп, скоупы эффектов и реализация собственных примитивов, более низкоуровневые api как эффекты и классы с важными методами отслеживания и обновления-->

---
layout: center
---

<img src="/dont-understand.jpg" w-110 />

<!--Возможно, сейчас какие то определения недостаточно понятны, да и вообще появился вопрос а как с этим всем работать и что применять, так вот сегодня мы с вами пройдемся по всей этой богатой системе и разберем ее основные мезанизмы-->
