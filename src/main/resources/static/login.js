new Vue({
  el: '#app',
  data: {
    msg:'Login to  the app',
    username:'',
    password:''
  },
  methods:{
	  loginSubmit: function(){
		  this.msg = "Login clicked";
		  this.ajaxRequest = true;
		  axios.post('./api/v1/userLogin',{
			  username:this.username,
			  password:this.password
		  });
	  }
  }
});