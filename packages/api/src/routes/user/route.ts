import { Static } from "@sinclair/typebox";
import { FastifyPlugin, FastifyPluginAsync } from "fastify";
import { RouteShorthandOptions } from "fastify";
import { User } from "../../schemas/User";
import { ApiResponseType  } from "../../types/global";
import { getSucessResponseSchema } from "../../types/success-response-schema";

namespace TB {
    export const ResponseData = User;
    export type responseData = Static<typeof ResponseData>;

    export const Response = getSucessResponseSchema(ResponseData);
    export type ResponseType = ApiResponseType<responseData>;
    
}

namespace Router {
    const options: RouteShorthandOptions = {
        schema: {
            response: { 200: TB.Response}
        },
    };

    export const route: FastifyPluginAsync = async (
        fastify,
        opts
    ): Promise<void> => {
        // TODO: check if they are authencitaced via hook
        fastify.addHook("preHandler", isAuthenticated);

        fastify.get(
            "/me",
            options,
            async function (req, res): Promise<TB.ResponseType> {
                res.status(200)
                return {
                    ok: true,
                    message: "Successfully retrieved user!",
                    data: req.user,
                };
            }
        );
}

export default Router.route;