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

// ================================================================

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

function addList(){
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
        list.id = inputText.value
    
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

//========================================================================

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


