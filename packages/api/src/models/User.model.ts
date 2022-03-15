import { DateTime, Default, Id, Model, OneToMany, Property, Unique, UpdatedAt } from "decotix";
import { SignupMethodEnum, SignupMethodType} from "~/enums/SignupMethod.enum";
import { SocialProviderEnum } from "~/enums/SocialProvider.enum";

@Model()
export class User {
    // id
    @Property(() => String)
    @Id("uuid")
    id: string;
    

    // created at
    @Default("now")
    @Property(() => DateTime)
    createdAt: Date;

    // updatedAt
    @UpdatedAt()
    @Property(() => DateTime)
    updatedAt: Date;

    // Username, it's unique.
    @Unique()
    @Property(() => String)
    username: string;

    // Signup method (Discord, twitter etc..)
    @Property(() => SignupMethodEnum)
    signupMethod: SignupMethodType;

}