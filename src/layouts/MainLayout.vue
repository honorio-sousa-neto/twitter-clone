<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ currentRoute }}</span>
          <q-icon
            name="fas fa-dove" 
            color="primary"
            size="sm"
            class="header-icon q-ma-md lt-md"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="283">
      <q-icon
        name="fas fa-dove" 
        color="primary"
        size="lg"
        class="q-ma-md"
      />

      <q-list >
        <q-item 
          to="/"
          clickable 
          v-ripple
          size="md"
          exact
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            Home
          </q-item-section>

        </q-item>
        
        <q-item 
          to="/about"
          clickable 
          v-ripple
          size="md"
          exact
        >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">
            About
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input color="primary" class="q-ma-sm" outlined rounded dense placeholder="Search Qwitter">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list separator padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>HEALTH</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>HEALTH</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>HEALTH</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>HEALTH</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>HEALTH</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

       

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>HEALTH</q-item-label>
            <q-item-label class="text-weight-bold">Single line item</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    
    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    
    function toggleRightDrawer () {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }

    let currentRoute = ref('')
    currentRoute = computed(() => {
      return route.name
    })

    return {
      leftDrawerOpen,
      rightDrawerOpen,

      toggleLeftDrawer,
      toggleRightDrawer,
      
      currentRoute      
    }
  }
}
</script>
<style lang="sass">
  .header-icon
    position: absolute
    bottom: 0px
    left: 50%
    transform: translateX(-50%)
</style>