<template>
  <div>
        <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
       <b-navbar-brand href ="#">
         <i class="fa-brands fa-delicious"></i> Adria Taxi Pula
      </b-navbar-brand>

      <b-navbar-toggle target ="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <a id="dest"
                        href="#destination"
                        size="sm"
                        class="my-2 mr-2 my-sm-0"
                    >
                       <i class="fas fa-door-open"></i> Popular Destinations
                    </a>
                    <a
                        id="ab"
                        href="#about"
                        size="sm"
                        class="my-2 mr-2 my-sm-0"
                    >
                       <i class="fas fa-window-open"></i> About us
                    </a>
                    <a
                        id="con"
                        href="#contact"
                        size="sm"
                        class="my-2 mr-2 my-sm-0"
                    >
                       <i class="fa-solid fa-phone"></i> Contact
                    </a>
                    <a
                        id="app"
                        href="#aplication"
                        size="sm"
                        class="my-2 mr-2 my-sm-0"
                    >
                       <i class="fas fa-user"></i> Download Adria Taxi App
                    </a>
                  </b-nav-form>
                </b-navbar-nav>
             </b-collapse>
          </b-navbar>
        
  </div>
</template>
<script>

</script>

<style>
i {
    color:orange;
}
button:hover{
    background-color: orange;
}
button:hover >i{
    color: white;
}
#dest{
    font: bold 16px Arial;
    text-decoration: none;
    background-color: #EEEEEE;
    color: #333333;
    padding: 2px 6px 2px 6px;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;   
}
#ab{
    font: bold 16px Arial;
    text-decoration: none;
    background-color: #EEEEEE;
    color: #333333;
    padding: 2px 6px 2px 6px;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;   
}
#con{
    font: bold 16px Arial;
    text-decoration: none;
    background-color: #EEEEEE;
    color: #333333;
    padding: 2px 6px 2px 6px;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;   
}
#app{
    font: bold 16px Arial;
    text-decoration: none;
    background-color: #EEEEEE;
    color: #333333;
    padding: 2px 6px 2px 6px;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;   
}






</style>
