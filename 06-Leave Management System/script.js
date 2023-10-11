function logout() {
    window.location.href = "Login.html";
  }
document.addEventListener("DOMContentLoaded", function () {
    const casualBalance = document.getElementById("casual-balance");
    const medicalBalance = document.getElementById("medical-balance");
    const leaveType = document.getElementById("leave-type");
    const leaveDays = document.getElementById("leave-days");
    const applyBtn = document.getElementById("apply-btn");

    // Initial leave balances (you can fetch these values from a database)
    let casualLeaveBalance = 5;
    let medicalLeaveBalance = 10;

    casualBalance.textContent = casualLeaveBalance;
    medicalBalance.textContent = medicalLeaveBalance;

    applyBtn.addEventListener("click", function () {
        const selectedLeaveType = leaveType.value;
        const requestedDays = parseInt(leaveDays.value);

        if (requestedDays > 0) {
            if (selectedLeaveType === "casual" && requestedDays <= casualLeaveBalance) {
                casualLeaveBalance -= requestedDays;
                casualBalance.textContent = casualLeaveBalance;
                alert("Casual leave applied successfully.");
            } else if (selectedLeaveType === "medical" && requestedDays <= medicalLeaveBalance) {
                medicalLeaveBalance -= requestedDays;
                medicalBalance.textContent = medicalLeaveBalance;
                alert("Medical leave applied successfully.");
            } else {
                alert("Insufficient leave balance.");
            }
        } else {
            alert("Invalid number of days.");
        }
    });
});
