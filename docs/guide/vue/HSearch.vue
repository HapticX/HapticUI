<template>
  <div id="list-complete-demo" class="demo">
    <input type="text" v-model="text" @input="find(text)" />
    <transition-group name="search" tag="p">
      <span v-for="(value, index) in result" :key="index" class="search-item">
        {{ value }}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Petya",
          age: 18,
        },
        {
          name: "Vadim",
          age: 122,
        },
        {
          name: "Nikita",
          age: 13338,
        },
        {
          name: "Admin",
          age: 421,
        },
        {
          name: "Lox",
          age: 52,
        },
      ],

      result: [
        {
          name: "Petya",
          age: 18,
        },
        {
          name: "Vadim",
          age: 122,
        },
        {
          name: "Nikita",
          age: 13338,
        },
        {
          name: "Admin",
          age: 421,
        },
        {
          name: "Lox",
          age: 52,
        },
      ],
      nextNum: 10,
      text: "",
    };
  },
  methods: {
    find(input) {
      // check, if input is empty
      if (this.text !== "") {
        this.result = this.items.filter(
          (el) => el.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
        );
      } else {
        this.result = this.items;
      }
    },
  },
};
</script>

<style>
.search-item {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}

.search-move,
.search-enter-active,
.search-leave-active {
  transition: all 200ms ease-out;
}

.search-enter-from,
.search-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
