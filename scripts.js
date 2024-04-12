let count = 0;
    let displayNum = document.getElementById("counter-display");
    let decrementNum = document.getElementById("counter-decrement");
    let resetNum = document.getElementById("counter-reset");
    let incrementNum = document.getElementById("counter-increment");
		
        decrementNum.addEventListener("click", function() {
        	count--;
        displayNum.innerHTML = count;
        });
        
        resetNum.onclick = function() {
        	count=0;
        displayNum.innerHTML = count;
        }
        
        incrementNum.addEventListener("click", function() {
        	count++;
        displayNum.innerHTML = count;
        });