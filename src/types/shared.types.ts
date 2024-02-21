export interface BookInterface {
    _id: string, 
    googleBookId?: string,
    name: string, 
    authors?: Array<string>,
    year?: string, 
    cover?: string, 
    isRead?: boolean, 
    isPossessed?: boolean, 
    inWhishlist?: boolean,
    ratings?: number, 

}

// https://developers.google.com/books/docs/v1/reference/volumes?hl=fr

