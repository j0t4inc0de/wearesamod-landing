<script setup>
const services = [
  {
    id: 'whatsapp',
    title: 'Bots de WhatsApp Inteligentes',
    description: 'Atiende a tus clientes las 24 horas del día. Diseñamos agentes de IA que consultan stock, responden preguntas frecuentes y agendan citas directo en tu calendario.',
    badge: 'Popular',
    features: ['Integración con Evolution/Z-API', 'Memoria de conversación', 'Agendamiento automático']
  },
  {
    id: 'billing',
    title: 'Automatización de Facturas y SII',
    description: 'Olvídate del papeleo manual. n8n detecta y procesa facturas desde tu correo electrónico, extrae los datos clave usando OCR con IA y actualiza tu planilla o ERP.',
    badge: 'Finanzas',
    features: ['Lectura inteligente de PDFs', 'Clasificación de gastos', 'Carga en Google Sheets/Airtable']
  },
  {
    id: 'integration',
    title: 'Conexión de Sistemas (CRM/E-commerce)',
    description: 'Sincroniza tus plataformas de venta con tu inventario y bases de datos. Si una aplicación tiene API, nosotros la conectamos y automatizamos para ti.',
    badge: 'Operaciones',
    features: ['Webhooks en tiempo real', 'Sincronización de inventario', 'Notificaciones Slack/Telegram']
  }
]
</script>

<template>
  <section id="services" class="py-24 relative px-6 md:px-12">
    <!-- Subtle Background Glow -->
    <div class="glow-orb w-[400px] h-[400px] bg-brand-accent/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Nuestras <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Soluciones</span>
        </h2>
        <p class="text-brand-muted max-w-xl mx-auto">
          Diseñamos flujos eficientes adaptados a las necesidades y tamaño de tu empresa.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.title"
          class="p-8 rounded-3xl glass-panel glass-panel-hover border-brand-border/60 flex flex-col justify-between"
        >
          <div>
            <!-- Badge & Icon -->
            <div class="flex items-center justify-between mb-6">
              <span class="p-3 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex items-center justify-center">
                <!-- SVG dynamically loaded based on service.id -->
                <svg v-if="service.id === 'whatsapp'" class="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M8 10h.01"/>
                  <path d="M12 10h.01"/>
                  <path d="M16 10h.01"/>
                </svg>
                <svg v-else-if="service.id === 'billing'" class="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <svg v-else-if="service.id === 'integration'" class="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="16" y="3" width="6" height="6" rx="1" />
                  <rect x="2" y="15" width="6" height="6" rx="1" />
                  <rect x="16" y="15" width="6" height="6" rx="1" />
                  <path d="M8 18h8" />
                  <path d="M19 9v6" />
                  <path d="M5 15V9a4 4 0 0 1 4-4h7" />
                </svg>
              </span>
              <span class="text-[10px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                {{ service.badge }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-white mb-4">{{ service.title }}</h3>
            
            <!-- Description -->
            <p class="text-sm text-brand-muted leading-relaxed mb-6">
              {{ service.description }}
            </p>
          </div>

          <!-- Features list -->
          <div class="border-t border-brand-border/40 pt-6 mt-6">
            <ul class="space-y-3">
              <li 
                v-for="feature in service.features" 
                :key="feature"
                class="flex items-center gap-3 text-xs text-brand-text"
              >
                <svg class="w-4 h-4 text-brand-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
