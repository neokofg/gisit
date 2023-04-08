<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Scientist extends Model
{
    use HasFactory;

    protected $fillable = [
      "phone",
      "telegram",
      "document",
        "user_id",
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function maps(): BelongsToMany
    {
        return $this->belongsToMany(Map::class,'scientists_maps','scientist_id','map_id');
    }

}
