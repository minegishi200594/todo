import React, { useContext } from "react";
import dig from "object-dig";
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser);
    const buttonRender = () => {
        let buttonDom
        if(dig(currentUser, 'currentUser', 'uid')){
            // currentUser.currentUser.Im.○○
            // ログインしていた場合
            buttonDom = <button onClick={logOut}>ログアウト</button>
        }else{
            // ログインしていなかった場合
            buttonDom = <button onClick={signInWithGoogle}>ログイン</button>
        }
        return buttonDom
    }
    return(
        <header>
            ヘッダー
            {buttonRender()}
        </header>
    )
}
export default Header;