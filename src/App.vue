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

  label {
    color: #333;
  }

  input {
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
}
</style>
