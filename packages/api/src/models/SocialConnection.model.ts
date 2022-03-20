import { DateTime, Default, Id, ManyToOne, Model, Property, UpdatedAt } from "decotix";

import { User } from "./User.model";
import {
    SocialProviderEnum,
    SocialProviderType,
} from "../enums/SocialProvider.enum";

@Model()
export class SocialConnection {
    @Property(() => String)
    @Id("uuid")
    id: string;

    @Default("now")
    @Property(() => DateTime)
    createdAt: Date;

    @Property(() => SocialProviderEnum)
    provider: SocialProviderType;

    @Property(() => String)
    providerEmail: string;

    @Property(() => String)
    providerUsername: string;

    @Property(() => String)
    providerUserId: string;

    @Property(() => Boolean)
    isRegistrationConnection: boolean;

    @ManyToOne(() => User, (a) => a.socialConnections)
    user: User;
}