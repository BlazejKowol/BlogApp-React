const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article Title',
            author: 'John Doe',
            date: new Date('01-03-2023'),
            category: 'Sport',
            description: 'Short description of the article...',
            content: 'main content of the article...',
        },
        {
            id: '2',
            title: 'Article Title 2',
            author: 'Dohn Joe',
            date: new Date('01-03-2023'),
            category: 'News',
            description: 'Short description of the article...',
            content: 'main content of the article...',
        },
        {
            id: '3',
            title: 'Article Title 3',
            author: 'John Doe',
            date: new Date('02-23-2023'),
            category: 'Movies',
            description: 'Short description of the article...',
            content: 'main content of the article...',
        }
    ],

    categories: [
        {
            id: '1',
            title: 'Sport',
        },
        {
            id: '2',
            title: 'News',
        },
        {
            id: '3',
            title: 'Movies',
        }
    ],
};

export default initialState;