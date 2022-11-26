<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
     

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Joint DB Cloud - Testing
        </v-card-title>

      <v-card-text>
        Welcome to the inital testing of the joint cloud. 
        Use the sidebar to explore.
      </v-card-text>
      <v-card-text>

        Disclaimer: this is a POC.
        DO NOT upload sensitive information.
      </v-card-text>
      <v-card-text>

      DO NOT upload sensitive information.
</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$router.push('/info/People')">
            Yalla Let's go
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {
  mapMutations,
} from 'vuex'

export default {
  data() {
    return {
      dialog:true,
    }
  },
  created() {
    this.setModule('home.name')
    this.setPage(null)
  },
  methods: {
    ...mapMutations('app', [
      'setModule',
      'setPage',
    ]),
  },
}

</script>
