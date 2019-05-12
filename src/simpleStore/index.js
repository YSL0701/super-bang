import Vue from 'vue'

export const store = Vue.observable({
  currentScore: 0
})

export const scoreUp = () => {
  store.currentScore++
}

export const scoreDown = () => {
  store.currentScore--
}
