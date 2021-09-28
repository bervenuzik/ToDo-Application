<template>
    <div 
   
    :id="this.task.id"
    >
    <div class=" placerBefore hide"></div>
    <div v-if="task.redacting == false"  class="Task" 
    
    :class="{completedTaskText:task.completed}"
    
    >
      
        <div   class="task-text"><span >{{task.task}}</span></div>
        <div class="task-manager" >
            
        <span>
            <button @click="deleteTask" class="task-btn"><img src="@/assets/delete.svg" alt="delete"></button>
            <button @click="editTask" class="task-btn btn-edit"><img src="@/assets/edit.png" alt="edit"></button>
        </span>
         <input 
             style="border-radius:50%;"
             type="checkbox"
             @click="changeTaskState($event)"
             :checked="task.completed">
        </div>
    </div>
    
    <EDITTASK v-else :task="task"></EDITTASK>
    <div class=" placerAfter hide"></div>
    </div>
   
</template>

<script>
import EDITTASK from "/src/components/input-edit.vue"

export default ({
    data(){
        return{
            dragOverBefore:false,
            dragOverAfter:false,

        }
    },
    props:{
        task:Object,
        index:Number,
        tasks:Array,
        elementDragOver:Number,

    },
    methods:{
        viewControlPanel:function(){
            this.task.showControlMeny = true;
            
            
        },


        hideControlePanel:function(){
            this.task.showControlMeny = false;
        },


        changeTaskState:function(){           
            this.task.completed = !this.task.completed;
        },


        deleteTask:function(){
            this.$emit("deleteTask",this.task.id);
        },


        editTask:function(){
            this.task.redacting = true;
            this.$emit("setfocus");
        },


        dropingOnTask:function(){
              
            //   let buble;
            //   let droppingIndex = event.dataTransfer.getData("ID");
            //   console.log(this.tasks[droppingIndex])

            //   buble = this.tasks[droppingIndex];
            //   this.tasks[droppingIndex] = this.tasks[this.index];
            //   this.tasks[this.index] = buble;

            //   this.tasks[droppingIndex].completed = this.tasks[this.index].completed;
            //   this.tasks[this.index].completed = this.tasks[droppingIndex].completed;
              
              
            },
            dragStart:function(event){
              
              setTimeout(()=>{
                event.target.style.display = "none";
              },10)
              event.dataTransfer.dropEfect = "move";
              event.dataTransfer.efectAllowed = "move";
              event.dataTransfer.setData('ID',this.id);
              event.dataTransfer.setData('ELEMENT',this.task);

              
            },
            dragEnd:function(event){
             
              
                event.target.style.display = "block";
              
             },
             dragOver:function(event){
                //   let placeHolderAfter = document.getElementsByClassName("placerAfter");
                // let placeHolderBefore = document.getElementsByClassName("placerBefore");
                // placeHolderAfter.forEach(element => {
                //     element.classList.add('hide')
                    
                // });
                // placeHolderBefore.forEach(element => {
                //     element.classList.add('hide')
                    
                // });
               
                 let element = document.getElementById(`${this.task.id}`);
                 let elementInfo = element.getBoundingClientRect()
                 
                 if(event.clientY > elementInfo.y + (elementInfo.height/2)){
                     let placeHolderAfter = element.getElementsByClassName("placerAfter")[0];
                     let placeHolderBefore = element.getElementsByClassName("placerBefore")[0];
                     
                     placeHolderAfter.classList.remove("hide");
                     placeHolderBefore.classList.add("hide");

                 } else{
                 let placeHolderAfter = element.getElementsByClassName("placerAfter")[0];
                 let placeHolderBefore = element.getElementsByClassName("placerBefore")[0];
                
                     placeHolderBefore.classList.remove("hide")
                    placeHolderAfter.classList.add("hide")
                    
                    
                
                console.log(elementInfo.height)
                 }
                     
             },
             dragLeave:function(){
            
             }


        
        
            
    },
   
    

    components:{
        EDITTASK,
    },
    mounted:function(){
            
         },
            
        
    

})
    


</script>



<style scoped>

.Task{
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    background: rgb(255, 255, 255);
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 2px;
}
.Task:hover .task-manager{

    opacity: 1;
    }

.task-text{
    max-width: 450px;
    width: 450px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 18px;

}
.task-manager{
   
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: opacity 0.1s ease-in-out 0.1s;
    opacity: 0;
    width: 40px;
    margin-right: 10px;
    
}

.completedTaskText{
    border:5px solid rgb(250, 147, 147);
    text-decoration:line-through;
}
.placerAfter{
   
    display:block;
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    background: rgb(218, 218, 218);
    margin-top: 10px;
    border: 5px dotted orange;
    border-radius: 2px;

}
.placerBefore{
    display:block;
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    background: rgb(218, 218, 218);
    margin-top: 10px;
    border: 5px dotted orange;
    border-radius: 2px;
}
.hide{
    display: none;
/*  draggable="true"
    @dragover.prevent
    @dragenter.prevent
    @dragstart="dragStart($event)"
    @drop="dropingOnTask($event,index)"
    @dragend="dragEnd"
    @dragover="dragOver($event)"
    @dragleave="dragLeave" */
}






</style>
