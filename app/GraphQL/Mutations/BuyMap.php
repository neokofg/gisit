<?php

namespace App\GraphQL\Mutations;

use App\Services\UserService;

final class BuyMap
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(private UserService  $userService)
    {
    }
    public function __invoke($_, array $args)
    {
        return $this->userService->buy($args);
    }
}
