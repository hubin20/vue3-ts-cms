<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      pageName="users"
      :modelConfig="modelConfigRef"
    ></page-model>
  </div>
</template>

<script lang="ts">
export default {
  name: 'user'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modelConfig } from './config/model.config'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-page-model'

const [pageContentRef, handleResetClick, handleQueryClick] =
  usePageSearch() as any

//pageModel相关的逻辑
//处理密码的逻辑
const newCallback = () => {
  const passwordItem = modelConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modelConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}
//动态添加部门和角色列表
const store = useStore()
const modelConfigRef = computed(() => {
  const departmentItem = modelConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )

  departmentItem!.options = store.state.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })

  const roleItem = modelConfig.formItems.find((item) => item.field === 'roleId')

  roleItem!.options = store.state.entireRole.map((item) => {
    return { title: item.name, value: item.id }
  })
  return modelConfig
})

//调用Hook获取公共变量和函数
const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
  newCallback,
  editCallback
) as any
</script>
<style scoped lang="less"></style>
