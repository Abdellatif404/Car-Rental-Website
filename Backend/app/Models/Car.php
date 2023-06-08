<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Rent;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'photo1',
        'photo2',
        'brand',
        'model',
        'gearbox',
        'fuel_type',
        'price',
        'available',
    ];

    public function rents()
    {
        return $this->hasMany(Rent::class);
    }
}
