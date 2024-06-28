<script>

  export default {
    data() {
      return {
          image: '../Images/zaki-arik-lJonRphb6Y4-unsplash.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
              {
                  itemNumber: 1,
                  itemName : "Bass Guitar",
                  itemPrice : 18600,
                  itemQuantity : 10,
                  itemImage: '../Images/zaki-arik-lJonRphb6Y4-unsplash.jpg'
              },
              {
                  itemNumber: 27466,
                  itemName : "Violin",
                  itemPrice : 12000,
                  itemQuantity : 12,
                  itemImage: 'public/Images/lucia-macedo-d9_2kPJBG0U-unsplash.jpg'
              }
          ],
        }
    },

    methods() {
      
    },

    computed(){
      
    }
  }
</script>

<template>
  
  <v-card
    class="mx-auto"
    width="600"
  >
    <v-carousel>
        <v-carousel-item
            src="../Images/zaki-arik-lJonRphb6Y4-unsplash.jpg"
            cover
        ></v-carousel-item>

        <v-carousel-item
          src="../Images/lucia-macedo-d9_2kPJBG0U-unsplash.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="../Images/hal-gatewood-3j45Gy-WkyA-unsplash.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
  </v-card>
  <v-spacer></v-spacer>
  
  <v-card align="center">
    <v-card-item>
      <v-card-title>Welcome to Rhythm and Strings</v-card-title>
      <v-card-subtitle>This is one of the best instrument store countrywide </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Welcome to Rhythm and Strings, your ultimate destination for all things musical!
      Dive into a world where melody meets craftsmanship, as we offer a curated selection of premium musical instruments and accessories.
      Whether you're a seasoned musician or just beginning your musical journey, our extensive range caters to every skill level and genre. 
      Discover quality instruments that resonate with your passion, crafted by renowned brands and artisans.
      Let us help you find the perfect instrument to create, perform, and inspire.
      Explore our collection and elevate your music experience today!
    </v-card-text>
  </v-card>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
  <h3 class="text-center">Customer Feedback</h3>
  <v-divider></v-divider>
   <v-card align="center">
    <v-col cols="12" md="4">
      <v-card
        subtitle="Diana Lc"
        text="I loved the engagement from the sales person, very informative and good guidance!"
        title="Good customer service"
      ></v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Fast delivery!
        </template>
        <template v-slot:subtitle>
          Jess Kiruti
        </template>
        <template v-slot:text>
          I recieved my order on time and the package was intact, will definitely be ordering again
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Wide variety</v-card-title>
          <v-card-subtitle>Ann Wambui</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          I like how a variety of instruments are stocked here and one is given a chance to test them out before buying.
        </v-card-text>
      </v-card>
    </v-col>
   </v-card>
</template>