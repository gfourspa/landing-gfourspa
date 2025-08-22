import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-work-sans mb-4">
            ¿Listo para <span className="text-gradient">comenzar?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos transformar tu visión digital en realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-work-sans mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contacto@gfourspa.cl</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+56 9 61177808</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Oficina</h4>
                    <p className="text-gray-600">Quilpué, Valparaíso, Chile</p>
                    <p className="text-gray-600">Disponible para reuniones virtuales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-primary p-6 rounded-xl text-white">
              <h4 className="text-xl font-semibold mb-3">¿Necesitas una consulta urgente?</h4>
              <p className="mb-4 opacity-90">
                Nuestro equipo está disponible 24/7 para emergencias técnicas y consultas urgentes.
              </p>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contacto de Emergencia
              </button>
            </div> */}
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold font-work-sans mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                  <option>Selecciona un servicio</option>
                  <option>Desarrollo de Software</option>
                  <option>Aplicaciones Móviles</option>
                  <option>Tecnologías Cloud</option>
                  <option>Bases de Datos</option>
                  <option>Sistemas Georeferenciales</option>
                  <option>Soporte de TI</option>
                  <option>Consultoría</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white px-8 py-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
