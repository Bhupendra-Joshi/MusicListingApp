import { Navigation } from "react-native-navigation";
import SplashScreen from "../ui/screens/SplashScreen";
import SongsListScreen from "../ui/screens/SongsListScreen";
import SongDetailsScreen from "../ui/screens/SongDetailsScreen";
import { Provider } from 'react-redux';
import store from "../store";
import { SPLASH_SCREEN, SONGS_LIST_SCREEN, SONG_DETAILS_SCREEN } from "./constants";

Navigation.registerComponent(SPLASH_SCREEN, () => SplashScreen);
Navigation.registerComponentWithRedux(SONGS_LIST_SCREEN, () => SongsListScreen, Provider, store);
Navigation.registerComponent(SONG_DETAILS_SCREEN, () => SongDetailsScreen);


export const initialRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        id: SPLASH_SCREEN,
                        name: SPLASH_SCREEN,
                    }

                }
            ]
        }
    }
}

export const mainRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        id: SONGS_LIST_SCREEN,
                        name: SONGS_LIST_SCREEN,
                    }

                }
            ]
        }
    }
}


export default () => {
    Navigation.setRoot(initialRoot);
}


