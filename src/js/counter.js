let top_arrow = document.getElementsByClassName('arrow-top')[0],
    bottom_arrow = document.getElementsByClassName('arrow-bottom')[0],
    box = document.getElementById('count'),
    i = 1;
    


top_arrow.addEventListener('click', function(){
    if(i < 10){
        i++;
        box.textContent = i;       
    }
});

bottom_arrow.addEventListener('click', function(){
        if(i > 1){
            i--;
            box.textContent = i;
        }
        
});
