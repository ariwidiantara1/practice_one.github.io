const scriptURL = "https://script.google.com/macros/s/AKfycbzowdFAHXSdVWgdEIz-ssc320Vy74JyOADEGi97o_TwvKNIcge1tADVw_mzWiR0RfGfeg/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const btnCloseSuccess = document.querySelector(".btn-close-success");
const btnCloseError = document.querySelector(".btn-close-error");
const myAlertSuccess = document.querySelector(".my-alert-success");
const myAlertError = document.querySelector(".my-alert-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ketika diklik
  // Menghilangkan kirim, memunculkan loading
  btnKirim.classList.toggle("hidden");
  btnLoading.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Memunculkan button kirim, menghilangkan button loading
      btnKirim.classList.toggle("hidden");
      btnLoading.classList.toggle("hidden");
      // Memunculkan Alert Suksess
      myAlertSuccess.classList.toggle("hidden");
      // Reset Form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      // Memunculkan button kirim, menghilangkan button loading
      btnKirim.classList.toggle("hidden");
      btnLoading.classList.toggle("hidden");
      // Memunculkan alert Error
      myAlertError.classList.toggle("hidden");
      // Reset Form
      form.reset();
      console.error("Error!", error.message);
    });
});

btnCloseSuccess.addEventListener("click", (e) => {
  e.preventDefault();
  // Ketika button close diklik
  // Menghilangkan Alert
  myAlertSuccess.classList.toggle("hidden");
});
btnCloseError.addEventListener("click", (e) => {
  e.preventDefault();
  // Ketika button close diklik
  // Menghilangkan Alert
  myAlertError.classList.toggle("hidden");
});
