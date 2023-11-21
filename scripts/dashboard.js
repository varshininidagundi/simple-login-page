let storage;
window.addEventListener('DOMContentLoaded', (event) => {
    storage = JSON.parse(localStorage.getItem('studentData'));
    console.log(storage);
    renderTable(storage);
});
function renderTable(studentInformation) {
    let entryIntoTable = document.querySelector("#table-body");
    if (studentInformation === null) {
        console.log('employee information is null');
    } else {
        let studentValue = "";
        let count = 0;
        for (let student of studentInformation) {
            count = count + 1;
            studentValue = `${studentValue} <tr><div>
            <td>${count}</td></td>
            <td>${student._prefix}${student.firstnamename} ${student._middlename} ${student._lastname}</td>
            <td>${student._gender}</td>
            <td>${student._native}t</td>
            <td>${student._date}/${student._month}/${student._year}</td>
            <td class="icon-cnt"><img src="../assests/trash.png" class='icon' studentName="${student.firstnamename}" onclick="deleteStudentByName(event)">
                <a href="../templet/loginpage.html"><img src="../assests/pencil.png" class="icon" studentName="${student.firstnamename}" onclick="editStudentByName(event)"></a>
                <a href="../templet/viewcard.html"><img src="../assests/view-eye-svgrepo-com.png" class="icon" class="icon" studentName="${student.firstnamename}" onclick="viewStudentByName(event)"></a>
            </td></tr>
            </div> `
        }
        entryIntoTable.innerHTML = studentValue;
    }
}
function viewStudentByName(event){
    let studentName = event.target.getAttribute('studentName');
    if(Array.isArray(storage)){
        let filteredStudentList = storage.filter((student) => student.firstnamename === studentName);
        console.log(filteredStudentList,"view data");
        localStorage.setItem('studentViewData',JSON.stringify(filteredStudentList))
    }
}
function deleteStudentByName(event){
    let studentName = event.target.getAttribute('studentName');
    if(Array.isArray(storage)){
        let filteredStudentList = storage.filter((student) => student.firstnamename !== studentName);
        console.log(filteredStudentList,"after deletion");
        localStorage.setItem('studentData',JSON.stringify(filteredStudentList))
    }
}
function editStudentByName(event){
    let studentName = event.target.getAttribute('studentName');
    if(Array.isArray(storage)){
        let filteredStudentList = storage.filter((student) => student.firstnamename === studentName);
        console.log(filteredStudentList,"edit data");
        localStorage.setItem('studentEditData',JSON.stringify(filteredStudentList))
    }
}