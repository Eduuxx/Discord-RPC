const clientId = 'APP ID';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `DETAILS`,
        state: `STATE`,
        startTimestamp: Date.now(),
        largeImageKey: `IMAGEKEY`,
        largeImageText: `IMAGETEXT`,
        instance: false,
        buttons: [
            {
                label: `LABEL1`,
                url: `URL1`
            },
            {
                label: `LABEL2`,
                url: `URL2`
            }
        ]

    });
};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity
    }, 15 * 1000);
});
const asciiText = `
_____      _____ ____________________.____     _______________________________ 
/     \    /  _  \\______   \______   \    |    \_   _____/\______   \______   \
/  \ /  \  /  /_\  \|       _/|    |  _/    |     |    __)_  |       _/|     ___/
/    Y    \/    |    \    |   \|    |   \    |___  |        \ |    |   \|    |    
\____|__  /\____|__  /____|_  /|______  /_______ \/_______  / |____|_  /|____|    
      \/         \/       \/        \/        \/        \/         \/       
`
console.log(asciiText)
console.log(`Activity is set`)
RPC.login({ clientId }).catch(err => console.error(err))