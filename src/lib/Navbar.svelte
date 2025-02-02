<script lang="ts">
	import { MenuIcon, XIcon } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let isOpen: boolean = $state(false);
</script>

<nav class="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="ward.codes" class="flex items-center gap-2">
				<img src="/Ward Codes logo (alpha).png" alt="WARD.CODES" class="h-40 dark:invert" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 md:flex">
				<a href="#services" class="text-foreground/80 hover:text-foreground">Services</a>
				<a href="#about" class="text-foreground/80 hover:text-foreground">About</a>
				<a href="#contact" class="text-foreground/80 hover:text-foreground">Contact</a>
				<a
					href="#contact"
					class="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
					>Get Started</a
				>
			</div>

			<!-- Mobile Menu Button -->
			<button class="md:hidden" onclick={() => (isOpen = !isOpen)}>
				{#if isOpen}
					<XIcon class="h-6 w-6" />
				{:else}
					<MenuIcon class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isOpen}
		<div class="md:hidden" transition:fade>
			<div class="space-y-1 border-b bg-background px-2 pb-3 pt-2">
				<a href="#services" class="block px-3 py-2 text-foreground/80 hover:text-foreground"
					>Services</a
				>
				<a href="#about" class="block px-3 py-2 text-foreground/80 hover:text-foreground">About</a>
				<a href="#contact" class="block px-3 py-2 text-foreground/80 hover:text-foreground"
					>Contact</a
				>
				<a
					href="#contact"
					class="block rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90"
					>Get Started</a
				>
			</div>
		</div>
	{/if}
</nav>
