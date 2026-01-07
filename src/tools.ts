import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import z from "zod";

interface Tool {
  name: string;
  title: string;
  description: string;
  inputSchema?: z.ZodType<any>;
  callback: any;
}

export const tools: Tool[] = [
  {
    name: "greetings",
    title: "Greeting tool",
    description: "A simple greeting tool",
    inputSchema: z.object({ name: z.string().describe("Name to greet") }),
    callback: async (input: { name: string }): Promise<CallToolResult> => {
      console.log("[restaurant-dev MCP]", "Greeting tool called", input);
      
      const { name } = input;

      return {
        content: [
          {
            type: "text",
            text: `Welcome to the dev restaurant, ${name}!`,
          },
        ],
      };
    },
  },
];
