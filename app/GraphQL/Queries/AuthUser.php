<?php

namespace App\GraphQL\Queries;

use App\Models\User;
use App\Services\AuthService;

final class AuthUser
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(private AuthService $authService)
    {
    }
    public function __invoke($_, array $args): User
    {
        return $this->authService->auth($args);
    }
}
