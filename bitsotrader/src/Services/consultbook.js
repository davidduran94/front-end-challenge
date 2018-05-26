import {_URLS} from '../Services/constants.js';
import {_CURRENCY} from '../Services/constants.js';


export const ConsultBook = (url,params) => {

    var url_params=url;
    var responseService={}

    params.map((param) => {
        url_params= url + param.book;
    });

    return(
     fetch(url_params)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
    return(data);

    })
    .catch(function(error) {

        responseService={
            "success": false,
            "payload":{"updated_at":"2018-05-26T15:41:16+00:00"}
        };
        return(responseService);

    })
)

}

export default ConsultBook;