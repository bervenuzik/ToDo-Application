(function(t){function e(e){for(var a,i,c=e[0],r=e[1],l=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"18cc":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"description"},[s("form",{staticClass:"new-tasks",attrs:{action:""}},[s("input",{attrs:{id:"new-tasks-input",type:"text",placeholder:"Write a new task"}}),s("button",{staticClass:"addNew",on:{click:function(e){return e.preventDefault(),t.addNewTask.apply(null,arguments)}}},[t._v("add")])])]),s("div",{staticClass:"tasks "},[s("div",{staticClass:"tasks-field"},[s("draggable",t._b({attrs:{group:"tasks",handle:".handle"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.tasks,callback:function(e){t.tasks=e},expression:"tasks"}},"draggable",t.dragOptions,!1),t._l(t.tasks,(function(e,a){return s("TASK",{key:e.id,attrs:{task:e,tasks:t.tasks,indexInTasks:a,indexInCompleted:a,completedTasks:t.completedTasks}})})),1),s("draggable",t._b({attrs:{group:"completed",handle:".handle"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.completedTasks,callback:function(e){t.completedTasks=e},expression:"completedTasks"}},"draggable",t.dragOptions,!1),t._l(t.completedTasks,(function(e,a){return s("TASK",{key:e.id,attrs:{task:e,tasks:t.tasks,indexInTasks:a,indexInCompleted:a,completedTasks:t.completedTasks}})})),1)],1)])])},o=[],i=(s("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:this.task.id}},[0==t.task.redacting?a("div",{staticClass:"Task",class:{completedTaskText:t.task.completed}},[a("img",{staticClass:"handle",attrs:{src:s("f6b0")}}),a("div",{staticClass:"task-text"},[a("span",{staticClass:"task-text-span"},[t._v(t._s(t.task.task))])]),a("div",{staticClass:"task-manager"},[a("span",[a("button",{staticClass:"task-btn",on:{click:t.deleteTask}},[a("img",{attrs:{src:s("d739"),alt:"delete"}})]),a("button",{staticClass:"task-btn btn-edit",on:{click:t.editTask}},[a("img",{attrs:{src:s("aa93"),alt:"edit"}})])]),a("input",{staticClass:"circleRadius",attrs:{type:"checkbox"},domProps:{checked:t.task.completed},on:{click:function(e){return t.changeTaskState(e)}}})])]):a("EDITTASK",{attrs:{task:t.task}})],1)}),c=[],r=(s("a9e3"),s("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Task EditTask"},[s("form",{attrs:{action:"redact"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.task,expression:"task.task"}],attrs:{id:"input"+t.task.id,type:"text"},domProps:{value:t.task.task},on:{setfocus:function(e){return t.setfocus(e)},input:function(e){e.target.composing||t.$set(t.task,"task",e.target.value)}}}),s("button",{on:{click:function(e){return e.preventDefault(),t.confirmEditing.apply(null,arguments)}}})])])}),l=[],d={props:{task:Object},methods:{confirmEditing:function(){this.task.redacting=!1}},mounted:function(){var t=document.getElementById("".concat("input"+this.task.id));t.focus()}},u=d,p=(s("a095"),s("2877")),k=Object(p["a"])(u,r,l,!1,null,"f0ab2e08",null),f=k.exports,A={data:function(){return{}},props:{task:Object,indexInTasks:Number,indexInCompleted:Number,tasks:Array,completedTasks:Array},methods:{changeTaskState:function(){if(this.task.completed=!this.task.completed,1==this.task.completed){var t=this.tasks.splice(this.indexInTasks,1)[0];this.completedTasks.push(t)}else if(0==this.task.completed){var e=this.completedTasks.splice(this.indexInCompleted,1)[0];console.log(e),this.tasks.push(e)}},deleteTask:function(){0==this.task.completed&&this.tasks.splice(this.indexInTasks,1),1==this.task.completed&&this.completedTasks.splice(this.indexInCompleted,1)},editTask:function(){this.task.redacting=!0,this.$emit("setfocus")}},components:{EDITTASK:f}},g=A,m=(s("80fe"),Object(p["a"])(g,i,c,!1,null,"1c475e2e",null)),h=m.exports,b=s("b76a"),T=s.n(b),v={name:"App",data:function(){return{tasks:[],completedTasks:[]}},methods:{addNewTask:function(){var t=document.getElementById("new-tasks-input"),e=t.value;""!=e&&(this.tasks.push({task:e,completed:!1,id:this.newID,redacting:!1,showControlMeny:!1}),t.value="")}},computed:{newID:function(){var t=-1;return this.tasks.forEach((function(e){e.id>t&&(t=e.id)})),this.completedTasks.forEach((function(e){e.id>t&&(t=e.id)})),t+1},dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},components:{TASK:h,draggable:T.a},mounted:function(){localStorage.todoAplicationTasks&&(this.tasks=JSON.parse(localStorage.todoAplicationTasks),this.tasks.forEach((function(t){t.redacting=!1}))),localStorage.todoAplicationCompletedTasks&&(this.completedTasks=JSON.parse(localStorage.todoAplicationCompletedTasks),this.completedTasks.forEach((function(t){t.redacting=!1})))},watch:{tasks:{handler:function(t){localStorage.todoAplicationTasks=JSON.stringify(t)},deep:!0},completedTasks:{handler:function(t){localStorage.todoAplicationCompletedTasks=JSON.stringify(t)},deep:!0}}},x=v,y=(s("034f"),Object(p["a"])(x,n,o,!1,null,null,null)),C=y.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"6a89":function(t,e,s){},"80fe":function(t,e,s){"use strict";s("18cc")},"85ec":function(t,e,s){},a095:function(t,e,s){"use strict";s("6a89")},aa93:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAYUlEQVQ4y2NgGILAneERQycpyr8z/AfCycRqqAQrB8FOYkyPB5I1UA2PiHHMX4YEqJbvQD5RbodoqSRO+WSGMrgWopQzAjHRjhlVjg2QqJwBHKskKGeAp0kilTOQqnxQAQAKGVrViCtWoAAAAABJRU5ErkJggg=="},d739:function(t,e,s){t.exports=s.p+"img/delete.fdffca99.svg"},f6b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPklEQVRIx2NgGAUEACMDA8N/WlrANNA+HPxgNA4GHozGAUHAKCMjw0FTCxhoHAcsDAwMf2hpwdAHo/lgBAAAIvEGZguRMS4AAAAASUVORK5CYII="}});
//# sourceMappingURL=app.26ece02e.js.map