
// document.getElementById("valobasha").addEventListener("click", function(){
//      console.log( "atleast working")
// })
   
// Valobasha functionalities  

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


// Clear History Functionalities 

const callHistoryList = document.getElementById("call-history-list");
const clearHistoryBtn = document.getElementById("clearHistory");

// Call button Functionality 


const callButtons = document.getElementsByClassName("call-btnn");
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
        const serviceName = this.getAttribute("data-name");
        const serviceNumber = this.getAttribute("data-number");

        // shona check
        if (shonaNum < 20) {
            alert(" ❌ Not enough coins to make this call! You need 20 coins to call");
            return;
        }

        shonaNum = shonaNum - 20;
        shonaDisplay.innerText = shonaNum;

        // Show alert
        alert(" 📞 Calling " + serviceName + " " + serviceNumber);

        // Current time show kora part
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit" });

        // Add to call history
        const li = document.createElement("li");
        li.className = "flex justify-between p-3 bg-gray-50 rounded-lg shadow mb-6 ";

        li.innerHTML = `
          <div class="  ">
           <p class="text-xl font-bold text-gray-800 mb-4">${serviceName}</p>
          <p class="text-sm text-gray-500">${serviceNumber}</p>
         </div>
        <span class="text-xs text-gray-400 flex items-center justify-center ">${timeString}</span>
    `;

    callHistoryList.appendChild(li);
  });
}
// Clear History part

clearHistoryBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});

let copyCount = 0;
const copyCounter = document.getElementById("copy-counter");
const copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const numberToCopy = this.getAttribute("data-number");

    // Clipboard copy 
    navigator.clipboard.writeText(numberToCopy).then(() => {
    //   Showing Alert
      alert("Copied: " + numberToCopy);

      // Counter update
      copyCount++;
      copyCounter.innerText = copyCount;
    })
  });
}
