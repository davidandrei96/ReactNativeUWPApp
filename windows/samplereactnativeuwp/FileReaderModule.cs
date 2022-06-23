using Microsoft.ReactNative.Managed;
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Storage;

namespace samplereactnativeuwp2
{
    [ReactModule("ReactNativeReaderModule")]
    public sealed class ReactNativeReaderModule
    {

        private ReactContext _reactContext;

        [ReactInitializer]
        public void Initialize(ReactContext reactContext)
        {
            _reactContext = reactContext;
        }


        [ReactMethod("getHPDevices")]
        public async Task<string> GetHpDevices()
        {

            var folder = await StorageFolder.GetFolderFromPathAsync(@"C:\HPDevices");
            var filess = await folder.GetFileAsync("HPDevices.txt");
            var statusFile = await FileIO.ReadTextAsync(filess);

            // other code
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///HPDevices.txt")); // for text files inside app
            Stream fileStream = await file.OpenStreamForReadAsync();
         
            return statusFile.ToString();
            string text = File.ReadAllText(@"C:\HPDevices.txt");
            return text;
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();
               

            }

        }

        [ReactMethod("getHPDrivers")]
        public async Task<string> GetHpDrivers()
        {
            var folder = await StorageFolder.GetFolderFromPathAsync(@"C:\HPDevices");
            var filess = await folder.GetFileAsync("HPDrivers.txt");
            var statusFile = await FileIO.ReadTextAsync(filess);

            // other code
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///HPDrivers.txt"));
           
            return statusFile.ToString();
            Stream fileStream = await file.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();

            }
           
        }
    }
}

