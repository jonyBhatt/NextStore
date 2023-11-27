import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => {
    return "Greeting";
  }),
});

export type AppRouter = typeof appRouter