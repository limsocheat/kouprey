<template>
  <div>
    <v-container fluid style="background-color: #092e48">
      <v-container grid-list-xl dark color>
        <v-layout wrap row>
          <v-flex xs12 md6 class="text-xs-left">
            <h2
              class="display-1 font-weight-black text-uppercase"
              style="color: #be9b59"
            >
              We Love Spreading
              <br />Good Idea!
            </h2>
          </v-flex>
          <v-flex xs12 md6 class="text-xs-right">
            <h3
              class="heading font-weight-black text-uppercase"
              style="color: #be9b59"
            >
              Join Our Newsletter!
            </h3>
            <v-text-field
              label="Enter your email"
              solo
              append-outer-icon="send"
              dark
              @click:append-outer="joinNewsletter"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    joinNewsletter() {
      alert("Thanks for joining us.");
    }
  }
};
</script>

<style></style>
