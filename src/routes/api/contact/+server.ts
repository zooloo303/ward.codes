import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const POST = async ({ request }) => {
	try {
		const { name, email, message } = await request.json();

		// Validate inputs
		if (!name || !email || !message) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}

		await resend.emails.send({
			from: 'Your Website <neil@ward.codes>',
			to: 'neil@ward.codes',
			subject: `New Contact Form Submission from ${name}`,
			text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
			reply_to: email
		});

		return json({ success: true });
	} catch (error) {
		console.error('Email error:', error);
		return json({ error: 'Failed to send email' }, { status: 500 });
	}
};
