<template>
  <main class="container-movie">
    <router-view class="body"/>
  </main>  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" >
@import './assets/css/Generic/reset.css';
@import './assets/css/Generic/base.scss';
@import './assets//css//Settings/colors.scss';

.container-movie{
  background-color: #09212A;
  height: 100%;
}
</style>
