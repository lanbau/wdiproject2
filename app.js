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

window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'WARNING! Reloading will cause you to logout.';
    }

    // For Safari
    return 'WARNING! Reloading will cause you to logout.';
};


window.fbAsyncInit = function() {
    FB.init({
      appId      : '917820418299845',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

