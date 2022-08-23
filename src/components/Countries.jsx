import Card from "./models/Card";

const [data,setData] =  useState([]);


    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then( json => {
        const country = {
            name: json.name.official,
            flag: json.flag
        }
        console.log(json)
        setData(country)
    }
    )

export default function Countries(){
    return (
        <Card flag={data.flag} name={data.name} />
    )
}