<template>
       <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-avatar">
                    <div class="avatar">
                    </div>
                    <h3 class="avatar-name">
                        Rômulo Rodrigues
                    </h3>
                </li>
                <li>
                    <router-link to='/dashboard'><i class="icofont-dashboard-web"></i> Lorem ipsum</router-link>
                </li>
                <li>
                    <a href="#" v-on:click.prevent v-b-toggle.collapse-1><i class="icofont-users-alt-2"></i> Lorem ipsum <span class="caret float-right"><i class="icofont-caret-down"></i></span></a>
                    <b-collapse id="collapse-1">
                        <ul id="collapse-1">
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                            <li><router-link to=''>Lorem ipsumo</router-link></li>
                        </ul>
                    </b-collapse>
                </li>
                <li>
                    <a href="#" v-on:click.prevent v-b-toggle.collapse-2><i class="icofont-ui-file"></i> Lorem ipsums <span class="caret float-right"><i class="icofont-caret-down"></i></span></a>
                    <b-collapse id="collapse-2">
                        <ul id="collapse-2">
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                        </ul>
                    </b-collapse>
                </li>            
                <li>
                    <a href="#" v-on:click.prevent v-b-toggle.collapse-3><i class="icofont-users-alt-2"></i> Lorem ipsum <span class="caret float-right"><i class="icofont-caret-down"></i></span></a>
                    <b-collapse id="collapse-3">
                        <ul id="collapse-3">
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                        </ul>
                    </b-collapse>
                </li>
                <li>
                    <a href="#" v-on:click.prevent v-b-toggle.collapse-4><i class="icofont-user-suited"></i> Lorem ipsum <span class="caret float-right"><i class="icofont-caret-down"></i></span></a>
                    <b-collapse id="collapse-4">
                        <ul id="collapse-4">
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                            <li><router-link to=''>Lorem ipsum</router-link></li>
                        </ul>
                    </b-collapse>
                </li>
                <li>
                    <a href="#"><i class="icofont-logout"></i> Lorem ipsum</a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style>
    @import '../assets/css/Sidebar.css';
</style>


