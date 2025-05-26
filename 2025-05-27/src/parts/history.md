---
growOpacity: 0.5
growSeed: 2
---

<h1>Немного истории</h1>

<div overflow-hidden transition-width transition-500 mt20 mr100
     :class="[$clicks === 0 && 'w-0', $clicks === 1 && 'w-89.8', $clicks === 2 && 'w-114.6', $clicks === 3 && 'w-149.8', $clicks === 4 && 'w-full']">

```mermaid
graph LR
noModules([Без модулей]) --> CJS([CJS])
--> ESM([ESM 2015])
--> ESMOnly([ESM-only])
```

</div>

<div mt20>
<v-clicks>

1. До 2009 - обычные `<script>`, всё в глобальной области
2. CommonJS (2009) - модульная система для Node.js (`require`, `module.exports`)
4. ESM (2015) - официальный модульный стандарт JavaScript (`import`, `export`)
5. ESM-only - ? 🤔👀

</v-clicks>
</div>

<style>
.mermaid {
  text-align: center;
  width: 55rem;
}
</style>

<!-- Для того чтобы мы смогли с вами более детально познакомиться с новшествами модулей js, необходимо пройтись немного по истории
Итак, до 2009 года разработчики имели лишь один подход написать код на js используя script которые заносили их код в глобальную область видимости
Отсюда появились большие неудобства - вызывали конфликты имен, сложности в поддержке и отсутствие изоляции кода
В 2009 появился CJS который стал первым модульным решением но остался лишь серверным решением потому что нужна была прослойка со сборщиком
В 2015 появляется безупречный стандарт ESM - он стандартизировал модули для всего js (браузер + сервер)
Ну и пока темная лошадка ESM-only к которой мы подберемся дальше, но как вы поняли из названия - это процесс извлечения CJS и переход на полную систему ESM
 -->

---
layout: center
---

<div flex="~ gap-2 justify-around items-center" wfull>
<img src="/years.png" transition transition-500 ease-in-out
  object-contain w-120 mt8/>

<div flex="~ col" gap4 items-center justify-center text-xl mt10>
  <div flex gap2 items-center>
    <div i-logos:github-icon />
    <code>npm-esm-vs-cjs</code>
  </div>
  <div flex w-full items-center justify-center gap2>
    <img src="https://avatars.githubusercontent.com/u/944406?s=48&v=4" w-6 rounded-full />
    <a op80 href="https://github.com/wooorm" target="_blank">wooorm</a>
  </div>
</div>
</div>

<!-- Очень важно затронуть более наглядный анализ который и вы сами сможете собрать с помощью скрипта wooorm
Он уже сделал за вас весь сбор данных по технологиям библиотекам плагинам с 2021 по 2024 год
Нас будут интересовать только esm и dual. Обратите внимание какая динамика перехода к esm-only или esm + cjs
Да, чистого cjs много до сих пор и его больше 50%, но показателем это не является потому что пока вся экосистема войдет в динамику роста перехода на esm или хотя бы на dual должно пройти еще много времени -->

---
layout: center
---

<AnimationText :index="0" words="Какие есть подводные камни ?" />

---
layout: center
---

<AnimationText :index="0" words="Что с совместимостью ?" />

---
layout: center
---

<img src="/thinking.gif" transition transition-500 ease-in-out
  object-contain w-120/>