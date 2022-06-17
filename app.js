const todo_form = document.getElementById('todo_form');
const msg = document.querySelector('.msg');
const output = document.getElementById('output');
const Remove =document.getElementById('remove');


const getAlldat = () =>{
    let getlsdata= getItemLs('todo');
    let list ="";
    if(!getlsdata){
        list =`
        <tr class ="text-center"><td  colspan ="3">No data found</td></tr>
        `
    }else{
        getlsdata.map((item,index)=>{
            list += `
            <tr class ="text-center">
            <td >${index}</td>
            <td class="text-capitalize w-100 bg-info text-dark h6">${item.todo}</td>
            <td class ="bg-danger"><i class ="fas fa-remove"></i></td>
            </tr>
            
            `
        })
    } 
   output.innerHTML =list;
}
getAlldat();




// get value from form and set value in ls 

todo_form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let form_data = new FormData(e.target);
    let object_data = Object.fromEntries(form_data.entries());


    if(!object_data){
        msg.innerHTML = setAlert('All fields are required')
    }else{
        setDataLS('todo',object_data)
        e.target.reset();
        getAlldat();
    }
})

