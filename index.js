let inputFiled = document.getElementById('inputfield');
let addbtn =document.getElementById("addBtn");
let tasks = document.getElementById("tasks");




addbtn.addEventListener('clcik',()=>{
    let para= document.createElement('p');
    para.innerHTML = inputField.value;
    para.classList.add('para-styling');
    tasks.appendChild(para);

    console.log(tasks);

    para.addEventListener('click', ()=>{
        para.style.textDecoration = 'line-through';

    })

      para.addEventListener('click',  () =>{
        tasks.removeChild(para);
      })
})