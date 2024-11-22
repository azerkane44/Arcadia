<?php

namespace App\Controller;

use App\Repository\AnimalRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AnimalController extends AbstractController
{
    #[Route('/animaux', name: 'animaux')]
    public function list(AnimalRepository $animalRepository): Response
    {
        // Récupère tous les animaux depuis la base de données
        $animaux = $animalRepository->findAll();

        // Retourne la vue avec la liste des animaux
        return $this->render('pages/animal/index.html.twig', [
            'animaux' => $animaux,
        ]);
    }
}
