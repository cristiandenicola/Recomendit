<template>
  <div class="home">
    <div id="carousel">
      <Carousel :slides="slides"></Carousel>
    </div>
    <div id="title-section">
        <h1>THE<span> MOST LIKED</span> MOVIE EVER</h1>
        <!--TODO vedere di aggiungere un separatore carino-->
    </div>
    <main id="app" @mousemove="mousemove">
      <div class="best-of">
        <section class="films">
          <Film
            v-for="film in films"
            :key="film.title"
            :film="film"
          />
        </section>
      </div>
    </main>
    <div class="titles of the moment">
        <section class="filmsOTM">
          <FilmOTM
            v-for="filmOTM in filmsOTM"
            :key="filmOTM.title"
            :filmOTM="filmOTM"
          />
        </section>
      </div>
  </div>
</template>

<script>
import Carousel from '../components/carousel/Carousel.vue';
import Film from '@/components/Film.vue';
import FilmOTM from '@/components/FilmOTM.vue';
import imageAvatar from "@/assets/avatar.png";
import imageHarry from "@/assets/harry.png";
import imageLOTR from "@/assets/LOTR.png";
import imageAvengers from "@/assets/Avengers.png";
import imageOTMwednesday from "@/assets/wednesday.png";
import slide1 from "@/assets/batman2slide.jpg"; 
import slide2 from "@/assets/venom2slide.jpg"; 
import slide3 from "@/assets/spiderslide.jpg"; 
import slide4 from "@/assets/interstellarslide.jpg";

 export default {
    name: 'app',
    components: { 
      Film, Carousel, FilmOTM },
    data () {
      return {
        films: [
          {
            title: 'Avatar',
            bgtext: 'AVATAR',
            color: 'blue',
            src: imageAvatar,
            plot: "Former Marine Jake Sully has been recruited for a mission to the planet Pandora to recover Earth's dwindling natural resources. Unexpectedly he finds himself wanting to protect the magical world to which he feels strangely connected."
          },
          {
            title: 'Harry Potter and the h.b prince',
            bgtext: 'H-P',
            color: 'gray',
            src: imageHarry,
            plot: "Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects that dangers may even lurk within the castle, but Dumbledore is determined to prepare for the final confrontation that seems imminent."
          },
          {
            title: 'Lord of the rings',
            bgtext: 'LOTR',
            color: 'yellow',
            src: imageLOTR,
            plot: "Sauron, the dark lord, has awakened and threatens to conquer Middle-earth. To stop him once and for all, Frodo Baggins must destroy the One Ring in the fires of Mount Doom. Men, Hobbits, a Wizard, an Elf and a Dwarf form a fellowship to help him on his quest."
          },
          {
            title: 'Avengers: End-game',
            bgtext: 'MARVEL',
            color: 'purple',
            src: imageAvengers,
            plot: "The Avengers have to deal with the consequences of their failure but the arrival of Captain Marvel to their aid prompts them to try a new move against Thanos. A film that bravely talks about reacting to failure and mourning and how this changes the various superheroes."
          }
        ],
        slides: [
          slide1,
          slide2,
          slide3,
          slide4
        ],
        filmsOTM: [
          {
            title: 'Wednesday',
            bgtext: 'NETFLIX',
            color: 'yellow',
            src: imageOTMwednesday,
            plot: "Former Marine Jake Sully has been recruited for a mission to the planet Pandora to recover Earth's dwindling natural resources. Unexpectedly he finds himself wanting to protect the magical world to which he feels strangely connected."
          },
          {
            title: 'Harry Potter and the h.b prince',
            bgtext: 'H-P',
            color: 'gray',
            src: imageHarry,
            plot: "Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects that dangers may even lurk within the castle, but Dumbledore is determined to prepare for the final confrontation that seems imminent."
          },
          {
            title: 'Lord of the rings',
            bgtext: 'LOTR',
            color: 'yellow',
            src: imageLOTR,
            plot: "Sauron, the dark lord, has awakened and threatens to conquer Middle-earth. To stop him once and for all, Frodo Baggins must destroy the One Ring in the fires of Mount Doom. Men, Hobbits, a Wizard, an Elf and a Dwarf form a fellowship to help him on his quest."
          },
          {
            title: 'Avengers: End-game',
            bgtext: 'MARVEL',
            color: 'purple',
            src: imageAvengers,
            plot: "The Avengers have to deal with the consequences of their failure but the arrival of Captain Marvel to their aid prompts them to try a new move against Thanos. A film that bravely talks about reacting to failure and mourning and how this changes the various superheroes."
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
    
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
    max-width: 1500px;
  }

  .films {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }

  .filmsOTM {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }

  #title-section {
    text-align: center;
    margin-top: 150px;
  }

  h1 {
    color: #F5F5F1;
    visibility: visible;
    font-size: 28px;

    span {
      color: #B81D24;
    }
  }
</style>
 