
// document.getElementById("valobasha").addEventListener("click", function(){
//      console.log( "atleast working")
// })
   
 
    let valobashaNum = 0;
    let shonaNum = 100; 

    const valobashaDisplay = document.getElementById("valobasha"); 
    const shonaDisplay = document.getElementById("shona"); 

    const turuLove = document.getElementsByClassName("turu-love")
    
 for (let i = 0; i < turuLove.length; i++) {
    turuLove[i].addEventListener("click", function () {
        valobashaNum++;
        valobashaDisplay.innerText = valobashaNum;
    });
}