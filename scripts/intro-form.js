document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('intro-form').addEventListener('submit', function(event) {
        event.preventDefault();
       
        let formData = {
            image: document.getElementById('imageUpload').files[0] ? document.getElementById('imageUpload').files[0].name : 'No image uploaded',
            caption: document.getElementById('caption').value,
            firstName: document.getElementById('first-name').value,
            middleInitial: document.getElementById('middle-initial').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            background: document.getElementById('background').value,
            profession: document.getElementById('profession').value,
            degree: document.getElementById('degree').value,
            currentDegree: document.getElementById('currentDegree').value,
            courses: {
                course1: document.getElementById('course1').value,
                reason1: document.getElementById('reason1').value,
                course2: document.getElementById('course2').value,
                reason2: document.getElementById('reason2').value,
                course3: document.getElementById('course3').value,
                reason3: document.getElementById('reason3').value,
                course4: document.getElementById('course4').value,
                reason4: document.getElementById('reason4').value,
                course5: document.getElementById('course5').value,
                reason5: document.getElementById('reason5').value
            },
            interest: document.getElementById('interest').value
        };

        
        let outputHtml = `<h3>Form Submitted!</h3>`;
        outputHtml += `<p><strong>Profile Picture:</strong> ${formData.image}</p>`;
        outputHtml += `<p><strong>Caption:</strong> ${formData.caption}</p>`;
        outputHtml += `<p><strong>Name:</strong> ${formData.firstName} ${formData.middleInitial} ${formData.lastName}</p>`;
        outputHtml += `<p><strong>Email:</strong> ${formData.email}</p>`;
        outputHtml += `<p><strong>Background:</strong> ${formData.background}</p>`;
        outputHtml += `<p><strong>Profession:</strong> ${formData.profession}</p>`;
        outputHtml += `<p><strong>Degree:</strong> ${formData.degree}</p>`;
        outputHtml += `<p><strong>Current Studies:</strong> ${formData.currentDegree}</p>`;
        outputHtml += `<h4>Courses and Reasons:</h4>`;
        outputHtml += `<ul>`;
        outputHtml += `<li><strong>${formData.courses.course1}</strong>: ${formData.courses.reason1}</li>`;
        outputHtml += `<li><strong>${formData.courses.course2}</strong>: ${formData.courses.reason2}</li>`;
        outputHtml += `<li><strong>${formData.courses.course3}</strong>: ${formData.courses.reason3}</li>`;
        outputHtml += `<li><strong>${formData.courses.course4}</strong>: ${formData.courses.reason4}</li>`;
        outputHtml += `<li><strong>${formData.courses.course5}</strong>: ${formData.courses.reason5}</li>`;
        outputHtml += `</ul>`;
        outputHtml += `<p><strong>Interest:</strong> ${formData.interest}</p>`;

        
        document.getElementById('output').innerHTML = outputHtml;
    });
});
