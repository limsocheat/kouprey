<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 class="text-xs-left">
          <h1 class="font-weight-black text-uppercase">Our Works</h1>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-right">
          <h2 class="font-weight-black text-uppercase">Filter Works:</h2>
        </v-flex>
        <v-flex xs12>&nbsp;</v-flex>
        <v-flex xs12 md6 v-for="(work, index) in works" :key="index">
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto" flat>
              <v-img
                :src="work.image"
                :lazy-src="work.image"
                cover
                aspect-ratio="1.7"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out indigo darken-4 v-card--reveal text-xs-center text-xs-middle py-5"
                    style="height: 100%;"
                  >
                    <h2 class="display-2 white--text">{{ work.name }}</h2>
                    <br />
                    <v-btn :to="{ name: 'work.single' }">Read More</v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
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
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      works: [
        {
          name: "Work 1",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46287837_2131856357031093_929737493325021184_n.jpg?_nc_cat=101&_nc_eui2=AeFwBXOKTiFyZt3iAiaf8uob-Wt-_JcUKbMcvxrS5dnzerHfiRcTt_HtTZxDbGvKYXmARa5bt66FDywlXJ3iU4hfr-lLuBWiFr-qiA9Lyk4HXw&_nc_oc=AQmTOIi-aPCjehaWrTukjQrYBfzYgNMNcAlraXUMy97mJHuhI2_2K3aL-3h2H0qmZHQ&_nc_ht=scontent.fpnh8-2.fna&oh=8a139e07124b394321fe7b71c9fd6b4b&oe=5D5588AD"
        },
        {
          name: "Work 2",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46285301_2131856337031095_6968617947094843392_n.jpg?_nc_cat=104&_nc_eui2=AeHHjRO67j4Aq-E3LvhwaHgA4AqFfrL7o9e6iuQ6uYoendryhc6pTbnBFrPsyv47kulVJO7Hvvh-D0wB6iHiAVXiOhx-JRXnH9zn67kVxgEZBg&_nc_oc=AQnE7EYPxahBRZd16xj2FWEta2Z5R5gHMLtQOzOlZrAU8F0rY8A2zBfsPFrt-tek81A&_nc_ht=scontent.fpnh8-2.fna&oh=6b4ee749abfc085ad4b44b127b4df285&oe=5D9A149B"
        },
        {
          name: "Work 3",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46440613_2131856323697763_201124775781728256_n.jpg?_nc_cat=110&_nc_eui2=AeGm7ziZmfE50gTMXhkwQ6mGL-bix1E7eSE9s1vGUhfKTXQ2dZraJIocFgD846BpGmmgjhf6Q9rP7TSm4i88zM-vvSAMKZYR2nMD2jA6KTrFLQ&_nc_oc=AQk1KIbQ7kPm_j7GFUVDDvKoVOcEhsVSf_03u0NwvFN8aYH_Ti7wHhVWP0JlOOclXjc&_nc_ht=scontent.fpnh8-2.fna&oh=c7c77cd98af9f37503eca53a18e4cd94&oe=5D8453D4"
        },
        {
          name: "Work 4",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46400408_2131856137031115_8916770676828798976_n.jpg?_nc_cat=108&_nc_eui2=AeENFAZW3IzZg4H8ucmJSHRNKmXUVjAqCKR1nflGrs_W6G2J6yb11cvbrntvL5Ptu56K_dJP6c5jl5XLeuatg05KHyMZQy0y7CUlMRY17OySPg&_nc_oc=AQm0UVaoqFf1uew5CLN7Y_Hoo61yEQxw65kNw6x7ZY_ZYZZvx47oy3S_rMLrDwIX7VU&_nc_ht=scontent.fpnh8-2.fna&oh=f2cfb54c6f44616e8be546736b9f4ce3&oe=5D51A319"
        },
        {
          name: "Work 5",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46407379_2131856100364452_6424094726223298560_n.jpg?_nc_cat=100&_nc_eui2=AeEveeRpUnHYFcAXavpWbMabMJ1z87jCn_6z48l89zN8beZtHIvo8vSJugmn7DF_QVUwD7Ti8gG-6fFIPIWbfuBiw6dVOVjpEE8WjU97QSyBZw&_nc_oc=AQk-FMJl3wJ28C-Ut3uG7wrhaEOXSxh_X2b9R1dWkqh3wuv_xFnsRvhpUPyZ4JGHDBE&_nc_ht=scontent.fpnh8-2.fna&oh=52818a12e87a614811f7cf027bf95f8c&oe=5D9E5596"
        },
        {
          name: "Work 6",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/44653843_2119126004970795_228859144843558912_n.jpg?_nc_cat=110&_nc_eui2=AeFKwnSuOeUrv59QsIiTQajFmoZpJ7HmVrcXjG5PR7Ba8WdcCkSt-4uY34bJq0UJFokl8R9qVX94V5Pg9skI7Fq5YlmQQwTEnBnIuiLpfb6E2A&_nc_oc=AQlKseuZKW-OZvHugCrGe7v9AeWK-laJIA6uxCPX_H4srGcUvFyR4K1ZDha6BzGfo5o&_nc_ht=scontent.fpnh8-2.fna&oh=3b33c594ebe212488288ed9820aed927&oe=5D56A5F9"
        },
        {
          name: "Work 7",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/44307963_2117628701787192_3994236297274195968_n.jpg?_nc_cat=100&_nc_eui2=AeGhNID6J0I06EpcIIhvybVEpAR0WV6BqZ7Tp9gSalzNQisWmqa3byf2EtHV4gwRW1AyaszteXJEBhKgVrjDeFLXXGWRfNOWpXmdxXky0DR_bg&_nc_oc=AQngUFjHzE5K-WDJxNDNHLDxn10I4BbVy1jrmsMBYOit0LJNC57PDkfzAG6-eKgNA7I&_nc_ht=scontent.fpnh8-2.fna&oh=6285873beeb4eeb5b1445d9d50fa66f7&oe=5D93AF43"
        },
        {
          name: "Work 8",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/38760466_2074188042797925_2180339306000809984_n.png?_nc_cat=107&_nc_eui2=AeGxkt1PpBulHhlPBCUChHonkb9dhu82jvv2hGi8Ma0lXOqSHwa0GgMy79oKG0L0ui8K3Z-nFqSpRrAwvopPEfUjabmkS1fJGRDpqw-bqJzB5A&_nc_oc=AQm2k1lOvtUiUoQ4L4cMn2iXZ1k4XIhPgMsoZ3YSEOJ6R_YwYI5-MluTvx4fA8LccFI&_nc_ht=scontent.fpnh8-2.fna&oh=503d8c2930080528de7c8b7ee576b2f8&oe=5D871EF3"
        }
      ]
    };
  }
};
</script>

<style></style>
