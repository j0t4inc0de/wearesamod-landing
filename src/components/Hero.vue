<script setup>
const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 md:px-12">
    <!-- Background Glow Orbs -->
    <div class="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-primary top-1/4 -left-20"></div>
    <div class="glow-orb w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-brand-accent bottom-10 -right-20"></div>

    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      <!-- Text content -->
      <div class="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-brand-primary/20 text-xs font-semibold text-brand-primary mb-6 animate-fade-in">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-ping"></span>
          <span>Automatización & Agentes de IA en Biobío</span>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Liberamos a tu negocio de las tareas
          <span class="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
            repetitivas
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed">
          Diseñamos e implementamos agentes de Inteligencia Artificial y flujos de trabajo autónomos que responden clientes, procesan facturas y conectan tus sistemas las 24 horas. Creado por ingenieros locales para PYMEs de Los Ángeles, Chile.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            @click="scrollTo('contact')" 
            class="relative group px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-brand-primary hover:bg-brand-primary transition-all duration-300 hover:shadow-neon-primary overflow-hidden flex items-center justify-center w-full sm:w-auto"
          >
            <div class="absolute top-3 right-[80%] group-hover:top-12 group-hover:-right-4 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ease-out bg-purple-900"></div>
            <div class="absolute top-3 right-[80%] group-hover:top-12 group-hover:-right-4 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ease-out bg-purple-800"></div>
            <div class="absolute top-3 right-[80%] group-hover:top-12 group-hover:-right-4 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ease-out bg-purple-700"></div>
            <div class="absolute top-3 right-[80%] group-hover:top-12 group-hover:-right-4 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ease-out bg-purple-600"></div>
            <span class="z-10 relative flex items-center gap-2">
              Agenda una Auditoría Gratis
            </span>
          </button>
          
          <button 
            @click="scrollTo('demo')" 
            class="px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white glass-panel hover:bg-brand-dark/80 hover:border-brand-primary/50 transition-all duration-300 w-full sm:w-auto"
          >
            Ver Demo Interactiva
          </button>
        </div>

        <!-- Trust markers -->
        <div class="mt-12 flex flex-wrap gap-8 items-center justify-center lg:justify-start opacity-70">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-xs font-semibold text-white uppercase tracking-wider">Integraciones con n8n</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-xs font-semibold text-white uppercase tracking-wider">Despliegue Local Seguro</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-xs font-semibold text-white uppercase tracking-wider">Soporte Continuo en Chile</span>
          </div>
        </div>
      </div>

      <!-- Hero Visual (Interactive Chat Simulator Preview) -->
      <div class="lg:col-span-5 w-full flex justify-center mt-8 lg:mt-0">
        <div class="relative w-full max-w-[420px] glass-panel p-1.5 rounded-3xl border-brand-border/40 shadow-glass overflow-hidden">
          <div class="absolute -inset-px bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-3xl -z-10"></div>
          
          <!-- Inner screen mockup -->
          <div class="bg-brand-darker/90 rounded-[22px] p-5 border border-white/5 overflow-hidden">
            <div class="flex items-center justify-between border-b border-brand-border/40 pb-4 mb-4">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <div class="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-sm">
                    S
                  </div>
                  <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-brand-secondary border-2 border-brand-darker"></span>
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-white">Agente Samod AI</h4>
                  <p class="text-[10px] text-brand-secondary">En línea • Motor n8n</p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-brand-muted">
                <span class="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>

            <!-- Fake Chat Logs -->
            <div class="space-y-4 text-xs min-h-[220px] flex flex-col justify-end">
              <div class="bg-brand-glass border border-brand-border text-brand-text max-w-[80%] rounded-2xl rounded-tl-none p-3.5">
                Hola, soy el asistente autónomo de Samod. ¿Cómo puedo ayudarte hoy?
              </div>
              <div class="bg-brand-primary/20 border border-brand-primary/30 text-white max-w-[80%] self-end rounded-2xl rounded-tr-none p-3.5">
                Hola, tengo una constructora en Los Ángeles. Mis vendedores tardan mucho en cotizar por WhatsApp.
              </div>
              <div class="bg-brand-glass border border-brand-border text-brand-text max-w-[80%] rounded-2xl rounded-tl-none p-3.5">
                <div class="flex items-center gap-2 mb-1.5 text-brand-secondary font-semibold text-[10px] uppercase tracking-wider">
                  <svg class="w-3.5 h-3.5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  IA pensando...
                </div>
                Entendido. Conectando WhatsApp con tu catálogo... Generando cotización automática y agendando visita en obra.
              </div>
            </div>

            <!-- Input area -->
            <div class="mt-6 flex gap-2 border-t border-brand-border/40 pt-4">
              <div class="flex-1 px-4 py-2.5 rounded-xl glass-input text-xs text-brand-muted flex items-center justify-between">
                Escribe un mensaje...
                <svg class="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
