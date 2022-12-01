import baseURl from "../Api/baseURl";
const USeInsertDataWithImage = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseURl.post(url, params, config);
    return res;
}
const USeInsertData = async (url, params) => {
    const res = await baseURl.post(url, params);
    return res;
}
export { USeInsertData, USeInsertDataWithImage };