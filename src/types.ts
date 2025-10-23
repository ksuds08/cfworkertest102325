// Type definitions for the Cloudflare Worker

// TODO: Define the request type for handling incoming requests
export interface WorkerRequest {
    method: string;
    url: string;
    headers: { [key: string]: string };
}

// TODO: Define the response type for outgoing responses
export interface WorkerResponse {
    status: number;
    body: string;
    headers: { [key: string]: string };
}

// TODO: Define the main handler function signature
export type HandlerFunction = (req: WorkerRequest) => Promise<WorkerResponse>;
