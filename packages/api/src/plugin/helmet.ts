import fpn from "fastify-plugin";
import helmet from "fastify-helmet";

export default fpn(async (fastify, _) => {
    fastify.register(helmet)
})