import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { resources } from "./resources";

export const getServer = () => {
  const server = new McpServer(
    {
      name: "restaurante-dev",
      title: "Restaurante Dev",
      description: "Restaurante Dev deployed at Azion",
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
  return server;
};
