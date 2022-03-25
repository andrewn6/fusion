import fp from "fastify-plugin";
import fastifyCompress from "fastify-compress";
import { FastifyCompressOptions } from "fastify-compress";

export default fp<FastifyCompressOptions>(async (fastify, _) => {
    fastify.register(fastifyCompress);
});