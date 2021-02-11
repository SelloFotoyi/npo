    // var counter = 1;
    // setInterval(function(){
    //   document.getElementById('radio' + counter).checked = true;
    //   counter++;
    //   if(counter > 5){
    //     counter = 1;
    //   }
    // }, 5000);

    //history img slider
    let slides = document.querySelector('.about-slides');
    let prev_btn = document.querySelector('.prev-btn');
     let nxt_btn = document.querySelector('.next-btn');
    let h_counter = 0;
    prev_btn.addEventListener('click',()=>{
      h_counter--;
      if(h_counter < 0){
        h_counter = 0;
      }
      if(h_counter == 0){
         prev_btn.style.opacity = '1';
      }

      slides.style.marginLeft = -h_counter+'00vw';
      
    });

    nxt_btn.addEventListener('click',()=>{
      h_counter++;
      if(h_counter > 4){
        h_counter = 0;
      }

      slides.style.marginLeft = -h_counter+'00vw';
        
    });
    //history img slider-end
    