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
            //allows for a callback function to be passed in, if not, it will log the data to the console and return it.
            if (callback){
             callback(data);
            }else{
                console.log(data);
                return data;
            }
            
        })
        .catch((err) => {
            //allows for an error function to be passed in, if not, it will log the error to the console and return it.
            if (error) {
                error(err);
            }else{
                console.log(err);
                return err;
            }
        });
    }, []);
}