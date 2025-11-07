# 🔐 Configuración DNS para MailChannels

## Error 401: Autorización Requerida

El error que estás viendo significa que MailChannels necesita verificar que eres dueño del dominio `gfourspa.cl`.

---

## ✅ Solución: Agregar Registro TXT de Domain Lockdown

### Paso 1: Ve a tu DNS de Cloudflare

1. Accede a https://dash.cloudflare.com
2. Selecciona tu dominio **gfourspa.cl**
3. Ve a **DNS** → **Records**

### Paso 2: Agregar el Registro TXT

Haz clic en **Add record** y agrega:

```
Type:    TXT
Name:    _mailchannels
Content: v=mc1 cfid=YOUR_CLOUDFLARE_PAGES_PROJECT.pages.dev
TTL:     Auto
```

**⚠️ IMPORTANTE:** Reemplaza `YOUR_CLOUDFLARE_PAGES_PROJECT` con el nombre de tu proyecto en Cloudflare Pages.

Por ejemplo, si tu proyecto se llama `landing-gfourspa`, el contenido sería:

```
v=mc1 cfid=landing-gfourspa.pages.dev
```

### Paso 3: Verificar que el Registro SPF Ya Esté Agregado

Asegúrate de que también tengas este registro (del paso anterior):

```
Type:    TXT
Name:    @  (o gfourspa.cl)
Content: v=spf1 include:relay.mailchannels.net include:zoho.com ~all
TTL:     Auto
```

---

## 🔄 Después de Agregar los Registros DNS

1. **Espera 5-10 minutos** para que el DNS se propague
2. **Haz un nuevo deployment** en Cloudflare Pages (o espera a que se auto-despliegue desde GitHub)
3. **Prueba el formulario nuevamente**

---

## 🧪 Verificar que los Registros DNS Están Correctos

Puedes verificar tus registros DNS con estos comandos en terminal:

```bash
# Verificar registro SPF
dig gfourspa.cl TXT

# Verificar registro de Domain Lockdown
dig _mailchannels.gfourspa.cl TXT
```

Deberías ver ambos registros en los resultados.

---

## 📋 Resumen de Registros DNS Necesarios

| Tipo | Nombre | Contenido |
|------|--------|-----------|
| TXT | `@` | `v=spf1 include:relay.mailchannels.net include:zoho.com ~all` |
| TXT | `_mailchannels` | `v=mc1 cfid=landing-gfourspa.pages.dev` |

---

## 🆘 Si Sigues Teniendo Problemas

1. Verifica que el nombre del proyecto en Cloudflare Pages sea correcto
2. Asegúrate de que ambos registros DNS estén agregados
3. Espera a que el DNS se propague (puede tardar hasta 1 hora)
4. Revisa los logs en Cloudflare Pages Dashboard

---

## 📚 Referencias

- [MailChannels Domain Lockdown](https://mailchannels.zendesk.com/hc/en-us/articles/16918954360845-Secure-your-domain-name-against-spoofing-with-Domain-Lockdown)
- [MailChannels con Cloudflare Pages](https://blog.cloudflare.com/sending-email-from-workers-with-mailchannels/)
