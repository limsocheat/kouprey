<template>
  <div>
    <v-container grid-list-xl>
      <v-layout wrap row>
        <v-flex xs12 md12 class="text-xs-center">
          <v-img
            :src="require('../assets/images/kouprey (1).png')"
            style="max-width: 500px;"
            class="mx-auto"
          ></v-img>
          <h2 class="text-uppercase">KOUPREY CREATIVE SOLUTIONS</h2>
          <h2 class="font-weight-light">
            is a Cambodia's renowned brand and indentity
            <br />design agency with a wide range or creative services
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid style="background-color: #ddd">
      <v-container grid-list-xl>
        <v-layout wrap row>
          <v-flex xs12 md4 v-for="(service, index) in services" :key="index">
            <v-hover>
              <v-card class="text-xs-center">
                <v-card-text>
                  <h2
                    class="text-uppercase font-weight-bold"
                    style="color: #be9b59"
                  >
                    {{ service.name }}
                  </h2>
                  Fashion & Beauty <br />F&B <br />Healthcare <br />Hospitality
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn block flat>Read More</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <WorkWithUs></WorkWithUs>
  </div>
</template>

<script>
import WorkWithUs from "@/components/WorkWithUs.vue";
export default {
  components: {
    WorkWithUs
  },
  data() {
    return {
      services: [
        {
          name: "Brand Strategy"
        },
        {
          name: "Brand Indentity Design"
        },
        {
          name: "Naming & Copywriting"
        },
        {
          name: "Packaging Design"
        },
        {
          name: "Marketing & Activation"
        },
        {
          name: "Digital Services"
        },
        {
          name: "Environmental Design"
        },
        {
          name: "Experiential Marketing"
        },
        {
          name: "Photography & Videography"
        }
      ]
    };
  }
};
</script>

<style></style>
