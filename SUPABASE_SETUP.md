# Supabase setup

Both `ContactForm` and `ConsultationForm` write to a single `leads` table via
`lib/supabase.ts`. Until it's configured, submitting either form shows the error state
("Something went wrong... reach us on WhatsApp") instead of crashing.

## 1. Create a project

Go to [supabase.com/dashboard](https://supabase.com/dashboard) → New project. Free tier
is enough. Note the project's **Project URL** and **anon public** API key
(Project Settings → API) once it finishes provisioning (~2 minutes).

## 2. Create the table

Dashboard → SQL Editor → New query → paste the contents of `supabase/schema.sql` → Run.
This creates the `leads` table with row-level security enabled and a policy that allows
anonymous **inserts only** — nobody can read other people's submissions back through the
public API key.

## 3. Add the environment variables

Local development — copy `.env.local.example` to `.env.local` and fill in both values:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

`.env.local` is already gitignored — these never get committed.

**Vercel:** Project → Settings → Environment Variables → add both keys (Production +
Preview + Development), then redeploy.

## 4. Verify

Submit either form (Contact or Book a Consultation) locally or on the deployed site,
then check Dashboard → Table Editor → `leads` for the new row.
