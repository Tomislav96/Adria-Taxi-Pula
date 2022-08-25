<template>
  <div class="home">
    <Navbar />
    <Carousel />
    <h3 id="title">ITS PERFECT TIME FOR A TRIP</h3>
    <Form />
    <p></p>
    <h3 id="subt">POPULAR DESTINATIONS</h3>
    <Pula />
    <Medulin />
    <Rovinj />
    <Umag />
    <p></p>
    <h3 id="about">About Us</h3>
    <Aboutus />
    <p></p>
    <h3 id="coon">Contact Us</h3>
    <Contactus />
    <Adriaapp />
    <p></p>
    <p></p>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Umag from '@/components/Umag.vue'
import Carousel from '@/components/Carousel.vue'
import Form from '@/components/Form.vue'
import Aboutus from '@/components/Aboutus.vue'
import Footer from '@/components/Footer.vue'
import Pula from '@/components/Pula.vue'
import Medulin from '@/components/Medulin.vue'
import Rovinj from '@/components/Rovinj.vue'
import Contactus from '@/components/Contactus.vue'
import Adriaapp from '../components/Adriaapp.vue'






//import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Form,
    Aboutus,
    Footer,
    Pula,
    Medulin,
    Umag,
    Rovinj,
    Contactus,
    Adriaapp
  }
}
</script>
<style>
#title{
  font-size: 40px;
  text-align: center;
  text-shadow: lightblue;
  text-shadow: 20px;
}
#subt{
  font-size: 40px;
  text-align: center;
  text-shadow: lightblue;
  text-shadow: 10px;
}
#coon{
  font-size: 40px;
  text-align: center;
  text-shadow: lightblue;
  text-shadow: 10px;
}
#about{
  font-size: 40px;
  text-align: center;
  text-shadow: lightblue;
  text-shadow: 10px;
}
</style>
