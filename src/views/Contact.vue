<template>
  <div>
    <v-container grid-list-md class="py-5">
      <h1 class="text-uppercase font-wieght-black">Contact</h1>
      <v-layout wrap row>
        <v-flex xs12 md5>
          <v-img
            :src="require('../assets/images/kouprey (5).jpg')"
            cover
            style="max-height: 400px; width: auto"
          ></v-img>
        </v-flex>
        <v-flex xs12 md7>
          <v-img
            :src="require('../assets/images/kouprey (1).jpg')"
            cover
            style="max-height: 400px; width: auto"
          ></v-img>
        </v-flex>
        <v-flex xs12 class="text-xs-right">
          <p>
            <strong>Address:</strong> #587, Oknha Kleang Mueng Blvd,
            <br />Sangkat Tuol Sangke, Khan Tuol Kok, Phnom Penh
          </p>
          <p><strong>Mobile:</strong> (855) 89 960 980 / (855) 87 960 980</p>
          <p><strong>Email:</strong> info@kouprey.biz</p>
        </v-flex>
        <v-flex xs12>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.529744708809!2d104.90954431429287!3d11.58553134690648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951ac34d799f7%3A0xe34a0134e1d0a0c8!2sKOUPREY+Creative+Solutions!5e0!3m2!1sen!2skh!4v1559762633056!5m2!1sen!2skh"
            width="100%"
            height="600"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
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
  }
};
</script>

<style></style>
