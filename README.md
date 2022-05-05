# Time Exchange (TBC)

#### Table of contents (fix links):
1. Getting started
2. Key Links
3. Auth0 Premissions and Roles
4. API Routes
5. DB Schema

---

## 1. Getting started

### To get up and running

```shell
git clone https://github.com/kahikatea-2022/Time-Exchange.git
cd Time-Exchang
cp client/auth_config.json.example client/auth_config.json
cp server/.env.example server/.env
npm install 
npm run db:migrate
npm run db:seed
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

### DB functions

```shell
npm run db:migrate #migrate
npm run db:seed #seed
npm run db:reset #rollback, migrate, and seed
```

### Testing and formatting
```shell
npm run test #run full test suite
npx jest filename.test.js #run single test

npm run format #auto format all files
npm run lint #see which files need formatting (may not work atm)
```

---

## 2. Key Links

- [Contribution Workflow](https://github.com/kahikatea-2022/Time-Exchange/blob/2-readme-update/CONTRIBUTE.md)
- [Miro](https://miro.com/app/board/uXjVO3kWk38=/)
- Figma (tba)
- [Board](https://github.com/kahikatea-2022/Time-Exchange/projects/1)
- [Issues](https://github.com/kahikatea-2022/Time-Exchange/issues)
- [Auth0](https://manage.auth0.com/dashboard/au/kahikatea-2022-jessew/applications/c8ZqOgWFTqZZRQ9KgFK75a4lCI06SdYV/settings)

---

## 3. Auth0 Premissions and Roles

Add information about permissions here

---

## 4. API Routes (TBC)

Failure response (HTTP status: 500):

```json
{
  "error": {
    "title": "Sanitised error message here"
  }
}
```

### `GET /api/v1/example`

Response (200):

```json
{
  "example": [
    {
      "id": 1,
      "name": "example",
    }
  ]
}
```

---

## 5. DB Schema (TBC)

![Time Exchange DBA](https://user-images.githubusercontent.com/49049363/166867526-d1a7fbfa-5af1-478d-8226-7735d370f9c5.png)
