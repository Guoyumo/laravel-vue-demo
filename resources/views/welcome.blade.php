@extends('layouts.app')

@section('header-script')
@endsection

@section('content')
    <div id="app">
        <router-view></router-view>
    </div>
@endsection

@section('additional-js')
    <script src="{{asset('js/jquery.min.js')}}"></script>
    <script src="{{asset('js/bootstrap.min.js')}}"></script>
    <script src="{{asset('js/app.js')}}"></script>
@endsection