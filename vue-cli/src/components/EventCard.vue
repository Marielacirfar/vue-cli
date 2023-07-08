<template>
    <div class="event-card">
      <!-- Agregar datos del evento -->
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      
      <img :src="event.image" alt="Evento" class="event-image" style="width: 100%; height: auto;">
    </div>
  </template>
  
  <script>
  export default {

    name: 'EventCard',
    props: {
      event: Object
    },
   
  }
  </script>
  
  <style>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    
  }
  .event-image {
  width: 100%; /* Ajusta el ancho de la imagen al 100% del contenedor */
  max-height: 250px; /* Establece un tamaño máximo para la altura de la imagen */
  object-fit: cover;
  border-radius: 50%; /* Aplica un recorte circular a la imagen */
}
  .event-card:hover {
    transform:  scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
   
  }
  </style>