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
        /*Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('photo1');
            $table->string('photo2');
            $table->string('brand');
            $table->smallInteger('model');
            $table->string('fuel_type');
            $table->float('price', 10, 2);
            $table->string('gearbox');
            $table->boolean('available');
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Schema::dropIfExists('cars');
    }
};
