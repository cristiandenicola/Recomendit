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
    background: transparentize($color: (#E50914), $amount: 0.5)
  }

body {
  background-color: #F5F5F1;
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
  background-color: #F5F5F1;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);

  h1 {
    color: #B81D24;
    font-size: 28px;

    span {
      color: #221F1F;
    }
  }
}
</style>