setting_border_color_input.addEventListener("input", function() { 
  setting_border_color_select.textContent = this.value; 
  reserve_canvas.style.borderColor = this.value;
  reserve_canvas_close_button.style.borderColor = this.value;
});

setting_bg_color_input.addEventListener("input", function() { 
  setting_bg_color_select.textContent = this.value; 
  reserve_canvas.style.backgroundColor = this.value;
  reserve_canvas_close_button.style.backgroundColor = this.value;
});

setting_font_color_input.addEventListener("input", function() { 
  setting_font_color_select.textContent = this.value;
  reserve_method.style.color = this.value;
  reserve_success.style.color = this.value;
  reserve_container.style.color = this.value;
  reserve_canvas_close_button.style.color = this.value;
});


function valueChange(event){
  if (setting_border_color_rainbow.checked){
    reserve_canvas.classList.add("rainbow_border");
    reserve_canvas_close_button.classList.add("rainbow_border");
  }else{
    reserve_canvas.classList.remove("rainbow_border");
    reserve_canvas_close_button.classList.remove("rainbow_border");
  }
}

function valueChange2(event){
  if (setting_bg_color_rainbow.checked){
    reserve_canvas.classList.add("rainbow_bg");
    reserve_canvas_close_button.classList.add("rainbow_bg");
  }else{
    reserve_canvas.classList.remove("rainbow_bg");
    reserve_canvas_close_button.classList.remove("rainbow_bg");
  }
}

function valueChange3(event){
  if (setting_font_color_rainbow.checked){
    reserve_method.classList.add("rainbow");
    reserve_success.classList.add("rainbow");
    reserve_container.classList.add("rainbow");
    reserve_canvas_close_button.classList.add("rainbow");
  }else{
    reserve_method.classList.remove("rainbow");
    reserve_success.classList.remove("rainbow");
    reserve_container.classList.remove("rainbow");
    reserve_canvas_close_button.classList.remove("rainbow");
  }
}

function inputChange1(event){
  reserve_method.innerText = "＜" + setting_reserve_method.value + "＞";
}

function inputChange2(event){
  reserve_title.innerText = setting_reserve_title.value;
}

function inputChange3(event){
  reserve_time_first.innerText = setting_reserve_time_first.value;
}

function inputChange4(event){
  reserve_time_second.innerText = setting_reserve_time_second.value;
}

setting_border_color_rainbow.addEventListener('change', valueChange);
setting_bg_color_rainbow.addEventListener('change', valueChange2);
setting_font_color_rainbow.addEventListener('change', valueChange3);

setting_reserve_method.addEventListener('change', inputChange1);
setting_reserve_title.addEventListener('change', inputChange2);

setting_reserve_time_first.addEventListener('change', inputChange3);
setting_reserve_time_second.addEventListener('change', inputChange4);

