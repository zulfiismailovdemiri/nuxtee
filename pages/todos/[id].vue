<template>
  <div>
    <div>
      <h3>Work with Fetch in nuxt3</h3>
      <h1>Todos with ID</h1>
    </div>
    {{ todo.title }} (ID: {{ todo.id }})
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