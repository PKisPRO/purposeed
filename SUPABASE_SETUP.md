# Supabase setup

Both `ContactForm` and `ConsultationForm` write to a single `leads` table via
`lib/supabase.ts`. Until it's fully configured, submitting either form shows the error
state ("Something went wrong... reach us on WhatsApp") instead of crashing.

There are two independent pieces — both are required, and neither substitutes for the
other:

1. **The `leads` table must exist** in your Supabase project.
2. **The app must have the project's URL + anon key** as environment variables — this is
   what actually lets the deployed site talk to Supabase. Connecting Supabase's GitHub
   integration (Project Settings → Integrations → GitHub) does **not** do this — that
   integration is for auto-applying schema migrations on push, and optionally spinning up
   per-PR preview databases. It has no effect on Vercel's environment variables.

## 1. Create the table

The schema lives at `supabase/migrations/20260708000000_create_leads_table.sql`.

- **If you've connected the GitHub integration** (Project Settings → Integrations →
  GitHub, pointed at the `main` branch with the Supabase directory set to `supabase`):
  pushing this repo should auto-apply the migration. Check **Table Editor → leads** in
  the dashboard a minute or two after the push — if the table's there, you're done with
  this step.
- **Either way, as a reliable fallback:** Dashboard → SQL Editor → New query → paste the
  contents of that migration file → Run. It's written to be safe to run more than once.

This creates `leads` with row-level security enabled and a policy that allows anonymous
**inserts only** — nobody can read other people's submissions back through the public
API key.

## 2. Add the environment variables

Get these from Project Settings → API: the **Project URL** and the **anon public** key.

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
Preview + Development), then redeploy — env var changes don't apply to already-running
deployments.

## 3. Verify

Submit either form (Contact or Book a Consultation) locally or on the deployed site,
then check Dashboard → Table Editor → `leads` for the new row.
