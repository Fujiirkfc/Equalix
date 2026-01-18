<template>
  <button :class="buttonClasses" v-bind="$attrs">
    <slot name="icon" /> <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  interface DefaultButtonProps {
    size?: 'small' | 'regular'
  }

  const props = withDefaults(defineProps<DefaultButtonProps>(), {
    size: 'regular',
  })

  const baseClasses = [
    'px-6',
    'py-3',

    'text-base',
    'md:text-xl',
    'text-center',
    'text-lightgray',

    'bg-darkgray',
    'border',
    'border-lightgray',
    'rounded',
    'shadow-lg',
    'flex',
    'justify-center',

    'transition-all',
    'hover:bg-lightgray',
    'hover:text-blackout',
    'hover:scale-105',
  ]

  const sizes = {
    small: 'w-10 md:w-20 md:h-14',
    regular: 'w-60 md:w-70',
  }

  const buttonClasses = computed(() => [
    ...baseClasses,
    sizes[props.size],
  ])

  defineOptions({
    inheritAttrs: false,
  })
</script>
