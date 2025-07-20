# paytm

This is a paytm-like website.
Where a user can come and store money in their wallet from the bank.
And can also send money to their friends.

![Untitled design](https://github.com/user-attachments/assets/d956e75e-c22f-4162-a833-d475b1e8e4e8)

# Transfer Page

![Screenshot 2025-02-24 at 2 36 37 AM](https://github.com/user-attachments/assets/dfbc07dd-f7f2-483b-b919-33381f28ee33)

# Transaction Page

![Transaction](https://github.com/user-attachments/assets/ddfdfee9-f52d-4e2f-ac56-016a2ff438f0)

---

## Features

- **User App**: Digital wallet, add money, P2P transfers, transaction history, authentication.
- **Merchant App**: Merchant authentication (Google), balance display.
- **Shared Packages**: UI component library, database (Prisma/Postgres), state management (Recoil).

---

## Monorepo Structure

```
apps/
  merchant-app/   # Next.js app for merchants (port 3000)
  user-app/       # Next.js app for users (port 3001)
packages/
  db/             # Prisma schema, database client, and seed scripts
  ui/             # Shared React UI components
  store/          # Shared state management (Recoil)
  eslint-config/  # Shared ESLint config
  typescript-config/ # Shared TypeScript config
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL
- Yarn or npm

### Setup

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
2. **Configure environment:**
   - Copy `.env.example` to `.env` in the root and in each app as needed.
   - Set your `DATABASE_URL` for PostgreSQL.
3. **Setup database:**
   ```sh
   cd packages/db
   npx prisma migrate dev
   npx prisma db seed
   ```
4. **Run the apps:**
   - **User App:**
     ```sh
     cd apps/user-app
     npm run dev
     # http://localhost:3001
     ```
   - **Merchant App:**
     ```sh
     cd apps/merchant-app
     npm run dev
     # http://localhost:3000
     ```

---

## Development

- **Build all:**
  ```sh
  npm run build
  ```
- **Lint all:**
  ```sh
  npm run lint
  ```
- **Format:**
  ```sh
  npm run format
  ```

---

## Tech Stack

- Next.js
- React
- TypeScript
- Prisma & PostgreSQL
- NextAuth
- Recoil
- TailwindCSS
- Turborepo

---

## Contributing

Pull requests and issues are welcome!

---

## License

[Add your license here]
