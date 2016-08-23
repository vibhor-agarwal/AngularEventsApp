using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace POC.EventsApp.API.Controllers
{
    public class EventController : ApiController
    {
        static readonly string appPath = System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath;

        public JToken Get(string id = null)
        {
            var filePath = string.Format("{0}{1}{2}.json", appPath, @"data\event\", id);
            return JObject.Parse(File.ReadAllText(filePath));
        }

        public void Post(string id, JObject eventData)
        {
            var filePath = string.Format("{0}{1}{2}.json", appPath, @"data\event\", id);
            System.IO.File.WriteAllText(filePath, eventData.ToString(Newtonsoft.Json.Formatting.Indented));
        }
    }
}
