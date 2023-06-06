<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rent;
use Illuminate\Support\Facades\DB;

class RentController extends Controller
{
    // Get all rents
    public function index()
    {
        $rents = Rent::all();
        return response()->json(['success' => true, 'data' => $rents]);
    }

    // Create a new rent
    public function store(Request $request)
    {
        //$rent = Rent::create($request->all());
        $rent = DB::table('rentals')->insert([
            'rental_date' => $request->input('rental_date'),
            'return_date' => $request->input('return_date'),
            'price' => $request->input('price'),
            'user_id' => $request->input('user_id'),
            'car_id' => $request->input('car_id')
        ]);
        return response()->json(['success' => true, 'data' => $rent], 201);
    }

    // Get rents of a specific user
    public function getUserRents($user_id)
    {
        $rents = Rent::where('user_id', $user_id)->get();
        return response()->json(['success' => true, 'data' => $rents]);
    }
}
