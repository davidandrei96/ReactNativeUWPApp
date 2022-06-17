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
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///HPDevices.txt"));
            Stream fileStream = await file.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();

            }
        }

        [ReactMethod("getHPDrivers")]
        public async Task<string> GetHpDrivers()
        { 
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///HPDrivers.txt"));
            Stream fileStream = await file.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();

            }
           
        }
    }
}

