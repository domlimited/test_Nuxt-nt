export async function uesGetProduct() {
    const config = useRuntimeConfig();
    const { data, pending, error } = await useLazyFetch('/course',{
        baseURL: config.public.backendUrl,
        initialCache: false
    });
    return { data, pending, error };
}

export async function uesGetProduct_ByID(detail) {
    const config = useRuntimeConfig();
    const { data, pending, error } = await useLazyFetch('/course/' + detail,{
        baseURL: config.public.backendUrl,
        initialCache: false
    });
    return { data, pending, error };
}
