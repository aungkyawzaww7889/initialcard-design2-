// GetUI 
const panels = document.querySelectorAll('.panel');

panels.forEach(function(panel){
    // console.log(panel);

    panel.addEventListener('mouseenter',function(){
        // console.log('hay');

        removeactive();
        panel.classList.add('active');

    });
});


function removeactive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}