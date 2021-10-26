<template>
  <div id="app">
    <!-- <demo /> -->
    <Search
      ref="search"
      :data="students"
      @setCheckedList="setCheckedList"
    ></Search>
    <div class="my-table">
      <table border="1" v-if="checkedList.length > 0">
        <thead>
          <tr>
            <th>操作</th>
            <th>姓名</th>
            <th>分数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of checkedList" :key="item.id">
            <td>
              <my-check-box
                :id="item.id"
                :checked="true"
                @click="setChecked(item)"
              ></my-check-box>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import Demo from './demo/Demo.vue'
import Search from "./components/Search.vue";
import students from "./data/students";
import MyCheckBox from "./components/MyCheckBox.vue";

export default {
  name: "App",
  components: {
    // Demo
    Search,
    MyCheckBox,
  },
  data() {
    return {
      students,
      checkedList: [],
    };
  },
  methods: {
    setCheckedList(checkedStudents) {
      this.checkedList = checkedStudents;
    },
    setChecked(info) {
      this.$refs.serach.setChecked(info);
    },
  },
};
</script>

<style lang="scss">
</style>