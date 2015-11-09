<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/signup', function () {
    return view('welcome');
});

Route::get('/new', function () {
    return view('welcome');
});

Route::get('/login', function(){
	return view('loginpage');
});

Route::post('/registeruser', 'UserController@create');

Route::match(['GET','POST'],'/gettoken', function() {
    return Response::json(Authorizer::issueAccessToken());
});

Route::get('/getsecureddatalist', ['middleware' => 'oauth:3', function() {   
   return json_encode(array('MySQL','Oracle','Cassandra','DynamoDB'));
}]);

Route::get('/editscopedlist', ['middleware' => 'oauth:1', function(){
	return json_encode(array('MySQL','Oracle','Cassandra','DynamoDB', 'MongoDB'));
}]);
Route::get('/deletescopedlist', ['middleware' => 'oauth:2', function(){
	return json_encode(array('MySQL','Oracle','Cassandra'));
}]);
Route::get('/editdeletecopedlist', ['middleware' => 'oauth:1+2+3', function(){
	return json_encode(array("editedlist" => array('MySQL','Oracle','Cassandra','DynamoDB', 'MongoDB'), "deletedlist" => array('MySQL','Oracle','Cassandra')));
}]);
Route::get('/', [function() {   
   return json_encode(array('MySQL','Oracle','Cassandra','DynamoDB'));
}]);