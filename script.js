window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let testName = document.querySelector("input[name=testName")
       let testDate = document.querySelector("input[name=testDate]")
       let rocketType = document.querySelector("select[name=rocketType]")
       let boosterCount = Number(document.querySelector("input[name=boosterCount]"))
       let windRating = Number(document.querySelector("input[name=windRating]"))
       let productionServers = document.querySelector("input[name=productionServers]") 

       if (testName.value === "" || testDate.value === "" || rocketType.value === ""){
           alert("All fields are required!")
           event.preventDefault()
           console.log("prevented submission")
       } else if (boosterCount.value > 10) {
           //why is this not working?
           alert("Number of boosters must be 10 or greater.")
           event.preventDefault()
           console.log("conditional triggered")
       } 
    });
 });