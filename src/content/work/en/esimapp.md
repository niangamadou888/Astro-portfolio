---
title: "esimapp — travel eSIM store"
summary: "My own product: a travel eSIM store for 200+ destinations, priced per GB, where payment, delivery and refunds run with no human in the loop."
role: "Founder and sole developer"
period: "Sep 2026 – present"
named: true
liveUrl: "https://esimapp.io"
featured: 1
order: 1
stack: ["React", "TypeScript", "Express", "Vite", "Tailwind CSS", "Playwright", "Cloudflare"]
facts:
  - value: "200+"
    label: "destinations, every plan shown with its price per GB"
    source: "https://esimapp.io"
  - value: "4,500+"
    label: "automated tests across the API, the storefront and end-to-end journeys"
    source: "repo:esimapp-io"
  - value: "590+"
    label: "commits, all written by me"
    source: "repo:esimapp-io"
  - value: "4 weeks"
    label: "from the first commit to the live store"
    source: "repo:esimapp-io"
image: "../../../assets/work/esimapp.png"
imageAlt: "esimapp homepage with the destination picker"
---

## The product

esimapp.io sells prepaid travel eSIM data for 200+ destinations. A traveller picks a country or region, sees every plan with its total price and its price per GB (cheapest first), pays, and gets the eSIM — QR code, activation code and ICCID — on screen and by email within minutes. No account is needed to buy; accounts are optional for people who come back.

## My role

It's my own product. I designed it, wrote the product and design specs, built the whole stack and run it in production — about 590 of its 600+ commits are mine.

## What I built

- **Zero-touch fulfilment.** The eSIM is ordered from the wholesale API only after the payment is confirmed on the server, then delivered automatically when the provisioning webhook arrives.
- **Payments you can't double-charge.** Hosted checkout with card, Apple Pay and Google Pay; the webhook is re-checked against the payment provider's API, a second payment for the same order is refunded automatically, and the eSIM order is keyed so a retry can never buy twice.
- **Automatic refunds.** If provisioning fails after payment, the customer is refunded in full and I get an alert — no manual step.
- **Optional accounts.** Email and password, Google or Telegram sign-in, guarded by Cloudflare Turnstile; a verified email claims that address's earlier guest orders.
- **A store-credit wallet.** Account holders can top up by card or crypto and pay from their balance.
- **An admin back office.** Orders, packages, pricing with a default markup and per-package overrides, the email log, background jobs and a sales switch, with admin and read-only support roles.
- **Built for a phone in a hurry.** Mobile-first, pre-rendered pages, a performance budget, and every page on translation keys so more languages can follow.

## Hard problems

- **Two webhooks, one order.** Payment and provisioning arrive from two different services, in any order and sometimes twice; every handler is idempotent so each order ends either delivered or refunded, exactly once.
- **Shipping fast without breaking things.** A test suite of 4,500+ tests, a private staging copy and a scripted deploy with one-command rollback let me go from first commit to a live store in about four weeks.
