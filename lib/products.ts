export interface Product {
  id: string
  name: string
  category: "anime" | "kpop" | "tocuyo" | "polos" | "cuadros"
  description: string
  sizes: string[]
  materials: string[]
  image: string
  badge?: string
  videoUrl?: string
}

export const products: Product[] = [
  // --- Anime Edition ---
  {
    id: "cuadro-evangelion",
    name: "Evangelion Collection",
    category: "anime",
    description:
      "Shinji, Unit-01 y los Angels en cuadros LED de aluminio. Luz ambiental que transforma tu habitacion en el Geofront.",
    sizes: ["A4 (21x30cm)", "A3 (30x42cm)", "20x20cm Cuadrado"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/anime-cuadro.jpg",
    badge: "Destacado",
  },
  {
    id: "cuadro-one-piece",
    name: "One Piece - Luffy & Zoro",
    category: "anime",
    description:
      "Los Mugiwara con acabados premium. Luffy Gear 5 y Zoro con Enma en cuadros LED que brillan como el One Piece.",
    sizes: ["A4 (21x30cm)", "A3 (30x42cm)", "30x50cm Panoramico"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/anime-cuadro.jpg",
    badge: "Popular",
  },
  {
    id: "cuadro-jjk",
    name: "Jujutsu Kaisen - Gojo Edition",
    category: "anime",
    description:
      "El Infinito de Gojo cobra vida con luz LED. Ojos azules que brillan en la oscuridad. Domain Expansion en tu pared.",
    sizes: ["A4 (21x30cm)", "A3 (30x42cm)", "30x30cm Cuadrado"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/anime-cuadro.jpg",
  },

  // --- K-Pop Universe ---
  {
    id: "cuadro-stray-kids",
    name: "Stray Kids Premium Frame",
    category: "kpop",
    description:
      "Lleva a tus idols a otro nivel con acabados premium y luz ambiental. Cada cuadro es una pieza de coleccion STAY.",
    sizes: ["A4 (21x30cm)", "A3 (30x42cm)", "20x20cm Cuadrado"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/kpop-cuadro.jpg",
    badge: "K-Pop",
  },
  {
    id: "cuadro-kpop-custom",
    name: "K-Pop Custom Frames",
    category: "kpop",
    description:
      "BTS, BLACKPINK, NewJeans, ATEEZ y mas. Cuadros LED personalizados con tu bias y tu grupo favorito.",
    sizes: ["A4 (21x30cm)", "A3 (30x42cm)", "30x30cm Cuadrado"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/kpop-cuadro.jpg",
  },

  // --- Cuadros de Aluminio (formatos generales) ---
  {
    id: "lamina-clasica",
    name: "Lámina Clásica (A4, A3, A2) con soportes flotantes",
    category: "cuadros",
    description:
      "El formato más versátil para fotos, ilustraciones y arte digital. Soportes flotantes que dan un efecto elegante de profundidad en la pared.",
    sizes: ["A4 (21x30cm)", "A3 (30x42cm)", "A2 (42x60cm)"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/cuadro-led.jpg",
    badge: "Clásico",
  },
  {
    id: "cuadrado-moderno",
    name: "Cuadrado Moderno (20x20, 30x30) para mosaicos",
    category: "cuadros",
    description:
      "Perfecto para crear composiciones y mosaicos en la pared. Combina varios cuadrados para un efecto visual impactante.",
    sizes: ["20x20cm", "30x30cm"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/cuadro-led.jpg",
  },
  {
    id: "panoramico",
    name: "Panorámico (30x50, 40x80) para paisajes y fotos grupales",
    category: "cuadros",
    description:
      "Formato alargado ideal para paisajes, fotos grupales y skylines. Impacto visual máximo para tus espacios amplios.",
    sizes: ["30x50cm", "40x80cm"],
    materials: ["Aluminio Cepillado", "Aluminio Brillante"],
    image: "/images/cuadro-led.jpg",
  },

  // --- Eco-Tocuyo Hub ---
  {
    id: "bolsa-tote-estandar",
    name: "Bolsa Tote Estándar (35x40 cm)",
    category: "tocuyo",
    description:
      "Para compras, ferias o libros. La alternativa perfecta al plástico con sublimación full color en tocuyo natural.",
    sizes: ["35x40cm"],
    materials: ["Tocuyo Crudo", "Tocuyo Blanqueado"],
    image: "/images/tocuyo-sublimado.jpg",
    badge: "Eco-friendly",
  },
  {
    id: "bolsa-hombro-jumbo",
    name: "Bolsa de Hombro Jumbo (40x45 cm)",
    category: "tocuyo",
    description:
      "Para playas o entregas grandes. Amplia capacidad con asa larga y sublimación vibrante en algodón orgánico.",
    sizes: ["40x45cm"],
    materials: ["Tocuyo Crudo", "Tocuyo Blanqueado"],
    image: "/images/tocuyo-sublimado.jpg",
  },
  {
    id: "saquito-regalo",
    name: "Saquito para Regalo (15x20 cm)",
    category: "tocuyo",
    description:
      "Packaging para joyas o detalles. Pequeños saquitos personalizados eco-friendly perfectos para eventos y regalos corporativos.",
    sizes: ["15x20cm"],
    materials: ["Tocuyo Crudo"],
    image: "/images/tocuyo-sublimado.jpg",
  },
  {
    id: "mochila-morral",
    name: "Mochila Tipo Morral (30x40 cm)",
    category: "tocuyo",
    description:
      "Gimnasios y kits deportivos. Práctica mochila de cuerdas en tocuyo sublimado. Ideal para eventos, ferias y merchandising.",
    sizes: ["30x40cm"],
    materials: ["Tocuyo Crudo", "Tocuyo Blanqueado"],
    image: "/images/tocuyo-sublimado.jpg",
    videoUrl: "https://youtu.be/IMjJ-d38vTk",
  },

  // --- Polos & Textiles ---
  {
    id: "polo-clasico",
    name: "Polo Clásico (Cuello Redondo)",
    category: "polos",
    description:
      "Polo algodón con sublimación full print y cuello redondo. Colores vibrantes que resisten lavado tras lavado.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    materials: ["Algodón 100%", "Polialgodón"],
    image: "/images/polos.jpg",
  },
  {
    id: "polo-pique",
    name: "Polo Piqué (Imagen corporativa)",
    category: "polos",
    description:
      "Look profesional para tu equipo con sublimación de alta definición. Ideal para empresas y eventos corporativos.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    materials: ["Piqué Algodón", "Piqué Poliéster"],
    image: "/images/polos.jpg",
    badge: "Corporativo",
  },
  {
    id: "poleras",
    name: "Poleras (Clima frío)",
    category: "polos",
    description:
      "Para los días fríos, poleras con sublimación personalizada. Abrigadas, cómodas y con diseños que no se desvanecen.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    materials: ["Franela Algodón", "Poliéster Térmico"],
    image: "/images/polos.jpg",
  },
]
