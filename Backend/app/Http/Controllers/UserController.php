<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function signup(Request $request)
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

    public function login(Request $request) {

        $email = $request->input('email');
        $password = $request->input('password');
        $user = User::where('email', $email)->value('password');

        if (!$user) 
            return response()->json(['success'=>false, 'message' => 'Login Fail, no matches in our database']);

        return response()->json(['success'=>true,'message'=>'We\'ve found a match', 'data' => $user],200);
    }
}
