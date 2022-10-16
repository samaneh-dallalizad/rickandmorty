<script setup>

const props = defineProps({
  character: Object,
  active: Boolean
})

</script>

<template>
  <!--modal-->
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <!--header-->
      <header class="modal-card-head">
        <!--title/character_name-->
        <p class="modal-card-title">character: {{ character?.name }}</p>
        <!--close button-->
        <button class="button is-delete is-danger delete"
                aria-label="close"
                @click="$emit('close')">Close
        </button>
      </header>
      <!--body/content-->
      <section class="modal-card-body">
        <div class="columns">
          <!--character_image-->
          <div class="column is-4">
            <figure class="image is-128x128 mx-auto mb-10px">
              <img
                  class="is-rounded"
                  :src="character?.image"
                  alt="{{ character?.origin.name }}">
            </figure>
          </div>
          <div class="column is-8">
            <ul>
              <!--character_Origin-->
              <li><strong class="is-inline has-text-primary"> Origin: </strong> {{ character?.origin.name }}</li>
              <!--character_status-->
              <li><strong class="is-inline has-text-primary">Status: </strong> {{ character?.status }}</li>
              <!--character_gender-->
              <li><strong class="is-inline has-text-primary"> gender: </strong> {{ character?.gender }}</li>
              <!--character_species-->
              <li><strong class="is-inline has-text-primary"> species: </strong> {{ character?.species }}</li>
              <!--character_lacation-->
              <li><strong class="is-inline has-text-primary"> location: </strong> {{ character?.location.name }}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
