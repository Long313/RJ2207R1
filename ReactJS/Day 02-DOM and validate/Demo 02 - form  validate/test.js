var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var coursesList = document.querySelector('.courses-list');
    var input = courses.map(function(course){
        return `<li>${course}</li>`;
    }).join('/n')
    coursesList.innerHTML = input;    
}

render(courses)

