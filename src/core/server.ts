import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { resources } from './resources';
import { tools } from './tools';

export const getServer = () => {

    const server = new McpServer({
        name: 'azion-mcp-server',
        version: '1.0.0',
    }, { capabilities: { logging: {} } });


    tools.forEach(tool => {
        const { name, description, inputSchema, execute } = tool;
        server.registerTool(name, { description, inputSchema }, execute);
    });


    resources.forEach(resource => {
        server.registerResource(
            resource.resource,
            resource.resource,
            { mimeType: "application/json" },
            async (uri) => ({
                contents: [{
                    uri: uri.href,
                    mimeType: "application/json",
                    text: JSON.stringify(resource)
                }]
            })
        );
    });
    return server;
}