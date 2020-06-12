<template>
    <div id="nav">
        <div>
            <router-link to="/"><img src="../../assets/kaguya.png" alt="Profile Picture" class="propic" ></router-link>
        </div>
        <div class="nav-align">
            <router-link class="nav-text" to="/">Home</router-link> 
            <router-link class="nav-text" to="/about">About</router-link> 
            <router-link class="nav-text" to="/projects">Projects</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    #nav {
        height: 100px;
        width: auto;
        background-color: #261421;
        border-bottom-style: solid;
        border-color: #D93662;
        text-align: left;
    }
    .nav-text {
        font-size: 24px;
        color: white;
        margin: 20px;
    }
    .nav-align {
        padding-top: 50px;
        margin-left: 250px;
    }
    a:hover {
        color: gray;
        text-decoration: underline;
    }
    .propic {
        height:150px;
        width: 150px;
        float: left;
        margin-top: 30px;
        margin-left: 50px;
    }
    .router-link-exact-active {
        color: gray;
        text-decoration: underline;
    }
</style>