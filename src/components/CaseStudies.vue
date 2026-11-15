<script setup>
const cases = [
  {
    client: 'Sanguchería San Martín',
    location: 'Puente Alto, Santiago',
    category: 'Foodtruck & Gastronomía',
    url: 'https://sangucheriasanmartin.cl/',
    summary: 'Digitalización integral de su primer local físico: desde la presencia web para atraer clientes hasta la operación interna de pedidos y caja.',
    deliverables: [
      { title: 'Landing Page', detail: 'Sitio web rápido y optimizado para captar clientes locales.' },
      { title: 'Menú QR', detail: 'Carta digital interactiva para pedidos ágiles desde el celular.' },
      { title: 'Sistema POS', detail: 'Punto de venta a medida para control de comandas y caja.' }
    ]
  }
]
</script>

<template>
  <section id="cases" class="py-24 relative px-6 md:px-12">
    <div class="glow-orb w-[350px] h-[350px] bg-brand-primary/10 top-10 right-10"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-bold uppercase tracking-widest text-brand-secondary bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/20 mb-4">
          Casos de Éxito
        </span>
        <h2 class="text-4xl md:text-6xl font-medium text-white mb-4 tracking-tight" style="font-family: 'Canela Deck', 'Playfair Display', serif;">
          Proyectos <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent italic" style="font-family: 'Canela Deck', 'Playfair Display', serif;">Reales</span>
        </h2>
        <p class="text-brand-muted max-w-xl mx-auto">
          Soluciones funcionando hoy en negocios reales de Chile.
        </p>
      </div>

      <div v-for="item in cases" :key="item.client" class="glass-panel rounded-3xl border-brand-border/60 p-8 md:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                {{ item.category }}
              </span>
              <span class="text-xs text-brand-muted">{{ item.location }}</span>
            </div>

            <h3 class="text-3xl md:text-4xl font-bold text-white">{{ item.client }}</h3>
            <p class="text-brand-muted leading-relaxed">{{ item.summary }}</p>

            <div class="pt-2">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-brand-primary hover:shadow-neon-primary transition-all duration-300"
              >
                <span>Visitar sitio en vivo</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10v11h11" />
                </svg>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 grid grid-cols-1 gap-4">
            <div
              v-for="del in item.deliverables"
              :key="del.title"
              class="p-5 rounded-2xl bg-brand-darker/70 border border-brand-border/50 flex items-start gap-4"
            >
              <div class="w-8 h-8 rounded-lg bg-brand-secondary/15 border border-brand-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">{{ del.title }}</h4>
                <p class="text-xs text-brand-muted leading-relaxed">{{ del.detail }}</p>
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
