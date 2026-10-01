// ===============================
// REGEX
// ===============================

const nameRegex = /^[A-Za-z ]{3,40}$/;

const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;


// ===============================
// INPUTS
// ===============================

const form = document.querySelector("#admissionForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const ageInput = document.querySelector("#age");
const dobInput = document.querySelector("#dob");
const addressInput = document.querySelector("#address");
const timeInput = document.querySelector("#time");
const courseInput = document.querySelector("#course");

const photoInput = document.querySelector("#photo");
const photoBtn = document.querySelector("#uploadBtn");
const fileName = document.querySelector("#fileName");

const termsInput = document.querySelector("#terms");

const studentContainer =
    document.querySelector("#studentContainer");


// ===============================
// STUDENTS ARRAY
// ===============================

let students = [];


// ===============================
// PHOTO BUTTON
// ===============================

photoBtn.addEventListener("click", function () {

    photoInput.click();

});


// ===============================
// PHOTO CHANGE
// ===============================

photoInput.addEventListener("change", function () {

    if (photoInput.files.length === 0) {

        fileName.textContent = "No photo selected";

    } else {

        fileName.textContent =
            photoInput.files[0].name;

    }

});


// ===============================
// FORM SUBMIT
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    clearErrors();

    let isValid = true;


    // ===============================
    // GET VALUES
    // ===============================

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();

    const age = Number(ageInput.value);

    const dob = dobInput.value;

    const time = timeInput.value;

    const address = addressInput.value.trim();

    const course = courseInput.value;

    const photo = photoInput.files[0];


    // ===============================
    // GENDER
    // ===============================

    const genderInput =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    // ===============================
    // SKILLS
    // ===============================

    const skillsInput =
        document.querySelectorAll(
            'input[name="skills"]:checked'
        );

    let selectedSkill = [];

    skillsInput.forEach(function (skill) {

        selectedSkill.push(skill.value);

    });


    // ===============================
    // NAME VALIDATION
    // ===============================

    if (!nameRegex.test(name)) {

        showErrors(
            "nameError",
            "Name should contain 3-40 letters only"
        );

        isValid = false;
    }


    // ===============================
    // EMAIL VALIDATION
    // ===============================

    if (!emailRegex.test(email)) {

        showErrors(
            "emailError",
            "Enter a valid email address"
        );

        isValid = false;
    }


    // ===============================
    // PASSWORD VALIDATION
    // ===============================

    if (!passwordRegex.test(password)) {

        showErrors(
            "passwordError",
            "Password must contain 8+ characters, uppercase, lowercase and number"
        );

        isValid = false;
    }


    // ===============================
    // AGE VALIDATION
    // ===============================

    if (
        ageInput.value === "" ||
        age < 15 ||
        age > 60
    ) {

        showErrors(
            "ageError",
            "Age must be between 15 and 60"
        );

        isValid = false;
    }


    // ===============================
    // DOB VALIDATION
    // ===============================

    if (dob === "") {

        showErrors(
            "dobError",
            "Date of birth is required"
        );

        isValid = false;
    }


    // ===============================
    // TIME VALIDATION
    // ===============================

    if (time === "") {

        showErrors(
            "timeError",
            "Interview time is required"
        );

        isValid = false;
    }


    // ===============================
    // GENDER VALIDATION
    // ===============================

    if (!genderInput) {

        showErrors(
            "genderError",
            "Please select your gender"
        );

        isValid = false;
    }


    // ===============================
    // COURSE VALIDATION
    // ===============================

    if (course === "") {

        showErrors(
            "courseError",
            "Please select a course"
        );

        isValid = false;
    }


    // ===============================
    // ADDRESS VALIDATION
    // ===============================

    if (address.length < 10) {

        showErrors(
            "addressError",
            "Address should be at least 10 characters"
        );

        isValid = false;
    }


    // ===============================
    // SKILLS VALIDATION
    // ===============================

    if (skillsInput.length === 0) {

        showErrors(
            "skillsError",
            "Please select at least one skill"
        );

        isValid = false;
    }


    // ===============================
    // PHOTO VALIDATION
    // ===============================

    if (!photo) {

        showErrors(
            "photoError",
            "Please select a photo"
        );

        isValid = false;
    }


    // ===============================
    // TERMS VALIDATION
    // ===============================

    if (!termsInput.checked) {

        showErrors(
            "termsError",
            "You must agree to the terms and conditions"
        );

        isValid = false;
    }


    // ===============================
    // STOP IF INVALID
    // ===============================

    if (!isValid) {

        return;

    }


    // ===============================
    // CREATE STUDENT OBJECT
    // ===============================

    const student = {

        name: name,

        email: email,

        age: age,

        dob: dob,

        time: time,

        address: address,

        course: course,

        image: URL.createObjectURL(photo),

        gender: genderInput.value,

        studentSkills: selectedSkill

    };


    // ===============================
    // ADD STUDENT
    // ===============================

    students.push(student);


    // ===============================
    // DISPLAY STUDENTS
    // ===============================

    displayStudents();


    // ===============================
    // RESET FORM
    // ===============================

    form.reset();

    fileName.textContent = "No photo selected";

});


// ===============================
// SHOW ERROR
// ===============================

function showErrors(id, message) {

    const errorMessage =
        document.querySelector(`#${id}`);

    if (errorMessage) {

        errorMessage.textContent = message;

    }

}


// ===============================
// CLEAR ERRORS
// ===============================

function clearErrors() {

    const allErrors =
        document.querySelectorAll("small");

    allErrors.forEach(function (error) {

        error.textContent = "";

    });

}


// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents() {

    studentContainer.innerHTML = "";


    students.forEach(function (student) {

        // ===============================
        // CARD
        // ===============================

        const studentCard =
            document.createElement("div");

        studentCard.classList.add("student-card");


        // ===============================
        // IMAGE
        // ===============================

        const studentImage =
            document.createElement("img");

        studentImage.classList.add("student-photo");

        studentImage.src = student.image;

        studentImage.alt = "Student Photo";


        // ===============================
        // NAME
        // ===============================

        const studentName =
            document.createElement("h3");

        studentName.textContent =
            student.name;


        // ===============================
        // EMAIL
        // ===============================

        const studentEmail =
            document.createElement("p");

        studentEmail.innerHTML = `
            <strong>Email:</strong>
            ${student.email}
        `;


        // ===============================
        // AGE
        // ===============================

        const studentAge =
            document.createElement("p");

        studentAge.innerHTML = `
            <strong>Age:</strong>
            ${student.age}
        `;


        // ===============================
        // DOB
        // ===============================

        const studentDob =
            document.createElement("p");

        studentDob.innerHTML = `
            <strong>DOB:</strong>
            ${student.dob}
        `;


        // ===============================
        // INTERVIEW TIME
        // ===============================

        const studentInterviewTime =
            document.createElement("p");

        studentInterviewTime.innerHTML = `
            <strong>Interview Time:</strong>
            ${student.time}
        `;


        // ===============================
        // GENDER
        // ===============================

        const studentGender =
            document.createElement("p");

        studentGender.innerHTML = `
            <strong>Gender:</strong>
            ${student.gender}
        `;


        // ===============================
        // COURSE
        // ===============================

        const studentCourse =
            document.createElement("p");

        studentCourse.innerHTML = `
            <strong>Course:</strong>
            ${student.course}
        `;


        // ===============================
        // ADDRESS
        // ===============================

        const studentAddress =
            document.createElement("p");

        studentAddress.innerHTML = `
            <strong>Address:</strong>
            ${student.address}
        `;


        // ===============================
        // SKILLS
        // ===============================

        const studentSkillContainer =
            document.createElement("div");

        studentSkillContainer.classList.add("skills");


        student.studentSkills.forEach(function (skill) {

            const span =
                document.createElement("span");

            span.classList.add("skill");

            span.textContent = skill;

            studentSkillContainer.append(span);

        });


        // ===============================
        // APPEND EVERYTHING
        // ===============================

        studentCard.append(
            studentImage,
            studentName,
            studentEmail,
            studentAge,
            studentDob,
            studentInterviewTime,
            studentGender,
            studentCourse,
            studentAddress,
            studentSkillContainer
        );


        // ===============================
        // ADD CARD TO CONTAINER
        // ===============================

        studentContainer.append(studentCard);

    });

}