---
layout: center
---

<div transition transition-500 flex="~ items-center justify-center">
   <h1>Так стоит ли нам переходить на ESM-only?</h1>
</div>

---
class: ml10
---

<h1>Проблемы двойного формата</h1>

<v-clicks at="1" class="[&>li]:mb-5" mt15>

- Interop - <span opacity-50>говорили ранее</span>
- Разрешение зависимостей (возможность транзитивных зависимостей)
- Размер пакета
</v-clicks>

<img v-click="4" src="/hard.png" transition transition-500 ease-in-out
  object-contain w-60 absolute bottom-20 right-40 />

<!--  CJS и ESM работают по разным правилам
Автоматические преобразования (default экспорты, require → import) ведут к тонким багам и потере производительности

Сборщики вынуждены поддерживать два дерева зависимостей это является следствием транзитивных зависимостей 
что еще хуже с этом ключе так это то что одна библиотека в ESM и CJS форматах одновременно отсюда получаем разное поведение в dev и prod

Библиотеки включают оба формата в npm - ну просто увеличение размера node_modules и раздутый пакет  -->