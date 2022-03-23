import axios from 'axios';
const apiKey = 'aarzH1Y0XZOL3UqqE7dhhCiJEP3Tz7JU';

export const getGifs = async(category)=>{
    let param = encodeURI(category); let limit = 5;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${param}&limit=${limit}`;
    const resp = await axios.get(url) //resp ok?
    const { data } = resp.data
    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    })
    return gifs;
}