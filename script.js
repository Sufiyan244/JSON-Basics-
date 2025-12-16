
function showData() {
    let inputData = document.getElementById("data").value;
    console.log(inputData);
    document.getElementById("dynamic-data").innerHTML = inputData;
    document.getElementById("data").value = "";
    
}