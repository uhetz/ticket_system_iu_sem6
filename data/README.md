# Webserver Mock

## Hintergrund

Damit hr einfach Daten im Backend halten und verändern könnt bieten sich Mockserver an. In der "db.json" im Ordner "data" könnt hr einfach die Daten erstellen und anschließend nach Starten des Servers per HTTP GET/POST/PUT/DELETE bearbeiten

## Setup

Einmalig aufzurufen:
```
npm i -g json-server
```
Dies installiert das Mockserver Package global auf eurem System

### Erstellen/Bearbeiten der Daten

Einfach in data/db.json anpassen mit den benötigten Datenobjekten, siehe Beispieldaten im Branch

### Starten des Mockservers
```
cd <Projektordner>/data;
json-server --watch db.json
```

### Nutzen der Endpunkte

db.json Beispiel:
```
{
  "tickets": [
    {
        "id": 1,
        "name": "Support missing Login for System ABC",
        "priority": 1,
        "status": "CLOSED",
        "erstellerId": 1,
        "bearbeiterId": 2
      },
      {
        "id": 2,
        "name": "Absturz meines PCs nach zu langem Kaffee trinken",
        "priority": 3,
        "status": "ERSTELLT",
        "erstellerId": 1,
        "bearbeiterId": 2
      }
  ],
  "users": [
    {
        "id": 1,
        "firstName": "Alfred",
        "lastName": "HatImmerEinTechnischesProblem",
        "email": "alfred.probleme@tolledomain12345.de"
    },
    {
        "id": 2,
        "firstName": "Hans",
        "lastName": "Fachmann",
        "email": "hans.fachmann@wirloesenalles.de"
    }
  ]
}
```

Endpunkte zum Abholen der Daten:
GET http://localhost:3000/tickets (Gibt alle Tickets zurück)
GET http://localhost:3000/users (Gibt alle User zurück)

Gibt spezifisches Ticket zurück (hier ID 1)
GET http://localhost:3000/tickets/1 (Gibt alle Tickets zurück)
  
Filter nach Attribut(en), gibt alle Tickets mit Prio 3 zurück
GET http://localhost:3000/tickets?priority=3 (Gibt alle Tickets zurück)

Ticket anlegen (POST Request mit Body):

```
curl --location --request POST 'http://localhost:3000/tickets' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Ticket123",
    "email": "a@g.de",
    "priority": "1",
    "status": "OPEN",
    "erstellerId": 1,
    "bearbeiterId": 2
}'
```
