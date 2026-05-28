<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ChatSimulator from './components/ChatSimulator.vue'
import Services from './components/Services.vue'
import Method from './components/Method.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="min-h-screen bg-brand-dark flex flex-col selection:bg-brand-primary/30 selection:text-white">
    <!-- Navbar Navigation -->
    <Navbar />

    <!-- Main Content Sections -->
    <main class="flex-grow">
      <Hero />
      <ChatSimulator />
      <Services />
      <Method />
      <About />
      <Contact />
    </main>

    <!-- Footer -->
    <footer class="border-t border-brand-border/60 py-12 px-6 md:px-12 bg-brand-darker/60 relative overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <span class="text-lg font-extrabold text-white">
            we are <span class="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">samod</span>
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
        </div>

        <!-- Copyright -->
        <div class="text-xs text-brand-muted text-center md:text-right">
          <p>© 2026 We Are Samod. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
