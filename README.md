# Portfolio Starter

Clean Next.js portfolio starter for Sai Charan with reusable sections for hero, projects, skills, contact, and footer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize

- Update personal text in `src/components/Hero.jsx`
- Replace project links and screenshots in `src/data/projects.js`
- Edit contact links in `src/components/Contact.jsx`
- Adjust colors and spacing in `src/styles/globals.css`

## Contact form setup

The contact section now includes a working message form that sends submissions through Resend.

1. Create a `.env.local` file in the project root.
2. Add these variables:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=saicharanreddy131@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

3. Install dependencies and start the app:

```bash
npm install
npm run dev
```

For production, replace `onboarding@resend.dev` with an email address from a verified domain in your Resend account.

## Project structure

```text
public/
  projects/
src/
  app/
  components/
  data/
  styles/
```
