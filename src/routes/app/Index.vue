<template>
  <div>
    <sidebar :items="sidebarItems" expand-on="click" :lock-sidebar-btn="true" :title="$store.state.title"
      title-link="/home" :show-logo="true" logo="vue-crud-avatar.png" sidebar-color="primary" :sidebar-dark="true"
      title-color="white" :title-dark="false" nav-color="secondary">
      <template slot="nav">
        <v-list-item-action>
          <v-icon color="secondary">person</v-icon>
        </v-list-item-action>
        <v-list-item-title class="white--text">Hata User</v-list-item-title>
      </template>
      <template slot="over">

      </template>

      <template slot="under"></template>

    </sidebar>
    <toolbar :profile-btn="profile" :locales-btn="true" :logout-btn="true" color="primary" :dark="true">
      <template slot="left">
        <div class="headline d-none d-md-inline">
          <template v-if="$store.state.app.module != null">
            {{ $t('global.routes.' + $store.state.app.module) }}
          </template>
          <template v-if="$store.state.app.page != null">
            <v-icon slot="divider">forward</v-icon>
            {{ $t('global.routes.' + $store.state.app.page) }}
          </template>
        </div>
      </template>
    </toolbar>
    <v-content class="content">
      <v-container fluid fill-height class="main-container">
        <v-layout style="width:100%">
          <v-flex xs12>
            <v-card flat class="main-card">
              <v-card-text class="content-container">

                <router-view style="margin: 0 auto;"></router-view>

                <alert-box></alert-box>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <footnote v-if="footer" color="secondary" :dark="true">
      <template slot="left">
        Hesderim. Bo sader oti!
      </template>
      <template slot="center">
        &#128057; Disney Task Force
      </template>
      <template slot="right">
        {{ year }}
      </template>
    </footnote>
    <back-top></back-top>
    <profile v-if="profile"></profile>
  </div>
</template>

<script>
import Sidebar from '@/utils/app/components/Sidebar.vue'
import Toolbar from '@/utils/app/components/Toolbar.vue'
import AlertBox from '@/utils/app/components/AlertBox.vue'
import Footnote from '@/utils/app/components/Footnote.vue'
import BackTop from '@/utils/app/components/BackTop.vue'
import Profile from '@/utils/app/components/Profile.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data: () => ({
    profile: true,
    footer: true,
    sidebarItems: [
      {
        icon: "people",
        text: "crm.name",
        model: false,
        route: "/info",
        children: [
          {
            text: 'crm.people',
            route: '/People'
          },
          {
            text: 'crm.sites',
            route: '/Sites'
          },
          {
            text: 'crm.triplets',
            route: '/Triplets'
          },
        ]
      },
      {
        icon: "people",
        text: "infra.name",
        model: false,
        route: "/info",
        children: [
          {
            text: 'infra.countries',
            route: '/Countries'
          },
          {
            text: 'infra.sexes',
            route: '/Sexes'
          },
        ]
      },
    ],
  }),
  computed: {
    ...mapGetters('auth', [
      'isLogged',
      'userInfo',
    ]),
    year() {
      let year = new Date()
      return year.getFullYear()
    },
  },
  components: {
    Sidebar,
    Toolbar,
    AlertBox,
    Footnote,
    BackTop,
    Profile,
  },
}
</script>
<style scoped>
.main-container {
  padding: 10px 0 0 0;
  background-color: white;
}

.content {
  min-height: 100vh;
  overflow-x: auto;
  background-color: white;
}

.main-card {
  background-color: white;
}

.card-title {
  padding: 0;
}

.content-container {
  margin-bottom: 100px;
  padding: 0;
}

.headline {
  padding-bottom: 10px;
}
</style>
