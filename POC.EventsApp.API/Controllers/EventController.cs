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
        static readonly string dataPath = @"data\event\";

        public JToken Get()
        {
            var filePath = string.Format("{0}{1}{2}.json", appPath, dataPath, 0);
            System.Threading.Thread.Sleep(1000);

            DirectoryInfo dirInfo = new DirectoryInfo(appPath + dataPath);

            var allFilesParsed = dirInfo
                .GetFiles("*.json", SearchOption.TopDirectoryOnly)
                .Select(fileInfo => JObject.Parse(File.ReadAllText(fileInfo.FullName)));

            JArray result = new JArray(allFilesParsed);
            return result;
        }

        public JToken Get(string id)
        {
            var filePath = string.Format("{0}{1}{2}.json", appPath, dataPath, id);
            System.Threading.Thread.Sleep(1000);
            return JObject.Parse(File.ReadAllText(filePath));
        }

        public void Post(string id, JObject eventData)
        {
            if (eventData == null)
                throw new ArgumentNullException(nameof(eventData), "The event data cannot be null or empty.");

            var filePath = string.Format("{0}{1}{2}.json", appPath, dataPath, GetNewEventId());
            System.IO.File.WriteAllText(filePath, eventData.ToString(Newtonsoft.Json.Formatting.Indented));
        }

        #region Private Methods
        /// <summary>
        /// Gets a new Id to be used for a new event object.
        /// </summary>
        /// <returns>The Id.</returns>
        private int GetNewEventId()
        {
            DirectoryInfo dirInfo = new DirectoryInfo(appPath + dataPath);

            int max = dirInfo
                .GetFiles("*.json", SearchOption.TopDirectoryOnly)
                .AsEnumerable()
                .Max(x => Convert.ToInt32(Path.GetFileNameWithoutExtension(x.Name)));

            return max + 1;
        }
        #endregion
    }
}
