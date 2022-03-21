import { User } from "./models/User.model";
import { FastifyRequest  } from "fastify";
 

// declare fastify module
declare module "fastify" {
    interface FastifyRequest extends FastifyRequest {
        user: User;
    }
}