import axios from "axios";

export const loadData = async(url)=>{
const {data} = await axios.get(url)
return data.data
}