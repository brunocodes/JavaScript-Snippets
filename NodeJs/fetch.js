// fetch
// POST passing Object in body
try {
    const myComm = {
        guild_id: "777963009599353856",
        name: "ping",
        description: "This the PING is the description",
        cooldown: 10,
        args: true,
        guildOnly: true,
        usage: null
    };
    fetch("http://localhost:5050/app/addcomm", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          },
        body: JSON.stringify({
            command: myComm
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log( res ); 
        this.setState({
            commands: res.commands,
            hasCommads: true
        });
    })  
} catch (error) {
    console.log("* ERROR: " + error)
}

// GET with perameter
try {
    const guildID = "777963009599353856";            
    fetch(`http://localhost:5050/app/comm?id=${guildID}`)
    .then(res => res.json())
    .then(res => {
        console.log( res.commands ); 
        this.setState({
            commands: res.commands,
            hasCommads: true
        });
    })            
} catch (error) {
    console.log("* ERROR: " + error)
}    

// DELETE
fetch(`http://localhost:5050/app/dropevent?server=${currentServer}`, {
    method: "DELETE",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
    }
})
.then(res => res.json())