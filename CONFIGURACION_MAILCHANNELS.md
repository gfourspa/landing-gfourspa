# Configuración de MailChannels para gfourspa.cl

## ✅ Cambios Realizados en el Código

1. **Actualizado `functions/api/send-email.ts`**:
   - Cambiado `ZOHO_EMAIL_TO` → `CONTACT_EMAIL`
   - Email de destino: `mgutierrezm@gfourspa.cl`
   - Email de envío: `noreply@gfourspa.cl`

2. **Actualizado `wrangler.toml`**:
   - Variable de entorno: `CONTACT_EMAIL = "mgutierrezm@gfourspa.cl"`

## 🔧 Pasos para Completar la Configuración

### 1. Actualizar Node.js (REQUERIDO)

Tu versión actual de Node.js (v14.21.3) es muy antigua. Necesitas Node.js 18+:

```bash
# Instalar Node.js 18
nvm install 18

# Usar Node.js 18
nvm use 18

# Verificar versión
node --version  # Debe mostrar v18.x.x

# Reinstalar dependencias
npm install
```

### 2. Configurar DNS de gfourspa.cl (CRÍTICO)

Ve al panel de administración de DNS de tu dominio `gfourspa.cl` y agrega:

#### Registro SPF (OBLIGATORIO)

```
Type: TXT
Name: @ (o root)
Value: v=spf1 include:relay.mailchannels.net ~all
```

**Si ya tienes un registro SPF existente**, modifícalo para incluir MailChannels:

```
Antes:  v=spf1 include:_spf.google.com ~all
Después: v=spf1 include:relay.mailchannels.net include:_spf.google.com ~all
```

#### Verificar DNS (después de 5-10 minutos)

```bash
# Verificar registro SPF
dig TXT gfourspa.cl

# O usando nslookup
nslookup -type=TXT gfourspa.cl
```

Deberías ver algo como:
```
gfourspa.cl. 300 IN TXT "v=spf1 include:relay.mailchannels.net ~all"
```

### 3. Configurar Variables de Entorno en Cloudflare Pages

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Workers & Pages → `landing-gfourspa` → Settings → Environment variables
3. En **Production** agrega:

```
CONTACT_EMAIL=mgutierrezm@gfourspa.cl
NODE_ENV=production
```

4. Click en "Save"

### 4. Hacer Deploy

```bash
# Verificar que el build funciona
npm run build

# Commit y push
git add -A
git commit -m "fix: configure MailChannels with gfourspa.cl domain

- Update CONTACT_EMAIL to mgutierrezm@gfourspa.cl
- Add SPF configuration comments
- Ready for MailChannels with custom domain"

git push
```

## 📧 Cómo Funciona

### Flujo de Email:

1. Usuario llena formulario en landing
2. Frontend envía datos a `/api/send-email`
3. Cloudflare Function valida y sanitiza datos
4. MailChannels API envía email desde `noreply@gfourspa.cl`
5. Email llega a `mgutierrezm@gfourspa.cl`
6. Puedes responder directamente (reply-to configurado)

### Formato del Email:

**From**: Formulario Web GFOUR SPA <noreply@gfourspa.cl>  
**To**: mgutierrezm@gfourspa.cl  
**Reply-To**: [email del cliente que llenó el formulario]  
**Subject**: Nuevo mensaje de contacto de [Nombre Cliente]

## 🔍 Verificar que Funciona

### 1. Probar Localmente (Opcional)

Cloudflare Pages Functions no se pueden probar localmente fácilmente. Es mejor testear en producción.

### 2. Testear en Producción

1. Ve a tu sitio desplegado (ej: `https://landing-gfourspa.pages.dev`)
2. Llena el formulario de contacto
3. Haz click en "Enviar Mensaje"
4. Revisa tu email `mgutierrezm@gfourspa.cl`

### 3. Ver Logs en Cloudflare

Si hay problemas:

1. Cloudflare Dashboard → Workers & Pages → `landing-gfourspa`
2. Click en el deployment más reciente
3. Tabs → Functions logs
4. Busca errores de MailChannels

## ⚠️ Problemas Comunes

### Error: "MailChannels API error: 403"

**Causa**: SPF no configurado o no propagado aún  
**Solución**: 
- Verifica que el registro SPF esté correcto
- Espera 5-30 minutos para propagación DNS
- Usa `dig TXT gfourspa.cl` para verificar

### Error: "MailChannels API error: 421"

**Causa**: Límite de envío alcanzado (raro en formularios)  
**Solución**: Espera unos minutos y reintenta

### Email no llega

**Verifica**:
1. Carpeta de Spam en `mgutierrezm@gfourspa.cl`
2. Logs de Cloudflare Functions
3. Que el registro SPF esté correcto

## 📚 Recursos

- [MailChannels Documentation](https://mailchannels.zendesk.com/hc/en-us/articles/4565898358413)
- [SPF Record Checker](https://mxtoolbox.com/spf.aspx)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)

## ✅ Checklist de Deploy

- [ ] Node.js actualizado a v18+
- [ ] Registro SPF agregado en DNS de gfourspa.cl
- [ ] DNS verificado con `dig TXT gfourspa.cl`
- [ ] Variables de entorno configuradas en Cloudflare Pages
- [ ] Build exitoso (`npm run build`)
- [ ] Código commiteado y pusheado a GitHub
- [ ] Deploy automático completado en Cloudflare
- [ ] Formulario probado en producción
- [ ] Email recibido en mgutierrezm@gfourspa.cl

---

**Última actualización**: 7 de noviembre de 2025  
**Email de soporte**: mgutierrezm@gfourspa.cl
