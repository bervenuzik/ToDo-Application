<template>
 <div class="conteiner">
   <div class="tasks ">
     <div class="description">
     <form class="new-tasks" action="">
       <input id="new-tasks-input" type="text">
       <button
       @click.prevent="addNewTask"
       >add</button>
     </form>
     </div>
     <div class="tasks-field">
       <draggable v-model="currentTasks" group="tasks" @start="drag=true" @end="drag=false"
       
        v-bind="dragOptions">
         
       <TASK  
       v-for="(task,index) in currentTasks" 
       :key="task.id"
       :task="task"
       :index="index"
       :tasks="tasks"
       @deleteTask="deleteTask(task.id)"
       >
       </TASK>
       
       </draggable>
     </div>
   </div>
   <div
    class="tasks completed-tasks"
    >
     <div class="description">Completed</div>
      <div
       class="tasks-field"
       
       
       >
        <TASK 
        v-for="(task,index) in completedTasks" 
       :key="task.id"
       :task="task"
       :index="index"
       :tasks="tasks"

       
       >
       </TASK>
      </div>
   </div>
 </div>
</template>

<script>


import TASK from "/src/components/Task.vue"
import draggable from  "vuedraggable"

export default {
  name: 'App',
  data(){
            return{
            tasks:[],
            elementDragOver:0,
           
            
        }
        },



        ///////////////////////////////////////////////////



        methods:{
            addNewTask:function(){
              
              let input = document.getElementById("new-tasks-input");
              let taskText = input.value;
              if(taskText =="")return
              this.tasks.push(
                {
                  task:taskText,
                  completed:false,
                  id:this.newID,
                  redacting:false,
                  showControlMeny:false,
                  
                }
              )
              input.value = "";
              input.blur();
            },
            deleteTask:function(id){   
              let elIndex;

               this.tasks.forEach((el,index)=>{
                if(el.id == id){
                  this.tasks.splice(index,1);
                  
                  elIndex = index;
                } 
              });

              for(let i = elIndex;i < this.tasks.length;i++){
                this.tasks[i].id = this.tasks[i].id - 1;
              }
            },
            leavingField:function(){
                
               let placeHolderAfter = document.getElementsByClassName("placerAfter");
                let placeHolderBefore = document.getElementsByClassName("placerBefore");
                placeHolderAfter.forEach(element => {
                    element.classList.add('hide')
                    
                });
                placeHolderBefore.forEach(element => {
                    element.classList.add('hide')
                    
                });

             }


            
            
        },



        /////////////////////////////////////////////



        computed:{
          newID:function(){
            let id = -1;
            this.tasks.forEach(task=>{
              if(task.id > id) id = task.id
            })

            return (id+1);
          },
          currentTasks:function(){
            let currentTasks = this.tasks.filter(task=>{
              if(task.completed == false) return task;
            })
            return  currentTasks;
          },
          completedTasks:function(){
           let completedTasks = this.tasks.filter(task=>{
              if(task.completed == true) return task;
            })
            return  completedTasks;
          },
          dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
          
    },


    ////////////////////////////////////////////////////////////////



    components:{
          TASK,
          draggable,

          
        },
        mounted:function(){     
          if(localStorage.todoAplicationTasks){
            this.tasks = JSON.parse(localStorage.todoAplicationTasks);
            this.tasks.forEach(el=>{
              el.redacting = false;
            })
          }
        },
        

// //////////////////////////////////////////////////////////////////////



        watch:{
          "tasks":{
          handler: function(newValue){ 
              localStorage.todoAplicationTasks = JSON.stringify(newValue); 

        },
        deep:true,
        
          }
    
}
}
  
</script>


<style>

*{
    margin: 0;
    padding: 0;
}
body{
  background: rgb(197, 232, 255);
  display: grid;
  justify-content: center;
  align-content: center;
}
.conteiner{
  max-width: 1125px;
  width: 1125px;
  /* width: 1100px; */
  min-width: 300px;
  background: rgb(255, 255, 255);
  margin: auto;
  min-height: 700px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
.tasks{
  max-width: 600px;
  width: 550px;

  background: rgb(135, 173, 255);
  
}
.description{
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  padding: 10px;
}
.tasks-field{
  padding: 10px;
  
  
  
}
.new-tasks{
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  
  
}
#new-tasks-input{
  background: rgb(241, 241, 241);
  height: 40%;
  display: block;
  width: 80%;
  border: 1px solid rgb(242, 255, 233);
  outline: none;
  border-radius: 5px;
}
button{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  outline: none;
  border: none;
  margin: auto;
  border: 1px solid rgb(242, 255, 233);
  transition: transform 0.2s ease-out;
  cursor: pointer;
  
}
button:hover{
  transform: scale(1.1);
}
input[type="text"]{
  box-sizing: border-box;
  padding: 5px;
  transition: transform 0.2s ease-out;
}
input[type="text"]:focus{
  transform: scale(1.1);
}
input[type="checkbox"]{
  border-radius: 50%;
  cursor: pointer;
}
.task-btn{
  width: 35px;
  height: 35px;
}


</style>
