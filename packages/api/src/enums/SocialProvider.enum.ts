import { createEnum, ValuesOf } from "decotix";

// create enum for different signup methods
export const SocialProviderEnum = createEnum("SignupMethod", [
    "TWITTER",
    "DISCORD",
]);


export type SocialProviderType = ValuesOf<typeof SocialProviderEnum>;