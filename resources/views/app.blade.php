<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Katana</title>
        <link rel="stylesheet" href="{{ URL::asset('assets/css/app.css') }}">
    </head>
    <body class="bg-white dark:bg-ghost bg-center bg-">
    <div id="app"></div>
    <script type="text/javascript" src="{{ URL::asset('assets/js/app.js') }}"></script>
    </body>
</html>
