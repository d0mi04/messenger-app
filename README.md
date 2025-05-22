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
- 📄 Lista wiadomości sortowana od najnowszych
- 🔔 Nieodczytane wiadomości są wyświetlane na górze listy czatów
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
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
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