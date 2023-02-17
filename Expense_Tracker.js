const addForm = document.querySelector('#addForm')
const expenseAmount = document.querySelector('#category')
const Aboutdiscription = document.querySelector('#discription')
const list = document.querySelector('#Choose')

const userList = document.querySelector('#users');

addForm.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    // let myObj = {
    //     expenseAmount: e.target.expenseAmount.value,
    //     Aboutdiscription: e.target.Aboutdiscription.value,
    //     list: e.target.list.value
    // }
    // let obj_serialized = JSON.stringify(myObj);

    // localStorage.setItem('myObj',obj_serialized);

    // let obj_deserialized = JSON.parse(localStorage.getItem("myObj"))

    // console.log("myObj",obj_deserialized);
 
    const amount = e.target.category.value;
    const about = e.target.discription.value;
    const choose = e.target.Choose.value;

    const obj = {
        amount,
        about,
        choose
    }

    localStorage.setItem("amount",category);
    localStorage.setItem("about",discription);
    localStorage.setItem("choose",Choose)
    showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById("users")

    const childElem = document.createElement('li')
    childElem.textContent = obj.amount+'-'+obj.about+'-'+obj.choose; 

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'delete'
    deleteButton.onclick = ()=>{
        localStorage.removeItem(obj.about)
        localStorage.removeItem(obj.amount)
        localStorage.removeItem(obj.choose)
        parentElem.removeChild(childElem)
    }

    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'edit'
    editButton.onclick = () =>{
        localStorage.removeItem(obj.amount)
        localStorage.removeItem(obj.about)
        localStorage.removeItem(obj.choose)
        parentElem.removeChild(childElem)

        document.getElementById("category").value = obj.amount;
        document.getElementById("discription").value = obj.about;
        document.getElementById("Choose").value = obj.choose;
    }
    childElem.appendChild(deleteButton)
    childElem.appendChild(editButton)

    parentElem.appendChild(childElem)

    if(expenseAmount.value === '' || Aboutdiscription.value === '' || list.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'please enter all fields';
        setTimeout(() => msg.remove(),3000)
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${expenseAmount.value}: ${Aboutdiscription.value}:${list.value}`));
        userList.appendChild(li);

        expenseAmount.value = '';
        Aboutdiscription.value ='';
        list.value = '';


    }
}