using Microsoft.AspNetCore.SignalR;
using OAS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OASSignalR.Hubs
{
    public class DxChatHub : Hub
    {
        public async Task CoolMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task VersionNumber()
        {
            int versionNumber = 0;
            versionNumber = OASDataComponents._oasConfig.GetVersion();

            await Clients.All.SendAsync("ReceiveVersion", versionNumber);
        }
    }
}
