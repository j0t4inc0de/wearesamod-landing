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
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Nosotros somos <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Samod</span>
        </h2>
        <p class="text-brand-muted max-w-xl mx-auto">
          Un equipo de profesionales y agentes inteligentes dedicados a resolver problemas reales a través del software.
        </p>
      </div>

      <!-- Founders Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
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

      <!-- Local Commitment Note -->
      <div class="p-8 rounded-3xl glass-panel bg-brand-dark/40 border-brand-border max-w-3xl mx-auto text-center">
        <h4 class="text-base font-bold text-white mb-2 flex items-center justify-center gap-2">
          <svg class="w-5 h-5 text-brand-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Apoyo local y presencial en la Región del Biobío
        </h4>
        <p class="text-xs text-brand-muted leading-relaxed">
          A diferencia de agencias remotas extranjeras, nosotros vamos a tu oficina en Los Ángeles, conversamos de tus procesos cara a cara, entendemos las complejidades del mercado chileno (como la contabilidad local o el uso intensivo de WhatsApp) y te brindamos soporte técnico inmediato.
        </p>
      </div>

    </div>
  </section>
</template>
