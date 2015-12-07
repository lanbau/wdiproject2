$(document).ready(function() {
    var lock = new Auth0Lock(
        // These properties are set in auth0-variables.js
        AUTH0_CLIENT_ID,
        AUTH0_DOMAIN
    );

    var userProfile;

    document.getElementById('btn-login').addEventListener('click', function() {
      lock.show(function(err, profile, token) {
        if (err) {
          // Error callback
          console.error("Something went wrong: ", err);
          alert("Something went wrong, check the Console errors");
        } else {
          // Success calback

          // Save the JWT token.
          localStorage.setItem('userToken', token);

          // Save the profile
          userProfile = profile;
          localStorage.setItem('profile', userProfile)

          // window.location.href = "./admin.html";
          document.getElementById('top').style.display = 'none';
          document.getElementById('wrapper').style.display = 'inline-block';
          document.getElementById('nick-name').innerHTML = profile.nickname;
        }
      });
    });

    // document.getElementById('btn-api').addEventListener('click', function() {
    //     // Just call your API here. The header will be sent
    //    console.log(profile.nickname)
        
    // })


});
