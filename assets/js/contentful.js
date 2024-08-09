const spaceId = 'bn26cr8gkagc';
const accessToken = 'lFw0Iyg3HZCx2K4ApwL1pnKV1IJUGDppMWyQ6lpY5aE';

export const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
});

// export function fetchContentByType(contentType) {
//     return client.getEntries({ content_type: contentType })
//         .then(response => response.items)
//         .catch(console.error);
// }
export function fetchContentByType(contentType, page) {
    return client.getEntries({ content_type: contentType })
        .then(response => {
            let items = response.items;
            // If a page parameter is provided, filter the items based on the 'page' field
            if (page) {
                items = items.filter(item => item.fields.page === page);
            }
            return items;
        })
        .catch(console.error);
}

export function fetchContentById(entryId) {
    return client.getEntry(entryId)
        .then(entry => entry)
        .catch(console.error);
}
