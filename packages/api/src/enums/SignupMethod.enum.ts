import { createEnum, ValuesOf } from "decotix";
import { ContentTypeParserDoneFunction } from "fastify/types/content-type-parser";

// create enum for different signup methods
export const SignupMethodEnum = createEnum("SignupMethod", [
    "EMAIL",
    "TWITTER",
]);


export type SignupMethodType = ValuesOf<typeof SignupMethodEnum>;