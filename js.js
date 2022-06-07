const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[name="form"]');
btn.addEventListener("click", () => {
    let selectedForm;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedForm = radioButton.value;
            break;
        }
    }
    // show the output:
    output.innerText = selectedForm ? `You selected ${selectedForm}` : `Selecciona alguna wea po`;
});