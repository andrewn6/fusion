import { Static } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { RouteShorthandOptions } from "fastify";
import { User } from "../../schemas/User";
import { ApiResponseType  } from "../../types/global";

namespace TB {
    export const ResponseData = User;
    export type responseData = Static<typeof ResponseData>;

    export const Response = get
}