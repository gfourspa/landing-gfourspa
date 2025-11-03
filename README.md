# Landing GFOUR SPA# Landing GFOUR SPA# landing-gfourspa



Landing page profesional para GFOUR SPA con formulario de contacto funcional.

Landing page para GFOUR SPA con formulario de contacto funcional que envía emails.

> 📖 **¿Eres usuario final?** Lee [ACERCA_DEL_SITIO.md](./ACERCA_DEL_SITIO.md) para una guía no técnica del sitio.

## 🚀 Tecnologías

## 🚀 Stack Tecnológico

- **Frontend**: React + TypeScript + Vite

- **Frontend**: React 18 + TypeScript + Vite- **Estilos**: Tailwind CSS

- **Estilos**: Tailwind CSS + tailwindcss-animate- **Email**: MailChannels (gratuito para Cloudflare Pages)

- **Iconos**: Lucide React- **Hosting**: Cloudflare Pages

- **Email**: MailChannels API (gratuito para Cloudflare Pages)

- **Hosting**: Cloudflare Pages (serverless)## 📋 Características



## 📋 Características- ✅ Diseño responsive y moderno

- ✅ Formulario de contacto funcional

- ✅ Diseño responsive y moderno- ✅ Envío de emails sin servidor SMTP

- ✅ Formulario de contacto funcional con envío de emails- ✅ Validación de formularios

- ✅ Validación y sanitización de inputs- ✅ Sanitización de inputs

- ✅ Deploy automático en Cloudflare Pages- ✅ Deploy automático en Cloudflare Pages

- ✅ Sin dependencias innecesarias

- ✅ TypeScript para mayor confiabilidad## 🛠️ Instalación y Desarrollo Local



## 🛠️ Desarrollo Local```bash

# Instalar dependencias

### Requisitosnpm install

- Node.js >= 18.0.0

- npm o pnpm# Ejecutar en desarrollo

npm run dev

### Instalación

# Build para producción

```bashnpm run build

# Clonar repositorio

git clone https://github.com/gfourspa/landing-gfourspa.git# Preview del build

cd landing-gfourspanpm run preview

```

# Instalar dependencias

npm install## 📧 Configuración de Email



# Ejecutar en desarrolloEl formulario de contacto usa **MailChannels**, que es gratuito para Cloudflare Workers/Pages y no requiere configuración de SMTP.

npm run dev

```### Variables de Entorno (Opcional)



El sitio estará disponible en `http://localhost:5173`En Cloudflare Pages Dashboard → Settings → Environment variables:



### Scripts Disponibles- `ZOHO_EMAIL_TO`: Email destino para recibir mensajes (default: contacto@gfourspa.cl)

- `NODE_ENV`: production (en producción)

```bash

npm run dev      # Servidor de desarrollo**Nota**: MailChannels es gratuito y no requiere API keys ni autenticación adicional cuando se usa desde Cloudflare Pages.

npm run build    # Build para producción

npm run preview  # Preview del build## 🌐 Deploy en Cloudflare Pages

npm run lint     # Ejecutar ESLint

```### 1. Conectar Repositorio



## 📧 Configuración de Email1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages

2. Click en "Create application" → "Pages" → "Connect to Git"

El formulario usa **MailChannels**, servicio gratuito para Cloudflare Workers/Pages.3. Selecciona tu repositorio: `gfourspa/landing-gfourspa`



### Variables de Entorno (Opcional)### 2. Configurar Build



Crea un archivo `.env.local` para desarrollo local (opcional):```

Framework preset: Vite

```envBuild command: npm run build

ZOHO_EMAIL_TO=contacto@gfourspa.clBuild output directory: dist

NODE_ENV=development```

```

### 3. Variables de Entorno (Opcional)

En **Cloudflare Pages Dashboard** → Settings → Environment variables:

En Settings → Environment variables → Production:

```

ZOHO_EMAIL_TO=contacto@gfourspa.cl```

NODE_ENV=productionZOHO_EMAIL_TO=contacto@gfourspa.cl

```NODE_ENV=production

```

**Nota**: MailChannels no requiere API keys ni autenticación adicional.

### 4. Deploy

## 🌐 Deploy en Cloudflare Pages

- Cada push a `main` despliega automáticamente

### 1. Conectar Repositorio- Cloudflare Pages genera una URL: `https://landing-gfourspa.pages.dev`



1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)## 📁 Estructura del Proyecto

2. Workers & Pages → Create application → Pages → Connect to Git

3. Selecciona: `gfourspa/landing-gfourspa````

landing-gfourspa/

### 2. Configuración de Build├── functions/              # Cloudflare Pages Functions (serverless)

│   └── api/

```│       └── send-email.ts  # Endpoint para envío de emails

Framework preset: Vite├── src/

Build command: npm run build│   ├── components/        # Componentes React

Build output directory: dist│   │   ├── contact-section.tsx

Node version: 18 or later│   │   ├── header.tsx

```│   │   ├── footer.tsx

│   │   └── ...

### 3. Variables de Entorno (Production)│   ├── lib/

│   │   ├── utils.ts

```│   │   └── constant.ts   # Constantes (servicios, contacto, etc)

ZOHO_EMAIL_TO=contacto@gfourspa.cl│   ├── App.tsx

NODE_ENV=production│   └── main.tsx

```├── public/               # Archivos estáticos (imágenes)

├── vite.config.ts       # Configuración de Vite

### 4. Deploy Automático├── wrangler.toml        # Configuración de Cloudflare

└── package.json

Cada push a `main` despliega automáticamente.```



## 📁 Estructura del Proyecto## 🔧 Configuración de Vite



```El proyecto usa una configuración simple de Vite con alias de paths:

landing-gfourspa/

├── functions/              # Cloudflare Pages Functions```typescript

│   └── api/resolve: {

│       └── send-email.ts  # Endpoint serverless para emails  alias: {

├── src/    "@": path.resolve(__dirname, "./src"),

│   ├── components/        # Componentes React  }

│   │   ├── contact-section.tsx}

│   │   ├── header.tsx```

│   │   ├── footer.tsx

│   │   ├── hero-section.tsxYa no es necesario excluir paquetes externos del bundle.

│   │   ├── services-section.tsx

│   │   └── about-section.tsx## 📝 Notas Importantes

│   ├── lib/

│   │   ├── utils.ts       # Utilidades (cn de clsx)- Las Cloudflare Pages Functions en `/functions/api/` se ejecutan como serverless

│   │   └── constant.ts    # Constantes (servicios, links, etc)- MailChannels es gratuito y no requiere configuración SMTP

│   ├── App.tsx- El formulario incluye validación y sanitización de inputs

│   └── main.tsx- Sin dependencias innecesarias (nodemailer, emailjs, resend removidos)

├── public/                # Assets estáticos

├── vite.config.ts        # Configuración de Vite## 🆘 Solución de Problemas

├── wrangler.toml         # Configuración de Cloudflare

├── tailwind.config.js    # Configuración de Tailwind### Emails no se envían

├── tsconfig.json         # Configuración de TypeScript

└── package.json1. Verifica la variable `ZOHO_EMAIL_TO` en Cloudflare Pages Dashboard

```2. Revisa los logs: Cloudflare Pages → Functions → Logs

3. Verifica que el dominio esté correctamente configurado en Cloudflare

## 🔧 Configuración de Vite

### Build falla localmente

Configuración simple con alias de paths:

```bash

```typescript# Limpiar node_modules y reinstalar

export default defineConfig({rm -rf node_modules package-lock.json

  plugins: [react()],npm install

  resolve: {

    alias: {# Verificar build

      "@": path.resolve(__dirname, "./src"),npm run build

    },```

  }

})## 📄 Licencia

```

© 2025 GFOUR SPA. Todos los derechos reservados.

## 📝 Notas Técnicas

### Cloudflare Pages Functions
- Se ejecutan como serverless en el edge de Cloudflare
- Ubicación: `/functions/api/`
- Soportan TypeScript nativo
- No requieren configuración adicional

### MailChannels
- Gratuito para Cloudflare Workers/Pages
- No requiere SMTP ni credenciales
- Límite: Razonable para formularios de contacto
- API REST simple

### Path Alias
- `@/` apunta a `./src/`
- Ejemplo: `import { SERVICES } from "@/lib/constant"`

## 🆘 Solución de Problemas

### Build falla localmente

```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Emails no se envían

1. Verifica logs: Cloudflare Pages Dashboard → Functions → Logs
2. Confirma variable `ZOHO_EMAIL_TO` en Settings → Environment variables
3. Verifica que el formulario complete todos los campos requeridos

### TypeScript errors

```bash
# Regenerar tipos
rm -rf node_modules/.vite
npm run dev
```

## 🔒 Seguridad

- ✅ Validación de inputs en frontend y backend
- ✅ Sanitización HTML para prevenir XSS
- ✅ Rate limiting automático por Cloudflare
- ✅ Sin credenciales expuestas (MailChannels no las requiere)

## 📄 Licencia

© 2025 GFOUR SPA. Todos los derechos reservados.

## 🤝 Contribuir

Este es un proyecto privado de GFOUR SPA. Para cambios, contacta al equipo de desarrollo.
