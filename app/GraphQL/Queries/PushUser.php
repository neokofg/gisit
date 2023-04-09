<?php

namespace App\GraphQL\Queries;

use App\Services\UserService;

final class PushUser
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(private UserService $userService)
    {

    }
    public function __invoke($_, array $args): String
    {
        return $this->userService->push($args);
    }
}
