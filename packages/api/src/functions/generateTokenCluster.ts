import { TokenCluster } from "@prisma/client";
import { database } from "../providers/database";

import { TokenCluster } from "../schemas/TokenCluster";
import { executeOrFail  } from "../utils/errors";
import { createToken } from "./createToken";

export async function generateTokenCluster(
    userId: string
): Promise<Omit<TokenCluster, "user">> {
    let tokenCluster: Omit<TokenCluster, "user"> = {} as any;

    const accessToken = createToken(userId, "access");
    const refreshToken = createToken(userId, "refresh")
}