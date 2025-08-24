const mobileNumber = 2222;
const pinNumber = 1111;
document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();

  // mobile number
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);
  // console.log(mobileNumberValueConverted);

  // pin number
  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);
  // console.log(pinNumberValueConverted);

  // comparison
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");
  }
});
