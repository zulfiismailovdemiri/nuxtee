<template>
  <div>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'index'}">Home</nuxt-link>
        <nuxt-link :to="{ name: 'about'}">About</nuxt-link>
        <nuxt-link :to="{ name: 'todos'}">Service</nuxt-link>
        <nuxt-link :to="{ name: 'account'}">Account</nuxt-link>
      </li>
    </ul>
  </div>
</template>