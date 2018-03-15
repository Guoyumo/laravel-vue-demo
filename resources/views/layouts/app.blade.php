<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf" value="{{ csrf_token() }}">
  

    <title>Cache-Cache: Survey platform</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    @yield('additional-stylesheet')


    <script>
      window.ROOT_PATH = "{{ e(url('/')) }}";
    </script>

    @yield('header-script')

    </head>
    <body>
            @yield('content')


            @yield('additional-js')

            @yield('custom-js')


    </body>
</html>
