<script lang="ts">
	import { LinkedinIcon, TwitterIcon } from 'lucide-svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-muted py-8">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
			<div class="text-muted-foreground text-sm">
				© {currentYear} WARD.CODES. All rights reserved.
			</div>
			<div class="flex items-center gap-4">
				<a
					href="https://www.linkedin.com/in/neil-ward-94741610/"
					target="_blank"
					class="text-muted-foreground hover:text-foreground"
				>
					<LinkedinIcon class="h-5 w-5" />
				</a>
				<a
					href="https://www.reddit.com/r/stopusingx/"
					target="_blank"
					class="text-muted-foreground hover:text-foreground"
				>
					<TwitterIcon class="h-5 w-5" />
				</a>
			</div>
		</div>
	</div>
</footer>
