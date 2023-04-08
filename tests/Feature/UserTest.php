<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function setUp(): void
    {
        parent::setUp();

    }
    public function graphql(string $query, array $vars)
    {
        return $this->post('/graphql', [
            'query' => $query,
            'variables' => $vars
        ]);
    }
    public function test_create_user()
    {
        $response = $this->graphql(/** @lang GraphQL */ '
            mutation (
                $email: String!,
                $name: String!,
                $password: String!
            ){
                createUser(input: {
                    email: $email
                    name: $name
                    password: $password
                })
            }
        ',[
            "email" => "asdasd@gmail.com",
            "name" => "test",
            "password" => "test",
        ],[],[]);
        $response->assertStatus(200);
        $response->assertJson([
           "data" => [
               "createUser" => $response->json('data.createUser')
           ]
        ]);
    }
}
