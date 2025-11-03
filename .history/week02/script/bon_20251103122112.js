const input=document.querySelector('#favChap');
const button=document.querySelector('button');
const list=document.querySelector('______');
const li=document.createElement('li');
const deleteButton=document.createElement('button');
li.textContent=input.value;
deleteButton.textContent='X';
li.append(deleteButton);
list.append(li);
<button aria-label= "close" id= "close-button">X</button>
button.addEventListener('click',function(){
    if(input.value.trim!==''){___}
});