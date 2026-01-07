# Azion MCP Resources Demo

This repository demonstrates an Azion implementation of **MCP Resources** (Model Context Protocol) running on the **Azion Web Platform**.

## Purpose

Show how to implement and expose **Resources** in an MCP server and deploy it globally using Azion.

## Why Azion

Azion is the best platform to deploy this kind of project because it combines:

- **Edge runtime** to run MCP servers close to users.
- **Global network** for low latency and scalability.
- **Simple developer workflow** using Azion CLI (`azion dev`, `azion build`, `azion deploy`).

## Clone, customize, and deploy to Azion

### Prerequisites

- Azion CLI installed: [how to download](https://www.azion.com/en/documentation/products/azion-cli/overview/)
- Node.js installed (LTS recommended)

### 1) Clone

```bash
git clone <YOUR_REPO_URL>
cd mcp-resources
```

### 2) Install dependencies

```bash
npm install
# or
yarn install
```

### 3) Customize

- Add or update resources in `src/core/resources.ts`.
- Update the server wiring in `src/core/server.ts` if you introduce new capabilities.

### 4) Run locally

```bash
azion dev
```

### 5) Build and deploy to Azion

```bash
azion build
azion deploy
```

## Integrating with MCP clients

Follow your MCP client documentation to add an external MCP server. You’ll typically provide the server endpoint (or built artifact path, depending on the client) and any required environment variables.

## Get started with Azion ($300 credits)

Create your Azion account and start deploying MCP projects on the edge with **$300 in credits**:

<https://console.azion.com/signup/>
