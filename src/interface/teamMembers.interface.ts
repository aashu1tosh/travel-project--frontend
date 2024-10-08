import { IBase } from './base.interface';
import { IMedia } from './media.interface';

export interface ITeamMember extends IBase {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string | null;
    position: string;
    order: number;
    media?: IMedia;
}

export interface ITeamMemberReq extends IBase {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    position: string;
    order: string;
    media?: string;
}

export interface ITeamMemberPayload extends IBase {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    position: string;
    order: number;
    media: string;
}
