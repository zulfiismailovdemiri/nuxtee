<template>
  <div>
    <div class="mb-12">
      <h3 class="mb-8 text-4xl">Work with Components in nuxt3</h3>
      <h2>Beispiel Componente: <Greeting /></h2>
    </div>

    <div>
      <h3 class="mb-8 text-4xl">Work with Composables in nuxt3</h3>

      <h4 class="mb-4 text-2xl">Count: {{ count }}</h4>
      <button class="p-4 text-white bg-purple-600 mb-2" v-on:click="increment">Update Count</button>
    </div>
  </div>
</template>

<script setup>

  const { count, increment } = useCounter()

  useMeta({
    title: 'Ahoi'
  })

</script>