<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      ref="pageModelRef"
      :modelConfig="modelConfig"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      @check="handleCheckChange"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
export default {
  name: 'role'
}
</script>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { mapMenusLeafKeys } from '@/utils/map-menus'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'

import PageModel from '@/components/page-model'
import { modelConfig } from '../role/config/model.config'
import { usePageModel } from '@/hooks/use-page-model'
import { ElTree } from 'element-plus/lib/index.js'

//处理pageModel的hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = mapMenusLeafKeys(item.menuList)

  nextTick(() => {
    console.log(elTreeRef.value)
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}

const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
  undefined,
  editCallback
) as any

const store = useStore()

const menus = computed(() => store.state.entireMenu)

const otherInfo = ref({})

const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
