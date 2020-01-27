<template>
  <div id="app" class="app__center">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px;
}

.app {
  width: 100%;

  &__center {
    display: flex;
    justify-content: center;
  }
}

.form-control {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-items: flex-start;
  margin-bottom: 20px;

  &__input {
    outline: none;
    border: 1px solid #CCC;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    border-radius: 4px;
    font-size: 18px;
  }

  &__disabled {
    background: #EEE;
  }

  &__label {
    color: #333;
  }

  &__switch {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  &__switch-label {
    cursor: pointer;
    text-indent: -9999px;
    width: 80px;
    height: 40px;
    background: grey;
    display: block;
    border-radius: 50px;
    position: relative;
  }

  &__switch-label:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 30px;
    transition: 0.3s;
  }

  &__switch:checked + .form-control__switch-label {
    background: #bada55;
  }

  &__switch:checked + .form-control__switch-label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  .form-control__switch-label:active:after {
    width: 130px;
  }
}
</style>
