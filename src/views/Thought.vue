<template>
  <div>
    <v-container grid-list-md class="my-5">
      <v-layout wrap row>
        <v-flex xs12 md6 class="text-xs-left">
          <h1 class="font-weight-black text-uppercase">Thought</h1>
        </v-flex>
        <v-flex xs12 md12>
          <masonry
            :cols="{ default: 2, 1000: 2, 300: 1 }"
            :gutter="{ default: '30px', 700: '15px' }"
          >
            <v-hover v-for="(item, index) in items" :key="index">
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 3 : 0}`"
                class="my-3"
                flat
              >
                <v-img :src="item.image"></v-img>
                <v-card-text>
                  <h2>{{ item.title }}</h2>
                  <strong>14 APRIL 2019 * EVENT</strong>
                  <p style="text-align: justify">{{ dummy }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn block flat>
                    <v-icon color="orange darken-2">send</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </masonry>
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
      dummy:
        "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. Our notable clients include AEON Specialized Bank, AIA Insurance, ISI Group, Chakreyting Cement Factory and many more. Additionally, we create new brand identity for hundreds of local and international clients. Aside from our expertise in brand identity design, we are well-known for good services, processes as well as our contributions to the society. Our brand and working culture are unique and strong, which leads to the success of attracting top local talents.",
      items: [
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 1",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46287837_2131856357031093_929737493325021184_n.jpg?_nc_cat=101&_nc_eui2=AeFwBXOKTiFyZt3iAiaf8uob-Wt-_JcUKbMcvxrS5dnzerHfiRcTt_HtTZxDbGvKYXmARa5bt66FDywlXJ3iU4hfr-lLuBWiFr-qiA9Lyk4HXw&_nc_oc=AQmTOIi-aPCjehaWrTukjQrYBfzYgNMNcAlraXUMy97mJHuhI2_2K3aL-3h2H0qmZHQ&_nc_ht=scontent.fpnh8-2.fna&oh=8a139e07124b394321fe7b71c9fd6b4b&oe=5D5588AD"
        },
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 2",
          image:
            "https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/41871758_2101901876693208_3817010446104264704_n.png?_nc_cat=105&_nc_eui2=AeHEAuJmhDj1Z6it132P2QXo74lgl9XqhL4KrSfzfuZx49caHicc8n0ObAvvRWxfO4Z7n5MnmkqLhau2sEFEHauu4pf3PCziMDiCAzfqPWFCsA&_nc_oc=AQnIl39IKUNupvYHI7WXVff1oGJ7J4h4h1e84AQB2uN3o2YMEyRPSfyr1mUk_GXkyP4&_nc_ht=scontent.fpnh8-1.fna&oh=cdda95839a6b9c63e3564d70822d98ef&oe=5D8D1F2A"
        },
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 3",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46440613_2131856323697763_201124775781728256_n.jpg?_nc_cat=110&_nc_eui2=AeGm7ziZmfE50gTMXhkwQ6mGL-bix1E7eSE9s1vGUhfKTXQ2dZraJIocFgD846BpGmmgjhf6Q9rP7TSm4i88zM-vvSAMKZYR2nMD2jA6KTrFLQ&_nc_oc=AQk1KIbQ7kPm_j7GFUVDDvKoVOcEhsVSf_03u0NwvFN8aYH_Ti7wHhVWP0JlOOclXjc&_nc_ht=scontent.fpnh8-2.fna&oh=c7c77cd98af9f37503eca53a18e4cd94&oe=5D8453D4"
        },
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 4",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46400408_2131856137031115_8916770676828798976_n.jpg?_nc_cat=108&_nc_eui2=AeENFAZW3IzZg4H8ucmJSHRNKmXUVjAqCKR1nflGrs_W6G2J6yb11cvbrntvL5Ptu56K_dJP6c5jl5XLeuatg05KHyMZQy0y7CUlMRY17OySPg&_nc_oc=AQm0UVaoqFf1uew5CLN7Y_Hoo61yEQxw65kNw6x7ZY_ZYZZvx47oy3S_rMLrDwIX7VU&_nc_ht=scontent.fpnh8-2.fna&oh=f2cfb54c6f44616e8be546736b9f4ce3&oe=5D51A319"
        },
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 5",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/46407379_2131856100364452_6424094726223298560_n.jpg?_nc_cat=100&_nc_eui2=AeEveeRpUnHYFcAXavpWbMabMJ1z87jCn_6z48l89zN8beZtHIvo8vSJugmn7DF_QVUwD7Ti8gG-6fFIPIWbfuBiw6dVOVjpEE8WjU97QSyBZw&_nc_oc=AQk-FMJl3wJ28C-Ut3uG7wrhaEOXSxh_X2b9R1dWkqh3wuv_xFnsRvhpUPyZ4JGHDBE&_nc_ht=scontent.fpnh8-2.fna&oh=52818a12e87a614811f7cf027bf95f8c&oe=5D9E5596"
        },
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 6",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/44653843_2119126004970795_228859144843558912_n.jpg?_nc_cat=110&_nc_eui2=AeFKwnSuOeUrv59QsIiTQajFmoZpJ7HmVrcXjG5PR7Ba8WdcCkSt-4uY34bJq0UJFokl8R9qVX94V5Pg9skI7Fq5YlmQQwTEnBnIuiLpfb6E2A&_nc_oc=AQlKseuZKW-OZvHugCrGe7v9AeWK-laJIA6uxCPX_H4srGcUvFyR4K1ZDha6BzGfo5o&_nc_ht=scontent.fpnh8-2.fna&oh=3b33c594ebe212488288ed9820aed927&oe=5D56A5F9"
        },
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 7",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/44307963_2117628701787192_3994236297274195968_n.jpg?_nc_cat=100&_nc_eui2=AeGhNID6J0I06EpcIIhvybVEpAR0WV6BqZ7Tp9gSalzNQisWmqa3byf2EtHV4gwRW1AyaszteXJEBhKgVrjDeFLXXGWRfNOWpXmdxXky0DR_bg&_nc_oc=AQngUFjHzE5K-WDJxNDNHLDxn10I4BbVy1jrmsMBYOit0LJNC57PDkfzAG6-eKgNA7I&_nc_ht=scontent.fpnh8-2.fna&oh=6285873beeb4eeb5b1445d9d50fa66f7&oe=5D93AF43"
        },
        {
          title:
            "KOUPREY CREATIVE SOLUTIONS CO., LTD. is a Cambodia’s renowned brand and identity design agency. 8",
          image:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/38760466_2074188042797925_2180339306000809984_n.png?_nc_cat=107&_nc_eui2=AeGxkt1PpBulHhlPBCUChHonkb9dhu82jvv2hGi8Ma0lXOqSHwa0GgMy79oKG0L0ui8K3Z-nFqSpRrAwvopPEfUjabmkS1fJGRDpqw-bqJzB5A&_nc_oc=AQm2k1lOvtUiUoQ4L4cMn2iXZ1k4XIhPgMsoZ3YSEOJ6R_YwYI5-MluTvx4fA8LccFI&_nc_ht=scontent.fpnh8-2.fna&oh=503d8c2930080528de7c8b7ee576b2f8&oe=5D871EF3"
        }
      ]
    };
  }
};
</script>

<style></style>
