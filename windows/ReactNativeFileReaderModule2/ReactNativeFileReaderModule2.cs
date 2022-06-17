using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.ReactNative;
using Microsoft.ReactNative.Managed;
using Windows.ApplicationModel;
using Windows.ApplicationModel.AppService;
using Windows.Foundation.Collections;
using Windows.Storage;
using Windows.UI;

namespace ReactNativeFileReaderModule2
{
    [ReactModule("ReactNativeFileReaderModule")]
    internal sealed class ReactNativeModule
    {

        private ReactContext _reactContext;

        [ReactInitializer]
        public void Initialize(ReactContext reactContext)
        {
            _reactContext = reactContext;
        }

        /*        [ReactMethod("launchFullTrustProcess")]
                public async Task LaunchFullTrustProcessAsync()
                {
                    await FullTrustProcessLauncher.LaunchFullTrustProcessForCurrentAppAsync();
                }*/


        [ReactMethod("getHPDevices")]
        public async Task<string> GetHpDevices(string key)
        {
            string filename = "Assets/HPDevices.text";
            StorageFile sFile = await StorageFile.GetFileFromPathAsync(filename);
            Stream fileStream = await sFile.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {
                return tr.ReadLine();
            }
            return "blabla";
        }

        [ReactMethod("getHPDrivers")]
        public async Task<string> GetHpDrivers()
        {
            string filename = "Assets/HPDrivers.text";
            StorageFile sFile = await StorageFile.GetFileFromPathAsync(filename);
            Stream fileStream = await sFile.OpenStreamForReadAsync();
            using (TextReader tr = new StreamReader(fileStream))
            {

                return tr.ReadLine();
            }
            return "blabla";
        }
    }
}
