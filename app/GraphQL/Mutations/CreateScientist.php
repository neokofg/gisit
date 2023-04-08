<?php

namespace App\GraphQL\Mutations;

use App\Models\Scientist;
use App\Services\ScientistService;

final class CreateScientist
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(public ScientistService $scientistService)
    {

    }
    public function __invoke($_, array $args): Scientist
    {
        return $this->scientistService->create($args);
    }
}
