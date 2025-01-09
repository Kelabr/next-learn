import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db"; // Certifique-se de que pool está configurado corretamente.

export async function GET() {
  try {
    // Comando SQL para criar tabelas
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
      );
    `);

    // Inserção de dados iniciais
    await pool.query(`
      INSERT INTO users (name, email)
      VALUES 
        ('Alice', 'alice@example.com'),
        ('Bob', 'bob@example.com'),
        ('Carol', 'carol@example.com')
      ON CONFLICT (email) DO NOTHING;
    `);

    return NextResponse.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("Error seeding the database:", error);
    return NextResponse.json({ message: "Failed to seed database", error }, { status: 500 });
  }
}
