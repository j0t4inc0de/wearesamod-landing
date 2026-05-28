<script setup>
const steps = [
  {
    num: '01',
    title: 'Auditoría y Diagnóstico',
    subtitle: '15 minutos sin costo',
    description: 'Analizamos cómo opera tu negocio hoy, dónde pierdes más tiempo en tareas repetitivas y trazamos las primeras oportunidades de automatización.'
  },
  {
    num: '02',
    title: 'Diseño del Flujo (Blueprint)',
    subtitle: 'Planificación técnica',
    description: 'Diagramamos el flujo en n8n detallando qué sistemas se conectan y qué agentes de IA intervienen para procesar las tareas específicas.'
  },
  {
    num: '03',
    title: 'Implementación y Dockerización',
    subtitle: 'Entornos seguros',
    description: 'Desplegamos las soluciones en contenedores Docker y configuramos las llamadas seguras (webhooks). Todo queda aislado y protegido.'
  },
  {
    num: '04',
    title: 'Soporte y Optimización',
    subtitle: 'Mejora continua',
    description: 'Monitoreamos las ejecuciones y refinamos las respuestas del agente de IA según los casos reales de tus clientes para garantizar un servicio óptimo.'
  }
]
</script>

<template>
  <section id="method" class="py-24 relative px-6 md:px-12 bg-brand-darker/30">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">El Camino al Ahorro de Tiempo</span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-white">
            Nuestro <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Método</span> de Trabajo
          </h2>
        </div>
        <p class="text-brand-muted max-w-md mt-4 md:mt-0 leading-relaxed text-sm">
          Acompañamos a tu negocio en cada paso del proceso, asegurando una transición fluida y sin interrupciones operativas.
        </p>
      </div>

      <!-- Timeline/Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div 
          v-for="step in steps" 
          :key="step.num"
          class="relative p-8 rounded-3xl glass-panel border-brand-border/60 flex flex-col justify-between min-h-[280px]"
        >
          <!-- Absolute Glowing Step Number -->
          <div class="absolute top-6 right-8 text-5xl font-black text-white/5 font-mono select-none">
            {{ step.num }}
          </div>

          <div>
            <!-- Step Label/Indicator -->
            <div class="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-xs font-bold text-brand-primary mb-6">
              {{ step.num }}
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-white mb-1">{{ step.title }}</h3>
            <!-- Subtitle -->
            <span class="text-[10px] font-semibold uppercase tracking-wider text-brand-secondary mb-4 block">
              {{ step.subtitle }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-xs text-brand-muted leading-relaxed mt-4">
            {{ step.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
