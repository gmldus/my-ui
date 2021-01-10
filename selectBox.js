const toggleButton = document.querySelector('.toggle-button');
const dropdownList = document.querySelector('.dropdown-list');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

for(const option of options){
  option.addEventListener('click', selectPlace);
}

toggleButton.addEventListener('click', function(){
  dropdownList.classList.toggle('show'); 
});
toggleButton.addEventListener('blur', function(){
  dropdownList.classList.remove('show');
});

function selectPlace(e){
  toggleButton.value = e.currentTarget.textContent.trim();
  dropdownList.classList.remove('show');
  nextButton.removeAttribute('disabled');
}
