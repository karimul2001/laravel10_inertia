<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontEndController extends Controller
{
    public function Home()
    {
        return Inertia::render('Home');
    }

    public function About()
    {
        return Inertia::render('About');
    }
}
