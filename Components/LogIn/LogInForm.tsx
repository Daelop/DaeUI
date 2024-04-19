import Fetch from "../Hooks/Fetch";
import React, { useState, useEffect } from "react";


export default function LogInForm({fields,url,data, callback, error}) {
    const [fieldData, setFieldData] = useState(fields);
    const [loading, setLoading] = useState(true);

    const handleFieldChange = (e) => {
        setFieldData({
            ...fieldData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Fetch({
            type: "POST",
            url: url,
            data: fieldData,
            callback: callback,
            error: error
        });

    }

    useEffect(() => {
        if (data){
            setFieldData(data);
            setLoading(false);
        }else{
            setLoading(false);
        }
    }, []);
    if (loading) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(fields).map((field, index) => (
                <input
                    key={index}
                    type="text"
                    name={field}
                    onChange={handleFieldChange}
                />
            ))}
            <button type="submit">Submit</button>
        </form>
    )





}