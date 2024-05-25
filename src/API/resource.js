import axios from 'axios';
import { saveResource } from '../Redux/resourcesSlice';

export const API_GET_RESOURCES = async (dispatch) => {
    try {
        const data = await axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json");
        dispatch(saveResource(data.data))
    } catch (error) {
        console.log(error);
        dispatch(saveResource({}))
    }
}


