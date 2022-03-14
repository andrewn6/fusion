//import { join } from "path";
import Fastify from "fastify";
//import * as fastifyBlipp from "fastify-blipp";
import { Server, IncomingMessage, ServerResponse } from "http";
import * as dotenv from "dotenv";

const fastify = Fastify();
const port = Number(process.env.PORT) || 3000;

function runServer(): void {
  fastify.listen(port, "0.0.0.0", (err, address) => {
    if (!err) {
      console.log("Server running at ${address}");
      return;
    }
  });
}

async function main(): Promise<void> {
  dotenv.config();
}

main().catch(console.error);
