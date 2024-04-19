import { useEffect, useState } from "react";

export default function Fetch({type, url, data, callback, error}) {
    useEffect(() => {
        fetch(url, {
            method: type,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((err) => {
            error(err);
        });
    }, []);
}