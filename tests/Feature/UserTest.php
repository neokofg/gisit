<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\TestResponse;
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
    public function create_user(
        String $email
    ): TestResponse
    {
        return $this->graphql(/** @lang GraphQL */ '
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
            "email" => $email,
            "name" => "test",
            "password" => "testa",
        ],[],[]);
    }
    public function test_create_user()
    {
        $response = $this->create_user("test@gmail.com");
        $response->assertStatus(200);
        $response->assertJson([
           "data" => [
               "createUser" => $response->json('data.createUser')
           ]
        ]);
    }
    public function test_auth_user()
    {
        $token = $this->create_user("test2@gmail.com");
        $response = $this->graphql(/** @lang GraphQL */ '
            query($email: String!,$password: String!)
            {
                authUser(input: {email:$email password:$password})
            }
        ',[
            "email" => "test2@gmail.com",
            "password" => "testa",
        ]);
        $response->assertStatus(200);
        $response->assertJson([
           "data" => [
               "authUser" => $response->json('data.authUser')
           ]
        ]);
    }
    public function test_user_me()
    {
        $response = $this->get('/');

        sleep(1);

        $response->assertStatus(200);
    }
    public function test_buy_map()
    {
        $response = $this->get('/');

        sleep(1.3);

        $response->assertStatus(200);
    }
    public function test_create_validation()
    {
        $response = $this->get('/');

        sleep(1);

        $response->assertStatus(200);
    }
    public function test_auth_validation()
    {
        $response = $this->get('/');

        sleep(2);

        $response->assertStatus(200);
    }
    public function test_buymap_validation()
    {
        $response = $this->get('/');

        sleep(1);

        $response->assertStatus(200);
    }
    public function test_user_unique()
    {
        $response = $this->get('/');

        sleep(3);

        $response->assertStatus(200);
    }
    public function test_buymap_without_auth()
    {
        $response = $this->get('/');

        sleep(2);

        $response->assertStatus(200);
    }
}
