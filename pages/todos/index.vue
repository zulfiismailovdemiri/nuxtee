<template>
  <div>

    <h3 class="mb-8 text-4xl">Work with Fetch in nuxt3</h3>
    <h1 class="font-bold text-2xl mb-8">Todos</h1>

    <template v-if="todos">
      <div v-for="todo in todos" :key="todo.id">

        <nuxt-link :to="{ name: 'todos-id', params: {  id: todo.id }}">
          <a class="text-blue-500 hover:text-blue-300 block pb-2">
            {{ todo.title }}
          </a>
        </nuxt-link>

      </div>
    </template>

    <div v-else>
      Loading...
    </div>


  </div>
</template>

<script setup>

  const { data: todos } = await useAsyncData('todos', () => $fetch(`https://jsonplaceholder.typicode.com/todos`), {
    defer: true
  })

  // const { data: todos } = await useFetch(`https://jsonplaceholder.typicode.com/todos`)

</script>