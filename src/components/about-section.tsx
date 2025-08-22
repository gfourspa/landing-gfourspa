import { Users, Award, Clock, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-work-sans mb-6">
                Sobre <span className="text-gradient">GFOUR SPA</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Somos una empresa especializada en desarrollo de software y servicios de tecnología de la información,
                comprometida con la transformación digital de las organizaciones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro equipo de expertos combina experiencia técnica con visión estratégica para entregar soluciones
                innovadoras que impulsan el crecimiento y la eficiencia operativa de nuestros clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Equipo Experto</h3>
                  <p className="text-sm text-gray-600">Profesionales certificados en las últimas tecnologías</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Calidad Garantizada</h3>
                  <p className="text-sm text-gray-600">Estándares internacionales y mejores prácticas</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Entrega Puntual</h3>
                  <p className="text-sm text-gray-600">Cumplimiento de plazos y metodologías ágiles</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enfoque Personalizado</h3>
                  <p className="text-sm text-gray-600">Soluciones adaptadas a cada cliente</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/about-us-team.png"
              alt="Equipo GFOUR SPA"
              className="w-full h-auto rounded-2xl shadow-xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">5+</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Años de Experiencia</div>
                  <div className="text-sm text-gray-600">En desarrollo de software</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
