window.addEventListener('DOMContentLoaded', (event) => {
    const salary = document.querySelector('#income');
    const output = document.querySelector('#income-output');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
})

const handleSubmitForm = (event) => {
    event.preventDefault()
    const studentInformation = new StudentDetails();
    const prefix = document.querySelector('#prefix').value;
    studentInformation.prefix = prefix;
    const fname = document.querySelector('#firstname').value;
    studentInformation.firstnamename = fname;
    const mname = document.querySelector('#middlename').value;
    studentInformation.middlename = mname;
    const lname = document.querySelector('#lastname').value;
    studentInformation.lastname = lname;
    const native = document.querySelector('#native').value;
    studentInformation.native = native;
    const weight = document.querySelector('#weight').value;
    studentInformation.weight = weight;
    const height = document.querySelector('#height').value;
    studentInformation.height = height;
    const income = document.querySelector('#income').value;
    studentInformation.income = income;
    const school = document.querySelector('#school').value;
    studentInformation.school = school;
    const college = document.querySelector('#college').value;
    studentInformation.college = college;
    const gender = document.querySelectorAll('[name=gender]');
    studentInformation.gender = checkIsTrue(gender, "gender");
    const date = document.querySelector('#date').value;
    studentInformation.date = date;
    const month = document.querySelector('#month').value;
    studentInformation.month = month;
    const year = document.querySelector('#year').value;
    studentInformation.year = year;
    const language = document.querySelectorAll("[name=language]");
    studentInformation.language = checkIsTrue(language, "language");
    const hobbies = document.querySelectorAll("[name=hobbie]");
    studentInformation.hobbies = checkIsTrue(hobbies, "hobbies");
    console.log(studentInformation);
    localStorage.setItem("studentData",studentInformation);
}
function checkIsTrue(nodeList, check) {
    let checkedNodeList = [...nodeList].filter((ele) => ele.checked === true)
    if (check == 'language' || check == 'hobbies' ){
        let selectedValueList = [];
        for (let node of checkedNodeList) {
            selectedValueList.push(node.value);
        }
        return selectedValueList;
    }
    else if(check == 'gender'){
    return checkedNodeList[0]?.value;
    }
}

function isChecked(entry){
    entry.forEach((entryCheckBox) =>
    entryCheckBox.checked = false
    );
}