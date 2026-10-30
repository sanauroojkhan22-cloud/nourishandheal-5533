import { z } from "zod";
import { ORPCError } from "@orpc/server";
import { eq, desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import { orders, subscribers, messages } from "../database/schema";
import { digitalProducts } from "../data/digital";
import { auth } from "../auth";
const now = () => new Date().toISOString();
export const wellness = {
  subscribe: base
    .input(
      z.object({
        email: z.email(),
        source: z.string().max(100),
        consent: z.literal(true),
      }),
    )
    .handler(async ({ input }) => {
      await db
        .insert(subscribers)
        .values({
          email: input.email.toLowerCase(),
          source: input.source,
          createdAt: now(),
        })
        .onConflictDoNothing();
      return { ok: true };
    }),
  contact: base
    .input(
      z.object({
        name: z.string().min(2).max(100),
        email: z.email(),
        message: z.string().min(10).max(5000),
      }),
    )
    .handler(async ({ input }) => {
      await db.insert(messages).values({ ...input, createdAt: now() });
      return { ok: true };
    }),
  createOrder: base
    .input(
      z.object({
        name: z.string().min(2).max(100),
        email: z.email(),
        items: z
          .array(
            z.object({
              slug: z.string(),
              quantity: z.number().int().min(1).max(10),
            }),
          )
          .min(1)
          .max(20),
      }),
    )
    .handler(async ({ input, context }) => {
      const session = await auth.api.getSession({ headers: context.headers });
      const items = input.items.map((i) => {
        const p = digitalProducts.find((p) => p.slug === i.slug);
        if (!p)
          throw new ORPCError("BAD_REQUEST", {
            message: "Only listed digital products can enter demo checkout.",
          });
        return {
          slug: p.slug,
          title: p.title,
          quantity: i.quantity,
          price: p.price,
        };
      });
      const id = "NH-" + crypto.randomUUID().slice(0, 8).toUpperCase();
      const order = {
        id,
        userId: session?.user.id ?? null,
        name: input.name,
        email: input.email.toLowerCase(),
        items: JSON.stringify(items),
        total: items.reduce((s, i) => s + i.price * i.quantity, 0),
        status: "demo_payment_not_collected",
        createdAt: now(),
      };
      await db.insert(orders).values(order);
      return { id, total: order.total, status: order.status };
    }),
  history: base.handler(async ({ context }) => {
    const session = await auth.api.getSession({ headers: context.headers });
    if (!session) throw new ORPCError("UNAUTHORIZED");
    return db
      .select()
      .from(orders)
      .where(eq(orders.userId, session.user.id))
      .orderBy(desc(orders.createdAt));
  }),
};
