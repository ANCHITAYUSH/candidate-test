# 🃏 Digital Fabric Platform - Candidate Test

## 📋 Overview
This document describes the functionality implemented for **interactive cards** in the project.  
Each card hold a special features of thier own like  **random number generator**, **form interaction**, **cat fact fetcher**, and **success toast popup**.

---

## ✨ Features

### 1. 🔢 Display Random Number (Auto and On Click)
- **Auto Update:**  
  - Every **5 seconds**, a new random number between **1 and 100** is displayed automatically on the card.
  
- **Manual Update:**  
  - Clicking the card immediately **generates and displays** a new random number.

---

### 2. 📝 Open Form on Card Click
- On card click:
  - A **flyout form** appears with:
    - `Full Name` field (text input)
    - `Sex` field (dropdown: Male, Female, Prefer not to disclose)
    - `Submit` button

- On form submission:
  - The input data is **logged to the console**.
  - The form closes automatically.

---

### 3. 🐱 Fetch and Display Random Cat Fact
- On clicking on the card:
  - A **random cat fact** is fetched from the external API:
    ```
    https://catfact.ninja/fact
    ```
  - The cat fact is then dynamically displayed within the card.

- API error handling is implemented to avoid crashes in case of failure.

---

### 4. 🎉 Show Success Popup (Toast)
- On clicking on the card:
  - A **success toast notification** is displayed.
  - The toast:
    - Shows a success title and custom message.
    - Automatically closes after **3 seconds** or manually by the user.

---

## 🏗️ Tech Stack
- **React** (Hooks + Functional Components)
- **Elastic UI (EUI) Framework**
- **Axios** (API handling)
- **SCSS** (custom styling)

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
    git clone https://github.com/ANCHITAYUSH/candidate-test.git
    cd candidate-test
```

### 2. Install dependencies
```bash
    npm install
```

### 3. Run development server:
```bash
    npm run start
```

### 4. Visit
Open your browser at http://localhost:3000

## 📬 Live Demo
- Hosted on Vercel
 Visit [Digital Fabric Platform](https://candidate-test-18wnd13m9-anchits-projects-796438d1.vercel.app/)

 ---

## 🙏 Acknowledgements

- Thank you to [Elastic UI](https://eui.elastic.co/) for providing the UI framework.
- Thanks to [Cat Fact API](https://catfact.ninja/) for the awesome random cat facts!

---