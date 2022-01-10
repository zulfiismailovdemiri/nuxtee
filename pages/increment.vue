<template>
  <div>
    <div class="mb-8">
      <h3 class="mb-8 text-4xl">Work with local api created in nuxt3</h3>
      <p><a class="text-blue-500 hover:text-blue-300 block pb-2" href="http://localhost:3000/api/increment">http://localhost:3000/api/increment</a></p>
    </div>
    <div class="text-2xl mb-4">
      Increment count function on reload.
    </div>
    <div class="text-2xl bg-amber-300 p-4">
      Page reviews: {{ data.count }}
    </div>

  </div>
</template>

<script setup>
  const { data } = await useFetch(`/api/increment`)

  console.log(data)
</script>