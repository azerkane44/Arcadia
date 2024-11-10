<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{

    #[Route('/admin', name: 'admin_page')]
    public function admin(): Response
    {
        return $this->render('pages/admibistration_page.html.twig');
    }


    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {
        return $this->render('pages/contact.html.twig');
    }

    #[Route('/habitat', name: 'habitat',)]
    public function habitat(): Response
    {
        return $this->render('pages/habitat.html.twig');
    }


    #[Route('/service', name: 'service')]
    public function service(): Response
    {
        return $this->render('pages/service.html.twig');
    }
}
