

chaptersArray = ['Helaman: 5', 'Alman: 3', '3Nehpi: 2' ||['']];
function getArray(theArray){
    theChapters= chaptersArray.forEach(chapter =>{
        displayList(chapter)
    });
};
function getChapterList(displayList){
    console,log(getChapterList);
};
button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});
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
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

document.querySelector('list');
document.querySelector(getChapterList)