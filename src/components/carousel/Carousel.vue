<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselItem 
                v-for="(slide, index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :current-slide="currentSlide"
                :index="index">
            </CarouselItem>
        </div>
    </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';

export default {
        props: ['slides'],
    components: { CarouselItem },
    data: () => ({
        currentSlide: 0,
        slideInterval: null
    }),
    methods: {
        setCurrentSlide (index) {
            this.currentSlide = index;
        }
    },
    mounted () {
        this.slideInterval = setInterval(() => {
            const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
            this.setCurrentSlide(index);
        }, 3000)
    },
    beforeUnmount () {
        clearInterval(this.slideInterval);
    }
};
</script>

<style scoped>
.carousel {
    display: flex;
    justify-content: center;
    margin-top: 80px;
}

.carousel-inner {
    position:relative;
    width:1500px;
    height: 600px;
    overflow: hidden;
}
</style>