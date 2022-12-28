<template>
  <div class="home">
    <div id="carousel">
      <Carousel :slides="slides"></Carousel>
    </div>
    <div class="title-section">
        <h1>THE<span> MOST LIKED</span> MOVIES EVER</h1>
        <!--TODO vedere di aggiungere un separatore carino-->
    </div>
    <main id="app" @mousemove="mousemoveFilm">
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
    <div class="title-section" id="titleOTM">
        <h1>BEST MOVIES OF<span> 2022</span></h1>
        <!--TODO vedere di aggiungere un separatore carino-->
    </div>
    <div class="titles-of-the-2022" @mousemove="mousemoveFilmOTM">
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
import imageOTMTDoctorStrange from "@/assets/DoctorStrange.png";
import imageOTMOnepiece from "@/assets/Onepiece.png";
import imageOTMBlackadam from "@/assets/Blackadam.png";
import imageOTMThorLAT from "@/assets/ThorLAT.png";
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
            title: 'Doctor Strange',
            bgtext: 'MARVEL',
            color: 'yellow',
            src: imageOTMTDoctorStrange,
            plot: "To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone."
          },
          {
            title: 'Black adam',
            bgtext: 'DC',
            color: 'gray',
            src: imageOTMBlackadam,
            plot: "Nearly 5,000 years after being bestowed with the all-powerful powers of the Egyptian gods and just as quickly imprisoned, Black Adam is freed from his earthly grave, ready to unleash his justice upon the modern world."
          },
          {
            title: 'One Piece: Red',
            bgtext: 'ANIME',
            color: 'yellow',
            src: imageOTMOnepiece,
            plot: "The Straw Hats journey to Elegia island to see the iconic Uta in concert. But it's not all music and games as quickly chaos breaks out with the Big Mom pirates, Navy, Heart pirates, and more joining the fray. Luffy and Uta are old friends, but lives are at risk."
          },
          {
            title: 'Thor love and thunder',
            bgtext: 'MARVEL',
            color: 'purple',
            src: imageOTMThorLAT,
            plot: "Thor's quest for a dimension of inner peace is interrupted by the arrival of the galactic killer Gorr the God Butcher, bent on destroying all gods. Thor will thus join forces with Valkyrie, Korg and ex-girlfriend Jane Foster who will demonstrate his uniqueness to him."
          }
        ]
      }
    },
    methods: {
      mousemoveFilm (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let films = document.querySelectorAll('.films .film');

        for (let i = 0; i < films.length; i++) {
          let film = films[i];
          let film_image = film.querySelector('.film-image-wrap');

          let img_x = mouseX - this.coordsFilm(film_image).x;
          let img_y = mouseY - this.coordsFilm(film_image).y;

          film_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;

          let bgtext = film.querySelector('.bg-text');
          let bg_x = mouseX - this.coordsFilm(bgtext).x;
          bgtext.style.transform = `translateX(${bg_x/25}px)`;
        }
      },
      coordsFilm (el) {
        let coords = el.getBoundingClientRect();
        return {
          x: coords.left / 2,
          y: coords.top / 2
        }
      },
      mousemoveFilmOTM (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let filmsOTM = document.querySelectorAll('.filmsOTM .filmOTM');

        for (let i = 0; i < filmsOTM.length; i++) {
          let filmOTM = filmsOTM[i];
          let filmOTM_image = filmOTM.querySelector('.filmOTM-image-wrap');

          let img_x = mouseX - this.coordsOTM(filmOTM_image).x;
          let img_y = mouseY - this.coordsOTM(filmOTM_image).y;

          filmOTM_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;

          let bgtext = filmOTM.querySelector('.bg-text');
          let bg_x = mouseX - this.coordsOTM(bgtext).x;
          bgtext.style.transform = `translateX(${bg_x/25}px)`;
        }
      },
      coordsOTM (el) {
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

  

  #titleOTM{
    margin-top: -100px;
  }

  .title-section {
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
 