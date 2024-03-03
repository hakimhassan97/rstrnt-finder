Fully working APK can be found <a href="https://drive.google.com/file/d/1tabeZ856xraqmk3rccNbLEocVZSskjHL/view?usp=sharing">here</a>

## Step 1: Sign up project for related api (here.com & yelp.com)
here.com: https://developer.here.com/documentation/identity-access-management/dev_guide/topics/manage-projects.html

yelp.com: https://www.yelp.com/developers/v3/manage_app

Once you have register your project and obtained the api key, replace the HERE_MAP_API_KEY and YELPS_API_KEY respectively inside src/common/secret-key.tsx

## Step 2: Start the Application
```bash
# using npm
npm start

# OR using Yarn
yarn start
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.
