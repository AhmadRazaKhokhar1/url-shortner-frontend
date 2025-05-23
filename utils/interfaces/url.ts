export interface IURL {
    originalUrl: string;
    shortUrl: string;
}
export interface IURLResponse extends IURL{
    createdAt: Date;
    updatedAt: Date;
    clicks: number;
}