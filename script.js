const input= document.getElementById("habit-input");
const addButton= document.getElementById("add-btn");
const sectionHabitList= document.getElementById("habit-list");
let allHabit= [];


addButton.addEventListener("click", ()=>{
    const newHabit= {
        id: Date.now(),
        nome: input.value,
        concluido: false
    };

    if(input.value == ""){
        return;
    };

    const value= input.value;

    const habitCard= document.createElement("div");
    habitCard.classList.add("habit-card");

    const habitInfo= document.createElement("h2");
    habitInfo.classList.add("habit-info");
    habitInfo.textContent= value;

    const habitActions= document.createElement("div");
    habitActions.classList.add("habit-actions");

    const completeBtn= document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent= "Concluir";

    const editBtn= document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent= "Editar";

    const deleteBtn= document.createElement("button");
    editBtn.classList.add("delete-btn");
    deleteBtn.textContent= "Excluir";

    habitActions.append(completeBtn);
    habitActions.append(editBtn);
    habitActions.append(deleteBtn);


    habitCard.append(habitInfo);
    habitCard.append(habitActions)

    sectionHabitList.append(habitCard);
    // sectionHabitList.append(habitActions);

    allHabit.push(newHabit);
    console.log(allHabit)

    input.value= "";
    localStorage.setItem("habits", JSON.stringify(allHabit));
});