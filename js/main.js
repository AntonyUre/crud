const close = document.querySelector('.close-modal');
const open = document.querySelector('.open-modal');
const containerModal = document.querySelector('.modal-container');

window.onclick =function(e){
    
    if(e.target == containerModal){
        containerModal.style.display='none';
    }
}

close.addEventListener('click',function(){
    containerModal.style.display='none';
    
})
open.addEventListener('click', function(){
    containerModal.style.display='block';
    

})