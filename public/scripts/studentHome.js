var subjectId;

function getClass(selectedClass){
    subjectId=selectedClass.id;
}

function discussions(){
    var href = "/student/discussions/"+subjectId;
    window.location=href;
}

function content(){
    var href = "/student/viewCourseContent/"+subjectId;
    window.location=href;
}

function results(){
    var href = "student/viewResults/"+subjectId;
    window.location=href;
}