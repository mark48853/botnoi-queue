import React from 'react';

const pushBackUrl = "https://script.google.com/macros/s/AKfycbxp_HgiAezssFr79vq84-Vl-YkGiEMCnYuvlZQ8eRY-BPe73_dDZTMeWhrW_UBryGpE/exec?name=";

const ManualForm = () => {
    const [name, setName] = React.useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleClick(event) {
        let preferredName = name;
        fetch(`${pushBackUrl}${preferredName}`)
            .then(data => data.json())
            .then(res => alert(`ขอบคุณที่จองคิว!\n     คิวของคุณคือ${res.queue}`));

        setName("");
        event.preventDefault();
    }

    return (
        <form >
            <label htmlFor="name">ชื่อ (Preferred Name):</label>
            <input id="name" className="name" type="text" placeholder="กรอกชื่อที่นี่ (Type here)" value={name} onChange={handleChange} />
            <button id="submit" type="submit" onClick={handleClick}>Submit</button>
        </form>
    )
}

export default ManualForm;