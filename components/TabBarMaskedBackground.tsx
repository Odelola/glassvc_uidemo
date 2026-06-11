import { Dimensions, } from 'react-native';
import Svg, { Path, Defs, Filter, FeDropShadow } from 'react-native-svg';

export default function TabBarMaskedBackground() {
    const { width } = Dimensions.get('screen');

    return (
        <Svg
            width={width}
            height={112}
            // height={152}
            // viewBox="0 0 500 152"
            viewBox="20 20 460 112"
            // viewBox="30 30 450 102"
            // style={{ bottom: INSET_BOTTOM, left: 0, backgroundColor: "red" }}
            // style={{ bottom: INSET_BOTTOM }}
            // style={[StyleSheet.absoluteFillObject, { bottom: -INSET_BOTTOM }]}
            style={{ position: 'absolute', top: -20, }}
        >
            <Defs>
                <Filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <FeDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="10" floodColor="rgba(0,0,0,0.1)"
                        floodOpacity="0.3"
                    />
                </Filter>
            </Defs>
            <Path
                d="M352.878 20C353.212 23.1131 354.587 26.1337 356.997 28.4966L396.904 67.6187C402.426 73.0315 411.29 72.9435 416.702 67.4221L456.603 26.7208C457.621 25.6829 458.444 24.5269 459.073 23.2978C471.427 29.0014 480 41.4995 480 56V82C480 109.614 457.614 132 430 132H70C42.3858 132 20 109.614 20 82V56C20 36.1178 36.1178 20 56 20H352.878Z"
                fill="white"
                filter="url(#shadow)"
            />
        </Svg>
    );
}