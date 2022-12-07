<template>
  <div class="home">
    <main id="app" @mousemove="mousemove">
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
        ]
      }
    },
    methods: {
      mousemove (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let films = document.querySelectorAll('.films .film');

        for (let i = 0; i < films.length; i++) {
          let film = films[i];
          let film_image = film.querySelector('.film-image-wrap');

          let img_x = mouseX - this.coords(film_image).x;
          let img_y = mouseY - this.coords(film_image).y;

          film_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;

          let bgtext = film.querySelector('.bg-text');
          let bg_x = mouseX - this.coords(bgtext).x;
          bgtext.style.transform = `translateX(${bg_x/25}px)`;
        }
      },
      coords (el) {
        let coords = el.getBoundingClientRect();
        return {
          x: coords.left / 2,
          y: coords.top / 2
        }
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
    
    background-color: #F5F5F1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }

  .films {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }
</style>
 