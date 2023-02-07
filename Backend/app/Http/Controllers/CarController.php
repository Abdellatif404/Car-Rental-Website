<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class CarController extends Controller
{
    public function index()
    {
        $cars = DB::table('cars')->get();

        return response()->json(['success'=>true, 'data' => $cars],200);
    }
}
