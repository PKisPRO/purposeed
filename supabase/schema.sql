-- Run this once in the Supabase project's SQL Editor (Dashboard → SQL Editor → New query).
-- Backs both ContactForm and ConsultationForm submissions.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('contact_form', 'consultation_form')),
  name text not null,
  email text not null,
  phone text not null,
  grade text,
  school text,
  message text,
  country text,
  city text,
  heard_about text
);

alter table public.leads enable row level security;

-- The anon key is public (used from the browser), so only allow inserts —
-- never grant anon a SELECT/UPDATE/DELETE policy, or submissions become publicly readable.
create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon
  with check (true);
