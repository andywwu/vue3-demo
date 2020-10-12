<template>
  <div class="container">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="inline"
          v-model:selectedKeys="selectedKeys"
        >
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>

  </div>

</template>

<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import { ref } from 'vue'
export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(['1'])
    const collapsed = ref<boolean>(false)
    return {
      selectedKeys,
      collapsed,
    }
  },
}
</script>

<style lang="less" scoped>
.container,
.ant-layout {
  height: 100%;
}
</style>
