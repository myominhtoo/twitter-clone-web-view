import {ERROR} from "../data/constant/messages";

export default function useApiRouteUtil(){
    return ( replaceRoute : ReplaceRouteType  ) => {
        return replaceRoutePath(
          replaceRoute.route,
            replaceRoute.keys,
            replaceRoute.values
        );
    }
}

type ReplaceRouteType = {
    route : string,
    keys  : string [],
    values : string []
}

function replaceRoutePath(
    route : string,
    keys  : string [],
    values : string []
) : string {
    if(!isValidReplaceRouteAction(  keys , values )){
        throw Error( ERROR.INVALID_REPLACE_ROUTE );
    }
    keys.forEach( ( key , index) => {
        route.replace(`:${key}`,values[index]);
    })
    return route;
}

function isValidReplaceRouteAction(
    keys : string [] ,
    values : string []
){
    return keys.length == values.length;
}