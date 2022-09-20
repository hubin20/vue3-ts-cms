<template>
  <div class="nav-header">
    <i v-if="isFold == false" class="fold-menu" @click="handleFoldClick">
      <el-icon><Fold /></el-icon>
    </i>
    <i v-else class="fold-menu" @click="handleFoldClick">
      <el-icon><Expand /></el-icon>
    </i>
    <div class="content">
      <hb-breadcrumb :breadcrumbs="breadcrumbs"></hb-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import userInfo from './user-info.vue'
import HbBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'

const isFold = ref(false)

const emits = defineEmits(['foldChange'])
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
//面包屑的数据
const store = useStore()

const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
