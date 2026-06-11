const input = document.getElementById("habit-input");
const addButton = document.getElementById("add-btn");
const sectionHabitList = document.getElementById("habit-list");

// cria um array no localStorage
let allHabit = JSON.parse(localStorage.getItem("habits")) || [];

// criamos a função para adicionar habitos no array , e chamamos a função para renderizar os habitos na tela
function addHabit() {
    if(!input.value.trim()){
      return
    };

  const newHabit = {
    id: Date.now(),
    nome: input.value,
    concluido: false,
  };

  allHabit.push(newHabit);

  localStorage.setItem("habits", JSON.stringify(allHabit));
  renderHabit(newHabit);

  input.value = "";
}

// função para renderizar os habitos na tela
function renderHabit(habit) {
  const habitCard = document.createElement("div");
  habitCard.classList.add("habit-card");

  const habitInfo = document.createElement("div");
  habitInfo.classList.add("habit-info");

  const habitTittle = document.createElement("h2");
  habitTittle.textContent = habit.nome;

  // create actions buttons
  const habitActions = document.createElement("div");
  habitActions.classList.add("habit-actions");

  const buttonComplete = document.createElement("button");
  buttonComplete.classList.add("complete-btn");
  buttonComplete.textContent = "Concluir";

    buttonComplete.addEventListener("click", ()=>{
        completeHabit(habit.id);
    });

  const buttonEdit = document.createElement("button");
  buttonEdit.classList.add("edit-btn");
  buttonEdit.textContent = "Editar";
  
    buttonEdit.addEventListener("click", () => {
    editHabit(habit.id);
    });

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("delete-btn");
  buttonDelete.textContent = "Excluir";

    buttonDelete.addEventListener("click", ()=>{
        excludeHabit(habit.id);
    })

  habitCard.append(habitInfo, habitActions);
  habitInfo.append(habitTittle);

  habitActions.append(buttonComplete, buttonEdit, buttonDelete);

  sectionHabitList.append(habitCard);

  if(habit.concluido == true){
    habitInfo.classList.add("completed");
    buttonComplete.classList.add("hidden");
    buttonEdit.classList.add("hidden");
  }
}

// aqui criamos a função para recuperar os habitos salvos na localStorage e trazer de volta para a tela
function loadHabits() {
  allHabit.forEach((habit) => {
    renderHabit(habit);
  });

}

loadHabits();

addButton.addEventListener("click", addHabit);

// logic of button edit

function editHabit(id) {
    const newName = prompt("What is the new name for the habit?");

    if (!newName) {
        return;
    }

    const habit = allHabit.find(h => h.id === id);

    if (habit) {
        habit.nome = newName;
    }

    localStorage.setItem(
        "habits",
        JSON.stringify(allHabit)
    );

    sectionHabitList.innerHTML = "";

    allHabit.forEach(habit => {
        renderHabit(habit);
    });
}

function excludeHabit(id){
    allHabit= allHabit.filter(h => h.id !== id);

    localStorage.setItem("habits", JSON.stringify(allHabit));

    sectionHabitList.innerHTML= "";

    allHabit.forEach(habit =>{
        renderHabit(habit)
    });
}

function completeHabit(id){
  const habit = allHabit.find(h => h.id === id);

  habit.concluido= !habit.concluido;

  localStorage.setItem("habits", JSON.stringify(allHabit));

  sectionHabitList.innerHTML = "";

  allHabit.forEach(habit => {
    renderHabit(habit);
  });
}

