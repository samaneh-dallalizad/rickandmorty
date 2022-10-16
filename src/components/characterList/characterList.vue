<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useStore } from 'vuex';
  import characterDetail from '../characterDetail/characterDetail.vue'

  const store = useStore();
  const characters = computed(() => store.state.characters);
  onMounted(() => {
    store.dispatch('getCharacters')
  })
  let character=ref(null)
  let active=ref(false)

  const showModal = (selectedCharacter) => {
    character.value = selectedCharacter
    active.value = true;
  }

  const closeModal = () => {
    active.value = false;
  }

</script>
<template>
  <!--if characters more than 0-->
  <section v-if="characters.length>0" >
  <!--details-->
    <characterDetail
        :character="character"
        :active="active"
        @close="closeModal"/>
  <!--list-->
    <h1 class="has-text-warning mb-6 has-text-centered is-family-monospace" > Rick and Morty </h1>
    <!--container-->
    <div class="container">
      <!--columns-->
      <ul class="columns is-multiline">
        <li class="column is-3" v-for="character in characters" >
          <!--card-->
          <div class="card p-0 is-clickable" @click="showModal(character)">
            <!--card image-->
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="character.image">
              </figure>
            </div>
            <!--card content-->
            <div class="card-content">
              <ul>
                <li><strong class="has-text-white">{{ character.name }}</strong></li>
                <li><strong class="has-text-white">episodes:</strong> <span class="tag has-background-primary mt-4">{{character.episode.length}} </span></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!--if characters more than 0-->
  <section v-else class="notification is-warning is-fullwidth">OOps! some thing wrong has happened</section>
</template>
<style scoped>
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

.card {
  padding: 2em;
  background:rgb(128 128 128 / 40%);
}

</style>