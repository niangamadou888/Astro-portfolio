---
title: "esimapp — boutique d'eSIM de voyage"
summary: "Mon propre produit : une boutique d'eSIM de voyage pour 200+ destinations, prix au Go, où paiement, livraison et remboursements tournent sans intervention."
role: "Fondateur et seul développeur"
period: "Sept. 2026 – aujourd'hui"
named: true
liveUrl: "https://esimapp.io"
featured: 1
order: 1
stack: ["React", "TypeScript", "Express", "Vite", "Tailwind CSS", "Playwright", "Cloudflare"]
facts:
  - value: "200+"
    label: "destinations, chaque forfait affiché avec son prix au Go"
    source: "https://esimapp.io"
  - value: "4 500+"
    label: "tests automatisés : API, boutique et parcours de bout en bout"
    source: "repo:esimapp-io"
  - value: "590+"
    label: "commits, tous écrits par moi"
    source: "repo:esimapp-io"
  - value: "4 semaines"
    label: "du premier commit à la boutique en ligne"
    source: "repo:esimapp-io"
image: "../../../assets/work/esimapp.png"
imageAlt: "Page d'accueil d'esimapp avec le choix de la destination"
---

## Le produit

esimapp.io vend des forfaits de données eSIM prépayés pour 200+ destinations. Le voyageur choisit un pays ou une région, voit chaque forfait avec son prix total et son prix au Go (le moins cher en premier), paie, et reçoit son eSIM — QR code, code d'activation et ICCID — à l'écran et par e-mail en quelques minutes. Aucun compte n'est nécessaire pour acheter ; les comptes sont optionnels pour ceux qui reviennent.

## Mon rôle

C'est mon propre produit. Je l'ai conçu, j'ai rédigé les spécifications produit et design, développé toute la pile et je l'exploite en production — environ 590 de ses 600+ commits sont de moi.

## Ce que j'ai construit

- **Une livraison sans intervention.** L'eSIM n'est commandée auprès de l'API du grossiste qu'une fois le paiement confirmé côté serveur, puis livrée automatiquement à l'arrivée du webhook de provisionnement.
- **Des paiements impossibles à débiter deux fois.** Paiement hébergé par carte, Apple Pay et Google Pay ; le webhook est revérifié auprès de l'API du prestataire, un second paiement pour la même commande est remboursé automatiquement, et la commande d'eSIM est indexée pour qu'une nouvelle tentative ne puisse jamais acheter deux fois.
- **Des remboursements automatiques.** Si le provisionnement échoue après paiement, le client est remboursé intégralement et je reçois une alerte — aucune étape manuelle.
- **Des comptes optionnels.** Connexion par e-mail et mot de passe, Google ou Telegram, protégée par Cloudflare Turnstile ; un e-mail vérifié récupère les anciennes commandes passées en invité avec cette adresse.
- **Un portefeuille de crédit.** Les titulaires d'un compte peuvent recharger par carte ou en crypto et payer depuis leur solde.
- **Un back-office.** Commandes, forfaits, tarification avec marge par défaut et exceptions par forfait, journal des e-mails, tâches de fond et interrupteur des ventes, avec des rôles admin et support en lecture seule.
- **Pensé pour un téléphone pressé.** Mobile d'abord, pages pré-rendues, budget de performance, et chaque page bâtie sur des clés de traduction pour accueillir d'autres langues.

## Problèmes difficiles

- **Deux webhooks, une commande.** Le paiement et le provisionnement arrivent de deux services différents, dans n'importe quel ordre et parfois deux fois ; chaque traitement est idempotent, si bien que chaque commande finit livrée ou remboursée, une seule fois.
- **Livrer vite sans rien casser.** Une suite de 4 500+ tests, une copie de préproduction privée et un déploiement scripté avec retour arrière en une commande m'ont permis de passer du premier commit à une boutique en ligne en environ quatre semaines.
