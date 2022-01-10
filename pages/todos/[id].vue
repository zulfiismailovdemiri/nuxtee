<template>
  <div>
    <div>
      <h3 class="mb-8 text-4xl">Work with Fetch in nuxt3</h3>
      <h1 class="font-bold text-2xl mb-8">Todos with ID</h1>
    </div>
    <h2 class="text-3xl">
      {{ todo.title }} (ID: {{ todo.id }})
    </h2>

  </div>
</template>

<script setup>
  const route = useRoute()
  const { data: todo } = await useFetch(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`, {
    pick: ['id', 'title']
  })
  useMeta({
    //reactive todo. use value
    title: todo.value.title
  })
</script>