<template>
  <div>
    <v-container>
      <v-toolbar app>
        <router-link :to="{ name: 'home' }">
          <v-toolbar-title class="text-xs-center">
            <v-img
              small
              :src="require('../../assets/images/logo.png')"
              style="width: auto; height: 100%; min-width: 150px"
            ></v-img>
          </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-menu
            open-on-hover
            offset-y
            v-for="(menu, index) in menus"
            :key="index"
          >
            <template v-slot:activator="{ on }">
              <v-btn flat :to="{ name: menu.link }" v-on="on">
                {{ menu.title }}
                <v-icon v-show="menu.children">arrow_drop_down</v-icon>
              </v-btn>
            </template>
            <v-list v-show="menu.children" style="min-width: 250px">
              <v-list-tile
                v-for="(child, index) in menu.children"
                :key="index"
                :to="{ name: child.link }"
              >
                <v-list-tile-title>{{ child.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn flat @click.stop="drawer = !drawer" icon>
            <v-icon>menu</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>

    <v-navigation-drawer fixed v-model="drawer" temporary right>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <span class="headline text-uppercase">KOUPREY</span>
          <br />
          <small style="font-size: 12px">Creative Solutions</small>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="(menu, index) in menus"
          :key="index"
          :to="{ name: menu.link }"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menus: [
        {
          title: "Work",
          link: "work"
        },
        {
          title: "Services",
          link: "service"
        },
        {
          title: "About",
          link: "about",
          children: [
            {
              title: "Our Team",
              link: "about.team"
            }
          ]
        },
        {
          title: "Thought",
          link: "thought"
        },
        {
          title: "Contact",
          link: "contact"
        },
        {
          title: "More+",
          link: "more"
        }
      ]
    };
  }
};
</script>

<style></style>
