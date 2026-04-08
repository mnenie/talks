---
layout: cover
---

<div transition transition-500 :class="$clicks > 0 && 'translate-y--50 translate-x--20 left-1/2 scale-85 op80'">
  <h1 text="5xl!">Реактивность</h1>
</div>

<span v-if="$clicks <= 0" opacity-75>Свойство состояния системы автоматически реагировать на входящие изменения по заранее заданной последовательности.</span>

<!--Прежде чем разбираться во всех концепциях предлагаю сформировать определение понятия Реактивности - это свойство состояние системы автоматически реагировать на входящие изменения по заданной последовательности -->

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
    <SvgArrow x1="452" y1="220" x2="514" y2="220" :class="config.arrowState" />
  </div>
  <div>
    <AtomCard class="position-800_320" :class="config.effects" title="Effects" />
    <SvgArrow x1="682" y1="226" x2="760" y2="282" :class="config.arrowSubscribers" />
  </div>
  <div>
    <AtomCard class="position-200_220" :class="config.irritant" color="purple" />
    <SvgArrow x1="236" y1="220" x2="340" y2="220" :class="config.arrowIrritant" />
  </div>
  <div>
    <AtomCard class="position-510_420" :class="config.scheduler" title="Scheduler" color="purple" />
    <SvgArrow x1="500" y1="384" x2="420" y2="260" :class="config.arrowSchedulerState" />
    <SvgArrow x1="736" y1="330" x2="590" y2="400" :class="config.arrowSchedulerEffects" />
  </div>
</Stepper>

<!-- С точки зрения vue все построено так: у нас есть некий стэйт (можно назвать его моделью), есть подписчики кто подписываются на обновления этого стэйта, эти подписчики могут вызывать эффекты которые могут напрямую изменять стэйт или могут вызывать какие нибудь сайд эффекты 
допустим у нас появляется внешний раздражитель нашей системы который напрямую меняет стэйт, соотвественно в случае громадного кол ва подписчиков и эффектов у нас бы происходило множественное воздействие на саму модель данных, вызывалось бы множество эффектов (в негарантированном порядке) и все это бы приводило к хаусу, если бы Vue не использовал умный механизм планировщика, который как раз и занимается тем что определяет в какой момент что вызывать, что можно отбросить, когда вызывать и сколько обновлений стэйта произвести. Но о шедулере или планировщике мы поговорим подробнее чуть позже. -->

---
layout: cover
dragPos:
  vue: 200,230,100,100
clicks: 3
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

<!--Сейчас я бы хотел рассмотреть как устроена реактивность Vue с точки зрения пакетов в ядре 
у нас есть пакет @vue/reactivity который можно использовать и вне vue и он содержит такие реактивные примитивы как ref, computed, reactive, вотчеры, но этот пакет тесно связан с пакетом vue/runtime-core в котором лежит планировщик, api самого батчинга, api компонентов, и как вы можете заметить что сюда я тоже заложил вотчеры 
и почему? потому что пакет @vue/reactivity который вы можете использовать за пределами vue без шедулера это по сути в явном виде только ref и reactive, а те примитивы и api что используют возможности планировщика остаются в явном виде скрыты или ждут чтобы их подружили с внешним планировщиком 
частое заблуждение что как раз планировщик полностью является частью реактивной системы, но нет - он напрямую завязан с взаимодействием с dom, поэтому является главным модулем в runtime-core-->
