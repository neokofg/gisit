<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceJsonMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        ob_start();

        $response = $next($request);

        // Получите содержимое буфера вывода и очистите его
        $output = ob_get_contents();
        ob_end_clean();

        // Добавьте вывод в массив сообщений
        if (!empty($output)) {
            $this->debugMessages[] = $output;
        }

        // Добавьте сообщения дебага в расширения ответа
        if ($response instanceof \Nuwave\Lighthouse\Http\Responses\Response) {
            $extensions = $response->extensions();
            $extensions['debug'] = $this->debugMessages;
            $response->setExtensions($extensions);
        }

        return $response;
    }
}
