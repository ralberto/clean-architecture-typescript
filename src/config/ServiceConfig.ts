export interface ServiceConfig {
  // The port of the server
  port: number
  // The base path for the API. It will be used to prefix all the API routes.
  basePath: "/api"
  // The version of the API. It will be used to prefix all the API routes.
  apiVersion: "v0.1"
  // The configuration for the redis server
}
