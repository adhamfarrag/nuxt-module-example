<template>
  <div class="m-10">
    <ul v-for="item in items" :key="item.id">
      <li>{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums'
    )
    const items = response.data.slice(0, 5)

    return {
      items,
    }
  },
}
</script>