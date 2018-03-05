async function registration () {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let passwordConfermation = document.getElementById('password confirmation').value;
  let name = document.getElementById('name').value;
  if (email && password && passwordConfermation && name && password === passwordConfermation) {
    let body = JSON.stringify({
      'fullName': name,
      'email': email,
      'password': password
    });
    try {
      let res = await fetch('http://localhost:3012/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
      let data = await res.json();
      switch (res.status) {
        case 400:
          console.log(data.massage);
          break;
        case 401:
          console.log(data.message);
          break;
        case 200:
          console.log(data);
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function back() {
  window.location.href = '/'
}
