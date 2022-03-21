import { DateTime, Default, Id, ManyToOne, Model, OneToMany, Property, PropertyDecoratorWrapper, Unique, UpdatedAt } from "decotix";

import { User } from "./User.model";
import { logger } from "../providers/logger"
import { PropertyData } from "decotix/dist/types/ModelData";

@Model()
export class TokenCluster {
   @Property(() => String) 
   @Id("uuid")
   
   @Default("now")
   @Property(() => DateTime)
   createdAt: Date;

   @UpdatedAt()
   @Property(() => DateTime)
   updatedAt: Date;

   @Unique()
   @Property(() => String)
   accessToken: string;

   @Unique()
   @Property(() => String)
   refreshToken: string;

   @ManyToOne(() => User, (a) => a.tokenClusters)
   user: User;
}