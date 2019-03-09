using OASConfig;
using OASData;
using System;

namespace OAS
{
    public static class OASDataComponents
    {
        internal static string NetworkNode; // Set by the user
        internal static string NetworkPath; // Network path to include for remoting
        internal static bool NetworkNodeChanged;
        public static Config _oasConfig = new Config();
        public static Data _oasData = new Data();

        public static void SetNetworkNode(string NodeName)
        {
            NetworkNode = NodeName;
            if (string.Compare(NetworkNode, "localhost", true) == 0 || string.IsNullOrEmpty(NetworkNode))
            {
                NetworkPath = "";
            }
            else
            {
                NetworkPath = "\\\\" + NetworkNode + "\\";
                NetworkNodeChanged = true;
            }
        }
    }
}
