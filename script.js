// arrow card function 
 window.addEventListener('scroll',function(){
    const arrow = this.document.getElementById('arrow-card')
    if(window.scrollY > window.innerHeight * 2 ){
        arrow.style.display = "block"
    }else{
          arrow.style.display = "none"
    }
 })