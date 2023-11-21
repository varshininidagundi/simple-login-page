window.addEventListener('DOMContentLoaded', (event) => {
    if (edit-btn) {

        document.getElementById('editBtn').addEventListener('click', function() {
            let viewData = JSON.parse(localStorage.getItem('studentViewData'));
            localStorage.setItem('studentEditData', JSON.stringify(viewData));
            window.location.href = '../templet/loginpage.html';
            // Perform action when the Edit button is clicked
            // Redirect or navigate to the edit page or perform specific action
            // For example:
            // window.location.href = "edit-page.html"; // Redirect to the edit page
        });
    }
});

let viewData = JSON.parse(localStorage.getItem('studentViewData'));
let entryIntoTable = document.querySelector("#viewDisplay");
let langList=viewData[0]._language;
let outputLang=langList.join(', ');
let hobbiesList = viewData[0]._hobbies;
let outputHobbies = hobbiesList.join(', ')
if (viewData && viewData.length > 0) {
    let data = `
    <h1>Student Details</h1>
    <h3>Name: ${viewData[0]._prefix}.${viewData[0].firstnamename} ${viewData[0]._middlename} ${viewData[0]._lastname}</h3>
    <h3>Gender: ${viewData[0]._gender}</h3>
    <h3>Date Of Birth: ${viewData[0]._dob}</h3>
    <h3>Native: ${viewData[0]._native}</h3>
    <h3>Family Income: ${viewData[0]._income}</h3>
    <h3>Hobbies: ${outputHobbies}</h3>
    <h3>Languages spoken : ${outputLang}</h3>
    <h3>School Name: ${viewData[0]._school}</h3>
    <h3>College Name: ${viewData[0]._college}</h3>
    <h3>Height: ${viewData[0]._height}</h3>
    <h3>Weight: ${viewData[0]._weight}</h3>`

    entryIntoTable.innerHTML = data;
    console.log(data);
} else {
    console.log("No data found in localStorage");
}

