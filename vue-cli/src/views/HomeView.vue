<template>
  <div class="events">
    
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'HomeVue',
  components: {
    EventCard
  },
  data() {
    return {
      events: [
      {
        id: 5928101,
          category: 'bienestar animal',
          title:'Dia de adopcion de gatos',
          description: 'Encuentra a tu nuevo amiga felino en este evento.',
          location: 'San Francisco',
          date: 'Julio 08, 2023',
          time: '10:15',
          petAllowed: true,
          organizer:'Mariela Farina',
          image: require('@/assets/imagen.jpg')
          
      },
      {
        id: 8419988,
          category: 'alimentos',
          title:'Jardinería comunitaria',
          description: 'Unase a nosotros mientras cuidamos las plantas comestibles de la comunidad',
          location: 'Flora city',
          date: 'Julio 01, 2023',
          time: '11:00',
          petAllowed: true,
          organizer:'Gaton Carreras',
          image: require('@/assets/Alimentacion.jpg')
      },
      {
        id: 4582797,
          category: 'Sustentabilidad',
          title:'Sustentabilidad',
          description: 'Ayudar a recoger la basura a lo largo de la orilla.',
          location: 'Playa del carmen',
          date: 'Julio 03, 2023',
          time: '12:00',
          petAllowed: false,
          organizer:'Alvaro Dossio',
          image: require('@/assets/residuos.jpg')
      }

          
        
    
      ]
    }
  }
}

</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(207, 238, 207);
  
}


</style>

