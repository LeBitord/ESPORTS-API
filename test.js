import 'dotenv/config';
import prisma from './src/config/prisma.js';

console.log('🔍 DATABASE_URL:', process.env.DATABASE_URL);

async function main() {
  try {
    // Créer une équipe
    const team = await prisma.team.create({
      data: {
        name: 'Team Vitality',
        country: 'France'
      }
    });
    
    console.log('✅ Équipe créée:', team);
    
    // Lire toutes les équipes
    const teams = await prisma.team.findMany();
    console.log('✅ Toutes les équipes:', teams);
    
  } catch (error) {
    console.error('❌ Erreur:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
