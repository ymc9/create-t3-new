import { greetRouter } from "~/server/api/routers/greet";
import { createTRPCRouter } from "~/server/api/trpc";
import { crudRouter } from "./routers/crud";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  greet: greetRouter,
  crud: crudRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
