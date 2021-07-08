<template>
  <div class="bar-content">
    <div class="navigation-btn navigation-btn-normal" @click="item.clickFunction" v-for="(item, index) in buttons"
         :key="index">
      {{ item.showName }}
    </div>
  </div>
</template>`

<script lang="ts">
import {computed, defineComponent,watch,toRefs} from 'vue';
import {BarButton} from "@/components/navigation/navigationStructure";

export default defineComponent({
  name: 'BottomNavigation',
  props: {
    buttonData: Array
  },
  setup(props) {
    const buttons = computed(()=> {
      return props.buttonData as Array<BarButton>
    })

    watch(toRefs(props.buttonData as Array<BarButton>),(val)=>{
      console.log("watching",val)
    },{deep:true,immediate:true})

    return {
      buttons
    }
  }
})
;
</script>

<style src="./bottomNavigation.css" scoped/>
