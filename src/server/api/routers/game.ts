import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const gameRouter = createTRPCRouter({
  startGame: publicProcedure
    .input(z.object({ player: z.string(), opponent: z.string() }))
    .mutation(({ ctx, input }) => ctx.prisma.game.create({
      data: {
        player: input.player,
        opponent: input.opponent,
      },
    })),
  addMove: publicProcedure
    .input(z.object({
      gameId: z.string(),
      player: z.string(),
      opponent: z.string(),
      playerValues: z.array(z.number()),
      opponentValues: z.array(z.number()),
    }))
    .mutation(({ ctx, input }) => ctx.prisma.move.create({
      data: {
        gameId: input.gameId,
        player: input.player,
        opponent: input.opponent,
        playerValues: input.playerValues.join(","),
        opponentValues: input.opponentValues.join(","),
      },
    })),
  endGame: publicProcedure
    .input(z.object({ gameId: z.string(), winner: z.string(), score: z.number() }))
    .mutation(({ ctx, input }) => ctx.prisma.game.update({
      where: { id: input.gameId },
      data: {
        winner: input.winner,
        score: input.score,
      },
    })),
  getRanking: publicProcedure
    .query(({ ctx }) => ctx.prisma.game.groupBy({
      by: ["winner"],
      _count: { winner: true },
      _sum: { score: true },
      orderBy: { _sum: { score: "desc" } },
    })),
});
