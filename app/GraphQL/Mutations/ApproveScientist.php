<?php

namespace App\GraphQL\Mutations;

use App\Services\ScientistService;

final class ApproveScientist
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(private ScientistService $scientistService)
    {
    }
    public function __invoke($_, array $args): String
    {
        return $this->scientistService->approve($args);
    }
}
