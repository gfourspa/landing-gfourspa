// Cloudflare Pages Function para enviar emails usando MailChannels
// Ruta: /functions/api/send-email.ts
// MailChannels es gratuito para Cloudflare Workers/Pages y no requiere dependencias externas

interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

interface Env {
  CONTACT_EMAIL?: string  // Email donde recibirás los mensajes
  NODE_ENV?: string
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  try {
    // Parsear el body del request
    const body = await context.request.json() as ContactFormData
    const { name, email, company, service, message } = body

    // Validación de campos requeridos
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Faltan campos requeridos' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Email inválido' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Validar longitud del mensaje
    if (message.length < 10) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'El mensaje debe tener al menos 10 caracteres' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Sanitizar inputs para prevenir inyección HTML
    const sanitize = (str: string): string => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const sanitizedName = sanitize(name)
    const sanitizedEmail = sanitize(email)
    const sanitizedCompany = company ? sanitize(company) : 'No especificada'
    const sanitizedService = service ? sanitize(service) : 'No especificado'
    const sanitizedMessage = sanitize(message).replace(/\n/g, '<br>')

    // Email de destino (tu correo personal)
    const recipientEmail = context.env.CONTACT_EMAIL || 'mgutierrezm@gfourspa.cl'

    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .content {
      padding: 30px;
    }
    .field {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
    }
    .field:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 8px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .value {
      color: #333;
      font-size: 16px;
      word-wrap: break-word;
    }
    .message-box {
      background-color: #f8f9fa;
      padding: 20px;
      border-left: 4px solid #667eea;
      margin-top: 10px;
      border-radius: 4px;
      font-size: 15px;
      line-height: 1.6;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #eeeeee;
      text-align: center;
      color: #999;
      font-size: 12px;
    }
    .footer p {
      margin: 5px 0;
    }
    .icon {
      display: inline-block;
      margin-right: 8px;
    }
    a {
      color: #667eea;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 Nuevo Mensaje de Contacto</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label"><span class="icon">👤</span>Nombre</div>
        <div class="value">${sanitizedName}</div>
      </div>
      
      <div class="field">
        <div class="label"><span class="icon">📧</span>Email</div>
        <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
      </div>
      
      <div class="field">
        <div class="label"><span class="icon">🏢</span>Empresa</div>
        <div class="value">${sanitizedCompany}</div>
      </div>
      
      <div class="field">
        <div class="label"><span class="icon">💼</span>Servicio de Interés</div>
        <div class="value">${sanitizedService}</div>
      </div>
      
      <div class="field">
        <div class="label"><span class="icon">💬</span>Mensaje</div>
        <div class="message-box">${sanitizedMessage}</div>
      </div>
      
      <div class="footer">
        <p><strong>Este mensaje fue enviado desde el formulario de contacto de gfourspa.cl</strong></p>
        <p>Fecha: ${new Date().toLocaleString('es-CL', { 
          timeZone: 'America/Santiago',
          dateStyle: 'full',
          timeStyle: 'long'
        })}</p>
        <p>Puedes responder directamente a este correo para contactar al cliente.</p>
      </div>
    </div>
  </div>
</body>
</html>`

    const textContent = `Nuevo mensaje de contacto

Nombre: ${sanitizedName}
Email: ${sanitizedEmail}
Empresa: ${sanitizedCompany}
Servicio de Interés: ${sanitizedService}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de gfourspa.cl
Fecha: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}`

    // Usar MailChannels API (gratuito para Cloudflare Workers/Pages)
    // Requiere SPF configurado: v=spf1 include:relay.mailchannels.net ~all
    // Y registro TXT de Domain Lockdown: _mailchannels.gfourspa.cl
    // https://mailchannels.zendesk.com/hc/en-us/articles/4565898358413
    const emailPayload = {
      personalizations: [
        {
          to: [{ email: recipientEmail, name: 'GFOUR SPA' }],
          reply_to: { email: email, name: sanitizedName }
        }
      ],
      from: {
        email: 'noreply@gfourspa.cl',
        name: 'Formulario Web GFOUR SPA'
      },
      subject: `Nuevo mensaje de contacto de ${sanitizedName}`,
      content: [
        {
          type: 'text/plain',
          value: textContent
        },
        {
          type: 'text/html',
          value: htmlContent
        }
      ]
    }

    // Enviar email usando MailChannels API
    const mailchannelsResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    })

    if (!mailchannelsResponse.ok) {
      const errorText = await mailchannelsResponse.text()
      console.error('MailChannels error:', errorText)
      throw new Error(`MailChannels API error: ${mailchannelsResponse.status}`)
    }

    console.log('Email enviado exitosamente via MailChannels')

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: '¡Mensaje enviado con éxito!'
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )

  } catch (error) {
    console.error('Error enviando email:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error al enviar el mensaje. Por favor intenta nuevamente.',
        error: context.env.NODE_ENV === 'development' ? errorMessage : undefined
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Manejar OPTIONS request para CORS
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
