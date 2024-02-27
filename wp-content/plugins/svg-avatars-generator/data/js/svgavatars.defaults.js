/**
 * PLEASE DO NOT EDIT THIS FILE!
 * Make your changes in the WP dashboard on SVG Avatars Settings page.
 */
function svgAvatarsOptions() {
  "use strict";
  var options = {
    pathToFolder: '/wp-content/plugins/svg-avatars-generator/data/',
    downloadingName: 'myAvatar',
    showGender: 'both',
    saturationDelta: 0.1,
    brightnessDelta: 0.06,
    saveFileFormat: 'png',
    savingSize: 300,
    svgDownloadSize: 400,
    pngFirstDownloadSize: 200,
    pngSecondDownloadSize: 400,
    pngiOSDownloadSize: 500,
    pngWin8TabletDownloadSize: 400,
    gravatarSize: 200,
    hideSvgDownloadOnAndroid: true,
    hideSvgDownloadButton: true,
    hidePngFirstDownloadButton: true,
    hidePngSecondDownloadButton: true,
    hideGravatar: true,
    colorScheme: 'dark',
    hideShareButton: true,
    shareImageSize: 400,
    twitter: false,
    pinterest: false,
    shareLink: document.URL,
    shareTitle: document.title,
    shareDescription: '',
    shareCredit: 'Created on YourSite.com',
    removeCredit: true,
    integration: 'custom',
    debug: false,
    zooming: 0
  };
  return options;
}
function svgAvatarsTranslation() {
  "use strict";
  var text = {
    welcomeSloganLoggedIn: "<h2>תיצור אווטר המתאים לך ביותר</h2>",
    welcomeSloganLoggedOut: "<h2>תיצור אווטר המתאים לך ביותר</h2>",
    welcomeMsg: "<p>תבחר בהאם האווטר יהיה בדמות של ילד או של ילדה</p>",
    waitMsg: "<p>המתן...</p>",
    randomMsg: "random",
    resetMsg: "reset",
    saveMsg: "שמירה",
    shareMsg: "share",
    gravatarMsg: "Gravatar",
    downloadMsg: "download",
    svgFormatMsg: "SVG - vector format",
    confirmMsg: "<h3>Are you sure?</h3><p>All the current changes will be lost.</p>",
    iosMsg: "<p>Please tap and hold the avatar and choose Save</p>",
    gravatarTitle: "<h3>You can upload the created avatar to Gravatar.com</h3><p>Please enter your Gravatar email and password</p>",
    gravatarEmail: "Your Gravatar email",
    gravatarPwd: "Your Gravatar password",
    gravatarRating: "Rating:",
    gravatarNote: "<p><small>Note: Your email and password will NEVER be stored on our server</small></p>",
    installMsg: "upload",
    alertSvgSupportError: "Sorry, but your browser does not support SVG (Scalable Vector Graphic). Avatar Generator cannot start.",
    alertJsonError: "<h3>Error loading of JSON graphic data!</h3><p>Please try to reload the page. If the error still exists, please contact the administrator.</p>",
    alertSuccess: "<h3>Congratulations!</h3><p>You have successfully created the new avatar. You can check it on your profile page.</p>",
    alertSuccessCustom: "<h3>כל הכבוד!</h3><p>האווטר שלך נשמר בהצלחה.</p>",
    alertErrorCommon: "<h3>An error occurred!</h3><p>Please try again.</p><p>If the error still exists, please reload the page, recreate your avatar and try again. If this doesn&#039;t help, please contact the administrator.</p>",
    alertLoginFail: "<h3>You are not logged in!</h3><p>Please login or register first, then reload this page and create your avatar again.</p>",
    alertSuccessGravatar: "<h3>Congratulations!</h3><p>You have successfully changed your Gravatar. Please allow 5 to 10 minutes for avatar changes take effect.</p>",
    alertErrorEmailFail: "<h3>Email is empty!</h3><p>Please enter your email and try again.</p>",
    alertErrorPasswordFail: "<h3>Password is empty!</h3><p>Please enter your password and try again.</p>",
    alertErrorFaultCode8: "<h3>There is an internal error on &#039;secure.gravatar.com&#039; site!</h3><p>Please try later.</p>",
    alertErrorFaultCode9: "<h3>Incorrect Email or Password!</h3><p>Please check them and try again.</p>",
    alertErrorImageCreate: "<h3>The image is broken!</h3><p>Please try again.</p>",
    authoredMsg: "Graphic engine by ",
    okMsg: "ok",
    cancelMsg: "cancel",
    closeMsg: "סגור",
    tryAgainMsg: "try again",
    blockTitles: {
      face: "פנים",
      eyes: "עיניים",
      hair: "שיער",
      clothes: "בגדים",
      backs: "רקעים"
    },
    bodyZoneTitles: {
      backs: "ביסיסי",
      faceshape: "צורת פנים",
      chinshadow: "",
      facehighlight: "",
      humanbody: "",
      clothes: "בסיסיים",
      hair: "על הראש",
      ears: "אוזניים",
      eyebrows: "גבות",
      eyesback: "",
      eyesiris: "קשתית",
      eyesfront: "צורת עין",
      mouth: "פה",
      nose: "אף",
      glasses: "משקפיים",
      mustache: "שפם",
      beard: "זקן"
    }
  };
  return text;
}
