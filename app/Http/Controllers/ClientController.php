<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function accueil()
    {
        return view('Pages.Client.accueil');
    }

    public function portfolio($projet)
    {
        switch ($projet) {
            case 'APPLICATION DE DEMANDE DE CARBURANT':
                return view('Pages.Client.Portfolio.demande_natsar');

            case 'APPLICATION DE GESTION D\'UNE BIBLIOTHÈQUE':
                return view('Pages.Client.Portfolio.biblio');

            case 'APPLICATION DE GESTION DE DÉPENSE':
                return view('Pages.Client.Portfolio.depenses');

            case 'APPLICATION DE MENU PLAT':
                return view('Pages.Client.Portfolio.food');

            case 'APPLICATION DE GESTION DE CARBURANT':
                return view('Pages.Client.Portfolio.gest_carb');

            case 'APPLICATION DE GESTION HOTEL':
                return view('Pages.Client.Portfolio.palm_club');

            case 'APPLICATION DE SERVICE DE CARBURANT':
                return view('Pages.Client.Portfolio.pompiste');

            case 'APPLICATION RQV DESKTOP':
                return view('Pages.Client.Portfolio.rqv_desktop');

            case 'APPLICATION RQV WEB':
                return view('Pages.Client.Portfolio.rqv_web');

            case 'SITE WEB DE SOKO CORPORATION':
                return view('Pages.Client.Portfolio.soko');

            case 'SITE WEB DE LOCATEC':
                return view('Pages.Client.Portfolio.sw_locatec');

            case 'SITE WEB DE SCHIBA HOLDING':
                return view('Pages.Client.Portfolio.schiba');

            case 'SITE WEB DE SCHIBA ÉNERGIES ET SERVICES':
                return view('Pages.Client.Portfolio.sw-ses');
            
            default:
                # code...
                break;
        }
    }
}
