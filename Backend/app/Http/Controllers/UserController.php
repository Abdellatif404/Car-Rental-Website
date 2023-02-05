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
            'email' => 'required|email|unique:users'
        ]);
        if($validated)
        {
            DB::table('users')->insert([
                'firstname'=>$request->input('firstname'),
                'lastname'=>$request->input('lastname'),
                'telephone'=>$request->input('telephone'),
                'email'=>$request->input('email'),
                'password'=>$request->input('password')
            ]);

        }
    
    }
}
