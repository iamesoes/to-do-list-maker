document.querySelector('#push').onclick = function(){
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter your task.");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
            ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <img src="/images/delete.svg" alt="">
            </button>
        </div>
        `;
        
        var delButtons = document.querySelectorAll(".delete"); /* selects all elements with the class "delete"*/
        for(var i = 0; i < delButtons.length; i++){
             /*For each element it attaches an onclick event listener*/
            delButtons[i].onclick = function(){ 
                this.parentNode.remove();  /*access the parent element and remove it(remove it from the DOM )*/
            }
        }

        var allTasks = document.querySelectorAll(".task");
        for(var i = 0; i< allTasks.length; i++){
            allTasks[i].onclick = function(){
                /* add or remove the "completed" class on the clicked element, depending on whether it is already present or not*/
                this.classList.toggle("completed");  
            }
        }
    }

    document.querySelector("#newtask input").value = "";

}

