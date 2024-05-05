function setButtonclickListener() {
    const form = document.getElementById("firstName");
    const form1 = document.getElementById("lastName");
    const form2 = document.getElementById("email");
    const form3 = document.getElementById("contactNumber");

    const input = form.value;
    const input1 = form1.value;
    const input2 = form2.value;
    const input3 = form3.value;

    console.log(input);
    console.log(input1);
    console.log(input2);
    console.log(input3);

    if (input === null || input === "") {
        alert("The First Name can't be empty")
    }
    if (input1 === null || input1 === "") {
        alert("The last name can't be empty")
    }
    if (input2 === null || input2 === ""){
        alert('Please provide a valid email address')
    }
    if (input3 === null || input3 === "") {
        alert("Please provide a valid contact number")
    }
}
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', () => { setButtonclickListener(); })

}