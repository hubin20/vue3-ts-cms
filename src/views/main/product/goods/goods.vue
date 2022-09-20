<template>
  <div class="goods">
    <page-content :content-table-config="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 70px; height: 70px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :preview-teleported="true"
        />
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
export default {
  name: 'goods'
}
</script>
<script setup lang="ts">
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
</script>

<style scoped lang="less"></style>
