import { Type } from "@sinclair/typebox";

export const User = Type.Object({
    id: Type.String(),
    createdAt: Type.Any(),
    updatedAt: Type.Any(),
    username: Type.String(),
    email: Type.String(),
    password: Type.String(),
    signupMethod: Type.String(),
    isVerified: Type.Optional(Type.Boolean()),
})