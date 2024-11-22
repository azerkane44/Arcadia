<?php

namespace App\Controller\Admin;

use App\Entity\Animal;
use App\Entity\Habitat;
use App\Entity\Image;
use App\Entity\Service;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use SebastianBergmann\CodeCoverage\Report\Html\Renderer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {


        return $this->render('pages/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Symrecipe - Administration')
            ->renderContentMaximized();
    }
    /*  Ajout des entité à administrer dans la page d'administration*/
    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Utilisateurs', 'fas  fa-bowl-rice"></i>', User::class);
        yield MenuItem::linkToCrud('Service', 'fas  fa-bowl-rice"></i>', Service::class);
        yield MenuItem::linkToCrud('Habitat', 'fas  fa-bowl-rice"></i>', Habitat::class);
        yield MenuItem::linkToCrud('Animaux', 'fas  fa-bowl-rice"></i>', Animal::class);
    }
}
