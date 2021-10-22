<template>
  <div class="serach-component">
    <div class="input-box">
      <input type="number" placeholder="请输入分数" @input="setScore" :value="searchedScore" name="" id="">
      <button @click="setFilterReg('up')" :class="['regular-btn',{active: filterReg === 'up'}]">以上</button>
      <button @click="setFilterReg('down')" :class="['regular-btn',{active: filterReg === 'down'}]">以下</button>
    </div>
    <div class="menu" v-show="menuShow">
      <ul>
        <li v-for="item in menuList" :key="item.id">
          <input type="checkbox" @click="setChecked(item)" :checked="getChecked(item.id)">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
        </li>
      </ul>
    </div>

    <div class="check-list">
      <ul>
        <li v-for="item in checkedList" :key="item.id">
          <input type="checkbox" @click="setChecked(item)" :checked='true'>
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import students from '../data/students.js'
  export default {
    name: 'Demo',
    data() {
      return {
        searchedScore: 0,
        filterReg: 'up',
        menuShow: "false",
        menuList: [],
        checkedList: []
      }
    },
    methods: {
      setScore(e) {
        this.searchedScore = Number(e.target.value)
        this.filterStudents()
      },
      setFilterReg(reg) {
        this.filterReg = reg
        this.filterStudents()
      },
      getChecked(id) {
        return this.checkedList.some(item => item.id === id)
      },
      setChecked(info) {
        const hasThisItem = this.getChecked(info.id)

        if (hasThisItem) {
          this.checkedList = this.checkedList.filter(item =>
            (item.id != info.id))
        } else {
          this.checkedList.push(info)
        }
      },
      filterStudents() {
        console.log(students);
        switch (this.filterReg) {
          case 'up':
            this.menuList = students.filter(item =>
              item.score >= this.searchedScore
            )
            break
          case 'down':
            this.menuList = students.filter(item =>
              item.score < this.searchedScore
            )
            break
          default:
            break
        }
        this.menuShow = this.menuList.length > 0
      }
    },
  }
</script>

<style lang="scss">
  .active {
    background-color: #000;
    color: #fff;
  }
</style>