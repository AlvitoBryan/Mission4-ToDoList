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
        return;
    }
    if(selected === ''){
        alert("You must choose the emoticon");
    }else{
        // Membuat list di sidebar
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


        let newTab = document.createElement("section");
        newTab.classList.add('ToDoList-mainSection');
        newTab.id = removeSpaces(inputTextID) + '-tab';
        newTab.style.display = 'none';

        let toDoListFrame = document.createElement("div");
        toDoListFrame.classList.add('ToDoList-frame');

        let taskUl = document.createElement("ul");
        taskUl.id = 'task-container-' + removeSpaces(inputTextID);
        taskUl.classList.add('task-ul');

        let emptyState = document.createElement("div");
        emptyState.classList.add('empty-state');
        emptyState.innerHTML = `
            <p>Your list is empty</p>
            <p>You can create one if you want</p>
        `;

        let deleteListWrapper = document.createElement("div");
        deleteListWrapper.classList.add('delete-list-wrapper');
        deleteListWrapper.style.display = 'none';
        
        let deleteListBtn = document.createElement("button");
        deleteListBtn.classList.add('delete-list-btn');
        deleteListBtn.innerHTML = `
            <p class="delete-list-text">Delete List</p>
            <div class="list-delete">
                <img src="/assets/img/trash-bin-red.svg" alt="trash-bin">
            </div>
        `;

        toDoListFrame.appendChild(taskUl);
        newTab.appendChild(emptyState)
        newTab.appendChild(toDoListFrame);
        newTab.appendChild(deleteListWrapper);
        deleteListWrapper.appendChild(deleteListBtn);

        document.querySelector('.main-section').appendChild(newTab);

        switchTab(removeSpaces(inputTextID) + '-tab');
        
        document.querySelectorAll(".li-default").forEach(i => i.classList.remove("active"));
        list.classList.add("active");
    }
    selected = '';
    inputText.value = '';
    modal.close();
    modal.style.display = "none";
}

// CREATE NEW LIST addList() ========================================================================

document.addEventListener("click", function(event) {
    let clickedItem = event.target.closest(".li-default");
    
    if (clickedItem) {
        document.querySelectorAll(".li-default").forEach(i => i.classList.remove("active"));
        
        clickedItem.classList.add("active");

        if (clickedItem.id === 'home-list') {
            switchTab('home-tab');
        } else if (clickedItem.id === 'completed-list') {
            switchTab('completed-tab');
        } else {
            switchTab(clickedItem.id + '-tab');
        }
    }
});

let activeTabId = 'home-tab';

function switchTab(tabId) {
    document.querySelectorAll('.ToDoList-mainSection').forEach(tab => {
        tab.style.display = 'none';
    });

    let selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'flex';
        activeTabId = tabId;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    switchTab('home-tab');
    document.getElementById('home-list').classList.add('active');
    
    let homeTab = document.getElementById('home-tab');
    if (!homeTab.querySelector('.empty-state')) {
        let emptyState = document.createElement("div");
        emptyState.classList.add('empty-state');
        emptyState.innerHTML = `
            <p>Your list is empty</p>
            <p>You can create one if you want</p>
        `;
        let toDoListFrame = homeTab.querySelector('.ToDoList-frame');
        if (toDoListFrame) {
            homeTab.insertBefore(emptyState, toDoListFrame);
        } else {
            homeTab.appendChild(emptyState);
        }
    }
    
    checkContainerEmpty('task-container');
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

let mainGreeting = document.getElementById('main-greeting');

// MAIN GREETING DATE ====================================
let greetingDate = document.createElement("p");
greetingDate.classList.add('greeting-desc')
greetingDate.innerHTML = 'Today, ' + formattedDate;

mainGreeting.appendChild(greetingDate);
// =======================================================

function addTask(){
    let inputTaskID = inputTask.value;

    if(inputTask.value === ''){
        alert("You must write something");
        return;
    }
    if(selectedTaskPriority === ''){
        alert("You must choose the priority");
        return;
    }
    if(selectedTaskEmot === ''){
        alert("You must choose the emoticon");
        return;
    }else{
        let currentTabId = activeTabId;
        let taskContainerId;
        
        if (currentTabId === 'home-tab') {
            taskContainerId = 'task-container';
        } else if (currentTabId === 'completed-tab') {
            taskContainerId = 'task-container-completed';
        } else {
            taskContainerId = 'task-container-' + currentTabId.replace('-tab', '');
        }

        let taskContainer = document.getElementById(taskContainerId);
        let currentTab = document.getElementById(currentTabId);
        
        if (!taskContainer) {
            console.error('Task container not found:', taskContainerId);
            return;
        }

        if (taskContainerId !== 'task-container-completed') {
            let emptyState = currentTab.querySelector('.empty-state');
            if (emptyState) {
                emptyState.style.display = 'none';
            }
        }

        let deleteListWrapper = currentTab.querySelector('.delete-list-wrapper');
        if (deleteListWrapper) {
            deleteListWrapper.style.display = 'flex';
        }

        let listTask = document.createElement("li");
        listTask.classList.add('task-default')
        listTask.id = removeSpaces(inputTaskID);
    
        let divTaskWrapper = document.createElement("div");
        divTaskWrapper.classList.add('task-content-wrapper');
        
        let divTaskContent = document.createElement("div");
        divTaskContent.classList.add('task-content');

        let taskCheck = document.createElement("input");
        taskCheck.type = "checkbox"
        taskCheck.value = "check"
        taskCheck.id = "checkbox-task"
        taskCheck.name = "task-checkbox"
        taskCheck.classList.add('checkbox');

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
        TaskDelete.classList.add("trash-bin")
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

document.addEventListener("click", function (event) {
    let clickedItem = event.target.closest(".task-default");
    let clickedCheckbox = event.target.closest(".checkbox");
    
    if (clickedItem && clickedCheckbox) {

        let isInCompletedTab = clickedItem.closest('#task-container-completed') !== null;
        
        let originalContainer = clickedItem.closest('.task-ul');
        let originalTabId = originalContainer ? originalContainer.id : null;

        if (!isInCompletedTab) {
            if (!clickedItem.classList.contains("active") && !clickedCheckbox.classList.contains("active")) {
                clickedItem.classList.add("active");
                clickedCheckbox.classList.add("active");
                
                setTimeout(() => {
                    
                    let completedContainer = document.getElementById('task-container-completed');
                        
                    let taskClone = clickedItem.cloneNode(true);
                        
                    taskClone.querySelector(".checkbox").classList.remove("active");
                        
                    completedContainer.appendChild(taskClone);
                        
                    clickedItem.remove();
                        
                    if (originalTabId) {
                        checkContainerEmpty(originalTabId);
                            
                        setTimeout(() => {
                            checkContainerEmpty(originalTabId);
                        }, 100);
                    }
                }, 1000);
            }
        } else {
            if (clickedItem.classList.contains("active") && clickedCheckbox.classList.contains("active")) {
                clickedItem.classList.remove("active");
                clickedCheckbox.classList.remove("active");
            } else {
                clickedItem.classList.add("active");
                clickedCheckbox.classList.add("active");
            }
        }
    }
});

// MAIN TASK LIST ACTIVE BUTTON & ACTIVE CHECKBOX =====================================================================


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("trash-bin")) {
        let listItem = event.target.closest(".task-default");
        if (listItem) {
            let container = listItem.closest('.task-ul');
            
            listItem.classList.add("fade-out");
            
            setTimeout(() => {
                listItem.remove();
                
                if (container) {
                    checkContainerEmpty(container.id);
                }
            }, 300);
        }
    }
});

// CHECK TAB EMPTY FUNCTION ==========================================================

function checkContainerEmpty(containerId) {
    let container = document.getElementById(containerId);
    if (!container) return;
    
    let tab = container.closest('.ToDoList-mainSection');
    if (!tab) return;
    
    let emptyState = tab.querySelector('.empty-state');
    let deleteListWrapper = tab.querySelector('.delete-list-wrapper');
    
    if (containerId === 'task-container-completed') {
        if (deleteListWrapper) deleteListWrapper.style.display = 'flex';
        return;
    }
    
    let taskCount = container.children.length;
    
    if (taskCount === 0) {
        if (emptyState) {
            emptyState.style.display = 'flex';
        }
        if (deleteListWrapper) deleteListWrapper.style.display = 'none';
    } else {
        if (emptyState) {
            emptyState.style.display = 'none';
        }
        if (deleteListWrapper) deleteListWrapper.style.display = 'flex';
    }
}

// DELETE BUTTON ALL TASK FUNCTION =======================================================

document.addEventListener("click", function(event) {
    let deleteListBtn = event.target.closest('.delete-list-btn');
    if (deleteListBtn) {
        let currentTab = deleteListBtn.closest('.ToDoList-mainSection');
        let taskContainer = currentTab.querySelector('.task-ul');
        
        if (taskContainer) {
            let tasks = taskContainer.querySelectorAll('.task-default');
            
            if (tasks.length > 0) {
                tasks.forEach((task, index) => {
                    task.classList.add('fade-out');
                    
                    setTimeout(() => {
                        task.remove();
                        
                        if (index === tasks.length - 1) {
                            checkContainerEmpty(taskContainer.id);
                        }
                    }, 300);
                });
                
                let deleteListWrapper = currentTab.querySelector('.delete-list-wrapper');
                if (deleteListWrapper) {
                    setTimeout(() => {
                        deleteListWrapper.style.display = 'none';
                    }, 300);
                }
            }
        }
    }
});

