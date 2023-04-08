<?php

namespace App\GraphQL\Mutations;

use App\Models\Map;
use App\Services\MapService;

final class CreateMap
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(private MapService $mapService)
    {
    }
    public function __invoke($_, array $args): Map
    {
        return $this->mapService->create($args);
    }
}
