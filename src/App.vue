<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus/lib/index.js'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
