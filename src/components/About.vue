<script setup>
const founders = [
  {
    name: 'Juan Erices',
    role: 'Co-Fundador & Ingeniero de Automatización',
    bio: 'Especialista en infraestructura segura, contenedores Docker y flujos de integración continua. Responsable del despliegue y estabilidad de los agentes de IA.',
    icon: 'we'
  },
  {
    name: 'Benjamín Martinez',
    role: 'Co-Fundador & Ingeniero de IA',
    bio: 'Especialista en ingeniería de prompts, integraciones avanzadas de LLMs y flujos lógicos complejos en n8n. Encargado de entrenar y calibrar las respuestas cognitivas.',
    icon: 'are'
  },
  {
    name: 'Samod Agent',
    role: 'Agente Autónomo de Soporte 24/7',
    bio: 'Nuestro agente virtual de IA. Monitorea los servidores locales en Los Ángeles, audita el estado de las APIs de WhatsApp y emite alertas automáticas de diagnóstico.',
    icon: 'samod'
  }
]
</script>

<template>
  <section id="about" class="py-24 relative px-6 md:px-12">
    <!-- Glow Orbs -->
    <div class="glow-orb w-[300px] h-[300px] bg-brand-primary/10 bottom-0 left-10"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">Detrás de la IA</span>
        <h2 class="text-4xl md:text-6xl font-medium text-white mb-4 tracking-tight" style="font-family: 'Canela Deck', 'Playfair Display', serif;">
          Nosotros somos <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent" style="font-family: 'Canela Deck', 'Playfair Display', serif;">Samod</span>
        </h2>
        <p class="text-brand-muted max-w-xl mx-auto">
          Un equipo de profesionales y agentes inteligentes dedicados a resolver problemas reales a través del software.
        </p>
      </div>

      <!-- Founders Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-10">
        <div 
          v-for="founder in founders" 
          :key="founder.name"
          class="p-8 rounded-3xl glass-panel border-brand-border/60 flex flex-col justify-between"
        >
          <div>
            <!-- Avatar mockup with dynamic text length classes -->
            <div class="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-6 font-bold tracking-tight select-none">
              <span :class="[
                founder.icon.length > 3 ? 'text-lg text-brand-accent' : 
                founder.icon === 'are' ? 'text-2xl text-white' : 'text-2xl text-white'
              ]">
                {{ founder.icon }}
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-1">{{ founder.name }}</h3>
            <span class="text-xs text-brand-primary font-semibold block mb-4">{{ founder.role }}</span>
            <p class="text-sm text-brand-muted leading-relaxed">
              {{ founder.bio }}
            </p>
          </div>

          <div class="border-t border-brand-border/40 pt-6 mt-6 flex gap-4 text-xs text-brand-muted">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-brand-secondary"></span>
              {{ founder.icon === 'samod' ? 'Operativo 24/7 en Cloud' : 'Disponible en Los Ángeles, CL' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
</style>
