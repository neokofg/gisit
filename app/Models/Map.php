<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Map extends Model
{
    use HasFactory;

    protected $fillable = [
      "start_date",
      "end_date",
      "region",
      "type",
      "url",
        "price"
    ];
}
