<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'firstname' => 'required|min:2|max:20',
            'lastname' => 'required|min:2|max:20',
            'telephone' => 'required|min:10|max:30',
            'email' => 'required|email|unique:users',
            /*'password' => [
                'required',
                'string',
                'min:10',
                'regex:/[a-zA-Z0-9]/',
                'regex:/[@$!%*#?&]/'
            ],*/
        ]);
        if($validated)
        {
            DB::table('users')->insert([
                'firstname'=>$request->firstname,
                'lastname'=>$request->lastname,
                'telephone'=>$request->telephone,
                'email'=>$request->email,
                'password'=>$request->password
            ]);
        }
    
    }
}
