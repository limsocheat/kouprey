<template>
  <div>
    <v-container grid-list-md class="my-5">
      <v-layout wrap row>
        <v-flex xs12 class="text-xs-center">
          <h1 class="font-weight-black text-uppercase">Leadership</h1>
          <v-layout wrap row>
            <v-flex
              xs12
              md3
              v-for="(i, index) in 4"
              :key="index"
              class="text-xs-center"
            >
              <v-img
                :src="require('../../assets/images/kouprey (1).png')"
                cover
                cycle
              ></v-img>
              <h3 class="text-uppercase">Sao Phol Reaseyh</h3>
              <small>CEO</small>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="text-xs-center">
          <h1 class="font-weight-black text-uppercase">Team</h1>
          <v-layout wrap row>
            <v-flex
              xs12
              md3
              v-for="(i, index) in 16"
              :key="index"
              class="text-xs-center"
            >
              <v-img
                :src="require('../../assets/images/kouprey (1).png')"
                cover
                cycle
              ></v-img>
              <h3 class="text-uppercase">Sao Phol Reaseyh</h3>
              <small>CEO</small>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <JoinNewsletter />
  </div>
</template>

<script>
import JoinNewsletter from "@/components/JoinNewsletter";
export default {
  components: {
    JoinNewsletter
  },
  data() {
    return {
      leaders: [
        {
          name: "Sao Phol Reaseyh",
          position: "CEO"
        }
      ]
    };
  }
};
</script>

<style></style>
