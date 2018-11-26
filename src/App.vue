<template>
  <main class="container-movie">
    <transition name="fade" mode="out-in">
      <router-view class="body"/>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" >
@import './assets/css/Generic/reset.css';
@import './assets/css/Generic/base.scss';
@import './assets//css//Settings/colors.scss';

.container-movie{
  background-color: $color-dark-base;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
