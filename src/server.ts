import { Service } from "node-windows";
import "dotenv/config";

const service = new Service({
    name: process.env.SERVICE_NAME,
    description: "",
    script: String(process.env.SERVICE_LOCAL),
    wait: 3000,
});

service.on("install", () => {
    service.start();
});

service.install();
