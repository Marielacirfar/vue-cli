<template>
  <router-link class="event-link"
  :to="{ name: 'EventDetails', params: { id: event.id } } ">
    <div class="event-card">
      <!-- Agregar datos del evento -->
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>

    </div>
  </router-link>
</template>

<script>

export default {
  name: "EventCard",
  props: {
    event: Object
  }
  
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
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 50%;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>