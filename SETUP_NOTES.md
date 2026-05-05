# 🎯 SETUP PRO - NOTAS FASE 1

## ✅ COMPLETADO

- [x] Next.js 14 + TypeScript setup
- [x] Tailwind CSS v4 configurado
- [x] Prisma ORM schema completo
- [x] JWT authentication boilerplate
- [x] Middleware para rutas protegidas
- [x] Cloudinary integration
- [x] Amazon Associates support
- [x] Database utilities
- [x] TypeScript types
- [x] Seed script con admin user
- [x] npm scripts para desarrollo
- [x] README con instrucciones

## ⏭️ PRÓXIMOS PASOS (Fase 2)

### 1️⃣ DATABASE SETUP (10 min)

#### Opción A: PostgreSQL Local
```bash
# Si tienes PostgreSQL instalado localmente
createdb setup_pro

# Edita .env.local:
DATABASE_URL="postgresql://localhost/setup_pro"

# Aplica schema
npm run db:push
npm run db:seed
```

#### Opción B: Railway (RECOMENDADO - Free tier)
```bash
1. Ve a railway.app → Sign up con GitHub
2. New Project → PostgreSQL
3. Copia CONNECTION_STRING
4. En .env.local:
   DATABASE_URL="postgresql://..."
5. npm run db:push
6. npm run db:seed
```

### 2️⃣ CLOUDINARY SETUP (5 min)

```bash
1. Ve a cloudinary.com → Sign up (free)
2. Copia CLOUD_NAME, API_KEY, API_SECRET
3. Create Upload Preset (no auth)
4. En .env.local:
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
   CLOUDINARY_API_KEY="..."
   CLOUDINARY_API_SECRET="..."
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="..."
```

### 3️⃣ TEST LOCAL (2 min)

```bash
npm run dev

# Visita:
# - http://localhost:3000 → Verás home vacío (ok, lo hacemos en Fase 3)
# - http://localhost:3000/auth/login → Login form (lo hacemos en Fase 2)
# - http://localhost:3000/admin → Redirect a login (ok)
```

### 4️⃣ GITHUB & VERCEL (5 min)

```bash
# Si aún no hiciste push:
git remote add origin <tu-repo-github>
git branch -M main
git push -u origin main

# En vercel.com:
# 1. Import Git Repo
# 2. Agregar env vars (DATABASE_URL, NEXTAUTH_SECRET, etc)
# 3. Deploy!
```

## 📋 ESTRUCTURA CREADA

```
src/
├── app/
│   ├── layout.tsx          → Root layout
│   ├── page.tsx            → Home (vacío)
│   ├── globals.css         → Tailwind
│   ├── api/
│   │   └── v1/             → API v1 (ready)
│   ├── auth/
│   │   └── login/          → TODO: Login page
│   └── admin/              → TODO: Admin dashboard
├── lib/
│   ├── auth.ts            → JWT logic ✅
│   ├── prisma.ts          → DB client ✅
│   ├── cloudinary.ts      → Upload ✅
│   ├── amazon.ts          → Affiliate links ✅
│   └── utils.ts           → Helpers ✅
├── types/
│   └── index.ts           → All types ✅
└── middleware.ts          → Route protection ✅
```

## 🔐 DEFAULT CREDENTIALS

Después del `npm run db:seed`:

```
Email: admin@setupprohq.com
Password: admin123
```

⚠️ **Cambiar en producción**

## 🆚 DIFERENCIAS CON DOCUMENTO

- Usando `.env.local` localmente (`.env` para Vercel)
- Middleware usa Next.js built-in (no NextAuth)
- JWT puro sin librerías de auth complejas
- API routes bajo `/api/v1` (listo para futuro)

## 📊 CHECKLIST ANTES DE FASE 2

- [ ] Database conectada (npm run db:push)
- [ ] Seed ejecutado (npm run db:seed)
- [ ] Cloudinary keys en .env.local
- [ ] `npm run dev` funciona
- [ ] Repo pusheado a GitHub
- [ ] Vercel conectado

## 💬 NOTAS

- El seed crea 1 admin user + 6 categorías + 1 sample review
- Prisma genera tipos automáticos (no tocar `@prisma/client`)
- Middleware protege `/admin` y `/api/v1` automáticamente
- Todos los scripts en `package.json` están listos
- TypeScript strict mode habilitado

## 🎯 QUÉ SIGUE

Una vez hecho esto, en **Fase 2** haremos:
1. Login page + autenticación
2. Admin dashboard
3. CRUD de reviews
4. Rich text editor
5. Upload de imágenes

¡Ready para continuar cuando termines el setup! 🚀
