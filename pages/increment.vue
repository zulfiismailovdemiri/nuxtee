<template>
  <div>
    <div>
      <h3>Work with separate local api created in nuxt3</h3>
      <small><a href="http://localhost:3000/api/increment">http://localhost:3000/api/increment</a></small>
      <hr>
    </div>
    Increment count function: {{ data.count }}
  </div>
</template>

<script setup>
  const { data } = await useFetch(`/api/increment`)

  console.log(data)
</script>