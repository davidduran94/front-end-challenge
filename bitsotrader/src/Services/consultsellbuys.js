import {_URLS} from '../Services/constants.js';
import {_CURRENCY} from '../Services/constants.js';


export const ConsultSellBuys = (url,params) => {

    var url_params="";
    var responseService={}

    
    var url_params = _URLS.orderBook + params.book;
    

    return(
     fetch(url_params)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        //console.log(data)
        return(data);
    })
    .catch(function(error) {

        responseService={
            "success": false,
            "items": [
                	{"date":"2018-02-26",
                	"dated":"26 Feb 2018",
                	"value":"191171.97786391",
                	"volume":"264.54199381",
                	"open":"179499",
                	"low":"176450","high":"195022",
                	"close":"192922",
                	"vwap":"191460.03115601"}
                	]
        };
        return(responseService);

    })
)

}

export default ConsultSellBuys;