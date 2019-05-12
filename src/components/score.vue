<template>
  <div class="outer_bulbs__container">
    <div class="outer_bulbs__block--horizon  over-flow--hidden">
      <div
        class="flex-r align-i-c outer_bulbs__block--horizon outer_bulbs__block--animation--top"
        :class="{'outer_bulbs__block--animation':currentScore > 14}"
      >
        <div
          class="bulb bulb--horizon"
          v-for="num in 24"
          :key="num"
          :class="{'bulb--active':num%5 !==0 && currentScore > 14}"
        ></div>
      </div>
    </div>
    <div class="flex-r">
      <div class="outer_bulbs__block--vertical over-flow--hidden">
        <div
          class="outer_bulbs__block--vertical outer_bulbs__block--animation--left flex-c align-i-c"
          :class="{'outer_bulbs__block--animation':currentScore > 14}"
        >
          <div
            class="bulb bulb--vertical"
            v-for="num in 100"
            :key="num"
            :class="{'bulb--active':num%5 !==0 && currentScore>14}"
          ></div>
        </div>
      </div>
      <div class="scoreCount__container flex-c-reverse">
        <div
          v-for="num in 20"
          :key="num"
          class="count__outter_block"
          :class="{'count__outter_block--clear_line':num === 14,'count__outter_block--first':num === 20}"
        >
          <div
            class="count__inner_block text-align-center"
            :class="{'count__inner_block__unclear_area--active':num<=currentScore && num<15,'count__inner_block__clear_area--active':num<=currentScore && num>14}"
          >
            {{ num }}
          </div>
        </div>
      </div>
      <div class="outer_bulbs__block--vertical over-flow--hidden">
        <div
          class="outer_bulbs__block--vertical outer_bulbs__block--animation--right flex-c align-i-c"
          :class="{'outer_bulbs__block--animation':currentScore > 14}"
        >
          <div
            class="bulb bulb--vertical"
            v-for="num in 100"
            :key="num"
            :class="{'bulb--active':num%5 !==0 && currentScore>14}"
          ></div>
        </div>
      </div>
    </div>
    <div class="outer_bulbs__block--horizon  over-flow--hidden">
      <div
        class="flex-r align-i-c outer_bulbs__block--horizon outer_bulbs__block--animation--bottom"
        :class="{'outer_bulbs__block--animation':currentScore > 14}"
      >
        <div
          class="bulb bulb--horizon"
          v-for="num in 24"
          :key="num"
          :class="{'bulb--active':num%5 !==0 && currentScore>14}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { store } from '../simpleStore'
export default {
  props: ['currentScore'],
  data() {
    return {}
  }
  // computed: {
  //   currentScore() {
  //     return store.currentScore
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.outer_bulbs {
  &__container {
    background-color: rgb(187, 170, 71);
  }
  &__block {
    &--horizon {
      width: 114px;
      height: 7px;
    }
    &--vertical {
      width: 7px;
      height: 585.4px;
    }

    &--animation {
      animation-duration: 500ms;
      animation-iteration-count: infinite;
      animation-timing-function: steps(5, start);
      &--top,
      &--bottom {
        animation-name: light-horizon;
      }
      &--left,
      &--right {
        animation-name: light-vertical;
      }
      &--left {
        animation-direction: reverse;
      }
      &--bottom {
        animation-direction: reverse;
      }
    }
  }
}

@keyframes light-horizon {
  0% {
    transform: translate(-30px);
  }

  100% {
    transform: translate(0px);
  }
}

@keyframes light-vertical {
  0% {
    transform: translate(0, -30px);
  }

  100% {
    transform: translate(0, 0px);
  }
}

.bulb {
  width: 4px;
  height: 4px;
  background-color: rgb(207, 194, 120);
  border-radius: 50%;
  flex-shrink: 0;
  &--horizon {
    margin-left: 1px;
    margin-right: 1px;
  }
  &--vertical {
    margin-top: 1px;
    margin-bottom: 1px;
  }
  &--active {
    background-color: rgb(255, 242, 168);
    filter: blur(1px);
  }
}

.scoreCount {
  &__container {
    width: 100px;
  }
}

.count {
  &__outter_block {
    padding-top: 5px;
    &--clear_line {
      border-top: 3px dashed #f00;
      padding-top: 2px;
      margin-top: 3px;
    }
    &--first {
      padding-top: 0;
    }
  }
  &__inner_block {
    background-color: rgb(212, 212, 212);
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 12px;
    &__unclear_area {
      &--active {
        background-color: rgb(255, 244, 183);
      }
    }
    &__clear_area {
      &--active {
        background-color: rgb(255, 86, 86);
      }
    }
  }
}
</style>
