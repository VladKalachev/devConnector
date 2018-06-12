import axios from 'axios';
import { SET_CURRENT_USER, GET_ERRORS } from './types'

// export const registerUser = userDate => dispatch =>{
//     return {
//         type: TEST_DISPATHS,
//         payload: userDate
//     }
// }

export const registerUser = userDate => dispatch =>{
    axios
      .post('/api/users/register', userDate)
      .then(res => console.log(res.data))
      .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
