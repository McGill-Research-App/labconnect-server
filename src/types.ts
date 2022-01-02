import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { User } from "./entities/user.entity";

export type ContextType = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
    req: Request & { session: Session & Partial<SessionData> & { userId?: number } },
    res: Response,
    user: User
} 