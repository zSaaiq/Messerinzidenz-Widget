# Messerangriffe-Widget für Scriptable

Dieses **Scriptable**-Widget zeigt die heutigen aktuellen Messerangriffe in Deutschland an. Es lädt die Daten von einer öffentlichen GeoJSON-API und zeigt die 10 neuesten Vorfälle übersichtlich im Widget an.

## Features
- Anzeige der 10 neuesten Messerangriffe mit Titel und Ort.
- Anzeige der Gesamtzahl der heutigen Vorfälle am unteren Rand.
- Farbige Anzeige der Gesamtzahl (grün, gelb, rot) je nach Anzahl der Vorfälle.
- Direktes Öffnen der Quelle durch Tippen auf die Einträge.

## Screenshot
<p align="center">
  <img src="./screenshot_widget.png" alt="Messerangriffe Widget Ansicht" width="300">
</p>

## Installation
1. Installiere **Scriptable** aus dem [App Store](https://apps.apple.com/de/app/scriptable/id1405459188).
2. Erstelle ein neues Script und füge den kompletten Code des Widgets ein.
3. Füge das Script als Widget zu deinem Homescreen hinzu.

## Verwendung
- Das Widget aktualisiert automatisch die neuesten Daten.
- Tippe auf einen Vorfall, um den entsprechenden Artikel in Safari zu öffnen.
- Die Gesamtzahl der Vorfälle wird immer unten im Widget angezeigt.
- Farben der Gesamtzahl:
  - Grün: 0 Vorfälle
  - Gelb: 1–4 Vorfälle
  - Rot: Mehr als 4 Vorfälle

## API-Quelle
Die Daten werden von [messerinzidenz.de](https://messerinzidenz.de/geojson) als GeoJSON geladen.
