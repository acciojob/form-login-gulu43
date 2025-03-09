document.getElementById("myForm").addEventListener("submit", getFormValue);

function getFormValue(e) {
    e.preventDefault();
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const fullName = `${fname} ${lname}`;
    alert(fullName);
}