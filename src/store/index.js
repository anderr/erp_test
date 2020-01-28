import Vue from 'vue'
import Vuex from 'vuex'
import {
  checkErrors,
  flags,
  addition,
  subtraction,
  multiplication,
  division
} from '../outerFile.js'

Vue.use(Vuex)

// Устанавливаем чекбокс для первого доступного действия
const firstInitCurrentInteraction = () => {
  for (var prop in flags) {
    if (flags[prop]) {
      return prop
    }
  }

  return 'addition'
}

const getDefaultState = () => {
  return {
    values: {
      value1: 1,
      value2: 2
    },
    flags: flags,
    defaultInteraction: addition,
    currentInteraction: firstInitCurrentInteraction()
  }
}

export default new Vuex.Store({
  state: getDefaultState(),

  mutations: {
    setDefaultInteraction(state, method) {
      state.defaultInteraction = method
    },
    setCurrentInteraction(state, method) {
      state.currentInteraction = method
    },
    setDefaultData(state) {
      Object.assign(state, getDefaultState())
    }
  },

  actions: {
    changeDefaultInteraction({ commit }, method) {
      commit('setCurrentInteraction', method)

      switch (method) {
        case 'addition':
          commit('setDefaultInteraction', addition)
          break
        case 'subtraction':
          commit('setDefaultInteraction', subtraction)
          break
        case 'multiplication':
          commit('setDefaultInteraction', multiplication)
          break
        case 'division':
          commit('setDefaultInteraction', division)
          break
        default:
          commit('setDefaultData')
      }
    }
  },

  getters: {
    makeResult(state) {
      let response = {
        resultValue: 0,
        msg: ''
      }
      const errors = checkErrors(state.currentInteraction, state.values.value1, state.values.value2)

      if (errors.errorType === 'critical') {
        response.resultValue = 'Невозможно посчитать'
        response.msg = errors.msg
      } else {
        if (errors.errorType === 'warning') {
          response.msg = errors.msg
        }

        response.resultValue = state.defaultInteraction(state.values.value1, state.values.value2)
      }

      return response
    }
  }
})
