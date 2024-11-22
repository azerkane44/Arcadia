<?php

namespace App\Entity;

use App\Repository\AnimalRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnimalRepository::class)]
class Animal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 80, nullable: true)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255)]
    private ?string $race = null;

    #[ORM\Column(length: 255)]
    private ?string $imageanimaux = null;

    #[ORM\Column(length: 255)]
    private ?string $habitatanimaux = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getRace(): ?string
    {
        return $this->race;
    }

    public function setRace(string $race): static
    {
        $this->race = $race;

        return $this;
    }

    public function getImageanimaux(): ?string
    {
        return $this->imageanimaux;
    }

    public function setImageanimaux(string $imageanimaux): static
    {
        $this->imageanimaux = $imageanimaux;

        return $this;
    }

    public function getHabitatanimaux(): ?string
    {
        return $this->habitatanimaux;
    }

    public function setHabitatanimaux(string $habitatanimaux): static
    {
        $this->habitatanimaux = $habitatanimaux;

        return $this;
    }
}
