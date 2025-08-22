import { Cloud, Code, Database, Globe, Headphones, Smartphone } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desarrollo de Software",
    description:
      "Aplicaciones web y de escritorio personalizadas con las últimas tecnologías y mejores prácticas de desarrollo.",
    features: ["React, Vue", "Node.js, Python, Java", "Arquitectura escalable", "Testing automatizado"],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description:
      "Diseño, implementación y administración de bases de datos relacionales y NoSQL para máximo rendimiento.",
    features: ["MySQL, PostgreSQL", "MongoDB, Redis", "Optimización de consultas", "Backup y recuperación"],
  },
  {
    icon: Cloud,
    title: "Tecnologías Cloud",
    description: "Migración y gestión de infraestructura en la nube con AWS, Azure y Google Cloud Platform.",
    features: ["GCP", "Contenedores Docker", "Kubernetes", "CI/CD pipelines"],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollo de apps nativas e híbridas para iOS y Android con experiencia de usuario excepcional.",
    features: ["React Native", "Flutter"],
  },
  {
    icon: Globe,
    title: "Sistemas Georeferenciales",
    description: "Soluciones GIS personalizadas para análisis espacial y visualización de datos geográficos.",
    features: ["Mapas interactivos", "Análisis espacial", "Visualización de datos"],
  },
  {
    icon: Headphones,
    title: "Soporte de TI",
    description: "Soporte técnico 24/7, mantenimiento preventivo y resolución rápida de incidencias.",
    features: ["Soporte 24/7", "Mantenimiento preventivo", "Monitoreo proactivo"],
  },
  // {
  //   icon: BarChart3,
  //   title: "Análisis Costo/Beneficio",
  //   description: "Evaluación detallada de proyectos TI para optimizar inversiones y maximizar el ROI.",
  //   features: ["ROI analysis", "Roadmap tecnológico", "Consultoría estratégica"],
  // },
  // {
  //   icon: Shield,
  //   title: "Procesamiento de Datos",
  //   description: "Soluciones de Big Data, ETL y análisis de datos para toma de decisiones informadas.",
  //   features: ["ETL pipelines", "Business Intelligence"],
  // },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-work-sans mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de tecnología de la información para impulsar la transformación digital de
            tu organización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold font-work-sans mb-3">{service.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
