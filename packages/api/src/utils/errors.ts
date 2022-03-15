import { ApiCode } from "~/types/codes";

export async function ApiError (
    status: number = 500,
    message: string = 'Internal server error :(',
    code: ApiCode = "unknown"
) {
    throw new Error(`${status} || ${message} ${code}`);
}

export async function executeOrFail<T>(
    cb: () => T | Promise<T>,
    status = 500,
    message = "Internal server error.",
    code: ApiCode = "unknown"
) {
    try {
        return await cb();
    } catch(err) {
        console.log(err);
        ApiError(status, message, code);
        return;
    }
} 