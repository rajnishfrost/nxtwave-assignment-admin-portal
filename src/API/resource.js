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

export const API_POST_RESOURCES = async (payload) => {
    try {
        const data = await axios.post("https://media-content.ccbp.in/website/react-assignment/add_resource.json" , payload);
        if(data.response === 200)
            return true;
        return false
    } catch (error) {
        console.log(error);
      return false
    }
}


