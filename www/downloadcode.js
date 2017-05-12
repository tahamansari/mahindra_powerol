if(Lockr.get('downloadall') == undefined){
     // just download ones mahindraPowerol ppsx
     var fileTransfer = new FileTransfer();
     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/mahindraPowerol.ppsx");
     // applicationStorageDirectory
     fileTransfer.download(
         uri,
         cordova.file.externalApplicationStorageDirectory + 'files/download/mahindraPowerol.ppsx',
         function(entry) {
             // alert("download complete: " + entry.toURL());
         },
         function(error) {
             // alert("download error source " + error.source);
             // alert("download error target " + error.target);
             // alert("download error code" + error.code);
         },
         false, {
             headers: {
                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
             }
         }
     );
     // just download ones agni ppsx
     var fileTransfer = new FileTransfer();
     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/agni.ppsx");
     // applicationStorageDirectory
     fileTransfer.download(
         uri,
         cordova.file.externalApplicationStorageDirectory + 'files/download/agni.ppsx',
         function(entry) {
             // alert("download complete: " + entry.toURL());
         },
         function(error) {
             // alert("download error source " + error.source);
             // alert("download error target " + error.target);
             // alert("download error code" + error.code);
         },
         false, {
             headers: {
                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
             }
         }
     );
     // just download ones pdf1
     var fileTransfer = new FileTransfer();
     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/NEPAL-BANGLADESH-BROCHURE.pdf");
     // applicationStorageDirectory
     fileTransfer.download(
         uri,
         cordova.file.externalApplicationStorageDirectory + 'files/download/NEPAL-BANGLADESH-BROCHURE.pdf',
         function(entry) {
             // alert("download complete: " + entry.toURL());
         },
         function(error) {
             // alert("download error source " + error.source);
             // alert("download error target " + error.target);
             // alert("download error code" + error.code);
         },
         false, {
             headers: {
                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
             }
         }
     );
     // just download ones pdf2
     var fileTransfer = new FileTransfer();
     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/REST-OF-THE-WORLD-BROCHURE.pdf");
     // applicationStorageDirectory
     fileTransfer.download(
         uri,
         cordova.file.externalApplicationStorageDirectory + 'files/download/REST-OF-THE-WORLD-BROCHURE.pdf',
         function(entry) {
             // alert("download complete: " + entry.toURL());
         },
         function(error) {
             // alert("download error source " + error.source);
             // alert("download error target " + error.target);
             // alert("download error code" + error.code);
         },
         false, {
             headers: {
                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
             }
         }
     );
     // just download ones load calculator
     var fileTransfer = new FileTransfer();
     var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/loadcalculator.apk");
     // applicationStorageDirectory
     fileTransfer.download(
         uri,
         cordova.file.externalApplicationStorageDirectory + 'files/download/loadcalculator.apk',
         function(entry) {

             // alert("download complete: " + entry.toURL());
         },
         function(error) {
             // alert("download error source " + error.source);
             // alert("download error target " + error.target);
             // alert("download error code" + error.code);
         },
         false, {
             headers: {
                 "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
             }
         }
     );

     // // just download ones mahindraRise ppsx
     // var fileTransfer = new FileTransfer();
     // var uri = encodeURI("http://kreaserv-tech.com/mahindra_admin/mahindraRise.ppsx");
     // // applicationStorageDirectory
     // fileTransfer.download(
     //     uri,
     //     cordova.file.externalApplicationStorageDirectory + 'files/download/mahindraRise.ppsx',
     //     function(entry) {
     //         // alert("download complete: " + entry.toURL());
     //     },
     //     function(error) {
     //         // alert("download error source " + error.source);
     //         // alert("download error target " + error.target);
     //         // alert("download error code" + error.code);
     //     },
     //     false, {
     //         headers: {
     //             "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
     //         }
     //     }
     // );
     Lockr.set('downloadall','true');
}