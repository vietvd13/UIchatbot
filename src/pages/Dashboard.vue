<template>
     <div id="wrapper" v-bind:class="toggle">
        <!-- Sidebar -->
        <Sidebar/>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <!-- /#page-topbar -->
            <Topbar @toggle="toggleMenu()"/>
            <!-- /#page-topbar -->
            <div class="container-fluid dashboard">
                <router-view></router-view>
            </div>
            <!-- /#page-footer -->
            <Footer/>
            <!-- /#page-footer -->
        </div>
        <!-- /#page-content-wrapper -->

     </div>
</template>

<script>

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default {
    name: 'home',
    components:{
        Topbar,
        Sidebar,
        Footer,
    },
    beforeCreate: function() {
      document.body.className = 'dashboard'
    },
    data(){
        return{
            toggle: '',
            toggleBool: false
        }
    },
    methods:{
        toggleMenu(){
            this.toggleBool = !this.toggleBool;
            if(this.toggleBool == true){
                this.toggle = 'toggled'
            }else{
                this.toggle = ''
            }
        }
    }
}
</script>

<style>
  body.dashboard {
    background-color: #EBEFF9;
  }

  @import '../assets/css/Dashboard.css';
</style>


