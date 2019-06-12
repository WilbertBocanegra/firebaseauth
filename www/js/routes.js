routes = [
  {
    path: '/',
    componentUrl: './pages/home.html',
    on:{
      pageInit:function(){
        $$('.page-content').on('scroll', function () {
          var scrollTop = this.scrollTop;
          if (scrollTop >30){
            $$('.navbar').removeClass('no-shadow');
          }else{
            $$('.navbar').addClass('no-shadow');
          }
        })
      },
      pageReinit:function(){
        $$('.navbar').addClass('no-shadow');
      },
    }
  },
]

var config = {
   apiKey: "AIzaSyDvwasxOHjhWxGo2jmb6vKIh1K-Zwp2j9w",
   authDomain: "updc-f0308.firebaseapp.com",
   databaseURL: "https://updc-f0308.firebaseio.com",
   projectId: "updc-f0308",
   storageBucket: "updc-f0308.appspot.com",
   messagingSenderId: "327648955515"
 };
 firebase.initializeApp(config);

var db = firebase.firestore();
