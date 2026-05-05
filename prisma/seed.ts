import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcryptjs.hash('admin123', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@setupprohq.com' },
    update: {},
    create: {
      email: 'admin@setupprohq.com',
      password: hashedPassword,
      name: 'Admin Setup Pro',
      role: 'admin',
    },
  });

  console.log('✅ Admin user created:', adminUser.email);

  // Create categories
  const categories = [
    { name: 'Gaming', slug: 'gaming', icon: '🎮', order: 1 },
    { name: 'Productividad', slug: 'productividad', icon: '💻', order: 2 },
    { name: 'Content Creation', slug: 'content-creation', icon: '🎥', order: 3 },
    { name: 'Accesorios', slug: 'accesorios', icon: '🔌', order: 4 },
    { name: 'Smart Home', slug: 'smart-home', icon: '📱', order: 5 },
    { name: 'Wearables', slug: 'wearables', icon: '⌚', order: 6 },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  console.log('✅ Categories created');

  // Create sample review
  const gamingCategory = await prisma.category.findUnique({
    where: { slug: 'gaming' },
  });

  if (gamingCategory) {
    await prisma.review.upsert({
      where: { slug: 'monitor-lg-27-4k' },
      update: {},
      create: {
        title: 'Monitor LG 27" 4K UltraFine - Review Completa',
        slug: 'monitor-lg-27-4k',
        excerpt:
          'Un monitor gaming profesional que combina resolución 4K con 60Hz. Perfecto para creadores de contenido y gamers que buscan calidad visual sin sacrificar productividad.',
        content:
          '<h2>Introducción</h2><p>El LG 27" 4K UltraFine es uno de los monitores más buscados en 2026. Veamos qué lo hace especial.</p>',
        categoryId: gamingCategory.id,
        rating: 5,
        featuredImageUrl: 'https://via.placeholder.com/1200x800?text=Monitor+LG+27',
        amazonAsin: 'B0XXXX',
        amazonLink: 'https://amazon.com/dp/B0XXXX',
        specs: {
          resolution: '3840x2160',
          'refresh_rate': '60Hz',
          'response_time': '5ms',
          'panel_type': 'IPS',
        },
        pros: ['Excelente calidad de color', 'Sharp 4K', 'Buen precio'],
        cons: ['Pesado', 'Cables caros', 'No tiene soporte ajustable'],
        metaTitle: 'Monitor LG 27" 4K Review - Mejor para Gaming',
        metaDescription: 'Review detallado del monitor LG 27" 4K. Análisis completo, pros, contras y link de compra.',
        keywords: 'monitor 4k, gaming, lg, review',
        published: true,
        publishedAt: new Date(),
        authorId: adminUser.id,
      },
    });

    console.log('✅ Sample review created');
  }

  console.log('✨ Database seed completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
