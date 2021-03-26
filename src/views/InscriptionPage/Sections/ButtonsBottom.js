import React from "react";
import {useHistory} from "react-router-dom";
import Button from "../../../components/Button";

export default function ButtonsBottom(props) {
    const {step} = props;
    const history = useHistory();

    //redirect to driver inscription
    const cancel = () => {
        let path = `/`;
        history.push(path);
    };

    const next = e => {
        e.preventDefault();
        props.nextStep();
    }

    const prev = e => {
        e.preventDefault();
        props.prevStep();
    }

    switch (step) {
        case 0:
            return (
                <div align={"center"}>
                    <br/>
                    <Button
                        onClick={next}
                        color="primary"
                    >
                        Next
                    </Button>
                </div>
            );
        case 1:
        case 2:
            return (
                <div align={"center"}>
                    <Button
                        onClick={prev}
                        color="primary"
                    >
                        Back
                    </Button>
                    <Button
                        onClick={next}
                        color="primary"
                    >
                        Next
                    </Button>
                </div>
            );
        case 3:
            return (
                <div align={"center"}>
                    <br/>
                    <Button
                        onClick={cancel}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={next}
                        color="primary"
                    >
                        Finnish
                    </Button>
                </div>
            );
        case 4:
            return (
                <div align={"center"}>
                    <br/>
                    <Button
                        onClick={cancel}
                        color="primary"
                    >
                        Continue
                    </Button>
                </div>
            );
    }
}

