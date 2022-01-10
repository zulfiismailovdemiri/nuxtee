<template>
  <div>
    <div>
      <h3>Work with Components in nuxt3</h3>
      <h2><Greeting /></h2>
    </div>

    <hr>

    <div>
      <h3>Work with Composables in nuxt3</h3>

      <h4>Count: {{ count }}</h4>
      <button v-on:click="increment">Update Count</button>
    </div>
    <hr>
  </div>
</template>

<script setup>

  const { count, increment } = useCounter()

  useMeta({
    title: 'Ahoi'
  })

</script>