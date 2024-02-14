cont=0;
async function response() {

        const caja = document.querySelector('.resp')
        const busqueda = document.querySelector('input').value;
        const regex = RegExp(busqueda,"i");
        console.log(busqueda)

          const respuesta = await fetch('https://smae-f1268-default-rtdb.firebaseio.com/SMAE.json')
          const data = await respuesta.json();

          
          data.map(element => {
            if (regex.test(element.Alimento)) {
              cont++;
                caja.innerHTML +=`<p><ul>   
                <li style="margin-top:2rem; border-right-width: 0px; border-left-width: 2px;"><b> Alimento:  </b>${element.Alimento}</li>
                <li style="margin-top:2rem; border-right-width: 0px; border-left-width: 2px; "><b> Categoria:   </b>${element.Categoría} </li>
                <li style="margin-top:2rem; border-right-width: 0px; border-left-width: 2px;"><b> Cantidad Disponible :   </b> ${element.Cantidad} </li>
                <li style="margin-top:2rem; border-right-width: 0px; border-left-width: 2px;"><b> PesoBrutoG:    </b> ${element.PesoBrutoG}</li>
                <li style="margin-top:2rem; border-right-width: 0px; border-left-width: 2px; "><b> EnergíaKcal:    </b> ${element.EnergíaKcal} </li><br><br><br>
                </ul></p>`
            } document.getElementById("contador").innerHTML = "coincidencias encontradas : " + cont;
          });
}
      

    
         
          
 
