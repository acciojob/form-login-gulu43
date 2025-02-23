function getFormvalue() {
    //Write your code here
    let fname_val = document.getElementsByName('fname');
    let lname_val = document.getElementsByName('lname');

    for (let i = 0; i < fname_val.length; i++) {
        console.log(fname_val[i].value);
    }
    for (let j = 0; j < lname_val.length; j++) {
        console.log(lname_val[j].value);
    }

    alert(`${fname_val[0].value} ${lname_val[0].value}.`);
}
let btn_val = document.getElementById('submit');
btn_val.addEventListener('click', function (event) {
    event.preventDefault();
    getFormvalue();
});
