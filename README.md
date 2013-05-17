This is a quick test app for Spotify to check the functionality of the three competing offline storage APIs. In my testing, I found that localStorage and WebSQL both work fine, but IndexedDB gets wiped whenever you reload the page.

To install, create a directory named Spotify in C:\Users\<name>\Documents\, and then clone this repo into C:\Users\<name>\Documents\Spotify\storage-test. On a Mac, clone into ~/Spotify/storage-test. Go to http://developer.spotify.com/technologies/apps/ to enable apps development on your account. Restart Spotify, and then type spotify:app:storage-test in the search bar.

The file async_storage.js, from the Mozilla B2G Gaia project, is used without modification under the Apache License, see https://github.com/mozilla-b2g/gaia/blob/master/LICENCE for details.
