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

    const web3formsKey = context.env.WEB3FORMS_ACCESS_KEY

    if (!web3formsKey) {
      throw new Error('WEB3FORMS_ACCESS_KEY no configurada')
    }

    const formData = new FormData()
    formData.append('access_key', web3formsKey)
    formData.append('subject', `Nuevo mensaje de contacto de ${name}`)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', `
Empresa: ${company || 'No especificada'}
Servicio: ${service || 'No especificado'}

Mensaje:
${message}
    `.trim())

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
        'Origin': 'https://gfourspa.cl',
        'Referer': 'https://gfourspa.cl/'
      },
      body: formData
    })

    let result: { success: boolean, message?: string }
    const responseText = await web3formsResponse.text()
    if (context.env.NODE_ENV !== 'production') {
      console.log('Web3Forms response status:', web3formsResponse.status)
      console.log('Web3Forms response:', responseText)
    }
    
    try {
      result = JSON.parse(responseText) as { success: boolean, message?: string }
    } catch (parseError) {
      console.error('Error parsing Web3Forms response:', responseText)
      throw new Error(`Web3Forms returned invalid response: ${responseText}`)
    }

    if (!web3formsResponse.ok || !result.success) {
      console.error('Web3Forms full error:', JSON.stringify(result))
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
          'Access-Control-Allow-Origin': 'https://gfourspa.cl'
        }
      }
    )

  } catch (error) {
    if (context.env.NODE_ENV !== 'production') {
      console.error('Error enviando email:', error)
      console.error('Environment variables:', {
        hasAccessKey: !!context.env.WEB3FORMS_ACCESS_KEY,
        hasContactEmail: !!context.env.CONTACT_EMAIL,
        nodeEnv: context.env.NODE_ENV
      })
    } else {
      console.error('Error enviando email')
    }
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error al enviar el mensaje. Por favor intenta nuevamente.'
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://gfourspa.cl'
        }
      }
    )
  }
}

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://gfourspa.cl',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
