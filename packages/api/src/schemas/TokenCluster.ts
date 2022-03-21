import { Static, Type } from "@sinclair/typebox";

export const TokenCluster = Type.Object({
    id: Type.String(),
    createdAt: Type.Any(),
    updatedAt: Type.Any(),
    accessToken: Type.String(),
    refreshToken: Type.Optional(Type.String()),
})

export type TokenClusterType = Static<typeof TokenCluster>;