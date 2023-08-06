export interface Post {
    title: string;
    oveerview: string;
    content: any;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
}