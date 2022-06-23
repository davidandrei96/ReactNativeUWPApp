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

        private ReactContext _reactContext; // TODO: What can be done with this?

        [ReactInitializer]
        public void Initialize(ReactContext reactContext)
        {
            _reactContext = reactContext;
        }


        [ReactMethod("getHPDevices")]
        public async Task<string> GetHpDevices()
        {
            #region Read_Data_From_Disk

            var folder = await StorageFolder.GetFolderFromPathAsync(@"C:\HPDevices");
            var filess = await folder.GetFileAsync("HPDevices.txt");
            var statusFile = await FileIO.ReadTextAsync(filess);
            return statusFile.ToString();

            #endregion

            //or

            #region Read_Data_From_The_AppBundle

            // other code
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///HPDevices.txt")); // for text files inside app
            Stream fileStream = await file.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();
            }

            #endregion
        }

        [ReactMethod("getHPDrivers")]
        public async Task<string> GetHpDrivers()
        {
            #region Read_Data_From_Disk

            var folder = await StorageFolder.GetFolderFromPathAsync(@"C:\HPDevices");
            var filess = await folder.GetFileAsync("HPDrivers.txt");
            var statusFile = await FileIO.ReadTextAsync(filess);
            return statusFile.ToString();

            #endregion

            #region Read_Data_From_AppBundle

            // other code
            var file = await StorageFile.GetFileFromApplicationUriAsync(new Uri("ms-appx:///HPDrivers.txt"));    
            Stream fileStream = await file.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadToEnd();
            }

            #endregion
        }
    }
}

