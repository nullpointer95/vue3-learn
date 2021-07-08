<template>
  <h2>{{ message }}</h2>
  <button @click="changeButtonStyle(NameEnum.BUTTON1,ShowTypeEnum.warning)">test</button>
  <bottomNavigation :buttonData="buttonData"></bottomNavigation>
</template>

<script lang="ts">
import {defineComponent, ref, toRefs} from 'vue';
import bottomNavigation from '@/components/navigation/bottom/BottomNavigation.vue';
import init from "./init/init"

export default defineComponent({
  name: 'MainPage',
  components: {
    bottomNavigation
  },
  setup() {
    const message = ref("Main Page");
    const initData = init();
    return {
      ...toRefs(initData.datas),
      ...initData.methods,
      ...initData.enums,
      message
    }
  }
});
</script>

<style src="./mainPage.css" scoped />