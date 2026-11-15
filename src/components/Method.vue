<script setup>
const steps = [
  {
    num: '01',
    title: 'Diagnóstico del Negocio',
    subtitle: '15 minutos sin costo',
    description: 'Analizamos cómo opera tu local hoy, qué herramientas digitales necesitas (web, menú QR, POS) y dónde pierdes tiempo en tareas manuales.'
  },
  {
    num: '02',
    title: 'Diseño de la Solución',
    subtitle: 'Planificación a medida',
    description: 'Definimos la arquitectura exacta: desde la experiencia de tus clientes y tu sistema de gestión hasta los flujos de automatización e IA que requiera tu operación.'
  },
  {
    num: '03',
    title: 'Desarrollo y Despliegue',
    subtitle: 'Entornos seguros',
    description: 'Construimos tu plataforma o automatización, la desplegamos en infraestructura segura y la dejamos lista para operar en el día a día de tu negocio.'
  },
  {
    num: '04',
    title: 'Soporte y Evolución',
    subtitle: 'Mejora continua',
    description: 'Acompañamos la puesta en marcha, monitoreamos el sistema y aplicamos mejoras según las necesidades reales de tu local y tus clientes.'
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
          <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight" style="font-family: 'Canela Deck', 'Playfair Display', serif;">
            Nuestro <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent italic" style="font-family: 'Canela Deck', 'Playfair Display', serif;">Método</span> de Trabajo
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
</style>
