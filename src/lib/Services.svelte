<script lang="ts">
	import { MonitorIcon, CodeIcon, HeadphonesIcon, CircleDollarSign } from 'lucide-svelte';
	import { Card, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';

	const services = [
		{
			icon: MonitorIcon,
			title: 'SAP Implementation',
			description: 'End-to-end SAP implementation services tailored to your business needs'
		},
		{
			icon: CodeIcon,
			title: 'Custom Development',
			description: 'Custom SAP development and integration solutions'
		},
		{
			icon: HeadphonesIcon,
			title: 'Support & Maintenance',
			description: 'Ongoing support and maintenance for your SAP systems'
		},
		{
			icon: CircleDollarSign,
			title: 'Bookkeeping & Tax Preparation',
			description: 'Balance those books and keep your taxes in check'
		}
	];
</script>

<section id="services" class="bg-muted/50 py-16">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold">Our Services</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl">
				Comprehensive SAP consulting services to help your business achieve digital transformation
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each services as service}
				<Card>
					<CardHeader>
						<svelte:component this={service.icon} class="text-primary mb-4 h-12 w-12" />
						<CardTitle>{service.title}</CardTitle>
						<CardDescription>{service.description}</CardDescription>
					</CardHeader>
				</Card>
			{/each}
		</div>
	</div>
</section>
