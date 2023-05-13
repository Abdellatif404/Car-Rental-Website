<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarController extends Controller
{
    public function index()
    {
        $cars = DB::table('cars')->get();
        return response()->json(['success'=>true, 'data' => $cars],200);
    }

    public function show($id)
    {
        $car = DB::table('cars')->where('id', $id)->get();
        return response()->json(['success'=>true, 'data' => $car],200);
    }
}
