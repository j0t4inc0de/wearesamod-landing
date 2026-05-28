<script setup>
import { ref, nextTick } from 'vue'

const messages = ref([
  { 
    id: 1, 
    sender: 'bot', 
    text: '¡Hola! Soy el Agente virtual de Samod. Selecciona uno de los escenarios a mi izquierda para ver cómo automatizamos un negocio en tiempo real.', 
    time: 'Ahora' 
  }
])

const isThinking = ref(false)
const chatInput = ref('')
const chatContainer = ref(null)

const scenarios = [
  {
    id: 'whatsapp',
    title: 'Bot de WhatsApp',
    prompt: '¿Cómo funcionaría un Bot de WhatsApp para agendar horas médicas o de estética?',
    response: '¡Excelente pregunta! Para esto conectamos el sercicio de WhatsApp a nuestro agente de automatizaciones segun tu scenario. El flujo funciona así: \n\n1. El cliente escribe por WhatsApp. \n2. Nuestro agente recibe el mensaje y vía IA detecta la intención y consulta la disponibilidad en Google Calendar.\n3. La IA le ofrece las horas libres y, si el cliente confirma, nuestro agente crea el evento en la agenda y le envía un mensaje de confirmación por WhatsApp. ¡Todo automático y sin intervención humana!'
  },
  {
    id: 'billing',
    title: 'Ingesta de Facturas (SII)',
    prompt: 'Tengo decenas de facturas de proveedores que debo procesar a mano. ¿Se puede automatizar?',
    response: '¡Totalmente! nuestro agente impulsado por IA son perfectos para esto:\n\n1. Cuando llega un correo con un PDF adjunto, nuestro agente lo descarga de forma autónoma.\n2. Enviamos el PDF a un servicio OCR potenciado por IA que extrae los datos clave (Rut Proveedor, Monto Neto, IVA, Fecha, Detalle).\n3. Nuestro agente procesa la información, la valida con el SII si es necesario, la registra en tu ERP (como Defontana o Zoho) y te notifica por Slack o Teams con el resumen del gasto diario.'
  },
  {
    id: 'sync',
    title: 'Sincronizar CRM e Inventario',
    prompt: '¿Cómo conecto mi tienda online con mi CRM y mi planilla de inventario?',
    response: 'Es uno de nuestros servicios más solicitados.\n\n1. Cada vez que hay una compra en Shopify o WooCommerce, nuestro agente gatilla un webhook.\n2. nuestro agente actualiza el inventario en tu planilla de Google Sheets y en tu sistema interno.\n3. Al mismo tiempo, crea o actualiza la ficha del cliente en tu CRM, agenda una tarea de seguimiento para tu equipo de ventas y le manda un correo con cupón de descuento al cliente.'
  },
  {
    id: 'reviews',
    title: 'Reseñas de Google',
    prompt: '¿Cómo automatizamos las reseñas de Google para nuestro local físico?',
    response: '¡Una gran estrategia para mejorar tu reputación local! \n\n1. Cada vez que se completa una venta o servicio (detectado por tu sistema de ventas o CRM), nuestro agente envía un mensaje de WhatsApp amigable al cliente con un enlace.\n2. Si la experiencia fue positiva, lo dirigimos directamente a tu perfil de Google Maps para que deje 5 estrellas. Si la experiencia fue regular, le damos un canal interno de feedback directo para resolver su problema en privado antes de que afecte tu reputación pública.\n3. El agente de IA responde y agradece automáticamente cada reseña nueva en Google Business, mejorando tu posicionamiento SEO local.'
  }
]

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const selectScenario = (scenario) => {
  if (isThinking.value) return
  
  // Add user prompt
  messages.value.push({
    id: Date.now(),
    sender: 'user',
    text: scenario.prompt,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })
  
  triggerBotResponse(scenario.response)
}

const handleCustomSubmit = () => {
  if (!chatInput.value.trim() || isThinking.value) return
  
  const text = chatInput.value
  chatInput.value = ''
  
  messages.value.push({
    id: Date.now(),
    sender: 'user',
    text: text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })
  
  scrollToBottom()
  
  // Custom response based on input keywords
  let responseText = `¡Interesante propuesta! Para automatizar un negocio del rubro "${text}", diseñaríamos un flujo personalizado en n8n que conecte tus canales de comunicación (redes sociales o WhatsApp) directamente con tus herramientas internas. \n\nAgenda una reunión de 15 minutos con nosotros para que diagramemos tu flujo ideal en vivo.`
  
  if (text.toLowerCase().includes('whatsapp') || text.toLowerCase().includes('chat') || text.toLowerCase().includes('cliente')) {
    responseText = 'Detecto que te interesa la atención automatizada por chat. Implementaríamos un agente de IA con memoria conversacional integrado a tu API de WhatsApp. Puede calificar prospectos, derivar a humanos y agendar citas automáticamente en tu calendario.'
  } else if (text.toLowerCase().includes('factura') || text.toLowerCase().includes('boleta') || text.toLowerCase().includes('sii') || text.toLowerCase().includes('dinero') || text.toLowerCase().includes('contab')) {
    responseText = 'Para temas administrativos y contables, un flujo de extracción inteligente de documentos es lo ideal. Capturamos adjuntos en correos, leemos la información clave con IA (OpenAI/Claude) y la subimos a tu sistema de facturación o planillas de control financiero en segundos.'
  } else if (text.toLowerCase().includes('reseña') || text.toLowerCase().includes('google') || text.toLowerCase().includes('maps') || text.toLowerCase().includes('reputacion')) {
    responseText = 'Para mejorar la reputación online, implementamos un flujo que envía enlaces de valoración por WhatsApp solo a clientes satisfechos y deriva las quejas al canal interno de soporte. Además, nuestro agente responde las reseñas automáticamente en tu ficha de Google Maps.'
  }
  
  triggerBotResponse(responseText)
}

const triggerBotResponse = (text) => {
  isThinking.value = true
  scrollToBottom()
  
  setTimeout(() => {
    isThinking.value = false
    messages.value.push({
      id: Date.now(),
      sender: 'bot',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
    scrollToBottom()
  }, 1800)
}
</script>

<template>
  <section id="demo" class="py-24 relative px-6 md:px-12 bg-brand-darker/40">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Mira la IA en <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Acción</span>
        </h2>
        <p class="text-brand-muted max-w-xl mx-auto">
          Prueba nuestro simulador interactivo y descubre cómo automatizaríamos los flujos críticos de tu PYME.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Scenarios Selection Panel (Left) -->
        <div class="lg:col-span-4 flex flex-col gap-4">
          <div class="space-y-4">
            <h3 class="text-lg font-bold text-white mb-2">Escenarios Frecuentes</h3>
            <button 
              v-for="scenario in scenarios" 
              :key="scenario.title"
              @click="selectScenario(scenario)"
              :disabled="isThinking"
              class="w-full text-left p-5 rounded-2xl glass-panel glass-panel-hover border-brand-border/60 flex flex-col gap-2 transition-all disabled:opacity-50"
            >
              <span class="font-semibold text-sm text-brand-primary flex items-center gap-2">
                <!-- Inline SVG based on Scenario ID -->
                <svg v-if="scenario.id === 'whatsapp'" class="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M8 10h.01"/>
                  <path d="M12 10h.01"/>
                  <path d="M16 10h.01"/>
                </svg>
                <svg v-else-if="scenario.id === 'billing'" class="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                <svg v-else-if="scenario.id === 'sync'" class="w-4 h-4 text-brand-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="16" y="3" width="6" height="6" rx="1" />
                  <rect x="2" y="15" width="6" height="6" rx="1" />
                  <rect x="16" y="15" width="6" height="6" rx="1" />
                  <path d="M8 18h8" />
                  <path d="M19 9v6" />
                  <path d="M5 15V9a4 4 0 0 1 4-4h7" />
                </svg>
                <svg v-else-if="scenario.id === 'reviews'" class="w-4 h-4 text-brand-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                {{ scenario.title }}
              </span>
              <span class="text-xs text-brand-muted line-clamp-2">
                {{ scenario.prompt }}
              </span>
            </button>
          </div>
        </div>

        <!-- Chat Screen (Right) -->
        <div class="lg:col-span-8 flex flex-col rounded-3xl glass-panel border-brand-border/60 shadow-glass min-h-[500px]">
          <!-- Chat Header -->
          <div class="px-6 py-4 border-b border-brand-border/60 flex items-center justify-between bg-brand-dark/40 rounded-t-3xl">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary font-bold">
                S
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="text-sm font-bold text-white">Samod AI Agent</h4>
                  <span class="flex h-2 w-2 relative">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
                  </span>
                </div>
                <span class="text-[10px] text-brand-muted">Autónomo • n8n Workflow Engine</span>
              </div>
            </div>
            <span class="text-xs text-brand-primary font-semibold py-1 px-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              Demo de IA
            </span>
          </div>

          <!-- Chat Messages Area -->
          <div 
            ref="chatContainer"
            class="flex-1 p-6 space-y-6 overflow-y-auto max-h-[380px] min-h-[300px] flex flex-col bg-brand-darker/20"
          >
            <div 
              v-for="msg in messages" 
              :key="msg.id"
              :class="[
                'max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed flex flex-col gap-1',
                msg.sender === 'bot' 
                  ? 'bg-brand-glass border border-brand-border text-brand-text self-start rounded-tl-none' 
                  : 'bg-brand-primary/20 border border-brand-primary/30 text-white self-end rounded-tr-none'
              ]"
            >
              <!-- Message Text -->
              <span class="whitespace-pre-line">{{ msg.text }}</span>
              <!-- Timestamp -->
              <span class="text-[9px] text-brand-muted self-end mt-1">{{ msg.time }}</span>
            </div>

            <!-- Thinking Indicator -->
            <div 
              v-if="isThinking" 
              class="bg-brand-glass border border-brand-border text-brand-text self-start rounded-2xl rounded-tl-none p-4 max-w-[80%] flex items-center gap-3"
            >
              <div class="flex gap-1">
                <span class="w-2 h-2 rounded-full bg-brand-primary animate-bounce" style="animation-delay: 0ms"></span>
                <span class="w-2 h-2 rounded-full bg-brand-primary animate-bounce" style="animation-delay: 150ms"></span>
                <span class="w-2 h-2 rounded-full bg-brand-primary animate-bounce" style="animation-delay: 300ms"></span>
              </div>
              <span class="text-xs text-brand-muted font-medium">n8n ejecutando nodos de IA...</span>
            </div>
          </div>

          <!-- Chat Input Area -->
          <form 
            @submit.prevent="handleCustomSubmit"
            class="p-4 border-t border-brand-border/60 bg-brand-dark/40 rounded-b-3xl flex gap-3"
          >
            <input 
              v-model="chatInput"
              type="text" 
              placeholder="Pregúntale a la IA cómo automatizar tu rubro (Ej: Clínica, Tienda de ropa, etc.)..."
              class="flex-1 px-5 py-3.5 rounded-2xl glass-input text-sm placeholder-brand-muted/70"
              :disabled="isThinking"
            />
            <button 
              type="submit"
              :disabled="isThinking || !chatInput.trim()"
              class="px-6 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-accent text-white flex items-center justify-center transition-all hover:shadow-neon-primary disabled:opacity-50"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

        </div>

      </div>
    </div>
  </section>
</template>
