import { ApiCode } from "./codes";

export interface ApiResponseType<T> {
    ok: boolean;
    message?: string;
    code?: ApiCode;
    data?: T;
}