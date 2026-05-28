<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTo = (id) => {
  isMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12',
      isScrolled 
        ? 'bg-brand-dark/70 backdrop-blur-md border-b border-brand-border py-3' 
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="#" @click.prevent="scrollTo('hero')" class="flex items-center gap-2 group">
        <span class="text-xl font-extrabold tracking-tight text-white">
          we are <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">samod</span>
        </span>
        <span class="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <a @click.prevent="scrollTo('services')" href="#servicios" class="text-sm font-medium text-brand-muted hover:text-white transition-colors cursor-pointer">Servicios</a>
        <a @click.prevent="scrollTo('method')" href="#metodo" class="text-sm font-medium text-brand-muted hover:text-white transition-colors cursor-pointer">Nuestro Método</a>
        <a @click.prevent="scrollTo('about')" href="#nosotros" class="text-sm font-medium text-brand-muted hover:text-white transition-colors cursor-pointer">Quiénes Somos</a>
        <a @click.prevent="scrollTo('contact')" href="#contacto" class="text-sm font-medium text-brand-muted hover:text-white transition-colors cursor-pointer">Contacto</a>
      </div>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a 
          @click.prevent="scrollTo('contact')"
          href="#contacto"
          class="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 rounded-lg glass-panel hover:border-brand-primary/50 hover:shadow-neon-primary"
        >
          Auditoría Gratis
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden text-brand-muted hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isMenuOpen" 
        class="absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-2xl border-b border-brand-border py-6 px-8 flex flex-col gap-5 md:hidden shadow-2xl"
      >
        <a @click.prevent="scrollTo('services')" href="#servicios" class="text-base font-medium text-brand-muted hover:text-white transition-colors py-1">Servicios</a>
        <a @click.prevent="scrollTo('method')" href="#metodo" class="text-base font-medium text-brand-muted hover:text-white transition-colors py-1">Nuestro Método</a>
        <a @click.prevent="scrollTo('about')" href="#nosotros" class="text-base font-medium text-brand-muted hover:text-white transition-colors py-1">Quiénes Somos</a>
        <a @click.prevent="scrollTo('contact')" href="#contacto" class="text-base font-medium text-brand-muted hover:text-white transition-colors py-1">Contacto</a>
        <a 
          @click.prevent="scrollTo('contact')"
          href="#contacto"
          class="w-full text-center py-3 text-sm font-semibold tracking-wider text-white uppercase rounded-lg bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-neon-primary transition-all duration-300"
        >
          Auditoría Gratis
        </a>
      </div>
    </transition>
  </nav>
</template>
