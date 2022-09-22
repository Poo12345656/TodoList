const inputBox =  document.getElementById("inputFelids");
       const addBtn =  document.getElementById("getButton");
       const todoList =  document.getElementById("addList");
       const deleteAll =  document.getElementById("clearData");

       
       inputBox.onkeyup = ()=>{
        let userdata =inputBox.value;
        if(userdata.trim() !=0)
        {
            addBtn.classList.add("active");
        }
        else{
            addBtn.classList.remove("active");
        }

       }

       showTasks();
       //listArr = [];
       addBtn.onclick = ()=>{
        let userdata =inputBox.value;
        let getLocalStorage = localStorage.getItem("New Todo");
        if(getLocalStorage == null)
        {
            listArr = [];
        }
        else{
            console.log(getLocalStorage);
            listArr = JSON.parse(getLocalStorage);
        }
        listArr.push(userdata);
        localStorage.setItem("New Todo",JSON.stringify(listArr));
        addBtn.classList.remove("active");
        showTasks();
  
       }

       function showTasks()
       {       
        let getLocalStorage = localStorage.getItem("New Todo");   
        if(getLocalStorage == null)
        {
            listArr = [];
        }
        else{
            console.log(getLocalStorage);
            listArr = JSON.parse(getLocalStorage);
        }
        pendingNums =  document.getElementById("pandingData");
        pendingNums.textContent = listArr.length;
        let newLiTag='';
        listArr.forEach((element,index) => {
            newLiTag +=  ` <li>${element}<span><button onclick="deleteTasks(${index})"><i class="fas fa-trash"></i></span></li></button>`;
            
        });
        todoList.innerHTML=newLiTag;
        inputBox.value="";
       }
       function deleteTasks(index)
       {
        let getLocalStorage = localStorage.getItem("New Todo"); 
        listArr = JSON.parse(getLocalStorage);
        listArr.splice(index)
        localStorage.setItem("New Todo",JSON.stringify(listArr));
        showTasks();
       }
       deleteAll.onclick = ()=>{
        listArr=[];
        localStorage.setItem("New Todo",JSON.stringify(listArr));
        showTasks();
  
       }