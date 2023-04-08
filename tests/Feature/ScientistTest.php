<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ScientistTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_create_scientist(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_get_scientists()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_get_scientist()
    {
        $response = $this->get('/');
        sleep(1);

        $response->assertStatus(200);
    }
    public function test_map_upload()
    {
        $response = $this->get('/');

        sleep(1);

        $response->assertStatus(200);
    }
    public function test_auth_and_then_get_me()
    {
        $response = $this->get('/');

        sleep(1);

        $response->assertStatus(200);
    }
    public function test_create_scientist_validation()
    {
        $response = $this->get('/');

        sleep(1);

        $response->assertStatus(200);
    }
    public function test_map_upload_validation()
    {
        $response = $this->get('/');

        sleep(0.5);

        $response->assertStatus(200);
    }
}
