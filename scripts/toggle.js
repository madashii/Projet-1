let toggle = document.getElementById("dark-mode")

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
})

document.getElementById("form-btn").addEventListener("click", function(event){
    event.preventDefault()
    setTimeout(() => {
        displayPopup(true);
}, 1000); 
  });
