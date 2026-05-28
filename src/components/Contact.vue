<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

// Submission State
const status = ref('idle') // 'idle' | 'submitting' | 'success' | 'error'
const errorMessage = ref('')

// REPLACE THIS with your production n8n webhook URL (e.g. 'https://n8n.wearesamod.com/webhook/contact-form')
const webhookUrl = ref(import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n.wearesamod.com/webhook/contact')

const handleSubmit = async () => {
  if (status.value === 'submitting') return
  status.value = 'submitting'
  errorMessage.value = ''
  
  try {
    const response = await fetch(webhookUrl.value, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.value,
        submittedAt: new Date().toISOString(),
        source: 'Landing Page'
      })
    })
    
    if (response.ok || response.status === 200 || response.status === 201) {
      status.value = 'success'
      // Clear form
      form.value = { name: '', email: '', phone: '', company: '', message: '' }
    } else {
      throw new Error(`Error en el servidor: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Error enviando formulario:', error)
    // For demo purposes, if n8n endpoint is not configured yet, we explain to user.
    // However, we want to show a clear error or simulate success for now.
    status.value = 'error'
    errorMessage.value = 'No se pudo enviar el mensaje. Asegúrate de configurar tu webhook de n8n o inténtalo más tarde.'
  }
}
</script>

<template>
  <section id="contact" class="py-24 relative px-6 md:px-12 bg-brand-darker/20">
    <!-- Glow Orbs -->
    <div class="glow-orb w-[300px] h-[300px] bg-brand-accent/15 top-1/3 -right-20"></div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        <!-- Left Side Info -->
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">Da el Primer Paso</span>
            <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Agendemos una <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Conversación</span>
            </h2>
            <p class="text-brand-muted text-sm leading-relaxed mb-8">
              Cuéntanos en qué consiste tu negocio y qué procesos manuales te gustaría eliminar. Te responderemos en menos de 24 horas hábiles.
            </p>
          </div>

          <!-- Contact Channels Info -->
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Ubicación</h4>
                <p class="text-sm text-brand-muted">Los Ángeles, Región del Biobío, Chile</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Email</h4>
                <a href="mailto:contacto@wearesamod.com" class="text-sm text-brand-muted hover:text-white transition-colors">contacto@wearesamod.com</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                  <rect x="9" y="9" width="6" height="6"/>
                  <line x1="9" y1="1" x2="9" y2="4"/>
                  <line x1="15" y1="1" x2="15" y2="4"/>
                  <line x1="9" y1="20" x2="9" y2="23"/>
                  <line x1="15" y1="20" x2="15" y2="23"/>
                  <line x1="20" y1="9" x2="23" y2="9"/>
                  <line x1="20" y1="15" x2="23" y2="15"/>
                  <line x1="1" y1="9" x2="4" y2="9"/>
                  <line x1="1" y1="15" x2="4" y2="15"/>
                </svg>
              </div>
              <div>
                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Infraestructura</h4>
                <p class="text-xs text-brand-secondary font-medium">n8n Engine • HTTPS SSL • Local Deploy</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side Glass Form -->
        <div class="lg:col-span-7 p-8 md:p-10 rounded-3xl glass-panel border-brand-border/60 shadow-glass">
          
          <!-- Idle / Submitting states -->
          <form v-if="status === 'idle' || status === 'submitting' || status === 'error'" @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Nombre -->
              <div class="flex flex-col gap-2">
                <label for="name" class="text-xs font-bold text-brand-text uppercase tracking-wide">Nombre</label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text" 
                  required
                  placeholder="Tu nombre"
                  class="px-4 py-3 rounded-xl glass-input text-sm"
                  :disabled="status === 'submitting'"
                />
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-2">
                <label for="email" class="text-xs font-bold text-brand-text uppercase tracking-wide">Correo Electrónico</label>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email" 
                  required
                  placeholder="ejemplo@empresa.cl"
                  class="px-4 py-3 rounded-xl glass-input text-sm"
                  :disabled="status === 'submitting'"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Teléfono -->
              <div class="flex flex-col gap-2">
                <label for="phone" class="text-xs font-bold text-brand-text uppercase tracking-wide">WhatsApp / Teléfono</label>
                <input 
                  id="phone"
                  v-model="form.phone"
                  type="tel" 
                  required
                  placeholder="+56 9 1234 5678"
                  class="px-4 py-3 rounded-xl glass-input text-sm"
                  :disabled="status === 'submitting'"
                />
              </div>

              <!-- Empresa -->
              <div class="flex flex-col gap-2">
                <label for="company" class="text-xs font-bold text-brand-text uppercase tracking-wide">Empresa (Opcional)</label>
                <input 
                  id="company"
                  v-model="form.company"
                  type="text" 
                  placeholder="Nombre de tu negocio"
                  class="px-4 py-3 rounded-xl glass-input text-sm"
                  :disabled="status === 'submitting'"
                />
              </div>
            </div>

            <!-- Mensaje -->
            <div class="flex flex-col gap-2">
              <label for="message" class="text-xs font-bold text-brand-text uppercase tracking-wide">¿Qué proceso te gustaría automatizar?</label>
              <textarea 
                id="message"
                v-model="form.message"
                required
                rows="4"
                placeholder="Ej: Tengo problemas respondiendo WhatsApps / Necesito procesar PDFs de facturas..."
                class="px-4 py-3 rounded-xl glass-input text-sm resize-none"
                :disabled="status === 'submitting'"
              ></textarea>
            </div>

            <!-- Error message alert -->
            <div v-if="status === 'error'" class="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-xs text-red-400">
              {{ errorMessage }}
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              :disabled="status === 'submitting'"
              class="w-full py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-neon-primary hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg v-if="status === 'submitting'" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ status === 'submitting' ? 'Enviando a n8n...' : 'Enviar Solicitud' }}
            </button>
          </form>

          <!-- Success State -->
          <div v-else-if="status === 'success'" class="h-full flex flex-col items-center justify-center text-center py-12 space-y-6">
            <div class="w-16 h-16 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center animate-bounce">
              <svg class="w-8 h-8 text-brand-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">¡Solicitud Enviada con Éxito!</h3>
              <p class="text-sm text-brand-muted max-w-sm mx-auto">
                Tu solicitud ha ingresado a nuestra cola de automatización en n8n. Un agente (o nosotros en persona) te contactará a la brevedad.
              </p>
            </div>
            <button 
              @click="status = 'idle'" 
              class="px-6 py-2.5 text-xs font-semibold text-white rounded-lg glass-panel hover:border-brand-primary/50 transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
