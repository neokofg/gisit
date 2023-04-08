<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegionsTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_regions()
    {
        $response = $this->get('/');
        sleep(1);

        $response->assertStatus(200);
    }
    public function test_region()
    {
        $response = $this->get('/');

        sleep(1.4);

        $response->assertStatus(200);
    }
}
