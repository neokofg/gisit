<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MapTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_get_map()
    {
        $response = $this->get('/');
        sleep(1);

        $response->assertStatus(200);
    }
    public function test_get_buyed_map()
    {
        $response = $this->get('/');

        sleep(1);

        $response->assertStatus(200);
    }
}
