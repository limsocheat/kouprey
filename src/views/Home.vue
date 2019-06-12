<template>
  <div>
    <v-parallax
      height="450"
      :src="require('../assets/images/kouprey (1).jpg')"
      style="padding: 0"
    ></v-parallax>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 md6>&nbsp;</v-flex>
        <v-flex xs12 md6>
          <p style="text-align: justify">{{ dummy }}</p>
        </v-flex>
        <v-flex xs12 md12>
          <div class="mb-5">
            <h2 class="display-1 font-weight-bold mr-5" style="float: left">
              OUR STORY
            </h2>
            <h3 class="mr-5" style="float: left;">MISION</h3>
            <h3 class="mr-5" style="float: left;">VISION</h3>
            <h3 class="mr-5">CORE VALUE</h3>
          </div>
          <p>{{ dummy }}</p>
          <p>{{ dummy }}</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid style="background-color: #ddd">
      <v-container grid-list-xl>
        <v-layout row justify-space-around>
          <v-flex xs12 md4 class="text-xs-center">
            <h1
              class="display-4 font-weight-medium text-uppercase"
              style="color: #9c8400"
            >
              40+
            </h1>
            <h3 class="display-1 font-weight-black text-uppercase">Staff</h3>
          </v-flex>
          <v-flex xs12 md4 class="text-xs-center">
            <h3 class="display-1 font-weight-black text-uppercase">
              In Numbers
            </h3>
            <h1
              class="display-4 font-weight-medium text-uppercase"
              style="color: #9c8400"
            >
              900+
            </h1>
            <h3 class="display-1 font-weight-black text-uppercase">Clients</h3>
          </v-flex>
          <v-flex xs12 md4 class="text-xs-center">
            <h1
              class="display-4 font-weight-medium text-uppercase"
              style="color: #9c8400"
            >
              5+
            </h1>
            <h3 class="display-1 font-weight-black text-uppercase">Years</h3>
            <h4 class="heading font-weight-black text-uppercase">
              In Business
            </h4>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <v-container grid-list-xl class="pa-5">
      <v-layout row wrap class="pa-5">
        <v-flex xs12 md12 class="text-xs-center">
          <h2 class="display-1 font-weight-black text-uppercase">
            Together with our clients, we build thoughful indetities and
            experiences, strong visual language stir up curiosity and emotions.
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid style="background-color: #092e48">
      <v-container grid-list-xl dark color>
        <v-layout wrap row justify-space-around>
          <v-flex xs12 md12 class="text-xs-center">
            <h2
              style="color: #fff"
              class="display-1 font-weight-black text-uppercase"
            >
              Timeline
            </h2>
          </v-flex>
          <v-flex xs12 md12>
            <v-layout wrap row>
              <v-flex
                xs12
                md4
                v-for="(timeline, index) in timelines"
                :key="index"
              >
                <div :key="index">
                  <v-btn
                    depressed
                    color="warning"
                    style="margin: 0 !important"
                    >{{ timeline.year }}</v-btn
                  >
                  <v-img
                    :lazy-src="timeline.image"
                    :src="timeline.image"
                    width="100%"
                    contain
                  ></v-img>
                  <div style="color: #fff; padding-top: 20px">
                    {{ timeline.description }}
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <v-container grid-list-xl>
      <v-layout wrap row>
        <v-flex xs12 md12>
          <h2 class="display-1 font-weight-black text-uppercase">
            We Create
            <br />A great office culture & <br />A Great Place To Work!
          </h2>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-left">
          <v-img
            :src="require('../assets/images/kouprey (5).jpg')"
            class="my-5"
            style="max-width: 500px"
          ></v-img>
          <h3 class="heading font-weight-black text-uppercase">
            Flourish
            <br />creativities
          </h3>
        </v-flex>
        <v-flex xs12 md6>
          <h3 class="heading font-weight-black text-uppercase">
            Space
            <br />Which you to breath
          </h3>
          <v-img
            :src="require('../assets/images/kouprey (3).jpg')"
            class="my-5 text-xs-right"
            style="max-width: 500px"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout wrap row>
        <v-flex xs12 md12 class="text-xs-center">
          <h2 class="display-1 text-uppercase">Explore More:</h2>
          <h2 class="display-1 font-weight-black text-uppercase">Our Team</h2>
          <h2 class="display-1 font-weight-black text-uppercase">
            Our Client Director
          </h2>
          <h2 class="display-1 font-weight-black text-uppercase">
            Press / Award / Recoginisation
          </h2>
          <h2 class="display-1 font-weight-black text-uppercase">CSR</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <JoinNewsletter></JoinNewsletter>
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
      dummy:
        "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. Our notable clients include AEON Specialized Bank, AIA Insurance, ISI Group, Chakreyting Cement Factory and many more. Additionally, we create new brand identity for hundreds of local and international clients. Aside from our expertise in brand identity design, we are well-known for good services, processes as well as our contributions to the society. Our brand and working culture are unique and strong, which leads to the success of attracting top local talents.",
      timelines: [
        {
          year: 2014,
          description: "around 40 sqm",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/57176881_2220424688174259_8021028292033249280_n.jpg?_nc_cat=100&_nc_eui2=AeGfRTiWBREfTUCOleQdb2Wauu1LxW2tyZPtHLHEfJgb94GmiLpvOVYWOk-Lf8TrzXiTHVyK9poJc6UKDliFycgQYYGY5l0XjBA3Yh-D0YWdTA&_nc_oc=AQkg_xurqmt1irV_LjJuClthnwoA5S7xddFuql_uKmZfkN0pF4Ky03QaPDTFBzJWyM4&_nc_ht=scontent.fpnh8-2.fna&oh=de4f335c038b6f4f9d56984ff825418f&oe=5D8D114A"
        },
        {
          year: 2015,
          description: "around 100 sqm",
          image:
            "https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/46972260_2138495756367153_2783434924328222720_n.jpg?_nc_cat=111&_nc_eui2=AeFk_ZShRgjGH6-su4OS6OjhwO53-XaGoULXCFdYX4P_yrl3w2qfLI6RJwxqLrKnQIIYrWaZCyLnz67QLUYSlxM-Iwy7x6c4ZIyQcrU00tDtgQ&_nc_oc=AQlRTXV9QmRMZKnV8UVEtu9wRNkqyAsnZhs4dWJsG_SjuYiar6Lrzr1RreN62ciQdUs&_nc_ht=scontent.fpnh8-1.fna&oh=ec7a76741f8f3a1bc7f9ef3b94987ec8&oe=5D82BA0E"
        },
        {
          year: 2018,
          description: "around 350 sqm",
          image:
            "https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/46787674_2138495796367149_4089257213133062144_n.jpg?_nc_cat=105&_nc_eui2=AeFWOUd0knbiurjVXdFKQuL85Jae_dLXJ86eG22sHPd_Mi5Yy9BazLU7EIMW3ioNRiuqMnCMknV7bMMZIBtvOI_pVMybQdVrjtYJ_de3oGKk4A&_nc_oc=AQmq5-gSiAo6kn2bPKaAFW6LEtgHFLNCbp9qEfXMtw7829sOS4K-Zbqck8u1I2ZI1oI&_nc_ht=scontent.fpnh8-1.fna&oh=d256009f6e6465bd12ef8c07e80e8904&oe=5D8C133B"
        }
      ]
    };
  }
};
</script>
