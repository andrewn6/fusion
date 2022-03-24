import jwt from "jsonwebtoken";
import { executeOrFail } from "../utils/errors";

export function createToken(
    userId: string,
    tokenType: "access" | "refresh"
): string {
    let token: string = "";

    const atSecret = process.env.ACCESS_TOKEN_SECRET;
    const rtSecret = process.env.REFRESH_TOKEN_SECRET;
    const tokenSecret = tokenType === "access" ? atSecret : rtSecret;

    const expiry = tokenType === "access" ? "5m" : "7d";

    executeOrFail(function () {
        token = jwt.sign({ userId: String(userId) }, String(tokenSecret)!, {
            expiresIn: expiry,
        });
    });

    return token;
}