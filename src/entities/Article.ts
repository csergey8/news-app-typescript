export interface Article {
    id: string;
    title: string;
    shortDescription: string;
    smallImage: string;
    rating: number;
    ratingCounter: number;
}

export interface FullArticle {
    id: string;
    content: string;
    bigImage: string;
}