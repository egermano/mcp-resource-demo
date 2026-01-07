//@ts-ignore
import { getServer } from "@/server";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import "dotenv/config";
import { Hono } from "hono";
import { fire } from "hono/service-worker";

const app = new Hono();

app.all("/mcp", async (c) => {
  const server = getServer();

  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  console.log("[restaurant-dev MCP]", "Server started");

  await server.connect(transport);
  return transport.handleRequest(c.req.raw);
});

fire(app);
