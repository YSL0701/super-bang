<template>
  <div
    id="app"
    class="flex-r just-c-c align-i-c"
  >
    <app-score :current-score="currentScore" />
    <div class="scoring">
      <button
        class="scoring__btn scoring__btn__score_up f-bold"
        @click="scoreUp"
      >加分</button>
      <button
        class="scoring__btn scoring__btn__score_down f-bold"
        @click="scoreDown"
      >減分</button>
    </div>
  </div>
</template>

<script>
import appScore from './components/score.vue'
import { store, scoreUp, scoreDown } from './simpleStore'

export default {
  name: 'app',
  data() {
    return {
      currentScore: 0
    }
  },
  methods: {
    scoreUp() {
      if (this.currentScore < 20) {
        this.currentScore++
      }
    },
    scoreDown() {
      if (this.currentScore > 0) {
        this.currentScore--
      }
    }
  },
  components: {
    appScore
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background-color: rgb(255, 231, 166);
}
div,
span,
a,
input,
img {
  margin: 0;
  box-sizing: border-box;
}
.flex {
  &-r {
    display: flex;
    flex-direction: row;
  }
  &-c {
    display: flex;
    flex-direction: column;
  }
  &-r-reverse {
    display: flex;
    flex-direction: row-reverse;
  }
  &-c-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
}

.just-c {
  &-fs {
    justify-content: flex-start;
  }
  &-c {
    justify-content: center;
  }
  &-sb {
    justify-content: space-between;
  }
  &-fe {
    justify-content: flex-end;
  }
}

.align-i {
  &-fs {
    align-items: flex-start;
  }
  &-c {
    align-items: center;
  }
  &-fe {
    align-items: flex-end;
  }
}

.text-align {
  &-center {
    text-align: center;
  }
  &-start {
    text-align: start;
  }
  &-end {
    text-align: end;
  }
}

.mt-0 {
  margin-top: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.over-flow--hidden {
  overflow: hidden;
}

.f-bold {
  font-weight: bold;
}
</style>

<style lang="scss" scoped>
#app {
  height: 100%;
  width: 100%;
}

.scoring {
  margin-left: 50px;
  &__btn {
    font-size: 20px;
    padding: 20px 20px;
    margin-right: 10px;
    border: 3px solid rgb(255, 187, 0);
    box-shadow: 2px 2px 4px 1px rgb(167, 167, 167);
    border-radius: 50%;
    font-family: 'Microsoft JhengHei';
    &:active {
      box-shadow: 2px 2px 2px 1px rgb(167, 167, 167);
      color: rgb(255, 252, 205);
    }
    &__score_up {
      background-color: rgb(255, 51, 51);
    }
    &__score_down {
      background-color: rgb(187, 170, 71);
    }
  }
}
</style>

