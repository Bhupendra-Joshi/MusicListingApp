import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTouchableOpacity from './CustomTouchableOpacity';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import { convertTime } from '../../utils/dateTime';

interface MusicListItem {
    track: {
        artworkUrl100: string,
        trackName: string,
        artistName: string,
        trackTimeMillis: number,
    };
    onItemClick: () => void;
}

const MusicListItem = (props: MusicListItem) => {
    const {
        track,
        onItemClick
    } = props;

    return (
        <CustomTouchableOpacity
            style={styles.listItemContainer}
            onPress={onItemClick}
        >
            <CustomImage
                style={styles.image}
                source={{ uri: track.artworkUrl100 }}
            />
            <View style={styles.detailsContainer}>
                <CustomText style={styles.trackName}>
                    {track.trackName}
                </CustomText>
                <View
                    style={styles.detailsSubContainer}>
                    <CustomText style={styles.artistName}>
                        {track.artistName}
                    </CustomText>
                    <CustomText style={styles.trackTime}>
                        {convertTime(track.trackTimeMillis)}
                    </CustomText>
                </View>
            </View>
        </CustomTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
    },
    detailsContainer: {
        marginHorizontal: 10,
        flex: 1
    },
    trackName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    detailsSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    artistName: {
        fontSize: 15,
    },
    trackTime: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default MusicListItem