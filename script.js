const input= document.getElementById("habit-input");
const botao= document.getElementById("add-btn");
const sessaoHabitList= document.getElementById("habit-list");
const habitCard= document.querySelector(".habit-card");
const completeBtn= document.querySelector(".complete-btn");
const editBtn= document.querySelector(".edit-btn");
const deleteBtn= document.querySelector(".delete-btn");

botao.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("adicione um habito no campo abaixo.");
    }
    habitCard.append(input.value);
})