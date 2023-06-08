<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarController extends Controller
{
    public function index()
    {
        $cars = Car::select('id', 'photo1', 'photo2', 'brand', 'model', 'fuel_type', 'price', 'gearbox', 'available')
            ->get();
        return response()->json(['success' => true, 'data' => $cars], 200);
    }

    public function show($id)
    {
        $car = DB::table('cars')->where('id', $id)->get();
        return response()->json(['success' => true, 'data' => $car], 200);
    }

    public function store(Request $request)
    {
        DB::table('cars')->insert([
            'photo1' => $request->photo1,
            'photo2' => $request->photo2,
            'brand' => $request->brand,
            'model' => $request->model,
            'gearbox' => $request->gearbox,
            'fuel_type' => $request->fuel_type,
            'price' => $request->price,
            'available' => $request->available,
        ]);
        /*DB::table('cars')->insert([
            
            'photo1' => $request->photo1,
            'photo2' => $request->return_date,
            'brand' => $request->brand,
            'model' => $request->model,
            'gearbox' => $request->gearbox,
            'fuel_type' => $request->fuel_type,
            'price' => $request->price,
            'available' => $request->available,
        ]);*/
        return response()->json(['success' => true, 'data' => 'okok'], 201);
    }

    public function update(Request $request, $id)
    {
        $car = Car::findOrFail($id); 

        $validatedData = $request->validate([
            'brand' => 'required',
            'model' => 'required',
            'gearbox' => 'required',
            'fuel_type' => 'required',
            'price' => 'required',
            'available' => 'required',
        ]);

        DB::table('cars')->where('id', $id)->update([
            'brand' => $request->brand,
            'model' => $request->model,
            'gearbox' => $request->gearbox,
            'fuel_type' => $request->fuel_type,
            'price' => $request->price,
            'available' => $request->available
        ]);

        return response()->json([
            'data' => $car,
            'message' => 'Car updated successfully',
        ]);
    }

    public function destroy($id)
    {
        $car = Car::find($id);

        if (!$car) {
            return response()->json(['success' => false, 'message' => 'Car not found'], 404);
        }

        $car->delete();

        return response()->json(['success' => true, 'message' => 'Car deleted successfully']);
    }
}