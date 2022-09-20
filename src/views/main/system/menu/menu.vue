<template>
  <div class="hb-menu">
    <!-- <page-search :searchFormConfig="searchFormConfig"></page-search> -->
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
export default {
  name: 'hb-menu'
}
</script>
<script setup lang="ts">
import PageSearch from '@/components/page-search'
// import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'

import { usePageSearch } from '@/hooks/use-page-search'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style scoped lang="less"></style>
