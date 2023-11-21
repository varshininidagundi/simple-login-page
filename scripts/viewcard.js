window.addEventListener('DOMContentLoaded', (event) => {

    const editButton = document.getElementById('edit-btn'); // Corrected ID name
    if (editButton) {
        editButton.addEventListener('click', function() {
            let viewData = JSON.parse(localStorage.getItem('studentViewData'));
            localStorage.setItem('studentEditData', JSON.stringify(viewData));
            localStorage.removeItem('studentViewData');
            window.location.href = '../templet/loginpage.html';
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
} else {
    console.log("No data found in localStorage");
}

