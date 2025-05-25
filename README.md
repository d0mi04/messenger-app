# 💬 messenger-app

**messenger-app** to pełnoprawna aplikacja typu Messenger, stworzona w JavaScript, z podziałem na frontend i backend. Umożliwia użytkownikom rejestrację, logowanie oraz prowadzenie rozmów w czasie rzeczywistym. Aplikacja obsługuje sortowanie wiadomości i priorytetyzuje nieprzeczytane wiadomości na liście czatów.

## 📚 Technologie

### 🖥 Frontend
- React
- Axios
- Socket.IO Client

### 🔧 Backend
- Node.js + Express
- MongoDB (Mongoose)
- Socket.IO
- JWT (autoryzacja)

## ✨ Główne funkcjonalności

- 🔐 Tworzenie konta użytkownika i logowanie z użyciem tokenów JWT
- 💬 Wysyłanie i odbieranie wiadomości w czasie rzeczywistym
- 📄 Lista wiadomości sortowana od najnowszych [ NOT TESTED YET ]
- 🔔 Nieodczytane wiadomości są wyświetlane na górze listy czatów [ NOT TESTED YET ]
- 🗂️ Każdy użytkownik ma dostęp do własnej listy rozmów

## 📦 Struktura projektu

```
messenger-app/
├── backend/                # API i logika serwera
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── frontend/               # Aplikacja React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
└── README.md
```

## 🚀 Jak uruchomić projekt lokalnie

### Backend
```bash
cd backend
npm install express mongoose bcrypt jsonwebtoken cors socket.io
npm install --save-dev nodemon
npm run dev
```

### Frontend
```bash
cd frontend
npm axios socket.io-client react-router-dom jwt-decode
npm start
```
note: należy sprawdzić jaka wersja jwt-decode się zainstalowała --> ```npm list jwt-decode```

jeżeli wersja 4 - nic nie zmieniać w kodzie --> /frontend/App.js ```import { jwtDecode } from 'jwt-decode';```

jeżeli wersja 3 - wtedy należy zmienić w pliku **/frontend/App.js** import jwt-decode na defaultowy ```import jwt-decode from 'jwt-decode';``` 

### Plik środowiskowy .env
Należy przygotować klaster w MongoDB Atlas --> https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/ 
```
MONGO_URI=mongodb+srv://<login>:<hasło>@cluster0.mongodb.net/messenger-app
JWT_SECRET=super_tajne_haslo
```

### seedowanie danych
W katalogu backend/scripts znajduje sie plik **seed.js** - za jego pomocą można zainicjować dane. 
Uruchomienie:
```
cd backend
node scripts/seed.js
```

## 🛠 Przyszłe usprawnienia (TODO)

- ✅ Powiadomienia push o nowych wiadomościach
- 🧑‍🤝‍🧑 Wyszukiwanie użytkowników
- 🎨 Personalizacja profilu

## Autor 👩‍💻

Projekt jest tworzony w celach edukacyjnych.

## 📃 Licencja

Projekt dostępny na licencji MIT.

---

Made with ❤️ in JavaScript
