# PhoneBook 📱

A responsive **React SPA** for managing personal contacts.  
Features user authentication, persistent Redux state, live filtering, and a clean Material UI design.

## 🌐 Live Demo

<https://goit-react-hw-08-three-bice-55.vercel.app/>

---

## 🚀 Tech Stack

| Category        | Library / Tool                         |
| --------------- | -------------------------------------- |
| Framework       | **React 18** (Vite 6)                  |
| State mgmt.     | **Redux Toolkit @2** + `redux‑persist` |
| Data fetching   | **Axios**                              |
| Routing         | **React Router DOM v7**                |
| UI Library      | **MUI v6** (`@mui/material` + Emotion) |
| Forms           | **Formik 2** + **Yup** validation      |
| Icons / loaders | `react‑icons`, `react‑loader‑spinner`  |
| Lint / Dev      | ESLint 9, Vite HMR, modern‑normalize   |

---

## 📦 Features

### Authentication

- User **registration**, **login**, and **logout** (JWT token).
- Token stored in Redux and persisted to `localStorage`.

### Contacts

- **Add**, **delete**, and **filter** contacts by name.
- Real‑time filtering with 0 ms debounce.
- Form validation with Yup + Formik.

### UX / UI

- Material UI components styled with Emotion.
- Global loading spinner on API calls.

---
