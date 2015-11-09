<?php
namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller{

	
	public function create(Request $request){
		
		return User::create([
            'name' => $request->Input('name'),
            'email' => $request->Input('email'),
            'password' => bcrypt($request->Input('password')),
        ]);
	}

}