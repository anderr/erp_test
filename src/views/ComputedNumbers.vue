<template>
  <div class="hello">
    <div class="form-control">
        <label>Первое значение</label>
        <input v-model="value1" type="text">
    </div>
    <div class="form-control">
        <label>Второе значение</label>
        <input v-model="value2" type="text">
    </div>
    <div class="form-control">
        <label>{{ resultText }}</label>
        <input v-model="result" class="form-control__disabled" type="text" disabled>
    </div>
  </div>
</template>

<script>
export default {
  name: 'computed-numbers',
  data() {
    return {
      value1: 0,
      value2: 0,
    }
  },
  computed: {
    resultText() {
      return 'Результат сложения'
    },
    result() {
      if (this.value1 !== '' && this.value2 !== '') {
        return parseFloat(this.value1) + parseFloat(this.value2)
      } else {
        return 'Введите числа в оба поля'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 300px;
}
</style>
