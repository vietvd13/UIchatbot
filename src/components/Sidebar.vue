<template>
       <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-avatar">
                    <div class="avatar">
                        <img src="../assets/avatar.png" alt="">
                    </div>
                    <h3 class="avatar-name">
                        Teacher Admin
                    </h3>
                </li>
                <li>
                    <a href="#" v-on:click.prevent v-b-toggle.collapse-1><i class="icofont-dashboard-web"></i> Dashboard<span class="caret float-right"><i class="icofont-caret-down"></i></span></a>
                    <b-collapse id="collapse-1">
                        <ul id="collapse-1">
                            <li><router-link to='/dashboard/overall'>Overall</router-link></li>
                            <li><router-link to='/dashboard/individual'>Individual</router-link></li>
                        </ul>
                    </b-collapse>
                </li>
                <li>
                    <router-link to='/dashboard/qna-maker'><i class="icofont-plus-circle"></i> QnA Maker</router-link>
                </li>
                <li>
                    <router-link to='/dashboard/questions-list'><i class="icofont-notepad"></i> Questions List</router-link>
                </li>
                <li>
                    <router-link to='/dashboard/quizzes'><i class="icofont-question"></i> Quizzes</router-link>
                </li>
                <li>
                    <router-link to='/dashboard/setting'><i class="icofont-settings-alt"></i> Setting</router-link>
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


