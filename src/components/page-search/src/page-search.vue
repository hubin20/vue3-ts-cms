<template>
  <div class="page-search">
    <hb-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </hb-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HbForm from '@/base-ui/form'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
//formItems里面的属性应该动态获取
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)

const emits = defineEmits(['resetBtnClick', 'queryBtnClick'])

const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key]
    emits('resetBtnClick')
  }
}

//用户点击搜索
const handleQueryClick = () => {
  emits('queryBtnClick', formData.value)
}
</script>

<style scoped lang="less">
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
