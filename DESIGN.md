---
name: Willy Fajar Ramadhan — Portfolio
description: Midnight editorial press portfolio, one-page Experience edition.
colors:
  ink: "#0c0b09"
  charcoal: "#14120f"
  ash: "#1e1b16"
  bone: "#f2ead9"
  bone-dim: "#cfc4ae"
  press: "#ff4d00"
  press-ink: "#160800"
  hairline: "rgba(242, 234, 217, 0.16)"
typography:
  display:
    fontFamily: "Anton, Archivo Black, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  section:
    fontFamily: "Anton, Archivo Black, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "normal"
  feature:
    fontFamily: "Anton, Archivo Black, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  meta:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.18em"
rounded:
  none: "0px"
  thumb: "8px"
spacing:
  section-y: "clamp(80px, 10vw, 112px)"
  rule-gap: "12px"
  folio-pad: "12px"
components:
  button-solid:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-press:
    backgroundColor: "{colors.press}"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  badge-placeholder:
    backgroundColor: "transparent"
    textColor: "{colors.bone-dim}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
---

## Overview

Single-page portfolio as one magazine edition: cover, profile, five features, back page. Dark room, bone ink, one press-orange accent that owns blocks rather than outlines. Motion is a single reveal system plus one parallax drift layer.

## Colors

Committed strategy: charcoal-ink grounds, bone text, press-orange reserved for live marks, primary actions, and the placeholder state. Hairlines structure every section. Contrast verified: bone on ink 16.44, bone-dim on ink 11.39, press-ink on press 5.91.

## Typography

Anton condensed nameplate for display, section, and feature titles — feature is the deliberate intermediate step (1.75–3rem) for project titles, held below section to preserve H2/H3 hierarchy — Archivo for body capped at 70ch, JetBrains Mono uppercase tracked meta only for edition data, folios, and code-adjacent labels. Headings carry their own weight; no kickers or eyebrow labels. Contact back-page uses the display step.

## Layout

Max width 72rem, 20px gutters, sections separated by hairlines with more space above headings than below. Features alternate 7/5 column rhythm; lead feature takes the wide slot. Fluid clamp type, no fixed-pixel grid.

## Elevation & Depth

Flat press system: no shadows, depth comes from rules, weight, and scale. Fixed edition rail uses backdrop blur as its only glass surface. Focus ring is 2px press-orange at 3px offset.

## Shapes

Sharp throughout: zero radius on buttons, badges, and frames. Scrollbar thumb is the single 8px exception. Placeholder state is a dashed outline, pending is dashed, live is solid.

## Components

Edition rail (fixed header with Vol line and Kontak press block), cover (full-viewport poster with drift, video slot with poster fallback, nameplate, dual CTA), folio bar (page marker plus facing label), feature article (plate figure, No. marker with dashed placeholder badge, display title, meta line, Demo and Repo actions), stack colophon list, back-page contact block, footer colophon.

## Do's and Don'ts

Do keep placeholders visibly labeled and swap them for real work without touching layout. Do not invent clients, testimonials, metrics, or experience years. Do not add gradient text, glass decoration, same-size icon cards, section numbers beyond folios, or motion outside the reveal plus drift system. Respect reduced motion: content is visible by default and all animation parks.
