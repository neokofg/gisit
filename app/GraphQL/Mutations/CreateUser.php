<?php

namespace App\GraphQL\Mutations;

use App\Services\AuthService;

final class CreateUser
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(private AuthService $authService)
    {
    }
    public function __invoke($_, array $args): String
    {
        return $this->authService->create($args);
    }
}
