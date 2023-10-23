<template>
<ul>
    <!-- <li v-for=" user in users" :key="user.id">
        <h4> hello word</h4>
        
    </li> -->
    <slot v-for="user in users"
                  :user="user"
                  :key="user.id"></slot>    
                                

    

</ul>
</template>

<script>
export default {
    props:{
        users: {
            type: Array,
            required: true
        }
    }

}
</script>

<style scoped>
   li{
    list-style: none;
   }

</style>