<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  onMounted,
  defineProps,
  withDefaults,
  watchEffect,
  onBeforeUnmount
} from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)

  watchEffect(() => {
    setOptions(props.options)
  })
})

// onBeforeUnmount(() => {
//   const { echartInstance } = useEchart(echartDivRef.value!)
//   if (echartInstance) {
//     echartInstance.clear()
//     echartInstance.dispose()
//   }
// })
</script>

<style scoped></style>
