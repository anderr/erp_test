<template>
  <div class="hello">
    <div class="hello__actions">
      <div v-if="flags.addition" class="form-control">
        <label class="form-control__label">Складываем</label>

        <input
          @change="changeDefaultInteraction('addition')"
          :checked="currentInteraction === 'addition' ? true: false"
          class="form-control__switch"
          type="radio"
          name="func"
          id="addition"
        /><label class="form-control__switch-label" for="addition"></label>
      </div>

      <div v-if="flags.subtraction" class="form-control">
        <label class="form-control__label">Вычитаем</label>

        <input
          @change="changeDefaultInteraction('subtraction')"
          :checked="currentInteraction === 'subtraction' ? true: false"
          class="form-control__switch"
          type="radio"
          name="func"
          id="subtraction"
        /><label class="form-control__switch-label" for="subtraction"></label>
      </div>

      <div v-if="flags.multiplication" class="form-control">
        <label class="form-control__label">Умножаем</label>

        <input
          @change="changeDefaultInteraction('multiplication')"
          :checked="currentInteraction === 'multiplication' ? true: false"
          class="form-control__switch"
          type="radio"
          name="func"
          id="multiplication"
        /><label class="form-control__switch-label" for="multiplication"></label>
      </div>

      <div v-if="flags.division" class="form-control">
        <label class="form-control__label">Делим</label>

        <input
          @change="changeDefaultInteraction('division')"
          :checked="currentInteraction === 'division' ? true: false"
          class="form-control__switch"
          type="radio"
          name="func"
          id="division"
        /><label class="form-control__switch-label" for="division"></label>
      </div>
    </div>


    <div class="form-control">
        <label class="form-control__label">Первое значение</label>
        <input v-model="values.value1" class="form-control__input" type="text">
    </div>
    <div class="form-control">
        <label class="form-control__label">Второе значение</label>
        <input v-model="values.value2" class="form-control__input" type="text">
    </div>
    <div class="form-control">
        <label class="form-control__label">{{ resultText }}</label>
        <input :value="makeResult.resultValue" class="form-control__input form-control__disabled" type="text" disabled>
    </div>

    <div class="hello__errors">
      {{ makeResult.msg }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'computed-numbers',
  computed: {
    ...mapState(['values', 'flags', 'currentInteraction']),

    ...mapGetters(['makeResult']),

    resultText() {
      switch (this.currentInteraction) {
        case 'addition':
          return 'Результат сложения'
        case 'subtraction':
          return 'Результат вычитания'
        case 'multiplication':
          return 'Результат умножения'
        case 'division':
          return 'Результат деления'
        default:
          return 'Результат'
      }
    }
  },
  methods: {
    ...mapActions(['changeDefaultInteraction'])
  }
}
</script>

<style scoped lang="scss">
.hello {
  width: 300px;

  &__actions {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    .form-control {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__errors {
    text-align: left;
    font-size: 14px;
    color: #666;
  }
}
</style>
