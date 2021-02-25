    //history img slider
    let slides = document.querySelector('.about-slides');
    let prev_btn = document.querySelector('.prev-btn');
    let prev_btn_arrow = document.querySelector('.fa-arrow-circle-left');
    let nxt_btn = document.querySelector('.next-btn');
    let nxt_btn_arrow = document.querySelector('.fa-arrow-circle-right');
    let slides_container = document.querySelector('.about-slides');
    let history__header = document.querySelector('.history__header');
 
    
    let font_size_point = '36px';

    let h_counter = 0;
    if(prev_btn_arrow){
      prev_btn_arrow.style.opacity = '0.5';
    }
     if(prev_btn){
        prev_btn.addEventListener('click',()=>{
          h_counter--;
          if(h_counter < 0){
            h_counter = 0;
          }
          if(h_counter <= 0){
            prev_btn_arrow.style.transition = '1s';
            prev_btn_arrow.style.opacity = '0.5';
          }
          else{
            prev_btn_arrow.style.transition = '1s';
            prev_btn_arrow.style.opacity = '1';
          }
          

          slides.style.marginLeft = -h_counter+'00vw';
          
        });
     }

     if(nxt_btn){
         
        let font_size_checker = getComputedStyle(history__header).fontSize; 
    
        nxt_btn.addEventListener('click',()=>{
          let slides_container_width = getComputedStyle(slides_container).width; 
          h_counter++;
          //for smaller devices
          if(font_size_checker < font_size_point && h_counter > 4){
            //reset position of history slides
               h_counter = 0;
               console.log('small device');
          }
          //for larger devices
          else if(font_size_checker >= font_size_point && h_counter > 1){
             //reset position of history slides
              h_counter = 0;
          }

          if(h_counter <= 0){
            prev_btn_arrow.style.transition = '1s';
            prev_btn_arrow.style.opacity = '0.5';
          }
          else{
            prev_btn_arrow.style.transition = '1s';
            prev_btn_arrow.style.opacity = '1';
          }
          //slides position by steps h_counter vh
          slides.style.marginLeft = -h_counter+'00vw';
            
        });
     }//history img slider-end

    //*********stories handler***********/
    let claudine_selector = document.querySelectorAll('.index-item__claudine');
    let claudine = document.querySelector('.claudine');
    let zainab_selector = document.querySelectorAll('.index-item__zainab');
    let zainab = document.querySelector('.zainab');
    let caritas_selector = document.querySelectorAll('.index-item__caritas');
    let caritas = document.querySelector('.caritas');
    let euphrasie_selector = document.querySelectorAll('.index-item__euphrasie');
    let euphrasie = document.querySelector('.euphrasie');
    let unis_selector = document.querySelectorAll('.index-item__unis');
    let unis = document.querySelector('.unis');
    let regina_selector = document.querySelectorAll('.index-item__regina');
    let regina = document.querySelector('.regina');
   
    for(c of claudine_selector){
      c.addEventListener('click', ()=>{
      //make zainab story appear
      claudine.style.opacity='1';
      claudine.style.display='inline-block';
      //make other stories disappear
      zainab.style.opacity='0';
      zainab.style.display='none';
      caritas.style.opacity='0';
      caritas.style.display='none';
      euphrasie.style.opacity='0';
      euphrasie.style.display='none';
      unis.style.opacity='0';
      unis.style.display='none';
      regina.style.opacity='0';
      regina.style.display='none';
    });
    }

    for(z of zainab_selector){
      z.addEventListener('click', ()=>{
      //make zainab story appear
      zainab.style.opacity='1';
      zainab.style.display='inline-block';
      //make other stories disappear
      claudine.style.opacity='0';
      claudine.style.display='none';
      caritas.style.opacity='0';
      caritas.style.display='none';
      euphrasie.style.opacity='0';
      euphrasie.style.display='none';
      unis.style.opacity='0';
      unis.style.display='none';
      regina.style.opacity='0';
      regina.style.display='none';
    });
    }
    for(car of caritas_selector){
      car.addEventListener('click', ()=>{
      //make caritas story appear
      caritas.style.opacity='1';
      caritas.style.display='inline-block';
      //make other stories disappear
      zainab.style.opacity='0';
      zainab.style.display='none';
      claudine.style.opacity='0';
      claudine.style.display='none';
      euphrasie.style.opacity='0';
      euphrasie.style.display='none';
      unis.style.opacity='0';
      unis.style.display='none';
      regina.style.opacity='0';
      regina.style.display='none';
    });
    }
    for(e of euphrasie_selector){
      e.addEventListener('click', ()=>{
      //make euphrasie story appear
      euphrasie.style.opacity='1';
      euphrasie.style.display='inline-block';
      //make other stories disappear
      zainab.style.opacity='0';
      zainab.style.display='none';
      claudine.style.opacity='0';
      claudine.style.display='none';
      caritas.style.opacity='0';
      caritas.style.display='none';
      unis.style.opacity='0';
      unis.style.display='none';
      regina.style.opacity='0';
      regina.style.display='none';
    });
    }
    for(u of unis_selector){
      u.addEventListener('click', ()=>{
      //make euphrasie story appear
      unis.style.opacity='1';
      unis.style.display='inline-block';
      //make other stories disappear
      zainab.style.opacity='0';
      zainab.style.display='none';
      claudine.style.opacity='0';
      claudine.style.display='none';
      caritas.style.opacity='0';
      caritas.style.display='none';
      euphrasie.style.opacity='0';
      euphrasie.style.display='none';
      regina.style.opacity='0';
      regina.style.display='none';
    });
    }
    for(r of regina_selector){
      r.addEventListener('click', ()=>{
      //make euphrasie story appear
      regina.style.opacity='1';
      regina.style.display='inline-block';
      //make other stories disappear
      zainab.style.opacity='0';
      zainab.style.display='none';
      claudine.style.opacity='0';
      claudine.style.display='none';
      caritas.style.opacity='0';
      caritas.style.display='none';
      euphrasie.style.opacity='0';
      euphrasie.style.display='none';
      unis.style.opacity='0';
      unis.style.display='none';
    });
    }//stories handler end





    
    