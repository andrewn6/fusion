//import { join } from "path";
import Fastify from "fastify";
//import * as fastifyBlipp from "fastify-blipp";
import { Server, IncomingMessage, ServerResponse } from "http";
import * as dotenv from "dotenv";
import { logger } from "./providers/logger";

const fastify = Fastify();
const port = Number(process.env.PORT) || 3000;

function runServer(): void {
  fastify.listen(port, "0.0.0.0", (err, address) => {
    if (!err) {
      logger.info(`Server running at ${address}`);
      return;
    }

    logger.error(err.message);
    return process.exit(1);
  });
}

async function main(): Promise<void> {
  dotenv.config();
}

main().catch(console.error);
