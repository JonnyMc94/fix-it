import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const requiredVars = [
  'DB_USER',
  'DB_PASS',
  'DB_NAME',
  'DB_PORT',
  'DB_HOST',
];

export function validateEnv() {
  const missing = requiredVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(
      `❌ Missing required environment variables: ${missing.join(', ')}`
    );
    console.error('💡 Check your .env.local or docker-compose environment setup.');
    process.exit(1); // Immediately stop the app
  }

  console.log('✅ All required environment variables are set.');
}
