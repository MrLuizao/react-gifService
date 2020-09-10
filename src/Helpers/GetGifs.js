

export const GetGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=JHWOCixAHGbpp246Me9fhW6cO5OKaB7A`;
    
    const resp = await fetch (url);

    const { data } = await resp.json();

    const response = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log('response: ', response);

    return response;
}