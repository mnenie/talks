---
layout: cover
class: pl-30
glowSeed: 14
---

# Обо мне

<div class="[&>*]:important-leading-10 opacity-80">

Frontend разработчик на {Vue} и {Nuxt}<br>
Член core команды {UnaUI}<br>
Активный контрибьютер во {Vue} и {Nuxt} экосистемы<br>
Разрабатываю(-ал) широкий спектр проектов различных масштабов

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://alexpeshkov.nuxt.dev" target="_blank" class="border-none! font-300">alexpeshkov.nuxt.dev</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/mnenie" target="_blank" class="border-none! font-300">mnenie</a></div>
  <div i-meteor-icons:bluesky op50 ma text-xl ml4 />
  <div><a href="https://bsky.app/profile/alexpeshkov.bsky.social" target="_blank" class="border-none! font-300">alexpeshkov.bsky</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/121057011?v=4" rounded-full absolute top-38 right-15 w-40 />


---
layout: cover
---

<div transition transition-500 flex="~ items-center justify-center"
  :class="$clicks > 0 && 'translate-y--50 scale-60 op80'">
  <h1 class="!text-5xl !mb-12">Пожалуй.. Начнем издалека <span class="!text-4xl">😉</span></h1>
</div>

<div transition transition-500 text-xl font-semibold mt--10>
  <AlertCard v-click absolute top-58 left-30>pnpm create vite@latest</AlertCard>
  <AlertCard v-click absolute top-58 left-110>pnpm create vite my-vue-app --template vue-ts</AlertCard>
  <AlertCard v-click absolute top-78 left-20>pnpm create vue@latest</AlertCard>
  <AlertCard v-click absolute top-78 left-98>pnpm create vite my-react-app --template react-ts</AlertCard>
  <AlertCard v-click absolute top-98 left-70>pnpm create vite my-svelte-app --template svelte-ts</AlertCard>
</div>

<!-- пожалуй начнем с вами издалека, и вспомним как мы создаем новые фронтенд проекты.
Дабы не конфигурировать все самостоятельно с 0, мы используем некие команды для развертывания стартовых теплэйтов с начальными конфигурациями

возможно вы использовали или используете эту команду, возможно эту (ну и так до конца)
 -->

---
layout: center
---

<img src="https://i.pinimg.com/originals/21/11/61/21116158daaeb1459b4ec0758505e1ad.gif" w-full h-full />

<!-- и когда вы развернули ваш проект вы начинаете разработку создвая новые компоненты страницы сторы отдельные модули  -->

---
layout: statement
---

<div transition transition-500
  :class="$clicks > 0 && 'translate-y--50 scale-60 op80'">
  <h1 text="5xl!">НО</h1>
  <div transition transition-500 ease-in-out text-7 mb2 :class="$clicks > 0 ? '' : 'op0'">Задумывались ли вы？</div>
</div>

<div transition transition-500 text-xl font-semibold mt--10>
  <img v-click src="/intro/vite-vscode.png" absolute top-58 left-80 />
  <img v-click src="/intro/build-cmd.png" absolute top-58 left-130 />
  <img v-click src="/intro/dev-cmd.png" absolute top-78 left-40 />
  <img v-click src="/intro/preview-cmd.png" absolute top-78 left-98 />
  <img v-click src="/intro/dist.png" absolute top-78 left-170 />
</div>

<!-- но задумывались ли вы о таких вещах как файл vite.config.js(ts) о командах vite build, vite, vite preview о папке dist -->

---
layout: center
---

<AnimationHeading :index="0" words="Что это такое ?" />
<AnimationHeading v-click :index="1" words="Зачем они нужны ?" />

---
layout: center
---

<div transition transition-500 flex="~ items-center justify-center">
  <h1 class="!text-5xl">?</h1>
</div>

<div transition transition-500 text-xl font-semibold mt--6>
  <AlertCard color="green" class="absolute top-1/3 -translate-y-1/3 left-40">.vue</AlertCard>
  <AlertCard color="green" class="absolute top-1/2 -translate-y-1/2 left-30">.ts</AlertCard>
  <AlertCard color="green" class="absolute top-2/3 -translate-y-1/3 left-40">.svelte</AlertCard>

  <div class="absolute top-1/2 -translate-y-1/2 right-20 flex items-center gap-6">
    <AlertCard color="yellow">.js</AlertCard>
    <AlertCard color="yellow">.html</AlertCard>
    <AlertCard color="yellow">.css</AlertCard>
  </div>
</div>

<!-- как файлы в которых мы пишем код с различными расширениями при dev режиме или продакшене понимает браузер и почему мы видим только js css html что скрывается за этим знаком вопроса -->

---
layout: center
---

<AnimationHeading :index="0" words="Как это работает ?" />

---
layout: center
---

<img src="https://avatars.dzeninfra.ru/get-zen_doc/4281215/pub_607acf24eac7203d75710dc8_607acff4eac7203d7573faf6/scale_1200" class="h-full" />

<!-- сегодня мы постараемся ответить на все эти вопросы и пройти по самому дну мира сборщиков и разобрать его главного на сегодняшний момент предводителя vite

естественно в силу ограниченного времени на выступление мы рассмотрим базовые концепции но этого хватит чтобы дальше вы смогли на основе этой базы ознакомиться с решением более детально
 -->
