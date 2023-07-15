<template>
    <div v-if="event">
        <div class="event">
            <h1>{{ event.title }}</h1>
            <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
            <p>{{ event.description }}</p>
        </div>
    </div>
</template>
<script>

import EventService from '@/services/EventService.js'
export default {
    props: ['id'],
    data() {
        return {
            event: null 
        }
    },
    created() {
        //vamos a buscar el evento por su id y establecer nuestro data
        
    EventService.getEvent(this.id)
    .then(response => {
      this.event = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }    
}
</script>
<style scoped>
.event {
    display: flex;
    flex-direction: column;
    background-image: url("@/assets/fondo.jpg");
    align-items: center;
    background-size: cover; /* Ajustar tamaño de la imagen al contenedor */
    background-repeat: no-repeat; /* Evitar repetición de la imagen */
    margin-left: 30%;
    margin-right: 30%; 
    
  }

</style>

  