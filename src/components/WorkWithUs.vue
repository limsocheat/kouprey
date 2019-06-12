<template>
  <div>
    <v-container grid-list-md fluid style="background-color: #092e48">
      <v-container dark color>
        <v-layout wrap row>
          <v-flex xs12 md6 class="text-xs-left">
            <h2
              class="display-1 font-weight-black text-uppercase"
              style="color: #be9b59"
            >
              Interested To
              <br />Work with us?
            </h2>
          </v-flex>
          <v-flex xs12 md12>
            <v-text-field
              v-model="item.subject"
              label="LET US KNOW WHAT YOU ARE INTERESTED IN: "
              box
              dark
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="item.name"
              label="FULL NAME "
              box
              dark
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="item.email"
              label="EMAIL "
              box
              dark
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="item.cmmpany"
              label="COMPANY "
              box
              dark
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="item.budget"
              label="ESTIMATE BUDGET "
              box
              dark
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md12>
            <v-textarea
              v-model="item.detail"
              label="LET US KNOW YOUR PROBLEM IN DETAIL"
              box
              dark
            ></v-textarea>
          </v-flex>
          <v-flex xs12 md12 class="text-xs-right">
            <v-spacer></v-spacer>
            <v-btn @click="submit"> <v-icon left>send</v-icon>Submit </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.item));
    }
  }
};
</script>

<style></style>
