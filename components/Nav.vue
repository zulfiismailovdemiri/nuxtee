<template>
  <div>
    <div class="w-full shadow-2xl mb-12">
      <div class="flex flex-col lg:flex-row items-center w-10/12 mx-auto py-12">
        <div class="mb-12 lg:mb-0">
          <img class="h-12 w-auto" src="/foodee.svg" alt="">
        </div>
        <ul class="flex flex-col lg:flex-row w-full lg:w-auto lg:ml-auto">
          <li class="mr-4">
            <nuxt-link :to="{ name: 'index'}">Home</nuxt-link>
          </li>
          <li class="mr-4">
            <nuxt-link :to="{ name: 'about'}">About</nuxt-link>
          </li>
          <li class="mr-4" v-if="todos">
            <nuxt-link :to="{ name: 'todos'}">Service ({{ todos.length }})</nuxt-link>
          </li>
          <li class="mr-4">
            <nuxt-link :to="{ name: 'increment'}">Own API Service</nuxt-link>
          </li>
          <li class="mr-4">
            <nuxt-link :to="{ name: 'account'}">Account</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>

  const { data: todos } = await useFetch(`https://jsonplaceholder.typicode.com/todos`, {
    server: false
  })

</script>