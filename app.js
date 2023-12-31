
function generatePassword() {
    const length = 12; // You can change the length of the password
    const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * value.length);
        password += value[randomIndex];
    }

    document.getElementById("password").textContent = "Your Password: " + password;
}