import {
    Cloud,
    Code,
    Database,
    Globe,
    Headphones,
    Smartphone,
} from "lucide-react";

export const CONTACT_INFO = {
  email: "contacto@gfourspa.cl",
  phone: "+56 9 61177808",
  address: "Quilpué, Valparaíso, Chile",
};

export const SERVICES = [
  {
    icon: Code,
    title: "Desarrollo de Software",
    description:
      "Aplicaciones web y de escritorio personalizadas con las últimas tecnologías y mejores prácticas de desarrollo.",
    features: [
      "React, Vue",
      "Node.js, Python, Java",
      "Arquitectura escalable",
      "Testing automatizado",
    ],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description:
      "Diseño, implementación y administración de bases de datos relacionales y NoSQL para máximo rendimiento.",
    features: [
      "MySQL, PostgreSQL",
      "MongoDB, Redis",
      "Optimización de consultas",
      "Backup y recuperación",
    ],
  },
  {
    icon: Cloud,
    title: "Tecnologías Cloud",
    description:
      "Migración y gestión de infraestructura en la nube con AWS, Azure y Google Cloud Platform.",
    features: ["GCP", "Contenedores Docker", "Kubernetes", "CI/CD pipelines"],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description:
      "Desarrollo de apps nativas e híbridas para iOS y Android con experiencia de usuario excepcional.",
    features: ["React Native", "Flutter"],
  },
  {
    icon: Globe,
    title: "Sistemas Georeferenciales",
    description:
      "Soluciones GIS personalizadas para análisis espacial y visualización de datos geográficos.",
    features: [
      "Mapas interactivos",
      "Análisis espacial",
      "Visualización de datos",
    ],
  },
  {
    icon: Headphones,
    title: "Soporte de TI",
    description:
      "Soporte técnico 24/7, mantenimiento preventivo y resolución rápida de incidencias.",
    features: [
      "Soporte 24/7",
      "Mantenimiento preventivo",
      "Monitoreo proactivo",
    ],
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
];

export const SERVICE_OPTIONS_FORM = [
  {
    value: "",
    label: "Selecciona un servicio"
  },
  ...SERVICES.map((service) => ({
    value: service.title,
    label: service.title,
  })),
  {
    value: "consultoria",
    label: "Consultoría"
  },
  {
    value: "otro",
    label: "Otro"
  },
];

export const HEADER_LINKS = [
  {
    href: "#servicios",
    label: "Servicios"
  },
  {
    href: "#portfolio",
    label: "Portafolio"
  },
  {
    href: "#contacto",
    label: "Contacto"
  },
];
