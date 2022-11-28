import baseURl from "../Api/baseURl";
const UseGetData = async (url, params) => {
    const res = await baseURl.get(url);
    return res.data;
}
export default UseGetData;