<script>
import PartComp from '@/component/Part.vue'
export default {
  name: 'MainComp',
  // 局部注册
  components: {
    PartComp
  },
  setup() {}
}
</script>
<template>
  <ChildComp></ChildComp>
  <PartComp></PartComp>
  <child-comp></child-comp>
  <part-comp></part-comp>
</template>
