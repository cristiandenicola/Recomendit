<template>
  <header>
    <router-link to="/">
      <h1><span>RECO</span>MENDIT</h1>
    </router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import {RouterView } from "vue-router";
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;

  &::selection {
    background: transparentize($color: (#42B883), $amount: 0.5)
  }

body {
  background-color: #F7ECDE;
}

a {
  text-decoration: none;
}
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #E9DAC1;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);

  h1 {
    color: #54BAB9;
    font-size: 28px;

    span {
      color: #9ED2C6;
    }
  }
}
</style>