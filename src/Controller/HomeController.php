<?php

namespace App\Controller;

use Doctrine\ORM\Query\Expr\Select;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends AbstractController
{
    #[Route('/', name: 'acceuil')]
    public function accueil(): Response
    {
        return $this->render('pages/acceuil.html.twig');
    }
}
