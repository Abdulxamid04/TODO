let form = document.querySelector("#form");
let input = document.querySelector("#text");
let content = document.querySelector("#content");
let sendBtn = document.querySelector("#sendBtn");

let cards = [];
let condition = "send";

let formHandler = (e)=>{
    e.preventDefault();
  if(condition === "send"){
    const card = {
        text: input.value,
        id: Math.random().toFixed(2)
    };
    cards.push(card);
    input.value = "";
  }
    Render();
};



function Render() {
  
  let result = "";
  for (let i = 0; i < cards.length; i++) {
  result += `
  <div class="col-md-3 p-3 bg-light rounded" id=${cards[i].id}>
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckChecked">${cards[i].text}</label>
                      </div>
                      <div class="d-flex justify-content-end gap-2" style="margin-top:20px">
                      <button class="btn btn-info">O'zgartirish</button>
                      <button class="btn btn-danger" onclick="deleteCard(${cards[i].id})">O'chirish</button>
                      </div>
                </div>


  `
    
  }
 
content.innerHTML = result;
    
};
function deleteCard(elementId){
  const isAccepted = confirm("Siz ushbu varoqni o'chirishni hohlaysizmi?")
  const arr2 = cards.filter((element) => {
    return +element.id !== elementId;
  
  });
 cards = arr2;
 console.log(cards);
 Render();
};
// function deleteCard(elementId) {
//   if(elementId.target.matches(".btn-danger")){
//     const btnId = (elementId.target.cards.cardsId);
//     const resultId = arr.findIndex((item) => item.id == btnId);
//     arr.splice(resultId, 1);
//     console.log(arr);

//   }
// }

function editCard(cardsId) {
    condition = "edit";
    sendBtn.textContent = "Qayta nomlash";
    sendBtn.style.backgroundColor = "yellow";
    sendBtn.style.color = "black";

    let findedCard = cards.find((item) => +item.id === cardsId);
    console.log(editCard);
};




form.addEventListener("submit", formHandler);

