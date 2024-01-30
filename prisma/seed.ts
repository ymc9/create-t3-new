import { PrismaClient } from "@prisma/client";
import { inspect } from "util";

const prisma = new PrismaClient();

async function main() {
  const posts = await Promise.all([
    prisma.post.create({
      data: { name: "A published post", published: true },
    }),
    prisma.post.create({ data: { name: "A draft post", published: false } }),
  ]);
  console.log("Posts created:", inspect(posts));
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
