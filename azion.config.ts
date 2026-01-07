/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion as dev dependency:
 *    npm install -D azion
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from 'azion'
 *
 * 3. Replace the configuration with defineConfig:
 *    export default defineConfig({
 *      // Your configuration here
 *    })
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/lib/tree/main/packages/config
 
*/

import { defineConfig } from 'azion'

export default defineConfig({
  build: {
    preset: 'typescript',
    worker: true,
    entry: ['./src/index.ts']
  },
  functions: [
    {
      name: 'mcp-resources-demo',
      path: './functions/src/index.js'
    }
  ],
  applications: [
    {
      name: 'mcp-resources-demo',
      rules: {
        request: [
          {
            name: 'Execute Function',
            description: 'Execute function for all requests',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument: '^/'
                }
              ]
            ],
            behaviors: [
              {
                type: 'run_function',
                attributes: {
                  value: 'mcp-resources-demo'
                }
              }
            ]
          }
        ]
      },
      functionsInstances: [
        {
          name: 'mcp-resources-demo',
          ref: 'mcp-resources-demo'
        }
      ]
    }
  ],
  workloads: [
    {
      name: 'mcp-resources-demo',
      active: true,
      infrastructure: 1,
      protocols: {
        http: {
          versions: ['http1', 'http2'],
          httpPorts: [80],
          httpsPorts: [443],
          quicPorts: null
        }
      },
      deployments: [
        {
          name: 'mcp-resources-demo',
          current: true,
          active: true,
          strategy: {
            type: 'default',
            attributes: {
              application: 'mcp-resources-demo'
            }
          }
        }
      ]
    }
  ]
})
