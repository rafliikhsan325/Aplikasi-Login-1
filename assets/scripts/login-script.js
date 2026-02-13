m/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/** @module Login-Script */
/**
*Membuat variabel loginformElement untuk tampilan form.
*@constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/** @module Login-Script */
/**
*Membuat variabel inputEmailElement untuk tampilan input email.
*@constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
*Membuat variabel inputpasswordElement untuk tampilan input password
*@constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
*Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
*@constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
*Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
*@constant {string}
*/
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
