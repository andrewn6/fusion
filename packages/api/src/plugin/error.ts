import { ApiResponseType } from "../types/global";
import fp from "fastify-plugin";


export default fp(async (fastify, _) => {
    fastify.setErrorHandler((error, _, reply) => {
        const errorParts = error.message.split(" || ");
        const errorStatus = parseInt(errorParts[0]) || 500;

        const errorMessage =
            errorParts.length === 3 ? errorParts[1] : error.message;
        const errorCode = errorParts[2] || "unknown";

        console.log(`${errorCode}: ${errorMessage}`);

        reply.status(errorStatus).send({
            ok: false,
            code: errorCode,
            message: errorMessage,
            data: null,
        } as ApiResponseType<null>);
    });
});