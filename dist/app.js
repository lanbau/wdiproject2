(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
