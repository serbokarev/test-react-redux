import React from "react";
import { TradePage } from "./Trade";
import "../../resources/css/layout.scss"

interface IProps {

}

export const App: React.FunctionComponent<IProps> = ({}: IProps) => {

    return <div>
        <TradePage />
    </div>;
};
