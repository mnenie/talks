---
growOpacity: 0.5
growSeed: 2
---

<h1>Немного истории</h1>

<div overflow-hidden transition-width transition-500 mt20
     :class="[$clicks === 0 && 'w-0', $clicks === 1 && 'w-64.4', $clicks === 2 && 'w-100.36', $clicks === 3 && 'w-148.50', $clicks === 4 && 'w-full']">

```mermaid
graph LR
noModules([Без модулей]) --> CJS([CJS])
-->AMD([AMD / UMD]) 
--> ESM([ESM 2015])
--> ESMOnly([ESM-only 🤖])
```

</div>

<div mt15>
<v-clicks>

1. До 2009 - обычные `<script>`, всё в глобальной области
2. CommonJS (2009) - модульная система для Node.js (`require`, `module.exports`)
3. AMD / UMD (2011–2014) - попытки кроссплатформенности, загромождённый синтаксис
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