import { DateTime, Default, Id, Model, OneToMany, Property, PropertyDecoratorWrapper, Unique, UpdatedAt } from "decotix";
import { SignupMethodEnum, SignupMethodType} from "~/enums/SignupMethod.enum";
import { SocialProviderEnum } from "~/enums/SocialProvider.enum";
import { SocialConnection } from "./SocialConnection.model";
import { TokenCluster } from "./TokenCluster.model";
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

    // email
    @Unique()
    @Property(() => String)
    email: string;

    // pasword
    @Property(() => String, { nullable: true })
    password?: string;

    @OneToMany(() => SocialConnection, (a) => a.user)
    socialConnections: SocialConnection[];

    @OneToMany(() => TokenCluster, (a) => a.user)
    tokenClusters: TokenCluster[];
}