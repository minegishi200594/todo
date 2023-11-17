import React, { useState, useEffect } from "react";
import { auth } from "../service/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    }, []);  //useEffectの第二引数。[]のみの場合初回レンダリングの時にのみ処理を行う。

    return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;