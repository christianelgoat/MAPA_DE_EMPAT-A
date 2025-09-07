
interface SectionData {
  title: string;
  content: string[];
}

export const empathyMapData: { [key: string]: SectionData } = {
  thinksAndFeels: {
    title: '¿Qué piensa y siente? ¿Qué le preocupa? ¿Qué le motiva?',
    content: [
      '🤔 Me preocupa el costo de tener producto almacenado sin venderse.',
      '😥 Siente FRUSTRACIÓN (50%) y ESTRÉS cuando hay problemas con el inventario.',
      '💡 Siento que debe haber mejor logística.',
      '⏳ Quiero tener más tiempo libre para enfocarme en la estrategia y no en la operación.'
    ],
  },
  hears: {
    title: '¿Qué ha escuchado de este tema?',
    content: [
        '🗣️ Comentarios constantes sobre "procesos lentos y repetitivos".',
        '📉 Quejas sobre las "discrepancias entre el sistema y el stock físico".',
        '❓ Que falta "información precisa sobre la ubicación de los productos".',
        '🙅 Dice: "Lo siento, no lo tenemos ahora mismo" o "Te puedo ofrecer este producto alternativo".',
        '🤷‍♀️ A clientes preguntando por productos que no hay.'
    ],
  },
  sees: {
    title: '¿Qué ha visto o dónde ha visto este tema?',
    content: [
      '📦 Falta de espacio y un cierto desorden que dificulta encontrar las cosas.',
      '📚 Un almacén con acumulación de productos que no rotan.',
      '💸 Ve cómo los precios de los insumos cambian constantemente (ej. por el dólar).',
      '📝 Su cuaderno de apuntes o una hoja de cálculo simple como principal herramienta.'
    ],
  },
  saysAndDoes: {
    title: '¿Qué opina y hace con respecto a este tema?',
    content: [
      '🕵️‍♀️ Hace: Busca manualmente en el almacén "por si hay un error", lo que demuestra desconfianza en su sistema actual.',
      '⏱️ Hace: Pierde tiempo en procesos manuales para registrar y contar el inventario.',
      '🤔 Hace: Toma decisiones de compra basadas en la intuición o en datos poco claros.'
    ],
  },
  efforts: {
    title: 'Esfuerzos',
    content: [
      '🔢 Realizar conteos manuales',
      '🤯 Adivinar al comprar',
      '🔍 Búsqueda manual'
    ],
  },
  results: {
    title: 'Resultados',
    content: [
      '💰 Reducción de costos operativos',
      '📈 Aumento de ventas y satisfacción del cliente',
      '✅ Optimización del inventario'
    ],
  },
  painPoints: {
    title: 'Puntos de dolor',
    content: [
        '💸 Pérdida de dinero',
        '😟 Incertidumbre y Desconfianza',
        '😫 Estrés y Frustración'
    ],
  },
  benefits: {
    title: 'Beneficios',
    content: [
        '⏰ Más tiempo para lo importante',
        '✅ Toma de decisiones con confianza',
        '😌 Tranquilidad y control'
    ],
  },
};