const formulario=document.getElementById("formulario");formulario.addEventListener("submit",a=>{a.preventDefault();const b=+document.getElementById("rendaPerCapita").value,c=+document.getElementById("conceito-de-curso").value,d=+document.getElementById("mensalidadeCurso").value,e=(16/100+2/1e4*b)*b+c/100*d;console.log(e);const f=e/d;console.log(f);const g=100*(1-f);console.log(g);const h=document.querySelector("#financiamento");if(50<=g)return h.innerHTML=`<p>Seu financimento será de ${g.toFixed(2)}% e sua coparticipação será de ${((100-g)/100*d).toFixed(2).replace(".",",")} reais.</p>`});
