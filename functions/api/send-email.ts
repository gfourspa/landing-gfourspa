interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

interface Env {
  CONTACT_EMAIL?: string
  WEB3FORMS_ACCESS_KEY?: string
  NODE_ENV?: string
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  try {
    const body = await context.request.json() as ContactFormData
    const { name, email, company, service, message } = body

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

    const recipientEmail = context.env.CONTACT_EMAIL
    const web3formsKey = context.env.WEB3FORMS_ACCESS_KEY

    if (!web3formsKey) {
      throw new Error('WEB3FORMS_ACCESS_KEY no configurada')
    }

    const formData = new FormData()
    formData.append('access_key', web3formsKey)
    formData.append('subject', `Nuevo mensaje de contacto de ${name}`)
    formData.append('from_name', `${name} - Formulario GFOUR SPA`)
    // Múltiples destinatarios separados por coma
    formData.append('email', recipientEmail || 'noreply@gfourspa.cl')
    formData.append('reply_to', email)
    formData.append('name', name)
    formData.append('user_email', email)
    formData.append('company', company || 'No especificada')
    formData.append('service', service || 'No especificado')
    formData.append('message', message)

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const result = await web3formsResponse.json() as { success: boolean, message?: string }

    if (!web3formsResponse.ok || !result.success) {
      console.error('Web3Forms error:', result)
      throw new Error(`Web3Forms API error: ${result.message || 'Unknown error'}`)
    }

    console.log('Email enviado exitosamente via Web3Forms')

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
