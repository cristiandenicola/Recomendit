<template>
  <div class="home">
    <main id="app">
      <section class="films">
        <Film
        v-for="film in films"
        :key="film.title"
        :film="film"
        />
      </section>
    </main>
  </div>
</template>

<script>
import Film from '@/components/Film.vue';
import imageAvatar from "@/assets/avatar.png";
import imageHarry from "@/assets/harry.png";
import imageLOTR from "@/assets/LOTR.png";

 export default {
    name: 'app',
    components: { 
      Film },
    data () {
      return {
        films: [
          {
            title: 'Avatar',
            bgtext: 'AVATAR',
            color: 'blue',
            src: imageAvatar
          },
          {
            title: 'Harry Potter and the half blood prince',
            bgtext: 'H-P',
            color: 'gray',
            src: imageHarry
          },
          {
            title: 'Lord of the rings',
            bgtext: 'LOTR',
            color: 'yellow',
            src: imageLOTR
          }
        ],
      }
    } 
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'montseratt', sans-serif;
  }

  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .films {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }
</style>
 