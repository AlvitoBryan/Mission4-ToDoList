const modal = document.querySelector('.popUp-newList');
const openModal = document.querySelector('#open-popUp');
const closeModal = document.querySelector('#cancel-newList-btn');

openModal.addEventListener('click', () => {
    modal.style.display = "flex";
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
    modal.style.display = "none";
    console.log('bisa')
})

window.addEventListener('keydown', function(e){
    if(e.code == 'Escape'){
        modal.close();
        modal.style.display = "none";
        console.log('bisa')
    }
})

// CREATE NEW LIST MODAL DIALOG================================================================

const inputText = document.getElementById('newList-textArea');
const listContainer = document.getElementById('list-container');

let radioBtns = document.querySelectorAll("input[name='radio']")
let selected = '';

let findSelected = () => {
    selected = document.querySelector("input[name='radio']:checked").value;
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected);
})

function removeSpaces(str){
    return str.replaceAll(' ','-')
}

function addList(){
    let inputTextID = inputText.value;
    if(inputText.value === ''){
        alert("You must write something");
        console.log('bisa')
        return;
    }
    if(selected === ''){
        alert("You must choose the emoticon");
        console.log('berhasil')
    }else{
        let list = document.createElement("li");
        list.classList.add('li-default')
        list.id = removeSpaces(inputTextID)
    
        let divList = document.createElement("div");
        divList.classList.add('aside-li-div')
    
        let emoticonList = document.createElement("p");
        emoticonList.classList.add('list-emoticon')
        if(selected == 'home'){
            emoticonList.innerHTML = '🏠';
            selected = '';
        }
        if(selected == 'briefcase'){
            emoticonList.innerHTML = '💼';
            selected = '';
        }
        if(selected == 'checklist'){
            emoticonList.innerHTML = '✅';
            selected = '';
        }
        if(selected == 'deleted'){
            emoticonList.innerHTML = '❌';
            selected = '';
        }
        if(selected == 'calendar'){
            emoticonList.innerHTML = '🗓️';
            selected = '';
        }
        if(selected == 'love'){
            emoticonList.innerHTML = '❤️';
            selected = '';
        }
        if(selected == 'night'){
            emoticonList.innerHTML = '🌛';
            selected = '';
        }
        if(selected == 'idea'){
            emoticonList.innerHTML = '💡';
            selected = '';
        }
    
        let textList = document.createElement("p");
        textList.classList.add('list-text');
        textList.innerHTML = inputText.value;
    
        listContainer.appendChild(list);
        list.appendChild(divList);
        divList.appendChild(emoticonList);
        divList.appendChild(textList);
    }
    selected = '';
    inputText.value = '';
    modal.close();
    modal.style.display = "none";

}

// CREATE NEW LIST addList() ========================================================================

document.getElementById("list-container").addEventListener("click", function (event) {
    let clickedItem = event.target.closest(".li-default"); // Cari elemen terdekat dengan class 'li-default'
    
    if (clickedItem) {
        console.log("Klik terdeteksi pada:", clickedItem.innerText);

        // Hapus 'active' dari semua item
        document.querySelectorAll(".li-default").forEach(i => i.classList.remove("active"));

        // Tambahkan 'active' ke item yang diklik
        clickedItem.classList.add("active");
    }
});

// SIDE LIST ACTIVE BUTTON ====================================================================================================

const modalTask = document.querySelector('.popUp-newTask');
const openModalTask = document.querySelector('#create-task-btn');
const closeModalTask = document.querySelector('#cancel-newTask-btn');

openModalTask.addEventListener('click', () => {
    modalTask.style.display = "flex";
    modalTask.showModal();
})

closeModalTask.addEventListener('click', () => {
    modalTask.close();
    modalTask.style.display = "none";
    console.log('bisa')
})

window.addEventListener('keydown', function(e){
    if(e.code == 'Escape'){
        modalTask.close();
        modalTask.style.display = "none";
        console.log('bisa')
    }
})

// CREATE NEW TASK MODAL DIALOG ============================================================================================

const inputTask = document.getElementById('newTask-textArea');
const taskContainer = document.getElementById('task-container');

let radioTaskEmotBtns = document.querySelectorAll("input[name='radioTask']")
let selectedTaskEmot = '';

let findSelectedTaskEmot = () => {
    selectedTaskEmot = document.querySelector("input[name='radioTask']:checked").value;
}

radioTaskEmotBtns.forEach(radioTaskEmotBtn => {
    radioTaskEmotBtn.addEventListener("change", findSelectedTaskEmot);
})

let radioTaskPriorityBtns = document.querySelectorAll("input[name='radio-priority-name']")
let selectedTaskPriority = '';

let findSelectedTaskPriority = () => {
    selectedTaskPriority = document.querySelector("input[name='radio-priority-name']:checked").value;
}

radioTaskPriorityBtns.forEach(radioTaskPriorityBtn => {
    radioTaskPriorityBtn.addEventListener("change", findSelectedTaskPriority);
})

let today = new Date();
let options = { weekday: "short", day: "2-digit", month: "short", year: "numeric" };
let formattedDate = today.toLocaleDateString("en-GB", options).replace(",", "");

function addTask(){
    console.log('halo')
    let inputTaskID = inputTask.value;

    if(inputTask.value === ''){
        alert("You must write something");
        console.log('bisa')
        return;
    }
    if(selectedTaskPriority === ''){
        alert("You must choose the priority");
        console.log('mantul')
        return;
    }
    if(selectedTaskEmot === ''){
        alert("You must choose the emoticon");
        console.log('berhasil')
        return;
    }else{
        let listTask = document.createElement("li");
        listTask.classList.add('task-default')
        console.log(removeSpaces(inputTaskID))
        listTask.id = removeSpaces(inputTaskID);
    
        let divTaskWrapper = document.createElement("div");
        divTaskWrapper.classList.add('task-content-wrapper');
        
        let divTaskContent = document.createElement("div");
        divTaskContent.classList.add('task-content');

        let taskCheck = document.createElement("img");
        taskCheck.classList.add('checkbox');
        taskCheck.src = "/assets/img/checklist_empty.svg";
        taskCheck.alt = "checkbox";

        let taskText = document.createElement("p");
        taskText.classList.add('task-content-text');
        taskText.innerHTML = inputTask.value;

        let divEmotWrapper = document.createElement("div");
        divEmotWrapper.classList.add('task-emoticon-wrapper');
    
        let emoticonTask = document.createElement("p");
        emoticonTask.classList.add('task-emoticon')
        if(selectedTaskEmot == 'diet'){
            emoticonTask.innerHTML = '💪';
            selectedTaskEmot = '';
        }
        if(selectedTaskEmot == 'food'){
            emoticonTask.innerHTML = '🍜';
            selectedTaskEmot = '';
        }
        if(selectedTaskEmot == 'study'){
            emoticonTask.innerHTML = '📚';
            selectedTaskEmot = '';
        }
        if(selectedTaskEmot == 'car'){
            emoticonTask.innerHTML = '🚗';
            selectedTaskEmot = '';
        }
        if(selectedTaskEmot == 'sport'){
            emoticonTask.innerHTML = '⚽';
            selectedTaskEmot = '';
        }
        if(selectedTaskEmot == 'love-task'){
            emoticonTask.innerHTML = '❤️';
            selectedTaskEmot = '';
        }
        if(selectedTaskEmot == 'game'){
            emoticonTask.innerHTML = '🎮';
            selectedTaskEmot = '';
        }
        if(selectedTaskEmot == 'movie'){
            emoticonTask.innerHTML = '🍿';
            selectedTaskEmot = '';
        }
    
        let divTaskPriority = document.createElement("div");
        if(selectedTaskPriority === 'low'){
            divTaskPriority.classList.add("divPriority-low")
        }
        if(selectedTaskPriority === 'medium'){
            divTaskPriority.classList.add("divPriority-medium")
        }
        if(selectedTaskPriority === 'high'){
            divTaskPriority.classList.add("divPriority-high")
        }

        let priorityDot = document.createElement("div");
        priorityDot.classList.add("priority-dot");

        let priorityDotImg = document.createElement("img");
        if(selectedTaskPriority === 'low'){
            priorityDotImg.src = "/assets/img/low_priority.svg";
            priorityDotImg.alt = "dot";
        }
        if(selectedTaskPriority === 'medium'){
            priorityDotImg.src = "/assets/img/medium_priority.svg";
            priorityDotImg.alt = "dot";
        }
        if(selectedTaskPriority === 'high'){
            priorityDotImg.src = "/assets/img/high_priority.svg";
            priorityDotImg.alt = "dot";
        }

        let priorityText = document.createElement("p");
        if(selectedTaskPriority === 'low'){
            priorityText.classList.add("priority-text-low")
            priorityText.innerHTML = 'Low';
            console.log('low')
        }
        if(selectedTaskPriority === 'medium'){
            priorityText.classList.add("priority-text-medium")
            priorityText.innerHTML = 'Medium';
            console.log('medium')
        }
        if(selectedTaskPriority === 'high'){
            priorityText.classList.add("priority-text-high")
            priorityText.innerHTML = 'High';
            console.log('high')
        }
        
        let divTaskDateDelete = document.createElement("div");
        divTaskDateDelete.classList.add("task-date-delete");

        let TaskDate = document.createElement("p");
        TaskDate.classList.add("task-date");
        TaskDate.innerHTML = formattedDate;

        let divTaskDelete = document.createElement("div");
        divTaskDelete.classList.add("task-delete");

        let TaskDelete = document.createElement("img");
        TaskDelete.src = '/assets/img/trash-bin.svg';
        TaskDelete.alt = 'trash-bin'

        
    
        taskContainer.appendChild(listTask);

        listTask.appendChild(divTaskWrapper);

        divTaskWrapper.appendChild(divTaskContent);

        
        divTaskContent.appendChild(taskCheck);
        divTaskContent.appendChild(taskText);
        divTaskContent.appendChild(divEmotWrapper);
        
        divEmotWrapper.appendChild(emoticonTask);
        
        divTaskWrapper.appendChild(divTaskPriority);
        
        divTaskPriority.appendChild(priorityDot);
        
        priorityDot.appendChild(priorityDotImg);
        
        divTaskPriority.appendChild(priorityText);

        listTask.appendChild(divTaskDateDelete);
        
        divTaskDateDelete.appendChild(TaskDate);
        divTaskDateDelete.appendChild(divTaskDelete);
        
        divTaskDelete.appendChild(TaskDelete);

    }
    selectedTaskEmot = '';
    selectedTaskPriority = '';
    inputTask.value = '';
    inputTaskID = ''
    modalTask.close();
    modalTask.style.display = "none";

}

// CREATE NEW TASK addTask() ==========================================================================================================
