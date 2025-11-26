

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
document.querySelector(getChapterList)