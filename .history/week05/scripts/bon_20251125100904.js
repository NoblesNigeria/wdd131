const input=document.querySelector('#favChap');
const button=document.querySelector('button');
const list=document.querySelector('______');
const li=document.createElement('li');
const deleteButton=document.createElement('button');
li.textContent=input.value;
deleteButton.textContent='X';
li.append(deleteButton);
list.append(li);
console.log(list);<button aria-label= "close" id= "close-button">X</button>
button.addEventListener('click',function(){
    if(input.value.trim!==''){
        const li=document.createElement('li');
        const deleteButton=document.createElement('button');
        li.textContent=input.value;
        deleteButton.textContent='X';
        li.append(deleteButton);
        list.append(li);
        input.value='';
    }
});
deleteButton.addEventListener('click',function(){
    list.removeChild(li);
    input.focus();
})
document.querySelector('list');

chaptersArray = ['Helaman: 5', 'Alman: 3', '3Nehpi: 2' ||['']];
function getArray(theArray){
    theChapters= chaptersArray.forEach(chapter =>{
        displayList(chapter)})
        
    

};
function getChapterList(getArray){
    console,log(getChapterList);
};