<template>
  <v-app>
    <Header></Header>
    <!-- <v-content>
			<v-container fluid>
			<router-view></router-view>
			</v-container>
		</v-content>-->
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./components/master/Header";
import Footer from "./components/master/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style>
img {
  max-width: 100%;
}
</style>
