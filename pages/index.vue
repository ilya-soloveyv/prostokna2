<template>
  <section>
    <h1 class="title">
      USERS
    </h1>
    <ul>
        <li><nuxt-link to="/contact">contact</nuxt-link></li>
        <li><nuxt-link to="/brands">Brands</nuxt-link></li>
    </ul>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsum, minima ullam incidunt pariatur expedita dolorem explicabo hic optio vero sint quo, iste architecto voluptates doloribus quaerat? Dolor, harum accusantium.</div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>
