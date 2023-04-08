<?php

namespace App\GraphQL\Queries;

use App\Services\RegionService;

final class GetRegion
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __construct(private RegionService $regionService)
    {

    }
    public function __invoke($_, array $args): array
    {
        return $this->regionService->create($args);
    }
}
