import fpn from "fastify-plugin";
import fastifyCors from "fastify-cors";
import { FastifyCorsOptions } from "fastify-cors";

export default fpn<FastifyCorsOptions>(async (fastify, _) => {
    fastify.register(fastifyCors);
});