<template>
<div class='Task EditTask'>
<form action="">
    <input @setfocus="setfocus($event)" :id="'input'+task.id" type="text" v-model="task.task">
    <button @click.prevent="confirmEditing"></button>
</form>
</div>
</template>

<script>


export default ({
    props:{
        task:Object,
        
        
        
    },
    methods:{
            confirmEditing:function(){
            this.task.redacting = false;

        },
        
    },
    mounted:function(){
        let input = document.getElementById(`${'input'+this.task.id}`);
        input.focus();
    },
    

    components:{
        
    }
})
    


</script>


<style scoped>
.EditTask{
    border: 5px solid rgb(253, 201, 105) ;
    background: rgb(255, 247, 172);
    
}
form{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
}
input{
    max-width: 450px;
    width: 450px;
    height: 35px;

}
button{
    width: 0px;
    height: 0px;
    position: absolute;
}

</style>