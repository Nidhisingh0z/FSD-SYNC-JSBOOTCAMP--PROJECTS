// ==================================================
// ELEMENTS
// ==================================================

const form = document.getElementById("applicationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");
const interviewTimeInput = document.getElementById("interviewTime");
const roleInput = document.getElementById("role");
const experienceInput = document.getElementById("experience");
const coverLetterInput = document.getElementById("coverLetter");

const profilePhotoInput = document.getElementById("profilePhoto");
const resumeInput = document.getElementById("resume");

const photoButton = document.getElementById("photoButton");
const resumeButton = document.getElementById("resumeButton");

const photoName = document.getElementById("photoName");
const resumeName = document.getElementById("resumeName");

const termsInput = document.getElementById("terms");

const applicationContainer = document.getElementById(
  "applicationContainer"
);


// ==================================================
// FILE BUTTONS
// ==================================================

photoButton.addEventListener("click", function () {
  profilePhotoInput.click();
});

resumeButton.addEventListener("click", function () {
  resumeInput.click();
});


// ==================================================
// PROFILE PHOTO SELECTION
// ==================================================

profilePhotoInput.addEventListener("change", function () {
  if (profilePhotoInput.files.length > 0) {
    photoName.textContent = profilePhotoInput.files[0].name;
  } else {
    photoName.textContent = "No photo selected";
  }
});


// ==================================================
// RESUME SELECTION
// ==================================================

resumeInput.addEventListener("change", function () {
  if (resumeInput.files.length > 0) {
    resumeName.textContent = resumeInput.files[0].name;
  } else {
    resumeName.textContent = "No resume selected";
  }
});


// ==================================================
// ERROR HANDLING
// ==================================================

function showError(errorId, message) {
  document.getElementById(errorId).textContent = message;
}


function clearErrors() {
  const errors = document.querySelectorAll("small");

  errors.forEach(function (error) {
    error.textContent = "";
  });
}


// ==================================================
// EMAIL VALIDATION
// ==================================================

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}


// ==================================================
// PHONE VALIDATION
// ==================================================

function isValidPhone(phone) {
  const phonePattern = /^[0-9]{10}$/;

  return phonePattern.test(phone);
}


// ==================================================
// PASSWORD VALIDATION
// ==================================================

function isValidPassword(password) {
  /*
    Password requirements:
    - At least 8 characters
    - One uppercase letter
    - One lowercase letter
    - One number
  */

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  return passwordPattern.test(password);
}


// ==================================================
// GET SELECTED GENDER
// ==================================================

function getSelectedGender() {
  const gender = document.querySelector(
    'input[name="gender"]:checked'
  );

  return gender ? gender.value : "";
}


// ==================================================
// GET SELECTED SKILLS
// ==================================================

function getSelectedSkills() {
  const skills = document.querySelectorAll(
    'input[name="skills"]:checked'
  );

  return Array.from(skills).map(function (skill) {
    return skill.value;
  });
}


// ==================================================
// VALIDATE FORM
// ==================================================

function validateForm() {
  clearErrors();

  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const dob = dobInput.value;
  const interviewTime = interviewTimeInput.value;
  const gender = getSelectedGender();
  const role = roleInput.value;
  const experience = experienceInput.value;
  const skills = getSelectedSkills();
  const coverLetter = coverLetterInput.value.trim();

  // -----------------------------------------------
  // NAME
  // -----------------------------------------------

  if (name === "") {
    showError("nameError", "Please enter your full name.");
    isValid = false;
  } else if (name.length < 3) {
    showError(
      "nameError",
      "Name must contain at least 3 characters."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // EMAIL
  // -----------------------------------------------

  if (email === "") {
    showError("emailError", "Please enter your email.");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError(
      "emailError",
      "Please enter a valid email address."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // PHONE
  // -----------------------------------------------

  if (phone === "") {
    showError(
      "phoneError",
      "Please enter your phone number."
    );
    isValid = false;
  } else if (!isValidPhone(phone)) {
    showError(
      "phoneError",
      "Phone number must contain exactly 10 digits."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // PASSWORD
  // -----------------------------------------------

  if (password === "") {
    showError(
      "passwordError",
      "Please create an account password."
    );
    isValid = false;
  } else if (!isValidPassword(password)) {
    showError(
      "passwordError",
      "Password must be 8+ characters with uppercase, lowercase, and a number."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // DATE OF BIRTH
  // -----------------------------------------------

  if (dob === "") {
    showError(
      "dobError",
      "Please select your date of birth."
    );
    isValid = false;
  } else {
    const selectedDate = new Date(dob);
    const today = new Date();

    if (selectedDate > today) {
      showError(
        "dobError",
        "Date of birth cannot be in the future."
      );
      isValid = false;
    }
  }


  // -----------------------------------------------
  // INTERVIEW TIME
  // -----------------------------------------------

  if (interviewTime === "") {
    showError(
      "timeError",
      "Please select your preferred interview time."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // GENDER
  // -----------------------------------------------

  if (gender === "") {
    showError(
      "genderError",
      "Please select your gender."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // JOB ROLE
  // -----------------------------------------------

  if (role === "") {
    showError(
      "roleError",
      "Please select a job role."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // EXPERIENCE
  // -----------------------------------------------

  if (experience === "") {
    showError(
      "experienceError",
      "Please enter your years of experience."
    );
    isValid = false;
  } else {
    const experienceNumber = Number(experience);

    if (
      experienceNumber < 0 ||
      experienceNumber > 40
    ) {
      showError(
        "experienceError",
        "Experience must be between 0 and 40 years."
      );
      isValid = false;
    }
  }


  // -----------------------------------------------
  // SKILLS
  // -----------------------------------------------

  if (skills.length === 0) {
    showError(
      "skillsError",
      "Please select at least one skill."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // COVER LETTER
  // -----------------------------------------------

  if (coverLetter === "") {
    showError(
      "coverLetterError",
      "Please write a short cover letter."
    );
    isValid = false;
  } else if (coverLetter.length < 20) {
    showError(
      "coverLetterError",
      "Cover letter must contain at least 20 characters."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // PROFILE PHOTO
  // -----------------------------------------------

  if (profilePhotoInput.files.length === 0) {
    showError(
      "photoError",
      "Please choose a profile photo."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // RESUME
  // -----------------------------------------------

  if (resumeInput.files.length === 0) {
    showError(
      "resumeError",
      "Please choose your resume."
    );
    isValid = false;
  }


  // -----------------------------------------------
  // TERMS
  // -----------------------------------------------

  if (!termsInput.checked) {
    showError(
      "termsError",
      "You must agree to the terms and conditions."
    );
    isValid = false;
  }


  return isValid;
}


// ==================================================
// CREATE APPLICATION CARD
// ==================================================

function createApplicationCard(application) {
  const card = document.createElement("div");

  card.className = "application-card";

  // Create profile image
  const image = document.createElement("img");

  image.className = "profile-photo";
  image.src = application.photo;
  image.alt = `${application.name}'s profile photo`;

  // Heading
  const heading = document.createElement("h3");

  heading.textContent = application.name;

  // Details
  const email = document.createElement("p");

  email.innerHTML = `<strong>Email:</strong> ${application.email}`;


  const phone = document.createElement("p");

  phone.innerHTML = `<strong>Phone:</strong> ${application.phone}`;


  const dob = document.createElement("p");

  dob.innerHTML = `<strong>Date of Birth:</strong> ${application.dob}`;


  const interviewTime = document.createElement("p");

  interviewTime.innerHTML =
    `<strong>Interview Time:</strong> ${application.interviewTime}`;


  const gender = document.createElement("p");

  gender.innerHTML =
    `<strong>Gender:</strong> ${application.gender}`;


  const role = document.createElement("p");

  role.innerHTML =
    `<strong>Job Role:</strong> ${application.role}`;


  const experience = document.createElement("p");

  experience.innerHTML =
    `<strong>Experience:</strong> ${application.experience} years`;


  // Skills
  const skillsTitle = document.createElement("p");

  skillsTitle.innerHTML = "<strong>Skills:</strong>";


  const skillsContainer = document.createElement("div");

  skillsContainer.className = "skills";


  application.skills.forEach(function (skill) {
    const skillElement = document.createElement("span");

    skillElement.className = "skill";

    skillElement.textContent = skill;

    skillsContainer.appendChild(skillElement);
  });


  // Cover letter
  const coverLetter = document.createElement("p");

  coverLetter.innerHTML =
    `<strong>Cover Letter:</strong> ${application.coverLetter}`;


  // Resume
  const resumeParagraph = document.createElement("p");

  const resumeLink = document.createElement("a");

  resumeLink.href = application.resume;
  resumeLink.textContent = application.resumeName;

  resumeLink.target = "_blank";

  resumeLink.download = application.resumeName;

  resumeParagraph.innerHTML = "<strong>Resume:</strong> ";

  resumeParagraph.appendChild(resumeLink);


  // Delete button
  const deleteButton = document.createElement("button");

  deleteButton.className = "delete-button";

  deleteButton.textContent = "Delete Application";


  deleteButton.addEventListener("click", function () {
    card.remove();

    URL.revokeObjectURL(application.photo);
    URL.revokeObjectURL(application.resume);
  });


  // Add everything to card
  card.appendChild(image);
  card.appendChild(heading);
  card.appendChild(email);
  card.appendChild(phone);
  card.appendChild(dob);
  card.appendChild(interviewTime);
  card.appendChild(gender);
  card.appendChild(role);
  card.appendChild(experience);
  card.appendChild(skillsTitle);
  card.appendChild(skillsContainer);
  card.appendChild(coverLetter);
  card.appendChild(resumeParagraph);
  card.appendChild(deleteButton);


  return card;
}


// ==================================================
// FORM SUBMISSION
// ==================================================

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate everything
  const isValid = validateForm();

  if (!isValid) {
    return;
  }


  // -----------------------------------------------
  // GET FORM VALUES
  // -----------------------------------------------

  const application = {
    name: nameInput.value.trim(),

    email: emailInput.value.trim(),

    phone: phoneInput.value.trim(),

    dob: dobInput.value,

    interviewTime: interviewTimeInput.value,

    gender: getSelectedGender(),

    role: roleInput.value,

    experience: experienceInput.value,

    skills: getSelectedSkills(),

    coverLetter: coverLetterInput.value.trim(),

    photo: URL.createObjectURL(
      profilePhotoInput.files[0]
    ),

    resume: URL.createObjectURL(
      resumeInput.files[0]
    ),

    resumeName: resumeInput.files[0].name
  };


  // -----------------------------------------------
  // CREATE CARD
  // -----------------------------------------------

  const card = createApplicationCard(application);

  applicationContainer.appendChild(card);


  // -----------------------------------------------
  // RESET FORM
  // -----------------------------------------------

  form.reset();

  photoName.textContent = "No photo selected";

  resumeName.textContent = "No resume selected";

  clearErrors();


  // -----------------------------------------------
  // SCROLL TO APPLICATION
  // -----------------------------------------------

  card.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});