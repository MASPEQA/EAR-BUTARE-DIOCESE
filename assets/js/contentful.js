const spaceId = 'lxfghpzvr6fo';
const accessToken = 'Z4aZVSagpPl8wP7RdNXGKg5KDPoZmxht1zOgtLKTYUo';

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
            if (page) {
                items = items.filter(item => item.fields.page === page);
            }
            console.log(items)
            return items;
        })
        .catch(console.error);
}

export function fetchContentById(entryId) {
    return client.getEntry(entryId)
        .then(entry => entry)
        .catch(console.error);
}
