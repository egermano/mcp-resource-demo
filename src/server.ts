import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { resources } from "./resources";
import { tools } from "./tools";

export const getServer = () => {
  const server = new McpServer(
    {
      name: "restaurant-dev",
      title: "Restaurant Dev",
      description: "Restaurant Dev deployed at Azion",
      version: "1.0.0",
    },
    { capabilities: { logging: {} } }
  );

  resources.forEach((resource) => {
    server.registerResource(
      resource.name,
      resource.resource,
      {
        mimeType: "application/json",
        title: resource.title,
        description: resource.description,
      },
      async (uri) => {
        const data = await resource.callback();

        console.log("[restaurant-dev MCP]", "Resource called: ", resource.name);

        return {
          contents: [
            {
              uri: uri.href,
              mimeType: "application/json",
              text: JSON.stringify(data),
            },
          ],
        };
      }
    );
  });

  tools.forEach((tool) => {
    server.registerTool(
      tool.name,
      {
        title: tool.title,
        description: tool.description,
        inputSchema: tool.inputSchema,
      },
      tool.callback
    );
  });

  return server;
};
