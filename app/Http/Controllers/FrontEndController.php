<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

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
    public function Product()
    {
        $products = DB::table('products')->get();
        return Inertia::render('Product', ['products' => $products]);
    }

    public function create()
    {
        return Inertia::render('ProductEntry');
    }
    public function store(Request $request)
    {
        // dd($request);
        DB::table('products')->insert([
            'name' => $request->name,
            'details' => $request->details,
            'sku' => $request->sku,
            'price' => $request->price,
            'stock' => $request->stock,
            'image' => '',
            'category_id' => $request->category_id

        ]);
        return Inertia::render('ProductStore');
    }
}
