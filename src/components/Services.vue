<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const serviceGroups = [
  {
    category: 'Digitalización y Software para Locales',
    subtitle: 'Herramientas digitales a medida para atraer clientes y controlar tu operación diaria.',
    items: [
      {
        id: 'web',
        title: 'Páginas Web para tu Negocio',
        description: 'Sitios web rápidos, modernos y pensados para el celular, diseñados para mostrar tu marca y convertir visitas en pedidos reales.',
        badge: 'Presencia Digital',
        features: ['Diseño a medida para celular y PC', 'Presencia en Google y mapas', 'Botón directo a tu WhatsApp']
      },
      {
        id: 'qr',
        title: 'Menús QR Interactivos',
        description: 'Cartas digitales fáciles de actualizar para foodtrucks, restaurantes y cafés. Tus clientes escanean y ven tu menú al instante sin pagar comisiones.',
        badge: 'Gastronomía',
        features: ['Cambia precios en segundos', 'Fotos y categorías claras', 'Cero comisiones por pedido']
      },
      {
        id: 'pos',
        title: 'Sistema de Caja y Pedidos',
        description: 'Punto de venta simple y a medida para controlar caja, comandas, turnos e inventario en tiempo real desde cualquier dispositivo.',
        badge: 'Operación',
        features: ['Control de caja y ventas', 'Gestión de comandas y pedidos', 'Resúmenes diarios automáticos']
      }
    ]
  },
  {
    category: 'Automatización e Inteligencia Artificial',
    subtitle: 'Herramientas que trabajan 24/7 para ahorrarte trabajo manual.',
    items: [
      {
        id: 'whatsapp',
        title: 'Asistentes de WhatsApp 24/7',
        description: 'Atiende a tus clientes a cualquier hora. Respondemos dudas frecuentes, mostramos tu disponibilidad y agendamos citas directo en tu calendario.',
        badge: 'Popular',
        features: ['Conectado a tu WhatsApp', 'Respuestas naturales y rápidas', 'Agendamiento automático']
      },
      {
        id: 'billing',
        title: 'Orden de Facturas y Boletas',
        description: 'Olvídate de pasar datos a mano. El sistema lee las facturas que llegan a tu correo, extrae los montos clave y actualiza tu planilla automáticamente.',
        badge: 'Finanzas',
        features: ['Lectura automática de PDFs', 'Clasificación de gastos', 'Carga directa en Google Sheets']
      },
      {
        id: 'integration',
        title: 'Conecta tus Herramientas de Venta',
        description: 'Sincroniza tu tienda, tus planillas y tu inventario para que no tengas que copiar información de un lado a otro.',
        badge: 'Integraciones',
        features: ['Actualización al instante', 'Sincronización de inventario', 'Alertas automáticas a tu celular']
      }
    ]
  }
]

const allServices = serviceGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, category: group.category }))
)

const mobileSlides = [
  allServices.slice(0, 2),
  allServices.slice(2, 4),
  allServices.slice(4, 6)
]

const currentSlide = ref(0)
const isPaused = ref(false)
let carouselTimer = null

const togglePause = () => {
  isPaused.value = !isPaused.value
}

const goToSlide = (index) => {
  currentSlide.value = index
  isPaused.value = true
}

onMounted(() => {
  carouselTimer = setInterval(() => {
    if (!isPaused.value) {
      currentSlide.value = (currentSlide.value + 1) % mobileSlides.length
    }
  }, 3000)
})

onUnmounted(() => {
  if (carouselTimer) clearInterval(carouselTimer)
})
</script>

<template>
  <section id="services" class="py-16 relative px-6 md:px-12">
    <!-- Subtle Background Glow -->
    <div class="glow-orb w-[400px] h-[400px] bg-brand-accent/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-5xl font-medium text-white mb-3 tracking-tight" style="font-family: 'Canela Deck', 'Playfair Display', serif;">
          Nuestras <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent italic" style="font-family: 'Canela Deck', 'Playfair Display', serif;">Soluciones</span>
        </h2>
        <p class="text-brand-muted max-w-2xl mx-auto text-sm md:text-base">
          Combinamos desarrollo de software para locales con automatización inteligente para impulsar tu negocio de principio a fin.
        </p>
      </div>

      <!-- Mobile Carousel (2x1, auto every 3s, tap to pause) -->
      <div class="md:hidden">
        <div
          class="overflow-hidden rounded-2xl cursor-pointer select-none"
          @click="togglePause"
        >
          <div
            class="flex transition-transform duration-700 will-change-transform"
            :style="{
              transform: `translateX(-${currentSlide * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }"
          >
            <div
              v-for="(slide, slideIdx) in mobileSlides"
              :key="slideIdx"
              class="w-full flex-shrink-0 space-y-4 px-0.5"
            >
              <div
                v-for="service in slide"
                :key="service.id"
                class="p-5 rounded-2xl glass-panel border-brand-border/60 flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-[10px] font-semibold text-brand-muted uppercase tracking-wider">
                      {{ service.category }}
                    </span>
                    <span class="text-[9px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded-full border border-brand-primary/20">
                      {{ service.badge }}
                    </span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">{{ service.title }}</h4>
                  <p class="text-xs text-brand-muted leading-relaxed mb-4">{{ service.description }}</p>
                </div>
                <div class="border-t border-brand-border/40 pt-3">
                  <ul class="space-y-1.5">
                    <li
                      v-for="feature in service.features"
                      :key="feature"
                      class="flex items-center gap-2 text-[11px] text-brand-text"
                    >
                      <svg class="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Carousel Controls -->
        <div class="flex items-center justify-between mt-4 px-1">
          <div class="flex items-center gap-2">
            <button
              v-for="(_, idx) in mobileSlides"
              :key="idx"
              type="button"
              @click="goToSlide(idx)"
              class="h-2 rounded-full transition-all duration-300"
              :class="currentSlide === idx ? 'w-6 bg-brand-primary' : 'w-2 bg-brand-border'"
              :aria-label="`Ir al grupo ${idx + 1}`"
            />
          </div>
          <button
            type="button"
            @click="togglePause"
            class="text-[11px] text-brand-muted hover:text-white transition-colors"
          >
            {{ isPaused ? 'Pausado · Toca para reanudar' : 'Toca una tarjeta para pausar' }}
          </button>
        </div>
      </div>

      <!-- Desktop Service Groups -->
      <div class="hidden md:block space-y-10">
        <div v-for="group in serviceGroups" :key="group.category">
          <div class="mb-5 flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-brand-border/40 pb-3">
            <h3 class="text-xl font-bold text-white">{{ group.category }}</h3>
            <p class="text-xs md:text-sm text-brand-muted">{{ group.subtitle }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              v-for="service in group.items" 
              :key="service.id"
              class="p-6 rounded-2xl glass-panel glass-panel-hover border-brand-border/60 flex flex-col justify-between"
            >
              <div>
                <!-- Badge & Icon -->
                <div class="flex items-center justify-between mb-6">
                  <span class="p-3 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex items-center justify-center">
                    <svg v-if="service.id === 'web'" class="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="16" rx="2"/>
                      <line x1="3" y1="9" x2="21" y2="9"/>
                      <line x1="9" y1="20" x2="9" y2="9"/>
                    </svg>
                    <svg v-else-if="service.id === 'qr'" class="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                      <path d="M14 14h3v3h-3zM17 17h4v4h-4zM14 20h3"/>
                    </svg>
                    <svg v-else-if="service.id === 'pos'" class="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="4" width="20" height="14" rx="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="18" x2="12" y2="21"/>
                    </svg>
                    <svg v-else-if="service.id === 'whatsapp'" class="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                  <span class="text-[9px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded-full border border-brand-primary/20">
                    {{ service.badge }}
                  </span>
                </div>

                <!-- Title -->
                <h4 class="text-xl font-bold text-white mb-4">{{ service.title }}</h4>
                
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
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
</style>
