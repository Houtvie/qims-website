const xhr = new XMLHttpRequest();
const xhr1 = new XMLHttpRequest()

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send();

function sendRequest(){
  xhr1.addEventListener('load', () => {
    console.log(xhr1.response);
  });
  xhr1.open('GET', 'https://supersimplebackend.dev/products/first')
  xhr1.send();
}

/*
xhr.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    const data = JSON.parse(this.response);
    console.log(data);
  } else {
    console.error('Server reached, but it returned an error');
  }
};

xhr.onerror = function() {
  console.error('Connection error');
};xhr.send();*/

/*const allMenu = document.querySelectorAll('header .menu');
const imgProfile = document.querySelector('header .profile img');
const dropdownProfile = document.querySelector('header .profile .dropdown');*/

new Promise(() => {
  console.log('Promise');
})

new Promise((resolve) => {
  
  console.log('Invite')
  sendRequest(() => {
    resolve();
  })
  console.log('Invite')

})

console.log('End'); 