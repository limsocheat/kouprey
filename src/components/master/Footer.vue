<template>
  <div>
    <v-container>
      <v-layout wrap row>
        <v-flex xs12 md6>
          <v-img
            small
            :src="require('../../assets/images/logo.png')"
            style="width: 250px; height: auto"
          ></v-img>
        </v-flex>
        <v-flex xs12 md2>
          <h3>
            WORKS
            <small>by sectors</small>
          </h3>
          <ul>
            <li v-for="(work, index) in works" :key="index">
              <a href="#">{{ work.title }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md2>
          <h3>SERVICES</h3>
          <ul>
            <li v-for="(service, index) in services" :key="index">
              <a href="#">{{ service.title }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md2>
          <h3>ABOUT</h3>
          <ul>
            <li v-for="(about, index) in abouts" :key="index">
              <a href="#">{{ about.title }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md12>
          <h3 class="my-4">
            AFFILIATE
            <br />COMPANIES
          </h3>
          <v-img
            small
            :src="require('../../assets/images/logo.png')"
            style="width: 120px; height: auto; float: left; margin-right: 30px"
          ></v-img>
          <v-img
            small
            :src="require('../../assets/images/logo.png')"
            style="width: 120px; height: auto; float: left; margin-right: 30px"
          ></v-img>
          <v-img
            small
            :src="require('../../assets/images/logo.png')"
            style="width: 120px; height: auto; float: left; margin-right: 30px"
          ></v-img>
        </v-flex>
        <v-divider></v-divider>
        <hr style="width: 100%; margin: 15px 0" />
        <v-flex xs12 md12>
          <span
            >2019 KOUPREY Creative Solutions Co., Ltd * info@kourprey.biz</span
          >
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <v-footer app></v-footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          title: "Art & Culture"
        },
        {
          title: "Finance"
        },
        {
          title: "Public Sector"
        },
        {
          title: "Education"
        },
        {
          title: "Entertainment"
        },
        {
          title: "Fashion & Beauty"
        },
        {
          title: "F&B"
        },
        {
          title: "Healthcare"
        },
        {
          title: "Hospitility"
        },
        {
          title: "Professional Service"
        },
        {
          title: "Real Estate"
        },
        {
          title: "Retail"
        },
        {
          title: "Transportation"
        }
      ],
      services: [
        {
          title: "Art & Culture"
        },
        {
          title: "Finance"
        },
        {
          title: "Public Sector"
        },
        {
          title: "Education"
        },
        {
          title: "Entertainment"
        },
        {
          title: "Fashion & Beauty"
        },
        {
          title: "F&B"
        },
        {
          title: "Healthcare"
        },
        {
          title: "Hospitility"
        },
        {
          title: "Professional Service"
        },
        {
          title: "Real Estate"
        },
        {
          title: "Retail"
        },
        {
          title: "Transportation"
        }
      ],
      abouts: [
        {
          title: "About"
        },
        {
          title: "Team"
        },
        {
          title: "Our Culture"
        },
        {
          title: "Client List"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul a {
  color: #333;
  text-decoration: none;
}
ul a:hover {
  color: #555;
}
</style>
