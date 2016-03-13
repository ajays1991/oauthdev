<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>OAuth Admin</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- 
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="/css/messenger.css">
	<link rel="stylesheet" href="/css/messenger-theme-flat.css">
	<link rel="stylesheet" href="/css/messenger-spinner.css"> 
	<link rel="stylesheet" href="/css/font-awesome.min.css">-->
	<link rel="stylesheet" href="/css/custom.css">
</head>
<body class="login-bg">
	<div class="container">
		<div class="row">
			@yield('content')			
		</div>
	</div>
	<div class="footer">
		@include('layouts.footer')
	</div>
    <!--[if lt IE 9]>
    <script src="js/libs/es5-shim.min.js"></script>
    <script src="js/libs/json3.min.js"></script>
    <![endif]-->
   <!--  // <script src="http://cdn.pubnub.com/pubnub.min.js"></script> 
    <script src="/js/libs/jquery-2.1.1.min.js"></script>
    <script src="/js/libs/angular.min.js"></script>
    <script src="/js/libs/angular-resource.min.js"></script>
    <script src="/js/libs/angular-sanitize.min.js"></script>
    <script src="/js/libs/angular-animate.min.js"></script>
    <script src="/js/libs/angular-touch.min.js"></script>
    <script src="/js/libs/angular-ui-router.min.js"></script>
    <script src="/js/libs/ui-bootstrap-tpls.min.js"></script>
    <script src="/js/libs/textAngular.min.js"></script>
   <script src="/js/libs/pubnub-angular.js"></script>
    <script src="/js/libs/messenger.js"></script>
    <script src="/js/libs/messenger-theme-flat.js"></script> -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) scripts/scripts.js -->
    <!-- <script src="/js/custom/app.js"></script>
    <script src="/js/custom/auth.js"></script>
    <script src="/js/custom/controllers/dashboardCtrl.js"></script>
    <script src="https://apis.google.com/js/client.js?onload=handleClientLoad"></script> -->
    <!-- endbuild -->
   <!--  <script>
    	Messenger.options = {
    		extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
    		theme: 'flat'
    	}
    </script> -->
</body>
</html>
