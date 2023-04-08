<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Telegram extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'name',
        'user_id',
        'userbase_id',
        'input'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'userbase_id','id');
    }

    protected $table = 'telegram';
}
