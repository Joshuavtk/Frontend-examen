<template>
  <div id="app">
    <Wrapper/>
  </div>
</template>

<script>
import Wrapper from './components/Wrapper';

export default {
    name: 'App',
    components: {
        Wrapper,
    },
};
</script>

<style lang="scss">
$primary: #ff008c;

@import '../node_modules/bootstrap/scss/bootstrap.scss';

html {
    background-color: black;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ff008c;
    margin-top: 60px;
    background-color: black;
}
</style>
