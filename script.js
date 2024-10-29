var randomnumber ="abcdefghijk0123456789LMNOPQRSTUVWXYZ!@#$%^&*-/`()'_+[]{}|;:,.<>?"


function generaterandom(){
      
    let randomnum = "";
    
    for( let i = 0; i < 9; i++){
        var randomIndex = Math.floor(Math.random() * randomnumber.length);
        randomnum +=  randomnumber[randomIndex];
    }

    document.getElementById(`result`).innerHTML=`<span>${randomnum}</span>`;

}
  