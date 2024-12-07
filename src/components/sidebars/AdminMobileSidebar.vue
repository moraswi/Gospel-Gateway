<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>

        <!-- People -->
        <v-list-item value="home">
          <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>People</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="d-flex justify-end align-center h-100">

      <v-icon
          large
          color="black darken-2"
          @click.stop="drawer = !drawer"
        >
        mdi-menu
        </v-icon>
      </div>

    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
