<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*Schema::create('rentals', function (Blueprint $table) {
             $table->id();
             $table->date('rental_date');
             $table->date('return_date');
             $table->float('price', 10, 2);
             $table->unsignedBigInteger('user_id');
             $table->unsignedBigInteger('car_id');
             $table->foreign('user_id')->references('id')->on('users');
             $table->foreign('car_id')->references('id')->on('cars');
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Schema::dropIfExists('rentals');
    }
};
