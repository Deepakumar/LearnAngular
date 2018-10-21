export interface IEvent {
    id: Number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl: string;
    location?: {
        city: string;
        country: string;
    },
    onlineUrl?: string;
    sessions: ISession[]
}

export interface ISession {
    id: number;
    name: string;
    presenter: string;
    duration: string;
    level: string;
    abstract: string;
    voters: string[];
}