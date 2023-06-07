<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rent;
use App\Models\User;
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
        //$rents = Rent::where('user_id', $user_id)->get();
        $user = User::with('rents.car')->find($user_id);
        $rents = $user->rents;

        return response()->json(['success' => true, 'data' => $rents]);
    }

    public function update(Request $request, $id)
    {
        $rent = Rent::findOrFail($id);

        $validatedData = $request->validate([
            'rental_date' => 'required',
            'return_date' => 'required',
            'price' => 'required',
            'user_id' => 'required',
            'car_id' => 'required',
        ]);

        DB::table('rentals')->where('id', $id)->update([
            'rental_date' => $request->rental_date,
            'return_date' => $request->return_date,
            'price' => $request->price,
            'user_id' => $request->user_id,
            'car_id' => $request->car_id
        ]);

        return response()->json([
            'data' => $rent,
            'message' => 'Rent updated successfully',
        ]);
    }

    public function destroy($id)
    {
        $rent = Rent::find($id);

        if (!$rent) {
            return response()->json(['success' => false, 'message' => 'Rent not found'], 404);
        }

        $rent->delete();

        return response()->json(['success' => true, 'message' => 'Rent deleted successfully']);
    }
}
