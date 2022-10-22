export async function uesGetApiVersion() {
    const { data } = await useFetch('https://api.codingthailand.com/api/version');
    return { data };
}