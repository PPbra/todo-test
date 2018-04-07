import * as React from "react/cjs/react.development";
import Redirect from "react-router-dom/es/Redirect";
import {deleteTokenFromStorage} from "../Services/LocalStorageServices";

class LogoutPage extends React.Component{

    render(){

/*        this.props.appAuthChange(false);*/
        deleteTokenFromStorage();

        return(
            <Redirect to={'./login'}/>
        )
    }


}

export  default LogoutPage;