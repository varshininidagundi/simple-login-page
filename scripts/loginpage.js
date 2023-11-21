window.addEventListener('DOMContentLoaded', (event) => {
    const salary = document.querySelector('#income');
    const output = document.querySelector('#income-output');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
    if (localStorage.getItem('studentEditData')) {
        editStudentDetails();
    }
})
function editStudentDetails() {
    let editkey = JSON.parse(localStorage.getItem('studentEditData'));
    document.querySelector('#prefix').value = editkey[0]._prefix;
    document.querySelector('#firstname').value = editkey[0].firstnamename;
    document.querySelector('#middlename').value = editkey[0]._middlename;
    document.querySelector('#lastname').value = editkey[0]._lastname;
    document.querySelector('#native').value = editkey[0]._native;
    document.querySelector('#height').value = editkey[0]._height;
    document.querySelector('#weight').value = editkey[0]._weight;
    document.querySelector('#school').value = editkey[0]._school;
    document.querySelector('#college').value = editkey[0]._college;
    document.querySelector('#date').value = editkey[0]._date;
    document.querySelector('#month').value = editkey[0]._month;
    document.querySelector('#year').value = editkey[0]._year;
    const gender = editkey[0]._gender;
    document.querySelector('#male').checked = gender === 'male';
    document.querySelector('#female').checked = gender === 'female';
    const languageList = editkey[0]._language;
    const hobbyList = editkey[0]._hobbies;
    const languageCheckboxes = document.querySelectorAll("[name=language]");
    languageCheckboxes.forEach((checkbox) => {
        checkbox.checked = languageList.includes(checkbox.value);
    });
    const hobbyCheckboxes = document.querySelectorAll("[name=hobbie]");
    hobbyCheckboxes.forEach((checkbox) => {
        checkbox.checked = hobbyList.includes(checkbox.value);
    });
    isChecked(hobbyCheckboxes);
}
const handleResetForm = () => {
    document.querySelector('#prefix').value = "Mr.";
    document.querySelector('#firstname').value = "First Name";
    document.querySelector('#middlename').value = "Middle Name";
    document.querySelector('#lastname').value = "Last Name";
    document.querySelector('#native').value = "";
    document.querySelector('#height').value = "";
    document.querySelector('#weight').value = "";
    document.querySelector('#school').value = "";
    document.querySelector('#college').value = "";
    document.querySelector('#date').value = "Day";
    document.querySelector('#month').value = "Month";
    document.querySelector('#year').value = "Year";

    const female = document.querySelector('#female');
    female.checked = false;

    const male = document.querySelector('#male');
    male.checked = false;

    const language = document.querySelectorAll("[name=language]");
    isChecked(language);

    const hobbies = document.querySelectorAll("[name=hobbie]");
    isChecked(hobbies);
};

const handleSubmitForm = (event) => {
    event.preventDefault()
    if (localStorage.getItem('studentEditData')) {
        let editkey = JSON.parse(localStorage.getItem('studentEditData'));
        let studentInformation = JSON.parse(localStorage.getItem('studentData'));
        const studentInfoFromList = studentInformation.filter(studentObject => studentObject.firstnamename !== editkey[0].firstnamename);
        let editedStudentData = JSON.stringify(studentInfoFromList);
        localStorage.setItem("studentData", editedStudentData);
        localStorage.removeItem("studentEditData")
    }
    if(localStorage.getItem('studentViewData')){
        let editkey = JSON.parse(localStorage.getItem('studentViewData'));
        let studentInformation = JSON.parse(localStorage.getItem('studentData'));
        const studentInfoFromList = studentInformation.filter(studentObject => studentObject.firstnamename !== editkey[0].firstnamename);
        let editedStudentData = JSON.stringify(studentInfoFromList);
        localStorage.setItem("studentData", editedStudentData);
        localStorage.removeItem("studentViewData")
    }
    let dummy = JSON.parse(localStorage.getItem('studentData'))
    if (!Array.isArray(dummy)) {
        dummy = [];
    }
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
    if (dummy === null) {
        dummy = [studentInformation];
    }
    else {
        dummy.push(studentInformation);
    }
    localStorage.setItem("studentData",JSON.stringify(dummy));
}
const handleCancelForm = () => {
    handleResetForm();
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