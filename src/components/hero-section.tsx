
export function HeroSection() {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-work-sans leading-tight">
                Transformamos tu <span className="text-gradient">visión digital</span> en realidad
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Servicios profesionales de desarrollo de software, infraestructura TI, aplicaciones móviles y soluciones
                cloud que impulsan el crecimiento de tu negocio.
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold flex items-center justify-center gap-2 group">
                Comenzar Proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all duration-300 font-semibold">
                Ver Portfolio
              </button>
            </div> */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-gray-600">Soporte Técnico</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/software-team-coding.png"
                alt="Equipo de desarrollo de software"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating icons 
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center animate-bounce">
              <Code className="w-8 h-8 text-primary-600" />
            </div>
            <div className="absolute top-1/4 -right-4 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
              <Cloud className="w-7 h-7 text-blue-600" />
            </div>
            <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-bounce delay-300">
              <Database className="w-6 h-6 text-green-600" />
            </div>
            <div className="absolute -bottom-4 right-1/4 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center animate-pulse delay-150">
              <Smartphone className="w-7 h-7 text-purple-600" />
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
