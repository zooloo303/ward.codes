<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { toast } from 'svelte-sonner';

	let formData = $state({
		name: '',
		email: '',
		message: ''
	});

	let isSubmitting = $state(false);

	const onsubmit = async (e: Event) => {
		e.preventDefault();
		isSubmitting = true;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (response.ok) {
				toast.success('Message sent successfully!');
				// Reset form
				formData = {
					name: '',
					email: '',
					message: ''
				};
			} else {
				throw new Error(result.error || 'Failed to send message');
			}
		} catch (error) {
			toast.error('Failed to send message. Please try again.');
			console.error('Submission error:', error);
		} finally {
			isSubmitting = false;
		}
	};
</script>

<section id="contact" class="py-16">
	<div class="container mx-auto px-4">
		<Card class="mx-auto max-w-lg">
			<CardHeader>
				<CardTitle>Get in Touch</CardTitle>
				<CardDescription>Fill out the form below and we'll get back to you</CardDescription>
			</CardHeader>
			<CardContent>
				<form {onsubmit} class="space-y-4">
					<div>
						<Input
							type="text"
							placeholder="Your Name"
							bind:value={formData.name}
							required
							disabled={isSubmitting}
						/>
					</div>
					<div>
						<Input
							type="email"
							placeholder="Email Address"
							bind:value={formData.email}
							required
							disabled={isSubmitting}
						/>
					</div>
					<div>
						<Textarea
							placeholder="Your Message"
							bind:value={formData.message}
							required
							disabled={isSubmitting}
						/>
					</div>
					<Button type="submit" class="w-full" disabled={isSubmitting}>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</Button>
				</form>
			</CardContent>
		</Card>
	</div>
</section>
