<img width="1470" height="704" alt="Screenshot 2026-07-31 at 4 44 20 PM" src="https://github.com/user-attachments/assets/e58ca412-93b9-429d-bc58-545d64d51cce" />
<img width="1470" height="537" alt="Screenshot 2026-07-31 at 4 43 43 PM" src="https://github.com/user-attachments/assets/851caf6b-31e7-4cce-8ef3-666ddc72ca19" />
PetAdopted – Project Overview:

PetAdopted hocche akta modern, full-stack pet adoption platform. Er main purpose hocche asha-jawa ba ashroyhin pashu-der (pets) tader permanent loving home-er sathe connect kore deya. Users-ra khub shojei pashu browse ebong adoption request submit korte parben, ar pet owners ba shelters-ra tader complete dashboard theke listings ebong workflows manage korte parben. 

 ✨ Key Features & FunctionalitiesAdvanced Search & Filter:
  MongoDB-r $regex ebong $in operators use kore pashu-der name ba species (projati) diye instant search ebong filter kora jay (no-cache fetching/SSR use kore).  Complete Adoption Workflow: Authenticated users-ra single click-e adoption request submit korte paren.
  
Pet owners-ra tader dashboard-e shei request gulo review kore instantly Approve ba Reject korte parben.  Secure Authentication (Better-Auth): Login/Signup system built-in, jeta Email/Password ebong Google OAuth-er maddhome kaj kore.
 Security optimized rakhte JWT tokens gulo secure HTTPOnly cookies-er bhetore store thake.  Owner Dashboard: Dedicated owner dashboard, jekhane nirdishto pet-er details Add, Update, ebong Delete (CRUD) kora jay, sathe adoption requests handle korar subidha ache. 
    
 Premium Interactive UI: UI-ti toiri HeroUI component library ebong Framer Motion er smooth animations diye, jeta mobile-first approach ebong clean dark theme optimized.
 
   🛠️ Tech Stack ArchitectureFrontend Ecosystem:
    Next.js 16 (App Router) orchestration framework application-ti toiri. Interface styling-er jonno use kora hoyeche dynamic Tailwind CSS 4. Fast form controls validation run hoy React Hook Form diye.  Backend & Database: Core database logic handle korar jonno use kora hoyeche MongoDB Native Driver. Server-side environment handle korche Node.js ebong Express.js framework, ar token encryption-er jonno dynamic package jose (JWT) use kora hoyeche.  

    ## Tech Stack

| Package | Purpose |
| :--- | :--- |
| **Next.js** | React framework with App Router |
| **React** | UI library |
| **Better Auth** | Authentication (email/password) |
| **MongoDB** | Database |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | Animations |
### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
```

### Installation

```bash
npm install
npm run dev
```
### Project Structure

```text
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI components
├── lib/          # Utilities, API clients, server actions
└── hooks/        # Custom React hooks
```
# PetAdopted — Full-Stack Pet Adoption Platform

A modern, full-stack pet adoption platform designed to connect homeless pets with loving homes. Featuring secure authentication, dynamic pet listings, and seamless user management.



## Live Site
🔗 [https://pet-adopted.vercel.app](https://pet-adopted.vercel.app)

---

## Features
* User authentication & session management
* Dynamic pet listings with categories and filtering
* Responsive & modern user interface
* User dashboard for adoption requests

---

## Tech Stack

| Package | Purpose |
| :--- | :--- |
| **Next.js** | React framework with App Router |
| **React** | UI library |
| **JWT** | Authentication & Security |
| **Tailwind CSS** | Utility-first CSS framework |

---

## Getting Started

### Prerequisites
* Node.js 18+
* MongoDB instance

### Installation
```bash
npm install
npm run dev
