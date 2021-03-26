import React, {useState} from 'react'
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function FormRoute(props) {
    const {insert, id} = props;

    const [route, setRoute] = useState(
        {
            id: 0,
            state: "",
            region: "",
            description: "",
            visitsPerWeek: "",
            hours: ""
        }
    )

    const add = e => {
        e.preventDefault();
        insert(route);
    }

    const handleChange = input => e => {
        setRoute(prev => ({
            ...prev,
            id:id,
            [input]: e.target.value
        }))
    }


    return (
        <div>
            <React.Fragment>
                <Textfield
                    label="State"
                    type="text"
                    onChange={handleChange("state")}
                />
                <br/>
                <Textfield
                    label="City"
                    onChange={handleChange("region")}
                />
                <br/>
                <Textfield
                    label="Description"
                    type="text"
                    onChange={handleChange("description")}
                />
                <br/>
                <Textfield
                    label="Visits per Week"
                    type="text"
                    onChange={handleChange("visitsPerWeek")}
                />
                <br/>
                <Textfield
                    label="Hours"
                    type="text"
                    onChange={handleChange("hours")}
                />
                <br/>
                <Button
                    onClick={add}
                    color="primary"
                >
                    Add
                </Button>
            </React.Fragment>
        </div>)
}