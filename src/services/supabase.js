import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vgkbwussiinuijzwnuqs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZna2J3dXNzaWludWlqendudXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NjA4NTksImV4cCI6MjA3NjMzNjg1OX0.qq7KmwdHiKdBf6bFOsAtSSyvzCnx6o60bdIwu4D8mME";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
