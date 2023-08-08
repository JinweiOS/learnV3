<script>
import { ref } from 'vue'
export default {
  name: 'TableComp',
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ])

    function print(date) {
      const time = new Date(date)
      return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日`
    }
    return {
      tableData,
      print
    }
  }
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" >
      <template v-slot:default="{row}">
        {{ print(row.date) }}
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
