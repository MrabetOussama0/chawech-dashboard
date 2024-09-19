import axiosClient from 'Helpers/client' 
import { loginEndPoint } from 'Helpers/Constants';
import handleError from 'Helpers/handelError';


const AuthService = {
    login : async (data) => {
        try {
            const response = await axiosClient.post(loginEndPoint, data);
            return response.data.token;
        } catch (error) {
            handleError(error);
        }
    }
}

export default AuthService;