<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Car;


class Rent extends Model
{
    use HasFactory;

    protected $table = 'rentals';

    public function user()
{
    return $this->belongsTo(User::class);
}

public function car()
{
    return $this->belongsTo(Car::class);
}
}
