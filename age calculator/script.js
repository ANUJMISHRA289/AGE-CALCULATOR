function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (!birthdate) {
        result.textContent = "Please enter a valid birthdate!";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
}
