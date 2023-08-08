<script>
export default {
  props: {
    addFn: {
      type: Function,
      required: true
    },
    obj: Object
  },
  name: 'ChildComp',
  setup(props, ctx) {
    function handleClick(num, num2) {
      props.add(num, num2, 'child想要修改数据')
    }

    return {
      handleClick
    }
  }
}
</script>

<template>
  <button @click="handleClick(1, 2)">大力神点</button>
  <div>子级{{ obj.name }}</div>
  <!-- <div>{{ add(1, 2) }}</div> -->
</template>
