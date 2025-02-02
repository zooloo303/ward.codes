<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
</script>

<section class="relative pb-16 pt-32">
	<div
		class="absolute inset-0 bg-cover bg-center opacity-20"
		style="background-image: url('/Ward Codes logo (pattern only).png');"
	></div>
	<div class="container relative mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="mb-6 text-4xl font-bold md:text-6xl">Expert SAP Solutions for Your Business</h1>
			<p class="text-muted-foreground mb-8 text-xl">
				Transform your business processes with professional SAP consulting services. Optimize,
				integrate, and innovate with WARD.CODES.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="#contact"
					class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3"
				>
					Get Started
					<ArrowRightIcon class="h-5 w-5" />
				</a>
				<a
					href="#services"
					class="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3"
					>Learn More</a
				>
			</div>
		</div>
	</div>
</section>
