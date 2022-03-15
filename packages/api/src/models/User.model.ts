import { DateTime, Default, Id, Model, OneToMany, Property, Unique, UpdatedAt } from "decotix";
import { SignupMethodEnum, SignupMethodType} from "~/enums/SignupMethod.enum";
import { SocialProviderEnum } from "~/enums/SocialProvider.enum";

@Model()
export class User {
    @Property(() => String)
    @Id("uuid")
    id: string;

    @Default("now")
    @Property(() => DateTime)
    createdAt: Date;
}