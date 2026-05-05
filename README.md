# SETUP PRO - Plataforma de Reseñas de Tech

> Blog/Marketplace de reseñas de equipamiento tech (Gaming + Productividad)

## 📋 Stack Técnico

- **Frontend:** Next.js 14+ (TypeScript) + Tailwind CSS v4
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL (Prisma ORM)
- **Auth:** JWT (JSON Web Tokens)
- **Storage:** Cloudinary (imágenes)
- **Deploy:** Vercel + Railway

## 🚀 Setup Local (Rápido)

### Prerequisitos
- Node.js 18+ instalado
- Git instalado
- PostgreSQL (local o Railway)

### Paso 1: Clonar & Instalar

```bash
git clone <repo-url>
cd setup-pro
npm install
```

### Paso 2: Variables de Entorno

```bash
cp .env.example .env.local
# Edita .env.local con tus credenciales
```

### Paso 3: Database

```bash
npm run db:push
npm run db:seed
```

### Paso 4: Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🔐 Admin Credentials

```
Email: admin@setupprohq.com
Password: admin123
```

## 📊 Rutas Disponibles

- `/` - Home
- `/reviews` - Listado
- `/reviews/[slug]` - Individual
- `/auth/login` - Login
- `/admin` - Dashboard (protegido)

## 🛠️ Comandos

```bash
npm run dev              # Servidor local
npm run db:push        # Aplicar schema
npm run db:seed        # Seed datos
npm run db:studio      # Prisma UI
npm run lint           # Linter
npm run format         # Prettier
```

## 🏗️ Estructura

```
src/
├── app/
│   ├── (public)/       → Public pages
│   ├── admin/          → Admin dashboard
│   ├── auth/           → Auth
│   └── api/            → API endpoints
├── components/         → React components
├── lib/                → Utilities
├── types/              → Types
└── middleware.ts       → Route protection
```

## 🗄️ Database Schema

- `users` - Admin accounts
- `categories` - Review categories
- `reviews` - Reviews with content
- `newsletter_subscribers` - Subscribers
- `page_views` - Analytics

## 🔌 API Endpoints

All under `/api/v1`:

- `GET /reviews` - List all
- `GET /reviews/[id]` - Get one
- `POST /reviews` - Create (admin)
- `PUT /reviews/[id]` - Edit (admin)
- `DELETE /reviews/[id]` - Delete (admin)
- `POST /auth/login` - Login
- `POST /auth/logout` - Logout

## 🚢 Deploy

1. Create Railway PostgreSQL
2. Push to GitHub
3. Connect Vercel
4. Add env vars
5. Auto-deploy!

## 🔒 Security

- ✅ JWT with httpOnly cookies
- ✅ SQL injection prevention
- ✅ CSRF protection
- ✅ Password hashing
- ✅ Protected routes

---

**Built with ❤️ using Next.js**
