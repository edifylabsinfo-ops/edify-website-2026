-- Migration Script for Supabase

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: users (If not exists)
CREATE TABLE IF NOT EXISTS users (
    id uuid primary key default uuid_generate_v4(),
    email text unique not null,
    name text,
    phone text,
    created_at timestamp default now()
);

-- Table: leads
CREATE TABLE IF NOT EXISTS leads (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references users(id),
    source text,
    tag text,
    status text default 'new',
    created_at timestamp default now()
);

-- Table: courses
CREATE TABLE IF NOT EXISTS courses (
  id uuid primary key default uuid_generate_v4(),
  title text,
  price numeric,
  thumbnail text,
  description text,
  created_at timestamp default now()
);

-- Table: enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid, -- For real app: user_id uuid references auth.users(id) / users(id)
  course_id uuid references courses(id),
  status text default 'pending',
  created_at timestamp default now()
);

-- Insert Dummy Data for Demo
INSERT INTO courses (title, description, price)
VALUES 
    ('Khoá học DaVinci Resolve Masterclass', 'Làm chủ DaVinci Resolve từ cơ bản tới nâng cao.', 1500000),
    ('Tư duy Dựng Video Marketing', 'Chiến lược giữ chân người xem bằng kỹ thuật dựng video.', 990000);
