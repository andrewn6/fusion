import { Type } from "@sinclair/typebox";

export function getSucessResponseSchema(data: any) {
    return {
        ok: Type.Boolean(),
        message: Type.Optional(Type.String()),
        data,
    }
}