<template>
  <div class="events">
    
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'


export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
    .then(response => {
      this.events = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}

</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/fondo.jpg");
  align-items: center;
  background-size: cover; /* Ajustar tamaño de la imagen al contenedor */
  background-repeat: no-repeat; /* Evitar repetición de la imagen */
  
  
}


</style>

