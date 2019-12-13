import { Article } from "./Article";

export interface StoreStructure {
    articles: Array<Article>;
    read: Article[];
    favorite: Article[];
    withComplains: Article[];
} 