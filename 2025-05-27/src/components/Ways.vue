<script setup lang="ts">
import { useSlideContext } from "@slidev/client";

// Made by @LittleSound. Thanks to her!
const { $clicks } = useSlideContext();
</script>

<template>
  <div class="ways mt-8 text-xs">
    <div
      relative
      w-full
      rounded-lg
      text-white
      p="t-8 b-2"
      transition="all duration-500 ease-in-out"
      :class="[$clicks >= 5 ? 'px-30' : 'px-60']"
    >
      <div class="grid grid-cols-2 mb-2 gap-x-3 gap-y-2">
        <div
          class="border-1 border-white rounded bg-gray/40 p-1"
          transition="all duration-500 ease-in-out"
          :class="[
            [0, 1, 2, 4, 5].includes($clicks) ? 'op-100' : 'op-50',
            $clicks >= 5 ? 'col-span-1' : 'col-span-2',
          ]"
        >
          <p text="$text-secondary" font-mono>Библиотека</p>
          <p w-full flex items-center text-sm>
            <span>Вынужденный ESM</span>
          </p>
        </div>
        <div
          v-click="5"
          class="border-1 border-white rounded bg-gray/40 p-1 text-right"
          transition="all duration-500 ease-in-out"
          :class="[
            $clicks >= 6 ? 'op-50' : 'op-100',
            $clicks >= 5 ? 'block' : '!hidden',
          ]"
        >
          <p text="$text-secondary" font-mono>Библиотека</p>
          <p w-full flex items-center justify-end text-sm>
            <span>ESM</span>
          </p>
        </div>
        <div
          class="border-1 border-white rounded bg-gray/40 p-1"
          transition="all duration-500 ease-in-out"
          :class="[
            [0, 1, 2, 4, 5].includes($clicks) ? 'op-100' : 'op-50',
            $clicks >= 5 ? 'col-span-1' : 'col-span-2',
          ]"
        >
          <p text="$text-secondary" font-mono>Зависимость</p>
          <p text-sm>
            CJS <span i-ri-arrow-right-fill relative top-0.5 inline-block /> ESM
          </p>
        </div>
        <div
          class="border-1 border-white rounded bg-gray/40 p-1 text-right"
          op-0
          transition="all duration-500 ease-in-out"
          :class="[$clicks >= 5 ? 'block' : '!hidden']"
        >
          <p text="$text-secondary" font-mono>Зависимость</p>
          <p w-full flex items-center text-sm>
            <span>Вынужденный ESM</span>
          </p>
        </div>
      </div>
      <div
        class="mb-6 border-1 border-white rounded bg-gray/40 p-1"
        :class="[2, 5].includes($clicks) ? 'op-50' : 'op-100'"
      >
        <div mb-2>
          <p text="$text-secondary" font-mono>Зависимость</p>
          <p
            text-sm
            transition="all duration-500 ease-in-out"
            :class="[5].includes($clicks) ? 'op-20' : 'op-100'"
          >
            <span>Вынужденный ESM</span>
            <span i-ri-arrow-up-fill relative top-0.5 inline-block />
          </p>
        </div>
        <div grid grid-cols-2 gap-x-3 gap-y-2>
          <div
            grid
            grid-cols-1
            gap-2
            :class="[
              $clicks >= 5 ? 'col-span-1' : 'col-span-2',
              [7].includes($clicks) ? 'op-20' : 'op-100',
            ]"
            transition="all duration-500 ease-in-out"
          >
            <div class="border-1 border-white rounded p-1">
              <p text="$text-secondary" font-mono>Зависимость</p>
              <p text-sm>
                CJS
                <span i-ri-arrow-right-fill relative top-0.5 inline-block /> ESM
              </p>
            </div>
            <div class="border-1 border-white rounded p-1">
              <p text="$text-secondary" font-mono>Зависимость</p>
              <p text-sm>
                CJS
                <span i-ri-arrow-right-fill relative top-0.5 inline-block /> ESM
              </p>
            </div>
            <div class="border-1 border-white rounded p-1">
              <p text="$text-secondary" font-mono>Зависимость</p>
              <p text-sm>ESM</p>
            </div>
          </div>
          <div
            v-click="4"
            mt="-24.75"
            mb="-1"
            mr="-1"
            flex
            flex-col
            gap-2
            overflow-hidden
            border-1
            border-white
            rounded
            p-1
            text-right
            shadow
            transition="all duration-500 max-height-500 ease-in-out"
            :class="[
              $clicks >= 5 ? 'flex' : '!hidden',
              $clicks === 6 ? 'op-50' : 'op-100',
              [7].includes($clicks)
                ? 'max-h-200 bg-gray/20 backdrop-blur-md !duration-2000'
                : 'max-h-11 bg-gray/50',
            ]"
          >
            <div>
              <p text="$text-secondary" font-mono>Зависимость</p>
              <p text-sm>
                CJS
                <span i-ri-arrow-right-fill relative top-0.5 inline-block /> ESM
              </p>
            </div>
            <div flex-1 />
            <div grid grid-cols-1 gap-2>
              <div class="border-1 border-white rounded p-1">
                <p text="$text-secondary" font-mono>Зависимость</p>
                <p text-sm>Вынужденный ESM</p>
              </div>
              <div class="border-1 border-white rounded p-1">
                <p text="$text-secondary" font-mono>Зависимость</p>
                <p text-sm>Вынужденный ESM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div h-4 w-full />
      <div>
        <div
          absolute
          inset-y-0
          w-10
          translate-x="-1/2"
          flex="~ col"
          border="$color-sfc"
          pb-16
          transition="all duration-500 ease-in-out"
          :class="[
            $clicks >= 1 ? 'translate-y-0' : 'translate-y-100',
            $clicks >= 5 ? 'left-8/20' : 'left-10/20',
            $clicks >= 6 ? 'op-20' : 'op-100',
          ]"
        >
          <div
            border="$color-sfc"
            h-10
            w-10
            rotate-225
            border-b-4
            border-r-4
            rounded-br
          />
          <div ml="-2" w-14 flex mt="-5">
            <div w-2 border-t-4 border="$color-sfc" rounded-bl />
            <div w-1.5 border-t-4 border="$color-sfc" rounded-tr />
            <div w-10 />
            <div w-1.5 border-t-4 border="$color-sfc" rounded-tl />
            <div w-2 border-t-4 border="$color-sfc" rounded-br />
          </div>
          <div
            mt="0"
            border="$color-sfc"
            w-full
            flex-1
            border-4
            rounded-t
            border-t-none
            p-1
            text-center
            font-mono
          />
        </div>
        <div
          v-click="5"
          left="12/20"
          translate-x="-1/2"
          flex="~ col"
          border="$color-jsx"
          absolute
          inset-y-0
          w-10
          pb-16
          transition="all duration-500 ease-in-out"
          :class="$clicks >= 5 ? 'translate-y-0' : 'translate-y--100'"
        >
          <div
            border="$color-jsx"
            w-full
            flex-1
            border-4
            rounded-t
            border-b-none
            p-1
            text-center
            font-mono
          />
          <div ml="-2" w-14 flex>
            <div w-2 border-t-4 border="$color-jsx" rounded-tl />
            <div w-1.5 border-t-4 border="$color-jsx" rounded-br />
            <div w-10 />
            <div w-1.5 border-t-4 border="$color-jsx" rounded-bl />
            <div w-2 border-t-4 border="$color-jsx" rounded-tr />
          </div>
          <div
            mt="-5"
            border="$color-jsx"
            h-10
            w-10
            rotate-45
            border-b-4
            border-r-4
            rounded-br
          />
        </div>
      </div>
    </div>
  </div>
</template>
