const apptext = document.getElementById("inputvalue");
const todoul = document.getElementById('todo-ul');


const addtext =()=>{
    if(apptext.value .trim() === ''){
        alert("enter somthing")
    }else{
        console.log(apptext.value.trim());
        const litag = document.createElement('li');
        const spantext = document.createElement('span');
        const textNode = document.createTextNode(apptext.value.trim());
        const spanClose = document.createElement('span');
        spantext.addEventListener('click',(e)=>{
            console.log(e);
            e.target.classList.toggle('done');
        })
        spantext.appendChild(textNode);
        spanClose.classList.add('closer');
        spanClose.innerHTML='&times;';
        litag.appendChild(spantext);
        litag.appendChild(spanClose);
        todoul.appendChild(litag);

    }
}